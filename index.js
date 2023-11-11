import * as THREE from 'three';
			import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
			import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

			// 씬
			const scene = new THREE.Scene();

			//카메라
			const camera = new THREE.PerspectiveCamera( 
				40, window.innerWidth / window.innerHeight, 0.1, 1000 
			);
			
			//렌더
			const renderer = new THREE.WebGLRenderer( { 
				canvas: document.querySelector('#bg'),
			} );
			renderer.setPixelRatio( window.devicePixelRatio);
			renderer.setSize( window.innerWidth, window.innerHeight );
			camera.position.setZ(1);
			
		
			renderer.render( scene, camera);
			
			const controls = new OrbitControls(camera,renderer.domElement)
			controls.enableDamping = true;
			controls.minDistance = 20;
			controls.maxDistance = 200;
			controls.update();

			//박스1
			const boxGeometry = new THREE.BoxGeometry(10, 10, 0.3 );
			const boxMesh = new THREE.Mesh( boxGeometry);
			boxMesh.position.set( 0, 0,0 );
			
			const boxMesh2 = new THREE.Mesh(boxGeometry);
			boxMesh2.position.set(20,0,20);
			boxMesh2.rotation.set(0,11,0);

			const boxMesh3 = new THREE.Mesh(boxGeometry);
			boxMesh3.position.set(-20,0,20);
			boxMesh3.rotation.set(0,-11,0);

			const boxMesh4 = new THREE.Mesh(boxGeometry);
			boxMesh4.position.set(0,0,40);
			
			scene.add(boxMesh, boxMesh2, boxMesh3, boxMesh4);

	
			//빛
			const pointLight = new THREE.PointLight(0xffffff)
			pointLight.position.set(5,5,5)

			const ambientLight = new THREE.AmbientLight(0xffffff)
			scene.add(pointLight, ambientLight)

			const lightHelper = new THREE.PointLightHelper(pointLight)
			const gridHelper = new THREE.GridHelper(200,50);
			scene.add(lightHelper, gridHelper)


			//랜던 별
			function addStar(){
				const geometry = new THREE.SphereGeometry(0.01);
				const material = new THREE.MeshStandardMaterial({
				color: 0xffffff})
				const star = new THREE.Mesh( geometry, material);

				const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

				star.position.set(x,y,z);
				scene.add(star)
			}

			Array(1000).fill().forEach(addStar)

			function animate() {
				requestAnimationFrame( animate );
			
				renderer.render( scene, camera );

			}

			//바탕 텍스쳐
			//const texture = new THREE.TextureLoader().load('#bg');
			//scene.background = texture;

		


			function moveCamera(){
				const t = document.body.getBoundingClientRect().top;
				boxMesh.rotation.x=0.05;
				boxMesh.rotation.y=0.075;
				boxMesh.rotation.z=0.05;

	
				camera.rotation.y= t* -0.002;

			}
			document.body.onscroll = moveCamera


			animate();
