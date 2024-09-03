import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

function Keyboard() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF('/keyboard.glb');

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[3, 3, 3]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/keyboard.glb');

export default Keyboard;