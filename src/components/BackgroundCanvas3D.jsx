import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundCanvas3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Ambient and Point Lights for gentle romantic glow
    const ambientLight = new THREE.AmbientLight(0xffe4e6, 0.9);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xf472b6, 1.5, 100);
    pointLight.position.set(10, 15, 20);
    scene.add(pointLight);

    // Create 3D Sakura Petals / Heart-shaped geometries
    const petalCount = 45;
    const petals = [];

    // Create custom petal shape using Three.js Shape
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.bezierCurveTo(1.5, 2, 2, 3.5, 0, 5);
    petalShape.bezierCurveTo(-2, 3.5, -1.5, 2, 0, 0);

    const petalGeometry = new THREE.ShapeGeometry(petalShape);
    petalGeometry.center();

    // Material with soft translucent romantic pink gradient
    const petalMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb7c5,
      emissive: 0xff69b4,
      emissiveIntensity: 0.25,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75
    });

    for (let i = 0; i < petalCount; i++) {
      const mesh = new THREE.Mesh(petalGeometry, petalMaterial);
      const scale = THREE.MathUtils.randFloat(0.18, 0.42);
      mesh.scale.set(scale, scale, scale);

      mesh.position.set(
        THREE.MathUtils.randFloatSpread(50),
        THREE.MathUtils.randFloatSpread(40),
        THREE.MathUtils.randFloatSpread(30)
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Custom velocity and drift params
      mesh.userData = {
        speedY: THREE.MathUtils.randFloat(0.03, 0.08),
        speedX: THREE.MathUtils.randFloat(-0.02, 0.02),
        rotX: THREE.MathUtils.randFloat(0.005, 0.02),
        rotY: THREE.MathUtils.randFloat(0.005, 0.02),
        rotZ: THREE.MathUtils.randFloat(0.005, 0.015),
        wave: Math.random() * Math.PI * 2
      };

      scene.add(mesh);
      petals.push(mesh);
    }

    // Floating Stardust / Sparkle Particles
    const sparkleCount = 120;
    const sparkleGeo = new THREE.BufferGeometry();
    const sparklePositions = new Float32Array(sparkleCount * 3);

    for (let i = 0; i < sparkleCount * 3; i += 3) {
      sparklePositions[i] = THREE.MathUtils.randFloatSpread(70);
      sparklePositions[i + 1] = THREE.MathUtils.randFloatSpread(60);
      sparklePositions[i + 2] = THREE.MathUtils.randFloatSpread(40);
    }

    sparkleGeo.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));

    const sparkleMat = new THREE.PointsMaterial({
      color: 0xffccd5,
      size: 0.45,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const sparkles = new THREE.Points(sparkleGeo, sparkleMat);
    scene.add(sparkles);

    // Mouse / Touch interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouseX = (clientX / window.innerWidth - 0.5) * 4;
      mouseY = (clientY / window.innerHeight - 0.5) * 4;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera lerp with mouse/touch
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(0, 0, 0);

      // Animate Petals
      petals.forEach((petal) => {
        petal.position.y -= petal.userData.speedY;
        petal.userData.wave += 0.02;
        petal.position.x += Math.sin(petal.userData.wave) * 0.02 + petal.userData.speedX;

        petal.rotation.x += petal.userData.rotX;
        petal.rotation.y += petal.userData.rotY;
        petal.rotation.z += petal.userData.rotZ;

        // Reset if drifted too far down
        if (petal.position.y < -22) {
          petal.position.y = 22;
          petal.position.x = THREE.MathUtils.randFloatSpread(50);
        }
      });

      // Gently rotate sparkles
      sparkles.rotation.y = elapsedTime * 0.03;
      sparkles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.85 }}
    />
  );
}
