<template>
    <div class="char-main">
        <div class="char-info">
            <agile class="info-slider" ref="main" :options="options1" :as-nav-for="asNavFor1">
                <div
                    class="slide slider-box"
                    v-for="(char, index) in chars"
                    :key="index"
                    :class="`slide--${index}`"
                >
                    <img :src="char.img" class="info-person" />
                    <img :src="char.icon" class="info-icon" />
                </div>
            </agile>
            <div class="char-page">
                <div class="page-box">
                    <agile
                        class="thumbnails char-list"
                        ref="thumbnails"
                        :options="options2"
                        :as-nav-for="asNavFor2"
                    >
                        <div
                            class="slide slide--thumbniail char-item"
                            v-for="(char, index) in chars"
                            :key="index"
                            :class="`slide--${index}`"
                            @click="$refs.thumbnails.goTo(index)"
                        >
                            <img :src="char.thumb" class="info-thumb" />
                            <p>{{ char.name }}</p>
                        </div>
                        <template slot="prevButton"><v-icon>mdi-chevron-left</v-icon></template
                        ><template slot="nextButton"><v-icon>mdi-chevron-right</v-icon></template>
                    </agile>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile';
export default {
    name: 'CharMain',
    components: {
        agile: VueAgile,
    },
    data() {
        return {
            chars: [
                {
                    img: require('../../assets/img/character/Jean.png'),
                    icon: require('../../assets/img/character/Jean_icon.png'),
                    thumb: require('../../assets/img/character/Jean_thumb.png'),
                    name: '진',
                },
                {
                    img: require('../../assets/img/character/Amber.png'),
                    icon: require('../../assets/img/character/Amber_icon.png'),
                    thumb: require('../../assets/img/character/Amber_thumb.png'),
                    name: '엠버',
                },
                {
                    img: require('../../assets/img/character/Lisa.png'),
                    icon: require('../../assets/img/character/Lisa_icon.png'),
                    thumb: require('../../assets/img/character/Lisa_thumb.png'),
                    name: '리사',
                },
                {
                    img: require('../../assets/img/character/Kaeya.png'),
                    icon: require('../../assets/img/character/Kaeya_icon.png'),
                    thumb: require('../../assets/img/character/Kaeya_thumb.png'),
                    name: '케이야',
                },
                {
                    img: require('../../assets/img/character/Barbara.png'),
                    icon: require('../../assets/img/character/Barbara_icon.png'),
                    thumb: require('../../assets/img/character/Barbara_thumb.png'),
                    name: '바바라',
                },
                {
                    img: require('../../assets/img/character/Diluc.png'),
                    icon: require('../../assets/img/character/Diluc_icon.png'),
                    thumb: require('../../assets/img/character/Diluc_thumb.png'),
                    name: '다이루크',
                },
                {
                    img: require('../../assets/img/character/Razor.png'),
                    icon: require('../../assets/img/character/Razor_icon.png'),
                    thumb: require('../../assets/img/character/Razor_thumb.png'),
                    name: '레이저',
                },
                {
                    img: require('../../assets/img/character/Venti.png'),
                    icon: require('../../assets/img/character/Venti_icon.png'),
                    thumb: require('../../assets/img/character/Venti_thumb.png'),
                    name: '벤티',
                },
                {
                    img: require('../../assets/img/character/Klee.png'),
                    icon: require('../../assets/img/character/Klee_icon.png'),
                    thumb: require('../../assets/img/character/Klee_thumb.png'),
                    name: '클레',
                },
                {
                    img: require('../../assets/img/character/Bennett.png'),
                    icon: require('../../assets/img/character/Bennett_icon.png'),
                    thumb: require('../../assets/img/character/Bennett_thumb.png'),
                    name: '베넷',
                },
                {
                    img: require('../../assets/img/character/Noelle.png'),
                    icon: require('../../assets/img/character/Noelle_icon.png'),
                    thumb: require('../../assets/img/character/Noelle_thumb.png'),
                    name: '노엘',
                },
                {
                    img: require('../../assets/img/character/Fischl.png'),
                    icon: require('../../assets/img/character/Fischl_icon.png'),
                    thumb: require('../../assets/img/character/Fischl_thumb.png'),
                    name: '피슬',
                },
                {
                    img: require('../../assets/img/character/Sucrose.png'),
                    icon: require('../../assets/img/character/Sucrose_icon.png'),
                    thumb: require('../../assets/img/character/Sucrose_thumb.png'),
                    name: '설탕',
                },
                {
                    img: require('../../assets/img/character/Mona.png'),
                    icon: require('../../assets/img/character/Mona_icon.png'),
                    thumb: require('../../assets/img/character/Mona_thumb.png'),
                    name: '모나',
                },
                {
                    img: require('../../assets/img/character/Diona.png'),
                    icon: require('../../assets/img/character/Diona_icon.png'),
                    thumb: require('../../assets/img/character/Diona_thumb.png'),
                    name: '디오나',
                },
            ],
            asNavFor1: [],
            asNavFor2: [],
            options1: {
                dots: false,
                fade: true,
                navButtons: false,
            },

            options2: {
                autoplay: false,
                centerMode: true,
                dots: false,
                navButtons: false,
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 5,
                        },
                    },

                    {
                        breakpoint: 1000,
                        settings: {
                            navButtons: true,
                        },
                    },
                ],
            },
        };
    },
    computed: {},
    methods: {},
    mounted() {
        this.asNavFor1.push(this.$refs.thumbnails);
        this.asNavFor2.push(this.$refs.main);
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
            transform: translate3d(0px, 0px, 0px);
            transition-duration: 0ms;
            .info-person {
                position: absolute;
                top: 0;
                left: calc(50% - 63vh);
                width: auto;
                height: 100vh;
                transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
                transform: translateX(0);
            }
            .info-icon {
                position: absolute;
                top: 10vh;
                left: calc(50% - 50vh);
                width: auto;
                max-width: 1640px;
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
        width: 960px;
        height: 100%;
        margin: 0 auto;
        .char-list {
            display: flex;
            bottom: 10px;
            left: 0;
            margin: 0 -5px;
            width: calc(100% + 10px);
            height: 150px;
            align-items: center;
            transform: translate3d(0px, 0px, 0px);
            transition-duration: 0ms;
            .char-item {
                width: 110px !important;
                height: 132px;
                margin-right: 74px;
                background: transparent url('../../assets/img/character/frame.png') no-repeat 0 0;
                font-size: 0;
                cursor: pointer;
                .info-thumb {
                    display: block;
                    margin: 2px auto 0;
                    width: 106px;
                    height: 106px;
                }
                p {
                    font-size: 16px;
                    line-height: 22px;
                    color: #fff;
                    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
                    text-align: center;
                }
            }
            .char-item:hover {
                background-position: 0 -132px;
            }
            .char-item:hover p {
                color: #121212;
            }
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
// .prevButton {
//     position: absolute;
//     top: 50px;
//     left: 50%;
//     width: 45px;
//     height: 64px;
//     background: url('../../assets/img/character/prev.png');
//     background-size: cover;
//     // transform: translateX(-520px);
//     cursor: pointer;
// }
// .nextButton {
//     position: absolute;
//     top: 50px;
//     right: 50%;
//     width: 45px;
//     height: 64px;
//     background: url('../../assets/img/character/next.png');
//     background-size: cover;
//     // transform: translateX(520px);
//     cursor: pointer;
// }
.agile__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition-duration: 0.3s;
}

.thumbnails .agile__nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.thumbnails .agile__nav-button--prev {
    left: -45px;
}

.thumbnails .agile__nav-button--next {
    right: -45px;
}

.agile__nav-button:hover {
    color: #888;
}
</style>
