import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
  TransformControls,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Mesh } from "three";

export const Experience = () => {
  const cube = useRef<Mesh>(null!);
  const sphere = useRef<Mesh>(null!);
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            center
            wrapperClass="label"
            distanceFactor={8}
            occlude={[sphere, cube]}
          >
            That's a sphere 👍
          </Html>
        </mesh>
      </PivotControls>

      <TransformControls object={cube} />
      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          blur={[1000, 1000]}
          mixBlur={1}
          resolution={512}
          mirror={0.75}
          color="greenyellow"
        />
      </mesh>

      <Suspense fallback={null}>
        <Float floatIntensity={2} rotationIntensity={2}>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            color="salmon"
            position-y={2}
            textAlign="center"
          >
            I love R3F
          </Text>
        </Float>
      </Suspense>
    </>
  );
};
