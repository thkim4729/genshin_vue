<template>
    <div class="appbar">
        <v-app-bar
            class="menu"
            absolute
            color="transparent"
            scroll-target="#scrolling-techniques-7"
        >
            <v-btn icon small class="bgm" :ripple="false" id="no-background-hover">
                <v-img :src="require('../../assets/bgmOn.png')"></v-img>
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
                    <v-img :src="require('../../assets/logo.png')"></v-img>
                </v-btn>
            </router-link>

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
    methods: {
        reload() {
            location.reload();
        },
    },
};
</script>

<style lang="scss" scoped>
header {
    position: fixed !important;
}
.menu {
    padding: 0 60px;
    background: rgba(17, 17, 17, 0.75) !important;
}
.bgm {
    margin-right: 100px;
    img {
        width: 75%;
    }
}
.logo {
    // margin-left: 50px;
    width: 0;
}
#no-background-hover::before {
    background-color: transparent !important;
}
.logIn-left-margin {
    margin-left: 16px;
}
</style>
