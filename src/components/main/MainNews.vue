<template>
    <div class="news">
        <v-row class="news-wrap" no-gutters justify="center" align="center">
            <img src="@/assets/news.jpg" />
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'News',
};
</script>

<style lang="scss" scoped>
.news-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
