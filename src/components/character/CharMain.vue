<template>
    <div class="char-main">
        <div class="char-info">
            <swiper
                class="info-slider"
                ref="mySwiper"
                :options="swiperOptions"
                :auto-update="true"
                :auto-destroy="true"
                :delete-instance-on-destroy="true"
                :cleanup-styles-on-destroy="true"
            >
                <swiper-slide class="slider-box" v-for="(char, i) in chars" :key="i"
                    ><img class="info-person" :src="char.img" :alt="char.name" />
                    <img class="info-icon" :src="char.icon" :alt="char.name" />
                </swiper-slide>
                <div class="swiper-pagination char-page" slot="pagination">
                    <div class="page-box">
                        <div class="char-list"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </div>
                </div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CharMain',
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            chars: [
                {
                    img: require('../../assets/img/character/Jean.png'),
                    icon: require('../../assets/img/character/Jean_icon.png'),
                    name: 'Jean',
                },
                {
                    img: require('../../assets/img/character/Amber.png'),
                    icon: require('../../assets/img/character/Amber_icon.png'),
                    name: 'Amber',
                },
                {
                    img: require('../../assets/img/character/Lisa.png'),
                    icon: require('../../assets/img/character/Lisa_icon.png'),
                    name: 'Lisa',
                },
            ],
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 1000,
                loop: true,
                centeredSlides: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
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
    background: url('../../assets/img/character/character_pattern1.png') no-repeat;
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
        .slider-box {
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
        .slider-box::after {
            position: absolute;
            z-index: 3;
            bottom: 0;
            left: calc(50% - 79vh);
            display: block;
            content: '';
            width: 154vh;
            height: 52vh;
            background: url('../../assets/img/character/character_pattern2.png') center no-repeat;
            background-size: 154vh 52vh;
        }
    }
}
.char-page {
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 300;
    left: 0;
    bottom: 0;
    padding-top: 22px;
    width: 100%;
    height: 190px;
    background: rgba(204, 204, 204, 0.2);
    user-select: none;
    .page-box {
        position: relative;
        overflow: hidden;
        padding: 0;
        z-index: 1;
        width: 900px;
        height: 100%;
        margin: 0 !important;
        .char-list {
            bottom: 10px;
            left: 0;
            width: 100%;
            height: 150px;
            align-items: center;
            transform: translate3d(0px, 0px, 0px);
            transition-duration: 0ms;
        }
    }
}
.char-page::before {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    width: 100%;
    height: 156px;
    background: url('../../assets/img/character/character_pattern3.png') center bottom repeat
        no-repeat;
}
.swiper-button-prev {
    width: 45px;
    height: 64px;
    background: url('../../assets/img/character/prev.png') center no-repeat;
    transform: translateY(-50%);
}
.swiper-button-prev::after {
    content: '';
}
.swiper-button-next {
    width: 45px;
    height: 64px;
    background: url('../../assets/img/character/next.png') center no-repeat;
    transform: translateY(-50%);
}
.swiper-button-next::after {
    content: '';
}
</style>
