<template>
    <div class="container">
      <div :class="{'preload': !hasLoaded, 'loaded': hasLoaded}" class="split-zone">
        <div @click="openLeftSide" :style="backgroundCreativeStyle" class="split split-left" :class="{ 'hovered': isHoveredLeft }" @mouseover="hoverLeft" @mouseleave="leaveHover">
          <div class="content-wrap">
            <img id="left-image" class="img-dashboard" src="images/edited_me_final.png" alt="AI_me">
          </div>
          <div class="content-text left-content">
            <p class="title-welcome-left">{{ translate("IAmJoseTabares") }}</p>
            <p class="description-left" > {{ translate("leftSideContent") }}</p>
          </div>
        </div>
    
        <div @click="openRightSide" :style="backgroundImageStyle" class="split split-right" :class="{ 'hovered': isHoveredRight }" @mouseover="hoverRight" @mouseleave="leaveHover">
          <div class="content-wrap">
            <img class="img-dashboard" src="images/edited_me_v2.png" alt="normal_me">
          </div>
          <div id="right-content" class="content-text right-content">
            <p class="title-welcome-right">{{ translate("ADeveloper") }}</p>
            <p class="description-right">{{ translate("rightSideContent") }}</p>
          </div>
        </div>
      </div>
  
        <div class="greetings">
            <div class="greetings-content">
                <p class="adjustable-text">{{ translate("adjustableText") }}</p>
            </div>
            
        </div>
    </div>
  </template>
  
  

<script>
import confetti from 'canvas-confetti';
import es from "../es.js";
import en from "../en.js";

export default {
  mixins: [en, es],
  data() {
    return {
      hasLoaded: false,
      isHoveredLeft: false,
      isHoveredRight: false,
      imageUrl: 'images/background-clean.png',
      imageCreative: "images/background-left.png"
    };
  },
  name: "Dashboard",
  methods: {
    throwConfetti() {
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
      });
    },
    openLeftSide(){
        this.$router.push('/mySkills');
    },
    openRightSide(){
        window.location.href = "https://mail.google.com/mail/?view=cm&to=jmtr2000@gmail.com";
    },
    translate(prop) {
      return this[this.$store.state.language][prop];
    },
    hoverLeft() {
      this.isHoveredLeft = true;
      this.isHoveredRight = false;
      document.getElementById('left-image').style.transform = 'translate(-75%, -75%)';
    },
    hoverRight() {
      this.isHoveredLeft = false;
      this.isHoveredRight = true;
      document.getElementById('left-image').style.transform = 'translate(0%, -75%)';
      document.getElementById('right-content').style.transform = 'translateX(20%)';
      document.getElementById('right-content').style.transition = 'transform 0.5s ease-in-out';
    },
    leaveHover() {
      this.isHoveredLeft = false;
      this.isHoveredRight = false;
      document.getElementById('left-image').style.transform = 'translate(-50%, -75%)';
      document.getElementById('right-content').style.transform = 'translateX(0%)';
    },
  },
  mounted() {
    // Esperar un momento después de cargar todo el contenido
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.hasLoaded = true;
      }, 100); // Puedes ajustar el tiempo según sea necesario
    });
  },
  computed: {
        backgroundImageStyle() {
            return {
                backgroundImage: `url(${this.imageUrl})`
            };
        },
        backgroundCreativeStyle(){
            return {
                backgroundImage: `url(${this.imageCreative})`
            };
        },
    }
};
</script>
<style>
:root {
  --container-height: calc(100vh - 10rem); /* Define la altura de greetings como una variable */
  --split-zone-height: calc(100vh - var(--greetings-height)); /* Usa la variable dentro de calc() */
}

.container{
    width: 100%;
    height: calc(100vh - 10rem);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.split-zone {
    display: flex;
    aspect-ratio: 16 / 9; 
    width: 100%;
    height: auto; 
    position: relative;
    overflow: hidden;
    transition: opacity 1s ease-in-out; /* Efecto de difuminado */
    padding: 2.5px; /* Espacio para el borde degradado */
    cursor: pointer;
    box-shadow: 5px 5px 5px white;
}

/* Cuando la página ha cargado completamente */
.loaded {
  opacity: 1;
}

/* Preload: oculta el contenido hasta que se cargue */
.preload .split-zone {
  opacity: 0;
}

.split {
  width: 50%;
  height: 100%;
  position: relative;
  transition: width 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.split-left {
  background-color: #fff;
  z-index: 1;
  background-size: 50%; /* Ajusta el tamaño de la imagen para cubrir todo el bloque */
  background-position: bottom;
  background-repeat: no-repeat;
}

.split-right {
  background-color: rgb(42, 42, 42);
  z-index: 2;
  background-size: contain; /* Ajusta el tamaño de la imagen para cubrir todo el bloque */
  background-position: bottom;
  background-repeat: no-repeat;
}

.split-left.hovered {
  width: 85%;
}

.split-right.hovered {
  width: 85%;
}

.split .img-dashboard {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  width: 90vh; /* Ajuste para aumentar el tamaño de la imagen */
  height: 100vh; /* Ajuste para aumentar el tamaño de la imagen */
  transition: transform 0.5s ease-in-out;
}

.split-left .img-dashboard {
  left: 100%;
  transform: translate(-50%, -75%); /* Para que la imagen esté alineada en el borde derecho */
}

.split-right .img-dashboard {
  left: 0%;
  transform: translate(-50%, -75%); /* Para que la imagen esté alineada en el borde izquierdo */
}

.description-left{
    
    display: none;
}
.description-right{
    display: none;
}

.split-left:hover .description-left{
    color: #11012E;
    display: block;
}

.split-right:hover .description-right{
    color: white;
    display: block;
    z-index: 5;
}

.split-left:hover .img-dashboard {
  transform:  translate(-75%, -75%);
}

.split-left:hover ~ .split-right .img-dashboard {
    transform:  translate(-100%, -75%);
}

.split-right:hover .img-dashboard {
  transform:  translate(-25%, -75%);
}



.split .content-wrap {
  color: #fff;
  position: absolute;
  bottom: 10%;
  width: 100%;
}

.split-right .content-wrap {
  color: #000;
}

.title-welcome-right {
font-size: 3.3rem;    
  font-weight: bold;
  color:white
}

.title-welcome-left{
    font-size: 3.3rem;    
    font-weight: bold;
    color: #11012E;
    text-transform: uppercase;
    text-align: center;
}


.split .content-text{
    text-align: center;
    position: absolute;
    bottom: 50% !important;
    width: 100%;
}

.split-left:hover .left-content{
    right: 20%;
    transition: transform 0.5s ease-out-in;
}

.greetings{
    display: none;
}

@media (max-width:1286px) {
    .title-welcome-left{
        font-size:  170%;
    } 

    .title-welcome-right{
        font-size: 170%;
    }
    
}

@media (max-width:1000px) {
    .split .img-dashboard {
        aspect-ratio: 14/16;
        width: 125%;
        height: auto;
    }
    
}

@media (max-width:500px) {
    .title-welcome-left{
        font-size: 100%;
    } 

    .title-welcome-right{
        font-size: 100%;
    }
    
}

@media (max-width:375px) {
    .title-welcome-left{
        display: none;
    } 

    .title-welcome-right{
        display: none;
    }
    
}

@media (max-width:850px) {
    .greetings{
        width: 100%;
        display: flex;
        background-color: white;
        flex-grow: 1;
        margin-top: 2rem;
        border: 2.5px solid black;
        box-shadow: 5px 5px 5px white;
        justify-content: center;
        align-items: center;
    }

    .greetings-content{
        width: 80%;
        height: 80%;
        /* background-color: red; */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .adjustable-text {
        font-size: clamp(16px, 4vw, 20px); /* Se ajusta entre 16px y 36px, dependiendo del tamaño del viewport */
        color: #11012E;
    }
}

</style>