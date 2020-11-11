<template>
    <div class="main">
        <main-visual class="visual"></main-visual>
        <main-news class="news"></main-news>
        <main-character class="character"></main-character>

        <div id="top" data-aos="fade-in">
            <v-btn fab dark small color="primary" @click="scrollToTop()">
                <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    components: {
        MainVisual: () => import('@/components/main/MainVisual.vue'),
        MainNews: () => import('@/components/main/MainNews.vue'),
        MainCharacter: () => import('@/components/main/MainCharacter.vue'),
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style lang="scss" scoped>
.visual {
    // width: 100%;
    // height: 100vh;
}
#top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100000;
}
</style>
