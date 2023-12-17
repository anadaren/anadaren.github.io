import './style.css';
import * as THREE from 'three.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// // Setup // //

// Scene
const scene = new THREE.Scene();

// Clock
const clock = new THREE.Clock();

// If Work Page is active or not
var workPage = false;

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(-80,0,0);

// Render = Draw
renderer.render(scene, camera);

// // Lights // //

//Creates some lights and adds them to the scene
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(pointLight, ambientLight);

// Orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// Background Image
const bgTexture = new THREE.TextureLoader().load('spaceblue.png');
//scene.background = new THREE.Color( 0x000000 );
scene.background = new THREE.TextureLoader().load('spaceblue.png');


// // Button Interaction // //

// Recieving Button Information from HTML file via EventListeners
const homeButton = document.getElementById("homebutton");
homeButton.addEventListener("click", returnHome);

const aboutButton = document.getElementById("navButton1");
aboutButton.addEventListener("click", aboutCamera);

const worksButton = document.getElementById("navButton2");
worksButton.addEventListener("click", toggleWork); 

const contactButton = document.getElementById("navButton3");
contactButton.addEventListener("click", contactCamera); 

// Resets layout on Home Button //
function returnHome() {
  window.scrollTo(0, 0);
  var x = document.getElementById("mainDIV");
  var y = document.getElementById("mainDIV2");
    x.style.display = "block";
    y.style.display = "none";
    workPage = false;

    camera.position.set(-80,0,0);

}

// About Camera Position //
function aboutCamera() {
  window.scrollTo(0, 0);
  var x = document.getElementById("mainDIV");
  var y = document.getElementById("mainDIV2");
    x.style.display = "block";
    y.style.display = "none";
    workPage = false;

    camera.lookAt( centerObject.position );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 0;
 
}

// Toggles visibility of Works Page//
function toggleWork() {
  var x = document.getElementById("mainDIV");
  var y = document.getElementById("mainDIV2");
  if (x.style.display === "none" && y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
    workPage = false;
    returnHome();
  } else {
    x.style.display = "none";
    y.style.display = "block";
    workPage = true;
    worksPageCamera();
  }

}

// Works Page Camera Position //
function worksPageCamera() {
  camera.lookAt( moon.position );
  camera.position.x = 0;
  camera.position.y = 135;
  camera.position.z = 0;
}

// Contact Camera Position //
function contactCamera() {
  var x = document.getElementById("mainDIV");
  var y = document.getElementById("mainDIV2");
    x.style.display = "block";
    y.style.display = "none";
  workPage = false;

  camera.position.x = 0;
  camera.position.y = 0;
  camera.position.z = 0;
  window.scrollTo(0, 6000);
}


// // Non-Project Objects // //

// Adds helpers for testing
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper,gridHelper);

// Stars //

// 200 of them in random poisions
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry,material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250));

  star.position.set(x,y,z);
  scene.add(star);

}
Array(200).fill().forEach(addStar);

// Sun //

const sunGeo = new THREE.SphereGeometry(5,32,32);
const sunMat = new THREE.MeshStandardMaterial({color:0xffff00});
//const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true}); // Wireframe version
const sun = new THREE.Mesh(sunGeo, sunMat);
// Sun Position
sun.position.set(0,0,0);

scene.add(sun);

// Moon //

// Texture + Normal map
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const moonNormal = new THREE.TextureLoader().load('normal.jpg');
// Creates Sphere and adds it to scene
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshStandardMaterial({map: moonTexture, normalMap: moonNormal})
);
// Moon Position
moon.position.z = 28;
moon.position.setX(-10);

scene.add(moon);


// About Object //

const centerGeo = new THREE.SphereGeometry(3,32,32);
const centerMat = new THREE.MeshStandardMaterial({color:0x555555});
//const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true}); // Wireframe version
const centerObject = new THREE.Mesh(centerGeo, centerMat);
// About Object position
centerObject.position.set(7,-5,-15);

// Adds it to the scene
scene.add(centerObject);

// Torus //

const torusGeometry = new THREE.TorusGeometry(10,3,16,100);
const torusMaterial = new THREE.MeshStandardMaterial({color:0xFF6347});
const torusObject = new THREE.Mesh(torusGeometry, torusMaterial);

torusObject.position.x = 40;
torusObject.position.z = 50;
scene.add(torusObject);

// Avatar Box //

// Texture Image
const avatarTexture = new THREE.TextureLoader().load('avatar.png');

// Creates Box and adds it to scene
const avatarBox = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map: avatarTexture})
);
scene.add(avatarBox);

// Avatar Box Position
avatarBox.position.set(4,10,23);

// Orbit Object //

const orbitGeometry = new THREE.TorusGeometry(100,.5,10,100);
const orbitMaterial = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath = new THREE.Mesh(orbitGeometry, orbitMaterial);

orbitPath.rotation.x = 55;
scene.add(orbitPath);

const orbitGeometry1 = new THREE.TorusGeometry(10,.1,10,100);
const orbitMaterial1 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath1 = new THREE.Mesh(orbitGeometry1, orbitMaterial1);

orbitPath1.rotation.x = 55;
scene.add(orbitPath1);

const orbitGeometry2 = new THREE.TorusGeometry(20,.1,10,100);
const orbitMaterial2 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath2 = new THREE.Mesh(orbitGeometry2, orbitMaterial2);

orbitPath2.rotation.x = 55;
scene.add(orbitPath2);

const orbitGeometry3 = new THREE.TorusGeometry(30,.1,10,100);
const orbitMaterial3 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath3 = new THREE.Mesh(orbitGeometry3, orbitMaterial3);

orbitPath3.rotation.x = 55;
scene.add(orbitPath3);

const orbitGeometry4 = new THREE.TorusGeometry(40,.1,10,100);
const orbitMaterial4 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath4 = new THREE.Mesh(orbitGeometry4, orbitMaterial4);

orbitPath4.rotation.x = 55;
scene.add(orbitPath4);

const orbitGeometry5 = new THREE.TorusGeometry(50,.1,10,100);
const orbitMaterial5 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath5 = new THREE.Mesh(orbitGeometry5, orbitMaterial5);

orbitPath5.rotation.x = 55;
scene.add(orbitPath5);

const orbitGeometry6 = new THREE.TorusGeometry(60,.1,10,100);
const orbitMaterial6 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath6 = new THREE.Mesh(orbitGeometry6, orbitMaterial6);

orbitPath6.rotation.x = 55;
scene.add(orbitPath6);

const orbitGeometry7 = new THREE.TorusGeometry(70,.1,10,100);
const orbitMaterial7 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath7 = new THREE.Mesh(orbitGeometry7, orbitMaterial7);

orbitPath7.rotation.x = 55;
scene.add(orbitPath7);

const orbitGeometry8 = new THREE.TorusGeometry(80,.1,10,100);
const orbitMaterial8 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath8 = new THREE.Mesh(orbitGeometry8, orbitMaterial8);

orbitPath8.rotation.x = 55;
scene.add(orbitPath8);

const orbitGeometry9 = new THREE.TorusGeometry(90,.1,10,100);
const orbitMaterial9 = new THREE.MeshBasicMaterial({color:0xffffff, wireframe:true}); // Wireframe version
const orbitPath9 = new THREE.Mesh(orbitGeometry9, orbitMaterial9);

orbitPath9.rotation.x = 55;
scene.add(orbitPath9);





// // Project Planets // //


// Planet 1
const proj1Geo = new THREE.SphereGeometry(2,32,32);
const proj1Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj1Planet = new THREE.Mesh(proj1Geo, proj1Mat);
// About Object position
proj1Planet.position.set(-10,0,0);

// Adds it to the scene
orbitPath1.add(proj1Planet);

// Planet 2
const proj2Geo = new THREE.SphereGeometry(2,32,32);
const proj2Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj2Planet = new THREE.Mesh(proj2Geo, proj2Mat);
// About Object position
proj2Planet.position.set(-20,0,0);

// Adds it to the scene
orbitPath2.add(proj2Planet);

// Planet 3
const proj3Geo = new THREE.SphereGeometry(2,32,32);
const proj3Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj3Planet = new THREE.Mesh(proj3Geo, proj3Mat);
// About Object position
proj3Planet.position.set(-30,0,0);

// Adds it to the scene
orbitPath3.add(proj3Planet);

// Planet 4
const proj4Geo = new THREE.SphereGeometry(2,32,32);
const proj4Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj4Planet = new THREE.Mesh(proj4Geo, proj4Mat);
// About Object position
proj4Planet.position.set(-40,0,0);

// Adds it to the scene
orbitPath4.add(proj4Planet);

// Planet 5
const proj5Geo = new THREE.SphereGeometry(2,32,32);
const proj5Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj5Planet = new THREE.Mesh(proj5Geo, proj5Mat);
// About Object position
proj5Planet.position.set(-50,0,0);

// Adds it to the scene
orbitPath5.add(proj5Planet);

// Planet 6
const proj6Geo = new THREE.SphereGeometry(2,32,32);
const proj6Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj6Planet = new THREE.Mesh(proj6Geo, proj6Mat);
// About Object position
proj6Planet.position.set(-60,0,0);

// Adds it to the scene
orbitPath6.add(proj6Planet);

// Planet 7
const proj7Geo = new THREE.SphereGeometry(2,32,32);
const proj7Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj7Planet = new THREE.Mesh(proj7Geo, proj7Mat);
// About Object position
proj7Planet.position.set(-70,0,0);

// Adds it to the scene
orbitPath7.add(proj7Planet);

// Planet 8
const proj8Geo = new THREE.SphereGeometry(2,32,32);
const proj8Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj8Planet = new THREE.Mesh(proj8Geo, proj8Mat);
// About Object position
proj8Planet.position.set(-80,0,0);

// Adds it to the scene
orbitPath8.add(proj8Planet);

// Planet 9
const proj9Geo = new THREE.SphereGeometry(2,32,32);
const proj9Mat = new THREE.MeshStandardMaterial({color:0x555555});
const proj9Planet = new THREE.Mesh(proj9Geo, proj9Mat);
// About Object position
proj9Planet.position.set(-90,0,0);

// Adds it to the scene
orbitPath9.add(proj9Planet);

// // About Section // //

// About Planet //


// About Panel//
const aboutPanel = new THREE.Mesh(
  new THREE.BoxGeometry(4,3,.1),
  new THREE.MeshBasicMaterial({color:0x222222})
);
aboutPanel.position.set(-10,0,0);
scene.add(aboutPanel);

// // Project Panels // //


// Content Panel 1//
const proj1 = new THREE.Mesh(
  new THREE.BoxGeometry(8,5,.1),
  new THREE.MeshBasicMaterial({color:0x222222})
);
proj1.position.z = 25;
proj1.position.x = -5;
scene.add(proj1);



// Content Panel 2//
const proj2 = new THREE.Mesh(
  new THREE.BoxGeometry(8,5,.1),
  new THREE.MeshBasicMaterial({color:0x222222})
);
proj2.position.z = 5;
proj2.position.x = 25;
scene.add(proj2);



// Content Panel 3//
const proj3 = new THREE.Mesh(
  new THREE.BoxGeometry(8,5,.1),
  new THREE.MeshBasicMaterial({color:0x222222})
);
proj3.position.z = 5;
proj3.position.x = -50;
scene.add(proj3);






// Scroll animation
function moveCamera() {

  if(!workPage){
  const t = document.body.getBoundingClientRect().top;

  // Moves Camera while scrolling
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
  

  // Position on Orbit //
  if(!workPage){
    orbitPath.rotation.z = t * 0.001;

    orbitPath1.rotation.z += 0.003;
    orbitPath2.rotation.z += 0.005;
    orbitPath3.rotation.z += 0.009;
    orbitPath4.rotation.z += 0.007;
    orbitPath5.rotation.z += 0.002;
    orbitPath6.rotation.z += 0.005;
    orbitPath7.rotation.z += 0.006;
    orbitPath8.rotation.z += 0.010;
    orbitPath9.rotation.z += 0.005;
  }

  

  // Changes Moon Position while scrolling
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatarBox.rotation.y += 0.01;
  avatarBox.rotation.z += 0.01;

  }

}
document.body.onscroll = moveCamera;




// // Renders Scene // //

var t = 0;
// Recursive function that animates the scene
function animate() {
    requestAnimationFrame(animate);

    const time = clock.getElapsedTime();

    // Moves Camera
    //camera.position.x = Math.sin( time/5 ) * 2;
    //camera.position.z = Math.cos( time/5 ) * 2;
    
    //camera.lookAt( centerObject.position );

    t += 0.01;          
    sun.rotation.y += 0.005;
    moon.rotation.y += 0.03;

    moon.position.x = 20*Math.cos(t) + 5;
    moon.position.z = 20*Math.sin(t) + 5; // These to strings make it work
    
    
    



    // Moves Torus
    torusObject.rotation.x += 0.01;
    torusObject.rotation.y += 0.005;
    torusObject.rotation.z += 0.01;


    // Auto Orbit when on Works Page
    if(workPage){
      orbitPath.rotation.z += 0.001;

      orbitPath1.rotation.z += 0.003;
      orbitPath2.rotation.z += 0.005;
      orbitPath3.rotation.z += 0.009;
      orbitPath4.rotation.z += 0.007;
      orbitPath5.rotation.z += 0.002;
      orbitPath6.rotation.z += 0.005;
      orbitPath7.rotation.z += 0.006;
      orbitPath8.rotation.z += 0.010;
      orbitPath9.rotation.z += 0.005;
    }

    controls.update();

    renderer.render(scene, camera);
}

animate();


