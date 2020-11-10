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
    width: 100%;
    height: 100vh;
    // background: url(../../assets/news.jpg) no-repeat;
    img {
        height: 100%;
    }
}
</style>
