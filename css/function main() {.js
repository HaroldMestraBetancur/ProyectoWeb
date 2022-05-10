function main() {
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  const fov = 75; // Grados
  const aspect = window.innerWidth / window.innerHeight; // Relación de aspecto
  const near = 0.1; // Si el objeto está más cerca que esta distancia no se renderiza
  const far = 5; // Si el objeto está más lejos que esta distancia no se renderiza

  var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;

  // Create a renderer with Antialiasing
  var renderer = new THREE.WebGLRenderer({ antialias: true });

  // Configure renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Append Renderer to DOM
  document.body.appendChild(renderer.domElement);
  
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;

 var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshPhongMaterial();
var earthmesh = new THREE.Mesh(geometry, material);

  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  renderer.render(scene, camera);

  function render(time) {
    time *= 0.001; 

    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();