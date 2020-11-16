<template>
    <div class="char-main">
        <!-- <div class="char-info swiper-container">
            <ul class=" swiper-wrapper">
                <li class="swiper-slide" v-for="(char, i) in chars" :key="i">
                    <img class="info-person" :src="char.img" :alt="char.name" />
                    <img
                        class="info-icon"
                        src="@/assets/img/character/character_pattern.png"
                        alt="icon"
                    />
                    <h2>hi</h2>
                </li>
            </ul>
            <div class="char-page swiper-pagination">
                <ul class="page-slider">
                    <li></li>
                </ul>
            </div>
        </div> -->
        <div class="char-info swiper-container">
            <div class="info-slider swiper-wrapper">
                <!-- Lazy image -->
                <div class="swiper-slide">
                    <img
                        data-src="https://uploadstatic-sea.mihoyo.com/contentweb/20200616/2020061611274052455.png"
                        class="swiper-lazy"
                    />
                    <div class="swiper-lazy-preloader"></div>
                </div>

                <!-- Lazy image with srscet-->
                <div class="swiper-slide">
                    <img
                        data-src="@/assets/img/character/Amber.png"
                        data-srcset="path/logo/logo-large.png 2x"
                        class="swiper-lazy"
                    />
                    <div class="swiper-lazy-preloader"></div>
                </div>

                <!-- Element with lazy background image -->
                <div class="swiper-slide">
                    <div data-background="@/assets/img/character/Lisa.png" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </div>
                </div>

                <!-- Lazy background image on slide itself -->
                <div
                    data-background="@/assets/img/character/Jean.png"
                    class="swiper-slide swiper-lazy"
                >
                    <div class="swiper-lazy-preloader"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
export default {
    name: 'CharMain',
    data() {
        return {
            chars: [
                {
                    img: require('@/assets/img/character/Jean.png'),
                    name: 'Jean',
                },
                {
                    img: require('@/assets/img/character/Amber.png'),
                    name: 'Amber',
                },
                {
                    img: require('@/assets/img/character/Lisa.png'),
                    name: 'Lisa',
                },
            ],
        };
    },
    methods: {},
    mounted() {
        new Swiper('.swiper-container', {
            speed: 400,
            spaceBetween: 100,
            // Disable preloading of all images
            preloadImages: false,
            // Enable lazy loading
            lazy: true,
        });
    },
};
</script>

<style lang="scss" scoped>
ul,
li {
    list-style: none;
}
.swiper-container {
    width: 500px;
    height: 500px;
    margin: 0 auto;
}
.char-main {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../../assets/img/character/character_pattern2.png') no-repeat;
    background-position: center bottom;
    background-size: auto 100vh;
}
.char-info {
    position: relative;
    width: 100%;
    height: 100%;
    user-select: none;
    .info-slider {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        li {
            width: 100%;
            opacity: 1;
            transform: translate3d(0px, 0px, 0px);
            transition-duration: 0ms;
            .info-person {
                position: absolute;
                top: 0;
                left: calc(50% - 63vh);
                width: auto;
                height: 100vh;
                // opacity: 0;
                transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
            }
            .info-icon {
                position: absolute;
                top: 10vh;
                left: calc(50% - 60vh);
                width: auto;
                height: 378px;
                opacity: 0.1;
            }
        }
        li::after {
            position: absolute;
            z-index: 3;
            bottom: 0;
            left: calc(50% - 79vh);
            display: block;
            content: '';
            width: 154vh;
            height: 52vh;
            background: url('../../assets/img/character/character_pattern3.png') center no-repeat;
            background-size: 154vh 52vh;
        }
    }
}
</style>
