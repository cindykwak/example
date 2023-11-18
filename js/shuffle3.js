import * as THREE from 'three';

			import { TWEEN } from 'three/addons/libs/tween.module.min.js';
			import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
			import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

           
			const table = [
				'','','', 1, 1,
				'','','', 2,1,
				'','','', 3,1,
				'','','', 4,1,
				'','','', 5,1,
				'','','', 6,1,
				'','','', 7,1,
				'','','', 1,2,
				'','','', 2,2,
				'','','', 3,2,
				'','','', 4,2,
				'','','', 5,2,
				'','','', 6,2,
				'','','', 7,2,
				'','','', 1,3,
				'','','', 2,3,
				'','','', 3,3,
				'','','', 4,3,
				'','','', 5,3,
				'','','', 6,3,
				'','','', 7,3
			
			
			];


			let camera, scene, renderer;
			let controls;

			const objects = [];
			const targets = { table: []};

			init();
			animate();

			
			

			function init() {

				
				camera = new THREE.PerspectiveCamera( 2970, window.innerWidth / window.innerHeight, 1, 100 );
				camera.position.z = 3000;
				
				scene = new THREE.Scene();

                
				

				// table

				for ( let i = 0; i < table.length; i += 5 ) {



					const element = document.createElement( 'div' );
					element.className = 'element';
					

					const objectCSS = new CSS3DObject( element,document.createElement( 'div' ) );
					//objectCSS.position.x = Math.random() * 4000 - 2000; //아 이게 처음 로드할때 카드가 나타나는 위치
					//objectCSS.position.y = Math.random() * 4000 - 2000; //다 지우면 한곳에서 촤르륵 풀어주는 느낌임
					//objectCSS.position.z = Math.random() * 4000 - 2000;
					objectCSS.element.style.backgroundImage = 'url("textures/water.jpg")'
					
					if(i==0){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_1.png")';
						
					}
					if(i==5){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_2.png")';
					}
					if(i==10){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_3.png")';
					}
					if(i==15){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_4.png")';
					}
					if(i==20){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_5.png")';
					}
					if(i==25){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_6.png")';
					}
					if(i==30){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_7.png")';
					}
					if(i==35){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_8.png")';
					}
					if(i==40){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_9.png")';
					}
					if(i==45){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_10.png")';
					}
					if(i==50){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_11.png")';
					}
					if(i==55){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_12.png")';
					}
					if(i==60){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_13.png")';
					}
					if(i==65){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_14.png")';
					}
					if(i==70){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_15.png")';
					}
					if(i==75){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_16.png")';
					}
					if(i==80){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_17.png")';
					}
					if(i==85){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_18.png")';
					}
					if(i==90){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_19.png")';
					}
					if(i==95){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_20.png")';
					}
					if(i==100){
						objectCSS.element.style.backgroundImage = 'url("texturesv1/v1_21.png")';
					}
					

					//코드가이게맞나... 너무더러움

					//objectCSS.element.style.backgroundImage = 'url("textures/tarot_back.jpg")'

					scene.add( objectCSS );

					objects.push( objectCSS );

					//
			

					const object = new THREE.Object3D();
				
					object.position.x = ( table[ i + 3 ] * 685 ) - 2740; // - 부분 가로줄 위치
					object.position.y = - ( table[ i + 4 ] * 1031 ) + 2000; // - 부분 세로줄 위치

					targets.table.push( object );

				}

				

				


                //shuffle
                const shuffleButton = document.getElementById('shuffle');
				shuffleButton.addEventListener('click', function () {
					// 이미지 위치를 부드럽게 섞는 애니메이션 함수 호출
                    shuffleAnimation();
				});


                
                // Add click event listener to the Save button
				const saveButton = document.getElementById('saveButton');
				saveButton.addEventListener('click', function () {
						captureAndSaveImage();
					});





				Array(4000).fill().forEach(addStar)


				renderer = new CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				controls = new TrackballControls( camera, renderer.domElement );
				controls.minDistance = 500;
				controls.maxDistance = 6000;
				controls.addEventListener( 'change', render );

				const buttonTable = document.getElementById( 'table' );
				buttonTable.addEventListener( 'click', function () {

					transform( targets.table, 2000 );

				} );

				

	

				transform( targets.table, 2000 );

				//

				window.addEventListener( 'resize', onWindowResize );

				
                
               

                
			}

            function captureAndSaveImage() {
				// HTML2Canvas를 사용하여 웹 페이지를 캡처하고 이미지로 저장
				html2canvas(document.querySelector("#container")).then(function (canvas) {
					// 캡처된 이미지를 생성합니다.
					var capturedImage = canvas.toDataURL("image/png");

					// 이미지를 저장하거나 표시할 수 있습니다.
					var link = document.createElement("a");
					link.href = capturedImage;
					link.download = "captured_image.png"; // 다운로드할 이미지 파일 이름
					link.click();
				});
			}
        

			function addStar(){
				const geometry = new THREE.SphereGeometry(0.01);
				const material = new THREE.MeshStandardMaterial({
				color: 0xffffff})
				const star = new THREE.Mesh( geometry, material);

				const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

				star.position.set(x,y,z);
				scene.add(star)
			}



            function shuffleAnimation() {
                TWEEN.removeAll();

                // 각 이미지의 현재 위치와 새로운 위치를 섞어서 배열에 저장
                const shuffledTargets = [];
                const currentIndexes = Array.from({ length: objects.length }, (_, i) => i);

                for (let i = 0; i < objects.length; i++) {
                    const newIndex = Math.floor(Math.random() * currentIndexes.length);
                    const currentIndex = currentIndexes.splice(newIndex, 1)[0];

                    shuffledTargets.push(targets.table[currentIndex]);
                }

                // 각 이미지를 부드럽게 새로운 위치로 이동하는 애니메이션 추가
                objects.forEach((object, index) => {
                    const target = shuffledTargets[index];

                    new TWEEN.Tween(object.position)
                        .to({ x: target.position.x, y: target.position.y, z: target.position.z }, 1000) // 1000ms 동안 부드럽게 이동
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();

                    new TWEEN.Tween(object.rotation)
                        .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, 1000)
                        .easing(TWEEN.Easing.Exponential.InOut)
                        .start();
                });

                // 렌더링 업데이트
                new TWEEN.Tween(this)
                    .to({}, 1000)
                    .onUpdate(render)
                    .start();
            }
            
			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( let i = 0; i < objects.length; i ++ ) {

					const object = objects[ i ];
					const target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();

				controls.update();

			}

			function render() {

				renderer.render( scene, camera );

			}
