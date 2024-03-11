<template>
	<div class="grid justify-content-center">
		<div class="col-12 lg:col-6">
            <div id="retrato" class="retrato" @click="throwConfetti()">
                <img id="image" class="image" src="images/yoEditado.png" alt="este soy yo ;)">
                <div class="clickme">
                    <p>{{ translate("clickMe") }}</p>
                </div>
            </div>       
        </div>
        <div class="col-12 lg:col-6">
            <div class="title" >
                    <h1>{{ translate("welcomeMsg") }} &#128526;</h1>
            </div>
            <div class="contenido">
                <p>
                    {{ translate("cuerpoFirstMessage") }}
                    <br>
                    <br>
                    {{ translate("cuerpoSecondMessage") }}
                    <br>
                    <br>
                    {{ translate("cuerpoThirdMessage") }}
                </p>
            </div>
            <div class="tecnologias">
                <router-link to="/mySkills">
                    <Button :label="translate('mySkills')" class="botontech p-button p-component p-button-raised p-button-lg" />
                </router-link>
            </div>
        </div>
	</div>
</template>

<script>
import confetti from 'canvas-confetti';
import es from "../es.js";
import en from "../en.js"
	export default {
        mixins:[ en, es],
		name: "Dashboard",
		methods: {
			throwConfetti(){
                confetti({
                    particleCount: 100,
                    startVelocity: 30,
                    spread: 360,
                    origin: {
                        x: Math.random(),
                        y: Math.random() - 0.2
                    }
                    });
            },
            translate(prop){
                return this[this.$store.state.language][prop]
            }
		},
		computed: {
			
		}
	}
</script>
<style>
    body{
        background-color: #0E0F14;
    }

    .retrato{

        align-items: center;
        position: relative;
        display: flex;
        justify-content: center;
    }

    .clickme{
        font-size: xx-large;
        color: white;
        visibility: hidden;
        position: absolute;
        bottom: 40%;
    }

    .image{
        border-radius: 500px;
        width: 70%;
        box-shadow: 0 0 5px 0 rgb(2, 0, 0, .75);
        object-fit: cover ;
        -webkit-transition:all 0.30s ease-in-out;
		-moz-transition:all 0.30s ease-in-out;
		-o-transition:all 0.30s ease-in-out;
		-ms-transition:all 0.30s ease-in-out;
		transition:all 0.30s ease-in-out;
    }

    .retrato:hover >.image{
        filter: blur(6px) brightness(40%);
        background-color: white;
		transform: scale(1.07,1.07);
		-webkit-transform:scale(1.07,1.07);
		-moz-transform:scale(1.07,1.07);
		-ms-transform:scale(1.07,1.07);
		-o-transform:scale(1.07,1.07);
    }

    .retrato:hover > .clickme{
        visibility: visible;
    }

    .title{
        color: white;
        margin-top: 8em;
        margin-bottom: 2em;
        text-align: center;
    }

    .contenido{
        color: white;
        font-size: medium;
    }

    .tecnologias{
        margin-top: 38px;
        display: flex;
        justify-content: center;
    }

    .botontech{
        background-color:#11012E;
    }

    @media only screen and (max-width: 987px) {
        .title{
            margin-top: 1rem !important;
        }
    }
    @media only screen and (min-width: 400px) {
    }

</style>