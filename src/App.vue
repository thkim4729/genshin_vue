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
@import url('https://fonts.googleapis.com/css?family=poppins:300,400,500,600,700,800,900&display=swap');
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF Light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Light.woff')
        format('woff');
    font-weight: normal;
    font-style: normal;
}
html {
    scroll-behavior: smooth;
}
a,
ul,
li {
    text-decoration: none;
    list-style: none;
}
a {
    color: #111;
}
* {
    margin: 0;
    padding: 0;
    font-family: 'NEXON Lv1 Gothic Light', sans-serif;
    vertical-align: middle;
}
//
// ::-webkit-scrollbar {
//     /* 스크롤바 전체 영역 */
//     width: 6px;
// }
// ::-webkit-scrollbar-track {
//     /* 스크롤이 움직이는 영역  */
//     background: rgba(100, 100, 100, 0.5);
//     border-radius: 30px;
// }
// ::-webkit-scrollbar-thumb {
//     /*  스크롤  */
//     background-color: #aaa;
//     border-radius: 30px;
// }
// ::-webkit-scrollbar-button:start:decrement,
// ::-webkit-scrollbar-button:end:increment {
//     /*  스크롤의 화살표가 포함된 영역   */
//     // display: block;
//     // height: 10px;
//     // background-color: gray;
// }
// ::-webkit-scrollbar-corner {
//     /*  상하+좌우 스크롤이 만나는 공간   */
// }
</style>
