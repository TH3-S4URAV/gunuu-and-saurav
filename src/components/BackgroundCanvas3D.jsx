import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundCanvas3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Warm Romantic Lighting
    const ambientLight = new THREE.AmbientLight(0xffe4ec, 1.2);
    scene.add(ambientLight);

    const pinkLight = new THREE.PointLight(0xff1493, 2.5, 80);
    pinkLight.position.set(15, 12, 15);
    scene.add(pinkLight);

    const goldLight = new THREE.PointLight(0xffd700, 1.8, 60);
    goldLight.position.set(-15, -10, 12);
    scene.add(goldLight);

    // Create 3D Heart Geometry using ExtrudeGeometry
    const heartShape = new THREE.Shape();
    heartShape.moveTo(0, 0);
    heartShape.bezierCurveTo(1.5, 2, 2.5, 3.5, 0, 5.2);
    heartShape.bezierCurveTo(-2.5, 3.5, -1.5, 2, 0, 0);

    const extrudeSettings = {
      depth: 0.8,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.3,
      bevelThickness: 0.3
    };
    const heartGeometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
    heartGeometry.center();

    // Vibrant romantic materials
    const colors = [0xff1493, 0xff69b4, 0xf43f5e, 0xfb7185, 0xff85a2];
    const hearts = [];
    const heartCount = 38;

    for (let i = 0; i < heartCount; i++) {
      const mat = new THREE.MeshStandardMaterial({
        color: colors[i % colors.length],
        emissive: colors[i % colors.length],
        emissiveIntensity: 0.35,
        roughness: 0.25,
        metalness: 0.15,
        transparent: true,
        opacity: THREE.MathUtils.randFloat(0.65, 0.9)
      });

      const mesh = new THREE.Mesh(heartGeometry, mat);
      const scale = THREE.MathUtils.randFloat(0.18, 0.45);
      mesh.scale.set(scale, scale, scale);

      mesh.position.set(
        THREE.MathUtils.randFloatSpread(45),
        THREE.MathUtils.randFloatSpread(40),
        THREE.MathUtils.randFloatSpread(25)
      );

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      mesh.userData = {
        speedY: THREE.MathUtils.randFloat(0.025, 0.065),
        speedX: THREE.MathUtils.randFloat(-0.015, 0.015),
        rotX: THREE.MathUtils.randFloat(0.008, 0.02),
        rotY: THREE.MathUtils.randFloat(0.008, 0.02),
        rotZ: THREE.MathUtils.randFloat(0.005, 0.015),
        wave: Math.random() * Math.PI * 2
      };

      scene.add(mesh);
      hearts.push(mesh);
    }

    // Sparkle Stardust
    const sparkleCount = 150;
    const sparkleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(sparkleCount * 3);
    for (let i = 0; i < sparkleCount * 3; i += 3) {
      positions[i] = THREE.MathUtils.randFloatSpread(60);
      positions[i + 1] = THREE.MathUtils.randFloatSpread(50);
      positions[i + 2] = THREE.MathUtils.randFloatSpread(30);
    }
    sparkleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const sparkleMat = new THREE.PointsMaterial({
      color: 0xffe4e6,
      size: 0.5,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });
    const sparkles = new THREE.Points(sparkleGeo, sparkleMat);
    scene.add(sparkles);

    // Mouse / Touch Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      mouseX = (clientX / window.innerWidth - 0.5) * 3;
      mouseY = (clientY / window.innerHeight - 0.5) * 3;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = -targetY;
      camera.lookAt(0, 0, 0);

      // Animate 3D Hearts
      hearts.forEach((heart) => {
        heart.position.y -= heart.userData.speedY;
        heart.userData.wave += 0.02;
        heart.position.x += Math.sin(heart.userData.wave) * 0.02 + heart.userData.speedX;

        heart.rotation.x += heart.userData.rotX;
        heart.rotation.y += heart.userData.rotY;
        heart.rotation.z += heart.userData.rotZ;

        if (heart.position.y < -20) {
          heart.position.y = 20;
          heart.position.x = THREE.MathUtils.randFloatSpread(45);
        }
      });

      sparkles.rotation.y = elapsedTime * 0.035;

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
    />
  );
}
