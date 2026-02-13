/* ===== THREE.JS HERO OBJECT ===== */

const container = document.getElementById("canvas-container");

if (container && window.THREE) {

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    50,
    1,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  });

  renderer.setSize(400, 400);
  container.appendChild(renderer.domElement);

  const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 100, 16);
  const material = new THREE.MeshStandardMaterial({
    color: 0xf4a340,
    metalness: 0.6,
    roughness: 0.3
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5);
  scene.add(light);

  camera.position.z = 4;

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.007;
    renderer.render(scene, camera);
  }

  animate();
}

/* ===== GSAP ANIMATIONS ===== */

gsap.from(".hero-left h1", {
  y: 40,
  opacity: 0,
  duration: 1
});

gsap.from(".badge", {
  opacity: 0,
  delay: 0.3,
  duration: 1
});

gsap.from(".hero-left p", {
  opacity: 0,
  delay: 0.5,
  duration: 1
});
