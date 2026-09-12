import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float } from '@react-three/drei';
import * as THREE from 'three';

const TurbulentGrid = ({ theme }) => {
  const meshRef = useRef();
  
  // Theme colors
  const isDark = theme === 'dark';
  const gridColor = isDark ? '#ff4757' : '#ffd700'; // Bright red for dark, Yellow for light
  const wireColor = isDark ? '#ffd700' : '#ff4757';

  // Create a plane geometry and modify vertices
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(100, 100, 60, 60);
    // Add custom attribute for initial Z position
    const positions = geo.attributes.position;
    const initialZ = new Float32Array(positions.count);
    for (let i = 0; i < positions.count; i++) {
      initialZ[i] = positions.getZ(i);
    }
    geo.setAttribute('initialZ', new THREE.BufferAttribute(initialZ, 1));
    return geo;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = meshRef.current.geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      
      // Crazy turbulent math - CRANKED UP
      const z = Math.sin(x * 0.3 + time * 1.5) * 3 + 
                Math.cos(y * 0.3 + time * 2) * 3 +
                Math.sin((x + y) * 0.15 - time * 1.2) * 2;
                
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    
    // Slowly rotate the whole mesh
    meshRef.current.rotation.z = time * 0.1;
  });

  return (
    <group rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -10, -20]}>
      {/* Base Grid */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial 
          color={gridColor}
          wireframe={true}
          transparent={true}
          opacity={isDark ? 0.4 : 0.6}
          emissive={wireColor}
          emissiveIntensity={isDark ? 0.8 : 0.5}
        />
      </mesh>
    </group>
  );
};

const Particles = ({ theme }) => {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 300;
  
  const isDark = theme === 'dark';
  const color = isDark ? '#ffd700' : '#ff4757';

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 50;
      const speed = 0.03 + Math.random() / 50; // Increased speed
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -30 + Math.random() * 60;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t) * 0.5 + 0.5;
      
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor),
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor),
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor)
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.15, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.8} />
    </instancedMesh>
  );
};

const CrazyShape = ({ theme }) => {
  const isDark = theme === 'dark';
  const color = isDark ? '#ff4757' : '#ffd700';
  const wireColor = isDark ? '#ffd700' : '#ff4757';
  
  return (
    <Float speed={2} rotationIntensity={3} floatIntensity={4} position={[0, 4, -15]}>
      <Icosahedron args={[5, 1]}>
        <meshStandardMaterial 
          color={color} 
          wireframe 
          emissive={wireColor}
          emissiveIntensity={1.5}
          transparent
          opacity={0.3}
        />
      </Icosahedron>
      <Icosahedron args={[3, 0]}>
        <meshStandardMaterial 
          color={wireColor} 
          wireframe 
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.5}
        />
      </Icosahedron>
    </Float>
  );
};

const CanvasBackground = ({ theme }) => {
  const isDark = theme === 'dark';
  // Crazy background colors
  const bgColor = isDark ? '#050101' : '#fdf6e3';

  return (
    <div id="canvas-container" style={{ transition: 'background-color 0.5s ease', background: bgColor }}>
      <Canvas camera={{ position: [0, 2, 15], fov: 60 }}>
        {/* Fog to blend the horizon */}
        <fog attach="fog" args={[bgColor, 10, 50]} />
        <ambientLight intensity={isDark ? 0.2 : 0.8} />
        <pointLight position={[0, 10, 0]} intensity={isDark ? 2 : 2.5} color={isDark ? '#e01b24' : '#ffd700'} />
        
        <CrazyShape theme={theme} />
        <TurbulentGrid theme={theme} />
        <Particles theme={theme} />
      </Canvas>
    </div>
  );
};

export default CanvasBackground;
