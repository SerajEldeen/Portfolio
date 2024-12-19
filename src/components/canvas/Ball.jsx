/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float
      speed={props.allowMovement ? 1.75 : 0}
      rotationIntensity={props.allowMovement ? 1 : 0}
      floatIntensity={props.allowMovement ? 2 : 0}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={props.rotation}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#f5f5f5"
          emissive="#f5f5f5"
          emissiveIntensity={0.75}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const isSmallScreen = useMediaQuery({ maxWidth: 480 });
  const [allowMovement, setAllowMovement] = useState(true);

  useEffect(() => {
    if (isSmallScreen) {
      setAllowMovement(false);
    } else {
      setAllowMovement(true);
    }
  }, [isSmallScreen]);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {!isSmallScreen && (
        <OrbitControls enableZoom={false} enableRotate={allowMovement} />
      )}
      <Ball imgUrl={icon} allowMovement={allowMovement} />

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
