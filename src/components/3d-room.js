import React from 'react';
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
    controlsFolder.open();

    const debugParameters = {
      getCameraPosition: () => {
        console.log(camera.position);
      },
      logControls: () => {
        console.log(controls);
      },
    };

    /**
     * Models
     */
    const gltfLoader = new GLTFLoader();

    // let mixer = null;
    gltfLoader.load('/models/room.glb', (glb) => {
      // move corner of room to the origin
      var bbox = new THREE.Box3().setFromObject(glb.scene);
      glb.scene.position.set(bbox.max.x, 0, bbox.max.z);

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

    // gui.add(directionalLight.position, 'x', -5, 5, 0.01);
    // gui.add(directionalLight, 'intensity', 0, 5, 0.01);

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
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   sizes.width / sizes.height,
    //   0.1,
    //   10000
    // );
    const aspectRatio = sizes.width / sizes.height;
    const camera = new THREE.OrthographicCamera(
      -7 * aspectRatio,
      7 * aspectRatio,
      7,
      -7,
      0.1,
      100
    );
    camera.position.set(7, 5, 7);

    gui.add(debugParameters, 'getCameraPosition');

    scene.add(camera);

    /**
     * Orbit Controls
     */
    const controls = new OrbitControls(camera, canvas);
    controls.enablePan = false;
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
    controls.minPolarAngle = Math.PI / 5 + polarAngleBuffer;

    gui.add(debugParameters, 'logControls');

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    // gui.add(renderer.parameters, 'alpha');
    renderer.setSize(sizes.width, sizes.height);
    this.mount.appendChild(renderer.domElement);

    const axesHelper = new THREE.AxesHelper();
    // scene.add(axesHelper);

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
      <div
        ref={(ref) => (this.mount = ref)}
        style={{ width: `100%`, height: `100vh` }}
      ></div>
    );
  }
}

export default Scene;
