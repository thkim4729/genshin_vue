<template>
    <v-app>
        <router-view></router-view>
    </v-app>
</template>

<script>
export default {
    name: 'App',

    components: {},

    data: () => ({
        //
    }),
};
</script>
<style lang="scss">
a {
    text-decoration: none;
}

* {
    margin: 0;
    padding: 0;
}

::-webkit-scrollbar {
    /* 스크롤바 전체 영역 */
    width: 8px;
}
::-webkit-scrollbar-track {
    /* 스크롤이 움직이는 영역  */
    background-color: #f9f9f9;
}
::-webkit-scrollbar-thumb {
    /*  스크롤  */
    background-color: #aaa;
    border-radius: 30px;
}
::-webkit-scrollbar-button:start:decrement,
::-webkit-scrollbar-button:end:increment {
    /*  스크롤의 화살표가 포함된 영역   */
    // display: block;
    // height: 10px;
    // background-color: gray;
}
::-webkit-scrollbar-corner {
    /*  상하+좌우 스크롤이 만나는 공간   */
    background-color: red;
}
</style>
