<template>
    <div class="main">
        <!-- <v-img
            :src="require('../assets/Genshin.jpg')"
            contain
            aspect-ratio="1.7"
            class="genshin"
        ></v-img> -->
        <video
            class="video"
            src="../assets/Genshin.mp4"
            autoplay
            loop
            muted
            poster="../assets/Genshin.jpg"
        ></video>
    </div>
</template>

<script>
export default {
    name: 'Main',
};
</script>

<style lang="scss" scoped>
main {
    // height: 100vh;
}
video {
    width: 100%;
}
</style>
