import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
      return (
            <mesh rotation={[10, 10, 0]}>
                  <boxGeometry args={[2, 2, 2]} />
                  <meshStandardMaterial color="royalblue" />
            </mesh>
      );
}

export default function ThreeScene() {
      return (
            <div className="h-screen bg-gray-900 text-white">
                  <Canvas camera={{ position: [5, 5, 5] }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <Box />
                        <OrbitControls />
                  </Canvas>
            </div>
      );
}
