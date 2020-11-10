<template>
    <div class="main">
        <visual class="visual"></visual>
        <news class="news"></news>
    </div>
</template>

<script>
export default {
    name: 'Main',
    components: {
        Visual: () => import('@/components/main/MainVisual.vue'),
        News: () => import('@/components/main/MainNews.vue'),
    },
};
</script>

<style lang="scss" scoped>
.visual {
    // width: 100%;
    // height: 100vh;
}
</style>
