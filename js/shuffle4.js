import * as THREE from 'three';

			import { TWEEN } from 'three/addons/libs/tween.module.min.js';
			import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
			import { CSS3DRenderer, CSS3DObject } from 'three/addons/renderers/CSS3DRenderer.js';

           
			const table = [
				'','','', 1,1,
				'','','', 2,1,
				'','','', 3,1,
				'','','', 4,1,
				'','','', 5,1,
				'','','', 6,1,
				'','','', 7,1,
				'','','', 8,1,
				'','','', 9,1,
				

			
				
				'','','', 1,2.5,
				'','','', 2,2.5,
				'','','', 3,2.5,
				'','','', 4,2.5,
				'','','', 5,2.5,
				'','','', 6,2.5,
				'','','', 7,2.5,
				'','','', 8,2.5,
				'','','', 9,2.5,
				'','','', 10,2.5,
				'','','', 11,2.5,
				'','','', 12,2.5,
				'','','', 13,2.5,
				'','','', 14,2.5,
				'','','', 15,2.5,

				
				

				'','','', 1,4,
				'','','', 2,4,
				'','','', 3,4,
				'','','', 4,4,
				'','','', 5,4,
				'','','', 6,4,
				'','','', 7,4,
				'','','', 8,4,
				'','','', 9,4,
				'','','', 10,4,
				'','','', 11,4,
				'','','', 12,4,
				'','','', 13,4,
				'','','', 14,4,
				'','','', 15,4,

				
			
			];


			let camera, scene, renderer;
			let controls;

			const objects = [];
			const targets = { table: []};

			init();
			animate();

			
			

			function init() {

				
				camera = new THREE.PerspectiveCamera( 2970, window.innerWidth / window.innerHeight, 1, 100 );
				camera.position.z = 1000;
				
				scene = new THREE.Scene();

                
				

				// table

				

				for ( let i = 0; i < table.length; i += 5 ) {



					const element = document.createElement( 'div' );
					element.className = 'element';
					

					const objectCSS = new CSS3DObject( element,document.createElement( 'div' ) );
					//objectCSS.position.x = Math.random() * 4000 - 2000; //아 이게 처음 로드할때 카드가 나타나는 위치
					//objectCSS.position.y = Math.random() * 4000 - 2000; //다 지우면 한곳에서 촤르륵 풀어주는 느낌임
					//objectCSS.position.z = Math.random() * 4000 - 2000;
					
					if(i==0){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/1.png")';
						
					}
					if(i==5){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/2.png")';
					}
					if(i==10){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/3.png")';
					}
					if(i==15){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/4.png")';
					}
					if(i==20){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/5.png")';
					}
					if(i==25){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/6.png")';
					}
					if(i==30){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/7.png")';
					}
					if(i==35){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/8.png")';
					}
					if(i==40){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/7.png")';
					}
					if(i==45){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/6.png")';
					}
					if(i==50){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/5.png")';
					}
					if(i==55){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/4.png")';
					}
					if(i==60){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/3.png")';
					}
					if(i==65){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/2.png")';
					}
					if(i==70){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/1.png")';
					}
					if(i==75){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/1.png")';
					}
					if(i==80){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/2.png")';
					}
					if(i==85){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/3.png")';
					}
					if(i==90){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/4.png")';
					}
					if(i==95){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/5.png")';
					}
					if(i==100){
						objectCSS.element.style.backgroundImage = 'url("texturesv4/6.png")';
					}
					if(i==105){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==110){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/8.png")';
					}
					if(i==115){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==120){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==125){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					if(i==130){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==135){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==140){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==145){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}
					if(i==150){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}
					if(i==155){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==160){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==165){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==170){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					
					if(i==175){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==180){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==185){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/8.png")';
					}
					if(i==190){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==195){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==200){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					if(i==205){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==210){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==215){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==220){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}
					if(i==225){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}
					if(i==230){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==235){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==240){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==245){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					if(i==250){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==255){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==260){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/8.png")';
					}
					if(i==265){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==270){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==275){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					if(i==280){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==285){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==290){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==295){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}
					
					if(i==300){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}
					if(i==305){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==310){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==315){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==320){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					if(i==325){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==330){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==335){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/8.png")';
					}
					if(i==340){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/7.png")';
					}
					if(i==345){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/6.png")';
					}
					if(i==350){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/5.png")';
					}
					if(i==355){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/4.png")';
					}
					if(i==360){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/3.png")';
					}
					if(i==365){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/2.png")';
					}
					if(i==370){
						objectCSS.element.style.backgroundImage =  'url("texturesv4/1.png")';
					}

					//코드가이게맞나... 너무더러움

					//objectCSS.element.style.backgroundImage = 'url("textures/tarot_back.jpg")'

					scene.add( objectCSS );

					objects.push( objectCSS );

					//
			

					const object = new THREE.Object3D();
				
					object.position.x = ( table[ i + 3 ] * 250) - 1500; // - 부분 가로줄 위치
					object.position.y = - ( table[ i + 4 ] *400 ) + 600; // - 부분 세로줄 위치

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
