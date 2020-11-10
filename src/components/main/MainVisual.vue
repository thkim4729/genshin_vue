<template>
    <div class="visual">
        <v-row class="visual-wrap" no-gutters justify="center" align="center">
            <video src="@/assets/Genshin.mp4" autoplay muted loop poster="@/assets/Genshin.jpg" />
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Visual',
};
</script>

<style lang="scss">
.visual-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    video {
        position: absolute;
        min-width: 100%;
        height: 115%;
        object-fit: contain;
    }
}
.logo-box {
    position: absolute;
    z-index: 50;
    width: 300px;
    right: 5%;
    bottom: 5%;
}
</style>
