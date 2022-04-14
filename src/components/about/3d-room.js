import React, { Suspense } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import Model from "@home/model";
import { Canvas, extend } from "@react-three/fiber";
import { Html, OrbitControls, OrthographicCamera } from "@react-three/drei";
import {
  motion,
  MotionCanvas,
  LayoutOrthographicCamera,
} from "framer-motion/three";

const isBrowser = typeof window !== "undefined";

// outside to be accessible within componentDidMount and render
let tooltips = [
  {
    position: new THREE.Vector3(-3, -0.5, 3.25),
    hoverText:
      "Front and top screen with HUD aggregating terrain and battle informations.",
  },
  {
    position: new THREE.Vector3(-0.5, 4, -4),
    hoverText: "Second point hover text",
  },
];
class Scene extends React.Component {
  // componentDidMount() {
  //   // only if ran within a browser, code requires window / document
  //   if (isBrowser) {
  //     /**
  //      * Foundation
  //      */
  //     // Canvas
  //     const canvas = this.mount;

  //     // Scene
  //     const scene = new THREE.Scene();

  //     // Debug
  //     const dat = require('dat.gui');
  //     const gui = new dat.GUI({ width: 400 });
  //     const controlsFolder = gui.addFolder('Controls');
  //     const helpersFolder = gui.addFolder('Helpers');
  //     const debugParameters = {
  //       getCameraPosition: () => {
  //         console.log(camera.position);
  //       },
  //       logControls: () => {
  //         console.log(controls);
  //       },
  //       canvasTransparent: true,
  //     };
  //     gui.close();

  //     // Helpers
  //     const axesHelper = new THREE.AxesHelper();
  //     helpersFolder.add(axesHelper, 'visible').name('Origin axes visible');
  //     scene.add(axesHelper);

  //     /**
  //      * Objects
  //      */
  //     // Room
  //     const gltfLoader = new GLTFLoader();
  //     gltfLoader.load('/models/about_room_v5.gltf', (glb) => {
  //       // move center of the room to the origin
  //       const boundingBox = new THREE.Box3().setFromObject(glb.scene);
  //       const boundingBoxHelper = new THREE.Box3Helper(boundingBox, 0xffff00);
  //       boundingBoxHelper.visible = false;
  //       helpersFolder
  //         .add(boundingBoxHelper, 'visible')
  //         .name('Model bounding box visible');

  //       scene.add(boundingBoxHelper);

  //       // offset scene position (floor thickness not accounted for)
  //       glb.scene.position.set(0, -boundingBox.max.y / 2 - 0.475, 0);
  //       glb.scene.scale.set(1.13, 1.13, 1.13);

  //       scene.add(glb.scene);
  //     });

  //     // Tooltips
  //     for (const [index, tooltip] of tooltips.entries()) {
  //       tooltip.element = document.querySelector(`.tooltip-${index}`);
  //     }

  //     /**
  //      * Lights
  //      */
  //     const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5);
  //     directionalLight.castShadow = true;
  //     directionalLight.shadow.camera.far = 15;
  //     directionalLight.shadow.mapSize.set(1024, 1024);
  //     directionalLight.shadow.normalBias = 0.05;
  //     directionalLight.position.set(7, 7, 7);
  //     scene.add(directionalLight);

  //     /**
  //      * Sizes
  //      */
  //     const sizes = {
  //       width: this.mount.offsetWidth,
  //       height: this.mount.offsetHeight,
  //     };

  //     window.addEventListener('resize', () => {
  //       // Leave as non-resizing for now
  //       // console.log('resized');
  //       // console.log(this.mount.offsetWidth, this.mount.offsetHeight);

  //       // sizes.width = this.mount.offsetWidth;
  //       // sizes.height = this.mount.offsetHeight;

  //       // // aspectRatio = sizes.width / sizes.height;
  //       // // camera.left = -7 * aspectRatio;
  //       // // camera.right = -7 * aspectRatio;
  //       // camera.updateProjectionMatrix();

  //       // renderer.setSize(sizes.width, sizes.height);
  //       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //     });

  //     /**
  //      * Camera
  //      */
  //     let aspectRatio = sizes.width / sizes.height;
  //     const camera = new THREE.OrthographicCamera(
  //       -7 * aspectRatio,
  //       7 * aspectRatio,
  //       7,
  //       -7,
  //       0.1,
  //       100
  //     );
  //     camera.position.set(9, 4, 9);
  //     gui.add(debugParameters, 'getCameraPosition');
  //     scene.add(camera);

  //     /**
  //      * Orbit Controls
  //      */
  //     const controls = new OrbitControls(camera, canvas);
  //     controls.enablePan = false;
  //     controls.enableDamping = true;
  //     controlsFolder.add(controls, 'enablePan');

  //     // Zoom
  //     controls.minZoom = 0.9;
  //     controls.maxZoom = 5;
  //     controls.zoomSpeed = 5;
  //     controlsFolder.add(controls, 'minZoom', 0, 2, 0.01);
  //     controlsFolder.add(controls, 'maxZoom', 0, 2, 0.01);
  //     controlsFolder.add(controls, 'zoomSpeed', 0, 1, 0.01);

  //     // Horizontal Rotation
  //     /// limit horizontal rotation to the edges of the room
  //     const azimuthAngleBuffer = 0.1;
  //     controls.maxAzimuthAngle = Math.PI / 2 - azimuthAngleBuffer;
  //     controls.minAzimuthAngle = 0 + azimuthAngleBuffer;
  //     controls.rotateSpeed = 0.25;
  //     controlsFolder.add(controls, 'rotateSpeed', 0, 1, 0.01);

  //     // Vertical Rotation
  //     /// limit vertical rotation to the edges of the room
  //     // max = bottom, min = top
  //     const polarAngleBuffer = 0.1;
  //     controls.maxPolarAngle = Math.PI / 2 - polarAngleBuffer;
  //     controls.minPolarAngle = Math.PI / 3 + polarAngleBuffer;
  //     controlsFolder.add(debugParameters, 'logControls');

  //     /**
  //      * Renderer
  //      */
  //     const renderer = new THREE.WebGLRenderer({
  //       alpha: true,
  //       antialias: true,
  //     });
  //     renderer.physicallyCorrectLights = true;
  //     renderer.outputEncoding = THREE.sRGBEncoding;
  //     renderer.toneMapping = THREE.ReinhardToneMapping;
  //     renderer.toneMappingExposure = 3;
  //     renderer.shadowMap.enabled = true;
  //     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  //     renderer.setSize(sizes.width, sizes.height);
  //     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  //     renderer.setClearColor(0x000000);
  //     renderer.setSize(sizes.width, sizes.height);
  //     renderer.setClearAlpha(debugParameters.canvasTransparent ? 0 : 1);
  //     this.mount.appendChild(renderer.domElement);

  //     gui
  //       .add(debugParameters, 'canvasTransparent')
  //       .name('Canvas transparent')
  //       .onChange(() =>
  //         renderer.setClearAlpha(debugParameters.canvasTransparent ? 0 : 1)
  //       );

  //     /**
  //      * Animate
  //      */
  //     const clock = new THREE.Clock();

  //     const tick = () => {
  //       const elapsedTime = clock.getElapsedTime();

  //       // Update controls
  //       controls.update();
  //       camera.updateProjectionMatrix();

  //       for (const tooltip of tooltips) {
  //         const screenPosition = tooltip.position.clone();
  //         screenPosition.project(camera);

  //         const translateX = screenPosition.x * sizes.width * 0.5;
  //         const translateY = -(screenPosition.y * sizes.height * 0.5);
  //         tooltip.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
  //       }

  //       // Render
  //       renderer.render(scene, camera);

  //       // Call tick again on the next frame
  //       window.requestAnimationFrame(tick);
  //     };

  //     tick();
  //   }
  // }

  render() {
    return (
      // <div className="relative">
      //   <div
      //     ref={(ref) => (this.mount = ref)}
      //     className="mx-auto"
      //     style={{ width: '800px', height: `800px` }}
      //   ></div>
      //   {tooltips.map(({ hoverText }, index) => (
      //     <TooltipContainer className={`tooltip-${index} visible`} key={index}>
      //       <Content>{hoverText}</Content>
      //     </TooltipContainer>
      //   ))}
      // </div>
      <motion.div
        layoutId={"about-room"}
        style={{ height: "500px" }}
        className="w-full bg-black"
      >
        {/* <MotionCanvas style={{ height: 500, width: "100%" }}>
          <LayoutOrthographicCamera
            makeDefault // Registers it as the default camera system-wide (default=false)
            position={[4, 2, 4]}
            near={0.01}
            far={2000}
            zoom={75}
          />
          <color attach="background" args={["black"]} />
          <ambientLight intensity={0.7} />
          <OrbitControls />
          <Suspense fallback={<Html>Loading...</Html>}>
            <Model />
          </Suspense>
        </MotionCanvas> */}
      </motion.div>
    );
  }
}

const Content = styled.div`
  ${tw`absolute top-6 transform -translate-x-1/2 p-4 rounded-md`}
  width: max(20%, 12rem);

  ${tw`bg-white border-4 border-solid border-primary-light text-sm`}
  ${tw`opacity-0 transition-opacity duration-300`}
  ${tw`pointer-events-none`}
`;

const TooltipContainer = styled.div`
  ${tw`absolute top-1/2 left-1/2 rounded-full p-2 bg-white`}
  ${tw`border-3 border-solid border-primary`}

  &:hover ${Content} {
    ${tw`opacity-100 pointer-events-auto`}
  }
`;

export default Scene;
