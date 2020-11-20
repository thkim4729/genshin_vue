<template>
    <div class="appbar">
        <v-app-bar class="menu" absolute dense height="66px">
            <v-btn
                icon
                small
                class="bgm-btn"
                :ripple="false"
                id="no-background-hover"
                v-if="!showIcon"
                @click="playMusic"
            >
                <v-img :src="require('../../assets/img/appbar/bgmOff.png')"></v-img>
            </v-btn>
            <v-btn
                icon
                small
                class="bgm-btn"
                :ripple="false"
                id="no-background-hover"
                v-else
                @click="stopMusic"
            >
                <v-img :src="require('../../assets/img/appbar/bgmOn.png')"></v-img>
            </v-btn>

            <router-link to="/">
                <v-btn
                    @click="reload"
                    text
                    small
                    class="logo"
                    :ripple="false"
                    id="no-background-hover"
                >
                    <v-img :src="require('../../assets/img/appbar/logo.png')"></v-img>
                </v-btn>
            </router-link>

            <app-bar-list></app-bar-list>

            <v-spacer></v-spacer>

            <v-btn
                class="logIn"
                text
                small
                dark
                :ripple="false"
                id="no-background-hover"
                @click="openLogIn"
            >
                로그인
                <v-icon class="logIn-left-margin" large>mdi-account-circle</v-icon>
            </v-btn>

            <a href="#" class="download btn effect01">
                <span>다운로드</span>
            </a>
        </v-app-bar>
    </div>
</template>

<script defer>
export default {
    name: 'AppBar',
    components: { AppBarList: () => import('@/components/core/AppBarList.vue') },
    data() {
        return {
            showIcon: false,
            music: {},
        };
    },
    mounted() {
        // this.music = new Audio('https://genshin.mihoyo.com/_nuxt/medias/video-bgm.d8637316.mp3');
        this.music = new Audio(require('@/assets/music/BGM.mp3'));
        this.music.pause();
        this.music.currentTime = 0;
        this.music.loop = true;
    },
    methods: {
        reload() {
            setTimeout(() => {
                location.reload(true);
            }, 100);
        },
        stopMusic() {
            this.showIcon = false;
            this.music.pause();
        },
        playMusic() {
            this.showIcon = true;
            this.music.play();
        },
        openLogIn() {
            this.$store.commit('toggleLogIn');
        },
    },
};
</script>

<style lang="scss">
header {
    position: fixed !important;
    z-index: 5 !important;
}
.menu {
    padding: 0 0 0 100px;
    background: rgba(17, 17, 17, 0.75) !important;
}
.v-toolbar__content {
    padding: 0 !important;
}
.bgm-btn {
    margin-right: 80px;
    filter: brightness(80%);
    transition: all 0.2s;
}
.bgm-btn:hover {
    filter: none;
}
.logo {
    // margin-left: 50px;
    width: 0;
    filter: brightness(90%);
    transition: all 0.2s;
    margin-right: 100px;
}
.logo:hover {
    filter: none;
}
#no-background-hover::before {
    background-color: transparent !important;
}
.logIn {
    filter: brightness(80%);
    transition: all 0.2s;
    font-size: 16px !important;
    padding: 0 !important;
    margin-right: 30px;
}
.logIn:hover {
    filter: none;
}
.logIn-left-margin {
    margin-left: 16px;
}
// .download {
//     width: 200px;
//     height: 100%;
//     font-size: 20px;
//     background: #ffcf0d;
//     text-align: center;
//     color: #111 !important;
//     font-weight: 500;
//     line-height: 66px;
//     transition: all 0.2s;
// }
// .download:hover {
//     background: rgba(17, 17, 17, 0.75) !important;
//     color: #ffcf0d !important;
// }

.btn {
    letter-spacing: 0.1em;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    line-height: 58px;
    max-width: 200px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    color: #111 !important;
    text-align: center;
    font-weight: 500;
}
.btn:hover {
    text-decoration: none;
}

/*btn_background*/
.effect01 {
    color: #111;
    border: 4px solid#ffcf0d;
    box-shadow: 0px 0px 0px 1px #ffcf0d inset;
    background-color: #ffcf0d;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
}
.effect01:hover {
    border: 4px solid #ffcf0d;
    background-color: #111;
    box-shadow: 0px 0px 0px 4px #111 inset;
}

/*btn_text*/
.effect01 span {
    transition: all 0.2s ease-out;
    z-index: 2;
}
.effect01:hover span {
    letter-spacing: 0.13em;
    color: #ffcf0d;
}

/*highlight*/
.effect01:after {
    background: #111;
    border: 0px solid #ffcf0d;
    content: '';
    height: 155px;
    left: -75px;
    opacity: 0.8;
    position: absolute;
    top: -50px;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
    width: 50px;
    transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1); /*easeOutCirc*/
    z-index: 1;
}
.effect01:hover:after {
    background: #111;
    border: 20px solid#ffcf0d;
    opacity: 0;
    left: 120%;
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
}
</style>
