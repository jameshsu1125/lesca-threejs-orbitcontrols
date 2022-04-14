import { Button, ButtonGroup, Box, Slider, Stack, FormLabel } from '@mui/material';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Orbitcontrols from '../../lib/';

const Demo = () => {
  const containerRef = useRef();
  const controlerRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 16 / 9, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    renderer.setClearColor(0xaaaaaa);

    const controls = new new Orbitcontrols(THREE)(camera, renderer.domElement);

    const light = new THREE.AmbientLight({ color: 0x404040, intensity: 2 });
    scene.add(light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshMatcapMaterial({ color: 0x5c798c });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;

    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    controlerRef.current = controls;
  }, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>
      <div ref={containerRef} className='container' />
      <Box sx={{ width: '100%', marginTop: 2 }}>
        <Stack>
          <FormLabel>setPolarAngle(angle)</FormLabel>
          <Slider
            defaultValue={50}
            aria-label='Disabled slider'
            onChange={(e) => {
              const { value } = e.target;
              const deg = 180 * value * 0.01;
              controlerRef.current?.setPolarAngle((Math.PI / 180) * deg);
            }}
          />
        </Stack>
        <Stack>
          <FormLabel>setAzimuthalAngle(angle)</FormLabel>
          <Slider
            defaultValue={50}
            aria-label='Disabled slider'
            onChange={(e) => {
              const { value } = e.target;
              const deg = -9 + 180 * value * 0.01;
              controlerRef.current?.setAzimuthalAngle((Math.PI / 180) * deg);
            }}
          />
        </Stack>
      </Box>
    </div>
  );
};
export default Demo;
