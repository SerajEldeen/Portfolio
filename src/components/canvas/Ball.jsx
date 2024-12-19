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
import { useMediaQuery } from "react-responsive";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatingRange={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={false} receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#f5f5f5"
          emissive="#f5f5f5"
          emissiveIntensity={0.75}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[Math.PI, 0, Math.PI / 2]}
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

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, isSmallScreen ? 1 : 2]}
      gl={{ antialias: !isSmallScreen, preserveDrawingBuffer: false }}
    >
      <OrbitControls
        enableZoom={!isSmallScreen}
        enableRotate={!isSmallScreen}
      />
      <Ball imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
