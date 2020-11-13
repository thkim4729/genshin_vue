<template>
    <div class="appbar">
        <v-app-bar class="menu" absolute color="transparent">
            <v-btn
                icon
                small
                class="bgm-btn"
                :ripple="false"
                id="no-background-hover"
                v-if="!showIcon"
                @click="playMusic"
            >
                <v-img :src="require('../../assets/img/bgmOff.png')"></v-img>
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
                <v-img :src="require('../../assets/img/bgmOn.png')"></v-img>
            </v-btn>

            <router-link to="/">
                <v-btn
                    @click="reload"
                    text
                    small
                    flat
                    class="logo"
                    :ripple="false"
                    id="no-background-hover"
                >
                    <v-img :src="require('../../assets/img/logo.png')"></v-img>
                </v-btn>
            </router-link>

            <app-bar-list></app-bar-list>

            <v-spacer></v-spacer>

            <v-btn class="logIn" text small dark :ripple="false" id="no-background-hover">
                로그인
                <v-icon class="logIn-left-margin" large>mdi-account-circle</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
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
            location.reload();
        },
        stopMusic() {
            this.showIcon = false;
            this.music.pause();
        },
        playMusic() {
            this.showIcon = true;
            this.music.play();
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    position: fixed !important;
    z-index: 100 !important;
}
.menu {
    padding: 0 60px;
    background: rgba(17, 17, 17, 0.75) !important;
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
    font-size: 16px;
    padding: 0 !important;
}
.logIn:hover {
    filter: none;
}
.logIn-left-margin {
    margin-left: 16px;
}
</style>
