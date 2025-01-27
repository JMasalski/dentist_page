import {Suspense} from 'react'
import {Environment, OrbitControls} from "@react-three/drei";
import Scene from "../../public/scene/Scene.jsx";
import {Canvas} from "@react-three/fiber";

const Element3D = () => {
    return (
        <Canvas camera={{position: [10, 10, 20]}} >
            <ambientLight intensity={0.5}/>
            <OrbitControls enableZoom={false} enableRotate={false} autoRotate={true} autoRotateSpeed={2.5}/>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
            <Environment preset="sunset" />
        </Canvas>
    )
}
export default Element3D
