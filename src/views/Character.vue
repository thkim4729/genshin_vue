<template>
    <div class="character">
        <div class="char-bg char-bg1"></div>
        <div class="char-bg char-bg2"></div>
        <character-intro :charsMondstadt="charsMondstadt"></character-intro>
    </div>
</template>

<script defer>
import { mapState } from 'vuex';
export default {
    name: 'Character',
    components: {
        CharacterIntro: () => import('@/components/character/CharacterIntro.vue'),
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
    background-size: cover;
    animation: breath 80s infinite linear;
    opacity: 1;
}
.char-bg2 {
    background: url('../assets/img/characterBg02.jpg') no-repeat;
    background-size: cover;
    animation: bg-change 15s infinite linear, breath 80s infinite linear;
    opacity: 0;
}
@keyframes breath {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bg-change {
    48% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    98% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
