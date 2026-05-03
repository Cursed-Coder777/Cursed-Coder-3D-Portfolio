"use client";
import CanvasLoader from "@/app/components/Loader";
import { OrbitControls, Preload, useGLTF, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  // 💡 Refs for lights
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);
  const hemisphereLightRef = useRef<THREE.HemisphereLight>(null);

  // 💡 Helpers (visual guides)
  // Cyan cone: SpotLight ki position aur direction dikhaega
//   useHelper(spotLightRef, THREE.SpotLightHelper, "cyan");
  
  // Yellow wireframe sphere: PointLight ki range dikhaega
//   useHelper(pointLightRef, THREE.PointLightHelper, 0.5, "yellow");
  
  // Red wireframe sphere: HemisphereLight ki position
//   useHelper(hemisphereLightRef, THREE.HemisphereLightHelper, 0.3, "red");

  return (
    <mesh>
      <hemisphereLight ref={hemisphereLightRef} intensity={7} groundColor="black" />
      <pointLight ref={pointLightRef} intensity={100} position={[0,-3,-4]}/>
      <spotLight
        ref={spotLightRef}
		color={"#915EFF"}
        position={[0, 0, 7]}
        angle={20}
        penumbra={1}
        intensity={1000}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;