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
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        // min-width: 100%;
        // height: 115%;
        // object-fit: contain;
    }
}
</style>
