<template>
    <div class="char-main">
        <!-- <div class="char-info ">
            <ul class="info-slider ">
                <li v-for="(char, i) in chars" :key="i">
                    <img class="info-person" :src="char.img" :alt="char.name" />
                    <img
                        class="info-icon"
                        src="@/assets/img/character/character_pattern.png"
                        alt="icon"
                    />
                </li>
            </ul>
            <div class="char-page">
                <ul class="page-slider">
                    <li></li>
                </ul>
            </div>
        </div> -->
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/swiper-bundle.css';
export default {
    name: 'CharMain',
    data() {
        return {
            chars: [
                {
                    img: require('../../assets/img/character/Jean.png'),
                    name: 'Jean',
                },
                {
                    img: require('../../assets/img/character/Amber.png'),
                    name: 'Amber',
                },
                {
                    img: require('../../assets/img/character/Lisa.png'),
                    name: 'Lisa',
                },
            ],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                },
                // Some Swiper option/callback...
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    methods: {},
    mounted() {
        console.log('Current Swiper instance object', this.swiper);
        this.swiper.slideTo(3, 1000, false);
    },
};
</script>

<style lang="scss" scoped>
ul,
li {
    list-style: none;
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
