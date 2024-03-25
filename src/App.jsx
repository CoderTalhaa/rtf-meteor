import { Canvas,  } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Environment, Loader, OrbitControls, PerspectiveCamera, } from "@react-three/drei";
import { Suspense,  } from "react";
import { NodeToyTick } from "@nodetoy/react-nodetoy";

function App() {

  return (
    <>
    <Canvas shadows >
      
      <Environment
        background={"only"}
        files={"/textures/envmap_blur.hdr"}
        ground={{ height: 100, radius: 300 }}
      />
      <Environment
        background={false}
        files={"/textures/envmap.hdr"}
        />

      <PerspectiveCamera makeDefault fov={30} position={[-0.07, 16.41, -24.1]} />
      <OrbitControls target={[0.02, 0.806, 0.427]} maxPolarAngle={Math.PI * 0.45} maxDistance={50} minDistance={20} />
      <NodeToyTick />
      <Suspense fallback={null}>
      <Experience />
      </Suspense>
    </Canvas>
    <Loader />
    </>
  );
}

export default App;
