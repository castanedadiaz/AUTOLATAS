var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Cargar el modelo 3D del auto
        var loader = new THREE.GLTFLoader();
        loader.load('auto.glb', function(gltf) {
            var auto = gltf.scene;
            scene.add(auto);

            // Hacer que el modelo gire
            function animate() {
                requestAnimationFrame(animate);
                auto.rotation.y += 0.01; // Girar el auto sobre su eje Y
                renderer.render(scene, camera);
            }

            animate();
        });

        camera.position.z = 5;