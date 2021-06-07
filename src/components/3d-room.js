import React from 'react';
import styled, { css } from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as dat from 'dat.gui';

class Scene extends React.Component {
  componentDidMount() {
    // Canvas
    const canvas = this.mount;

    // Scene
    const scene = new THREE.Scene();

    // Debug
    const gui = new dat.GUI({ width: 400 });
    const controlsFolder = gui.addFolder('Controls');
    // controlsFolder.open();

    const debugParameters = {
      getCameraPosition: () => {
        console.log(camera.position);
      },
      logControls: () => {
        console.log(controls);
      },
      canvasTransparent: false,
    };

    /**
     * Models
     */
    const gltfLoader = new GLTFLoader();

    gltfLoader.load('/models/room.glb', (glb) => {
      // move center of the room to the origin
      var bbox = new THREE.Box3().setFromObject(glb.scene);
      glb.scene.position.set(0, -bbox.max.y / 2, 0);

      scene.add(glb.scene);
    });

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
      sizes.width = this.mount.offsetWidth;
      sizes.height = this.mount.offsetHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    /**
     * Camera
     */
    // Base camera
    const aspectRatio = sizes.width / sizes.height;
    const camera = new THREE.OrthographicCamera(
      -7 * aspectRatio,
      7 * aspectRatio,
      7,
      -7,
      0.001,
      100
    );
    camera.position.set(6.1, 10.2, 6.1);
    gui.add(debugParameters, 'getCameraPosition');
    scene.add(camera);

    /**
     * Orbit Controls
     */
    const controls = new OrbitControls(camera, canvas);
    // controls.enablePan = false;
    controls.enableDamping = true;

    // Zoom
    controls.minZoom = 1;
    controls.maxZoom = 1.4;
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
    const polarAngleBuffer = 0.1;
    controls.maxPolarAngle = Math.PI / 2 - polarAngleBuffer;
    controls.minPolarAngle = Math.PI / 4 + polarAngleBuffer;
    controlsFolder.add(debugParameters, 'logControls');

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    renderer.setClearColor(0x000000);

    gui
      .add(debugParameters, 'canvasTransparent')
      .onChange(() =>
        debugParameters.canvasTransparent
          ? renderer.setClearAlpha(0)
          : renderer.setClearAlpha(1)
      );
    renderer.setSize(sizes.width, sizes.height);
    this.mount.appendChild(renderer.domElement);

    const axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      // requestAnimationFrame(animate.bind(this));

      const elapsedTime = clock.getElapsedTime();

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }

  onWindowResize() {
    if (this.mount) {
      camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight);
    }
  }

  render() {
    return (
      <>
        <Point className="point-0 visible">
          <Label>1</Label>
          <Text>
            Front and top screen with HUD aggregating terrain and battle
            informations.
          </Text>
        </Point>
        <div
          ref={(ref) => (this.mount = ref)}
          className="mx-auto"
          style={{ width: '60%', height: `80vh` }}
        ></div>
      </>
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
  transform: scale(0, 0);
  transition: transform 0.3s;
`;

const Point = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  &.visible ${Label} {
    transform: scale(1, 1);
  }

  &:hover ${Text} {
    opacity: 1;
    pointer-events: all;
  }
`;

export default Scene;
