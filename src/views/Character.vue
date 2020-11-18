<template>
    <div class="character">
        <div class="char-bg char-bg1"></div>
        <div class="char-bg char-bg2"></div>
        <char-main :charsMondstadt="charsMondstadt"></char-main>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Character',
    components: {
        CharMain: () => import('@/components/character/CharMain.vue'),
    },
    computed: {
        ...mapState(['charsMondstadt']),
    },
};
</script>

<style lang="scss" scoped>
.character {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    font-size: 12px;
}
.char-bg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: center;
    background-size: cover;
    transform-origin: center;
}
.char-bg1 {
    background: url('../assets/img/characterBg01.jpg') no-repeat;
    animation: breath 80s infinite linear;
    opacity: 1;
}
.char-bg2 {
    background: url('../assets/img/characterBg02.jpg') no-repeat;
    animation: bg-change 15s infinite linear, breath 80s infinite linear;
    opacity: 0;
}
</style>
