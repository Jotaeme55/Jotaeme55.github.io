<template>
    <div class="layout-topbar">
        <div>
            <router-link to="/" class="layout-topbar-logo mr-0">
                <span style="color:white; margin-right: 3px;">José Tabares </span>
                <i class="icons pi pi-moon"></i>
            </router-link>
        </div>

        <ul class="layout-topbar-menu hidden lg:flex origin-top  justify-content-left">
            <li v-tooltip.bottom="translate('cambiaIdioma')" style="cursor: pointer;" class="mt-3 ml-8" @click="changeLanguage()">
                <img  style="width:40px; height: 30px;" alt="Logo" :src="languageImage()"/>
            </li>
            <li class="mt-3 ml-8">
                <a href="./resume.pdf" target="_self">
                    <i class="icons pi pi-file"></i>
                </a>
            </li>
            <li class="mt-3 ml-8">
                <a href="https://www.linkedin.com/in/jos%C3%A9-tabares-rodr%C3%ADguez-5688a8206/">
                    <i class="icons pi pi-linkedin"></i>
                </a>
            </li>
            <li class="mt-3 ml-8">
            <a href="https://github.com/Jotaeme55">
                <i class="icons pi pi-github"></i>
            </a>
            </li>
            <li class="mt-3 ml-8">
            <a href="https://mail.google.com/mail/?view=cm&to=jmtr2000@gmail.com">
                <i class="icons pi pi-envelope"></i>
            </a>
            </li>
            
            <Menu ref="menu" :model="overlayMenuItems" :popup="true"/>
            
        </ul>
        <div>
            <button class="p-link layout-topbar-menu-button layout-topbar-button" @click="visibleLeft=true">
                <i class="pi pi-ellipsis-v"></i>
            </button>
        </div>
    
        <Sidebar v-model:visible="visibleLeft" :baseZIndex="1000">
            <div class="items-sidebar" >
                <div class="language-sidebar" v-tooltip.bottom="translate('cambiaIdioma')" style="cursor: pointer;" @click="changeLanguage()">
                    <img  style="width:100px; height: 70px;" alt="Logo" :src="languageImage()"/>
                </div>
                <a href="./resume.pdf" target="_self">
                    <i class="iconssidebar pi pi-file"></i> &nbsp;
                </a>
                <a href="https://www.linkedin.com/in/jos%C3%A9-tabares-rodr%C3%ADguez-5688a8206/">
                    <i class="iconssidebar pi pi-linkedin"></i> &nbsp;
                </a>
                <a href="https://github.com/Jotaeme55">
                    <i class="iconssidebar pi pi-github"></i>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=jmtr2000@gmail.com">
                    <i class="iconssidebar pi pi-envelope"></i>
                </a>
            </div>
        </Sidebar>
    </div>  
</template>


<script>
import es from "./es.js";
import en from "./en.js"
export default {
    mixins:[ en, es],
    data() {
        
        return {
            
            visibleLeft:false,
            displayConfirmation: false,
            overlayMenuItems: [],
            language:this.$store.state.language,
        }
    },
    mounted(){
        if (this.$store.state.loggedIn) {
            this.overlayMenuItems.push({
                label: 'Log out',
                icon: 'pi pi-sign-out',
                command: () => {this.openConfirmation()}
            })
        }
    },
    methods: {
        translate(prop){
                return this[this.$store.state.language][prop]
            },
        changeLanguage(){
            if(this.language==="en"){
                this.$store.dispatch("saveLanguage", "es");
                this.language="es"
            }else{
                this.$store.dispatch("saveLanguage", "en");
                this.language="en"
            }
            
        },
        languageImage() {
			return this.language==="en" ? 'images/ingles.gif' : 'images/españa.gif';
		},   
        toggleMenu(event) {
            this.$refs.menu.toggle(event);
        },
        openConfirmation() {
            this.displayConfirmation = true;
        },
        closeConfirmation() {
            this.displayConfirmation = false;
        },
    },
    computed: {
        darkTheme() {
            return this.$appState.darkTheme;
        }
    },

}
</script>
<style>
    .items-sidebar{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .iconssidebar{
        margin-top: 30px;
        font-size: 7rem;
        color:white;
    }

    .icons{
        font-size: 2rem;
        color:white;

    }

    .iconssidebar:hover{
        color:grey
    }

    .icons:hover{
        color:grey
    }

    /* font-size: 2em; margin:15px; */
    .color{
        padding: 2%;
        margin-top: 0.5em;
        color:white;
        line-height: 2;
    }
    .color:hover {
        color: #11012E;
    }
    span.color{
        transition: 0.5s;
        color:white;
    }
    span.color:hover{
        color:black;
    }
    .p-sidebar-left {
        background-color:#11012E ;
    }
    
   
    @media only screen and (max-width: 294px) {
        #btUsuario{
            display: none;
        }
    }
    @media only screen and (min-width: 294px) {
        #btUsuario2{
            display: none;
        }
    }
</style>