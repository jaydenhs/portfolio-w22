import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class Scene extends React.Component {
  componentDidMount() {
    const canvas = this.mount;
    const scene = new THREE.Scene();

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
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      10000
    );
    camera.position.z = 3;
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, canvas);
    controls.enableZoom = false;
    controls.enableDamping = true;

    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    this.mount.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    /**
     * Animate
     */
    const clock = new THREE.Clock();

    const tick = () => {
      // requestAnimationFrame(animate.bind(this));

      const elapsedTime = clock.getElapsedTime();

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

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
