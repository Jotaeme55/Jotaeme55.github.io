

<template>

    <div class="mySkills">
        <div class="intro-skills">
            <span class="text-intro-skills">
                {{ translate("titleMyskills") }}
            </span>
        </div>
        <div class="content-skills" ref="contentSkills">
            <div class="sceneContainer" ref="sceneContainer">
                
            </div>
            <div class="partner">
                <div class="partner-title">
                    <img src="images/Logo.png" alt="">
                </div>
                <div class="partner-column">
                    <span class="text-content-skills">
                        {{ translate("contentSkills") }}
                    </span>
                </div>

            </div>
        </div>
    </div>

    <Dialog position="bottom" :closable="true" @hide="onDialogHide"
          v-model:visible="displayBasic" :breakpoints="{'960px': '75vw', '640px': '90vw'}">
        <div class="contentDialog">
            <p v-for="(paragraph, pIndex) in paragraphs" v-bind:key="pIndex" style="font-size:1rem; text-align: left;">
                <span class="lettersDialog" v-for="(letter, lIndex) in paragraph" :key="lIndex">
                {{ letter }}
                </span>
            </p>
        </div>
  </Dialog>
</template>
  
<script>
    import * as THREE from 'three';
    import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
    import { gsap } from 'gsap';
    import es from "../es.js";
    import en from "../en.js"
    export default {
        mixins:[ en, es],
        data() {
            return {
                paragraphs: [],
                contentactual:"actual",
                contentsl:"holascikit",
                contentjava:"java",
                displayBasic:false,
                projectactual:"",
                projectpython:`https://github.com/Jotaeme55/decide\r\r\n\n`,
                projectjs:``,
                projectvue:``,
                projectai:``,
                projectotros:`https://github.com/fernando-hidalgo/IISSI-2-Optica-Maguilla\r\r\n\n`,
                projectjava:``,
                isContentLoaded: false // Estado para la precarga
            }
    },
    async mounted() {
      await this.initThreeJS();
      this.initRaycaster(); 
      window.addEventListener('mousemove', this.onMouseEvent);
      window.addEventListener('click', this.onClick);
      this.isContentLoaded = true;
      this.showContentSkills();
    },
    beforeUnmount() {
        window.removeEventListener('mousemove', this.onMouseEvent);
        window.removeEventListener('click', this.onClick);
    },
    watch: {
    // Watcher que se activa cuando cambia la visibilidad del diálogo
        displayBasic(newVal) {
            if (newVal) {
                this.startTypingEffect(); // Iniciar el efecto de escritura cuando se muestra el diálogo
            } else {
                this.resetContent(); // Resetear contenido cuando el diálogo se oculta
            }
        }
    },
    methods: {
        showContentSkills() {
            const contentSkills = this.$refs.contentSkills;
            if (this.isContentLoaded) {
                contentSkills.classList.add('visible');
            }
        },

    startTypingEffect() {
      const lines = this.contentactual.split('\r');
      this.paragraphs = lines.map(() => []); // Resetear paragraphs antes de comenzar
      // Temporizador para cada letra
      lines.forEach((line, pIndex) => {
        line.split('').forEach((letter, lIndex) => {
            if(this.displayBasic){
                setTimeout(() => {
                    this.paragraphs[pIndex].splice(lIndex, 1, letter);
                }, 450); 
            }

            });
        });
    },
    resetContent() {
      // Vaciar el contenido cuando se oculta el diálogo
      this.paragraphs = [];
    },
    initRaycaster() {
        this.mouse = new THREE.Vector2();
        this.raycaster = new THREE.Raycaster();
    },
    async initThreeJS() {
        // Obtener el contenedor
        const container = this.$refs.sceneContainer;

        // Crear la escena
        const scene = new THREE.Scene();

        // Crear la cámara
        const focalLength = 50; // en mm
        const sensorHeight = 24; // altura del sensor para una cámara estándar de 35mm en mm
        const fov = 2 * Math.atan((sensorHeight / (2 * focalLength))) * (180 / Math.PI);

        // Crear la cámara
        const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 10000);

        // Posición de la cámara
        camera.position.set(1, 10, 53.207);

        camera.lookAt(new THREE.Vector3(0, 10, 0)); // O el punto al que debe mirar inicialmente
        this.originalLookAt = new THREE.Vector3(0, 10, 0)

        scene.add(camera);

        // Crear el renderizador
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const loader = new GLTFLoader();
        const gltf = await loader.loadAsync( 'blender/road-version-final.glb' );
        scene.add( gltf.scene );


        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz suave
        scene.add(ambientLight);

        // Luz direccional
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(10, 10, 10); // Posición de la luz
        scene.add(directionalLight);

        gltf.scene.traverse(function (child) {
        if (child.isMesh) {
                child.material.needsUpdate = true;
            }
        });
        
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        animate();


        // Manejar el redimensionamiento de la ventana
        window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
        });

        this.scene=scene
        this.camera=camera
    },

    onMouseEvent(event) {
        const container = this.$refs.sceneContainer;
        const rect = container.getBoundingClientRect();

        this.mouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);

        const intersects = this.raycaster.intersectObjects(this.scene.children, true);
        
        if(!this.displayBasic){
            let cursorChanged = false;  // Indicador para saber si cambiamos el cursor a pointer

            // Recorre todas las intersecciones y ajusta el cursor si encuentra un logo específico
            for (let i = 0; i < intersects.length; i++) {
                const logo = intersects[i].object.name;
                if (logo === "vue_logo" || logo==="JavaScript_logo" || logo==="java_logo" || logo==="python_logo" || logo==="otros" || logo==="scikitlearn_logo") {
                    document.body.style.cursor = "pointer";
                    cursorChanged = true;  // Cambiamos el indicador si encontramos el logo
                    break;  // Salimos del bucle ya que no necesitamos seguir buscando
                }
            }

            // Si no encontramos el logo específico, dejamos el cursor en default
            if (!cursorChanged) {
                document.body.style.cursor = "default";
            }
        }else{
            document.body.style.cursor = "default";
        }

    },

    onClick() {
        if(!this.displayBasic && !this.hiding){
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const intersects = this.raycaster.intersectObjects(this.scene.children, true);

            for (let i = 0; i < intersects.length; i++) {
                const logo = intersects[i].object.name
                if (logo === "vue_logo" || logo==="JavaScript_logo" || logo==="java_logo" || logo==="python_logo" || logo==="otros" || logo==="scikitlearn_logo") {
                    this.animateCamera(intersects[i].object.position, logo);
                    break;
                }
            }
        }
    },

    animateCamera(targetPosition, skill) {
        if(!this.displayBasic && !this.hiding){
            gsap.to(this.camera.position, {
            duration: 1,
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z + 5,  // Ajusta para colocar la cámara justo delante del símbolo
            onUpdate: () => {
                this.camera.lookAt(targetPosition);
                
            },
            onComplete:async ()=>{
                if(skill!=""){
                    await new Promise(resolve => setTimeout(resolve, 500));
                    this.displayDialog(skill)
                }
           
            }
            });
        }

        
    },
    
    translate(prop){
        return this[this.$store.state.language][prop]
    },

    displayDialog(str){
        if(this.displayBasic==true){
            this.displayBasic=false  
        }else{
            if(str == "python_logo"){
                this.contentactual = this.translate('contentPython');
            }else if(str == "JavaScript_logo"){
                this.contentactual = this.translate('contentjs');
            }else if(str == "vue_logo"){
                this.contentactual = this.translate('contentvue');
            }else if(str == "scikitlearn_logo"){
                this.contentactual = this.translate('contentai');
            }else if(str == "otros"){
                this.contentactual = this.translate('contentothers');
            }else if(str == "java_logo"){
                this.contentactual = this.translate('contentjava');
            }else{
                this.contentactual = "error";
            }
            this.displayBasic=true
        } 
    },
    onDialogHide() {
        this.hiding = true
     gsap.to(this.camera.position, {
        duration: 1,
        x: 1,
        y: 10,
        z: 53.207,
        onUpdate: () => {
            this.camera.lookAt(this.originalLookAt); // Mantén la cámara mirando al punto original
        },
        onComplete: () => {
            // Asegúrate de que la cámara esté correctamente alineada al finalizar la animación
            this.camera.position.set(1, 10, 53.207);
            this.camera.lookAt(this.originalLookAt);
            this.hiding=false
        }
    });
}
},

  };
  </script>
  
  <style>

  .mySkills{
    width: 100%;
    height: calc(100vh - 10rem);
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: rgb(42, 42, 42);
    text-align: center;
    border-radius: 20px;
    
    
  }

    @keyframes gradientAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }


  .intro-skills{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-intro-skills {
    font-family: 'Jersey 10'; /* Fuente retro */
    font-size: 4rem;
    color: #00f6ff;
    text-transform: uppercase;
    text-align: center;
    background: linear-gradient(90deg, #11012E, #00f6ff, #11012E); /* Degradado de colores retro */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    /* text-shadow: 0 0 10px #11012E, 0 0 20px rgba(0, 246, 255, 0.8), 0 0 30px #11012E; */
    animation: glow 1.5s ease-in-out infinite alternate;
    }

    @keyframes glow {
        from {
            text-shadow: 0 0 5px white, 0 0 20px rgba(0, 246, 255, 0.8), 0 0 30px rgba(0, 246, 255, 1);
        }
        to {
            text-shadow: 0 0 10x white, 0 0 30px rgba(0, 246, 255, 1), 0 0 40px rgba(0, 246, 255, 1);
        }
    }



  .content-skills{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    opacity: 0; /* Inicialmente invisible */
    transition: opacity 1s ease-in-out; /* Transición para el difuminado */
  }

  .content-skills.visible {
        opacity: 1; /* Hacer visible con transición */
    }
  
  .sceneContainer{
    width: 60%;
    height: 90%;
    justify-content: center;
    display: flex;
    border: 2.5px solid rgb(0, 255, 207);
    box-shadow: 15px 15px 8px #100000;
  }

  .partner{
    width: 30%;
    height: 90%;
    margin-left: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2.5px solid rgb(0, 255, 207);
    flex-direction: column;
    box-shadow: 15px 15px 8px #100000;
  }

  .partner-title{
    width: 50%;
    height: 20%;
    display: flex;
    justify-content: center;  /* Centra horizontalmente */
    align-items: center;  
  }

  .partner-title img {
        max-width: 100%;
        height: auto;
    }

  .partner-column{
    width: 80%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-content-skills{
    font-size: 2.3rem;
    color: black;
    font-family: 'Jersey 10';
  }
  

  .contentDialog{
    width: 80vw;
    height: 54vh;
    overflow-y: scroll;
  }

  .lettersDialog{
    font-size: 1.45rem;
    color: white;
    font-family: 'Oswald'
  }

  .p-dialog-header{
    background-color: #11012E !important;;
  }

  .p-dialog-content{
    background-color: #11012E !important;;
  }


  @media (max-width:775px) {
    .intro-skills{
        height: 10%;
    }

    .text-intro-skills{
        font-size: 2.5rem;
    }

    .content-skills{
        flex-direction: column;
        align-items:center;
    }

    .sceneContainer{
        width: 85%;
        height: 70%;
        margin-bottom: 15px;
    }

    .partner{
        width: 85%;
        height: 20%;
        flex-direction: row;
        margin-left: 0%;
    }

    .partner-title{
        width: 15%;
    }

    .text-content-skills{
        font-size: 1.3rem;
    }

    @media (max-width:338px){
        .text-intro-skills{
            font-size: 2rem;
        }

        .text-content-skills{
            font-size: 1rem;
        }
    }
  }
  </style>