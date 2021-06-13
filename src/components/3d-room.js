import React from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const isBrowser = typeof window !== 'undefined';

// outside to be accessible within componentDidMount and render
let points = [
  {
    position: new THREE.Vector3(-3, -0.5, 3.25),
    hoverText:
      'Front and top screen with HUD aggregating terrain and battle informations.',
  },
  {
    position: new THREE.Vector3(-0.5, 4, -4),
    hoverText: 'Second point hover text',
  },
];
class Scene extends React.Component {
  componentDidMount() {
    // only if ran within a browser, code requires window / document
    if (isBrowser) {
      /**
       * Foundation
       */
      // Canvas
      const canvas = this.mount;

      // Scene
      const scene = new THREE.Scene();

      // Debug
      const dat = require('dat.gui');
      const gui = new dat.GUI({ width: 400 });
      const controlsFolder = gui.addFolder('Controls');
      const helpersFolder = gui.addFolder('Helpers');
      const debugParameters = {
        getCameraPosition: () => {
          console.log(camera.position);
        },
        logControls: () => {
          console.log(controls);
        },
        canvasTransparent: true,
      };
      gui.close();

      // Helpers
      const axesHelper = new THREE.AxesHelper();
      helpersFolder.add(axesHelper, 'visible').name('Origin axes visible');
      scene.add(axesHelper);

      /**
       * Objects
       */
      // Room
      const gltfLoader = new GLTFLoader();
      gltfLoader.load('/models/room.glb', (glb) => {
        // move center of the room to the origin
        const boundingBox = new THREE.Box3().setFromObject(glb.scene);
        const boundingBoxHelper = new THREE.Box3Helper(boundingBox, 0xffff00);
        helpersFolder
          .add(boundingBoxHelper, 'visible')
          .name('Model bounding box visible');

        scene.add(boundingBoxHelper);

        // offset scene position (floor thickness not accounted for)
        glb.scene.position.set(0, -boundingBox.max.y / 2 - 0.475, 0);
        glb.scene.scale.set(1.13, 1.13, 1.13);

        scene.add(glb.scene);
      });

      // Tooltips
      for (const [index, point] of points.entries()) {
        point.element = document.querySelector(`.point-${index}`);
      }

      /**
       * Lights
       */
      const directionalLight = new THREE.DirectionalLight('#ffffff', 1.5);
      directionalLight.castShadow = true;
      directionalLight.shadow.camera.far = 15;
      directionalLight.shadow.mapSize.set(1024, 1024);
      directionalLight.shadow.normalBias = 0.05;
      directionalLight.position.set(7, 7, 7);
      scene.add(directionalLight);

      /**
       * Sizes
       */
      const sizes = {
        width: this.mount.offsetWidth,
        height: this.mount.offsetHeight,
      };

      window.addEventListener('resize', () => {
        // Leave as non-resizing for now
        // console.log('resized');
        // console.log(this.mount.offsetWidth, this.mount.offsetHeight);

        // sizes.width = this.mount.offsetWidth;
        // sizes.height = this.mount.offsetHeight;

        // // aspectRatio = sizes.width / sizes.height;
        // // camera.left = -7 * aspectRatio;
        // // camera.right = -7 * aspectRatio;
        // camera.updateProjectionMatrix();

        // renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

      /**
       * Camera
       */
      let aspectRatio = sizes.width / sizes.height;
      const camera = new THREE.OrthographicCamera(
        -7 * aspectRatio,
        7 * aspectRatio,
        7,
        -7,
        0.001,
        100
      );
      camera.position.set(9, 4, 9);
      gui.add(debugParameters, 'getCameraPosition');
      scene.add(camera);

      /**
       * Orbit Controls
       */
      const controls = new OrbitControls(camera, canvas);
      controls.enablePan = false;
      controlsFolder.add(controls, 'enablePan');
      controls.enableDamping = true;

      // Zoom
      controls.minZoom = 0.9;
      controls.maxZoom = 1;
      controls.zoomSpeed = 0.2;
      controlsFolder.add(controls, 'minZoom', 0, 2, 0.01);
      controlsFolder.add(controls, 'maxZoom', 0, 2, 0.01);
      controlsFolder.add(controls, 'zoomSpeed', 0, 1, 0.01);

      // Horizontal Rotation
      /// limit horizontal rotation to the edges of the room
      const azimuthAngleBuffer = 0.1;
      controls.maxAzimuthAngle = Math.PI / 2 - azimuthAngleBuffer;
      controls.minAzimuthAngle = 0 + azimuthAngleBuffer;
      controls.rotateSpeed = 0.25;
      controlsFolder.add(controls, 'rotateSpeed', 0, 1, 0.01);

      // Vertical Rotation
      /// limit vertical rotation to the edges of the room
      // max = bottom, min = top
      const polarAngleBuffer = 0.1;
      controls.maxPolarAngle = Math.PI / 2 - polarAngleBuffer;
      controls.minPolarAngle = Math.PI / 3 + polarAngleBuffer;
      controlsFolder.add(debugParameters, 'logControls');

      /**
       * Renderer
       */
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.physicallyCorrectLights = true;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ReinhardToneMapping;
      renderer.toneMappingExposure = 3;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000);
      renderer.setSize(sizes.width, sizes.height);
      renderer.setClearAlpha(debugParameters.canvasTransparent ? 0 : 1);
      this.mount.appendChild(renderer.domElement);

      gui
        .add(debugParameters, 'canvasTransparent')
        .name('Canvas transparent')
        .onChange(() =>
          renderer.setClearAlpha(debugParameters.canvasTransparent ? 0 : 1)
        );

      /**
       * Animate
       */
      const clock = new THREE.Clock();

      const tick = () => {
        const elapsedTime = clock.getElapsedTime();

        // Update controls
        controls.update();
        camera.updateProjectionMatrix();

        for (const point of points) {
          const screenPosition = point.position.clone();
          screenPosition.project(camera);

          const translateX = screenPosition.x * sizes.width * 0.5;
          const translateY = -(screenPosition.y * sizes.height * 0.5);
          point.element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }

        // Render
        renderer.render(scene, camera);

        // Call tick again on the next frame
        window.requestAnimationFrame(tick);
      };

      tick();
    }
  }

  render() {
    return (
      <div className="relative">
        <div
          ref={(ref) => (this.mount = ref)}
          className="mx-auto"
          style={{ width: '800px', height: `800px` }}
        ></div>
        {points.map(({ hoverText }, index) => (
          <Point className={`point-${index} visible`} key={index}>
            <Label>1</Label>
            <Text>{hoverText}</Text>
          </Point>
        ))}
      </div>
    );
  }
}

const Text = styled.div`
  position: absolute;
  top: 30px;
  left: -120px;
  width: 200px;
  padding: 20px;
  border-radius: 4px;
  background: #00000077;
  border: 1px solid #ffffff77;
  color: #ffffff;
  line-height: 1.3em;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 100;
  font-size: 14px;

  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
`;

const Label = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #00000077;
  border: 1px solid #ffffff77;
  color: #ffffff;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  line-height: 40px;
  font-weight: 100;
  font-size: 14px;

  cursor: help;
  /* transform: scale(0, 0); */
  transition: transform 0.3s;
`;

const Point = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  /* &.visible ${Label} {
    transform: scale(1, 1);
  } */

  &:hover ${Text} {
    opacity: 1;
    pointer-events: all;
  }
`;

export default Scene;
