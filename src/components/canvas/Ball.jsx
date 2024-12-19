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
import { useEffect } from "react";

const Ball = (props) => {
  // Use a fallback texture if the provided imgUrl fails
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatingRange={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={props.rotation}>
        <icosahedronGeometry args={[1, 0]} />
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

  // Handle WebGL context loss and restoration
  useEffect(() => {
    const handleContextLoss = (e) => {
      e.preventDefault();
      console.warn("WebGL context lost");
    };

    const handleContextRestore = () => {
      console.log("WebGL context restored");
    };

    const canvas = document.querySelector("canvas");
    canvas.addEventListener("webglcontextlost", handleContextLoss, false);
    canvas.addEventListener(
      "webglcontextrestored",
      handleContextRestore,
      false
    );

    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLoss);
      canvas.removeEventListener("webglcontextrestored", handleContextRestore);
    };
  }, []);

  if (isSmallScreen) {
    // Fallback for mobile devices
    return <img src={icon} alt="3D Ball" style={{ width: "100%" }} />;
  }

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <OrbitControls enableZoom={false} enableRotate={!isSmallScreen} />
      <Ball imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
