<template>
    <div class="visual">
        <v-row class="visual-wrap" no-gutters justify="center" align="center">
            <video
                class="video"
                src="@/assets/Genshin.mp4"
                autoplay
                muted
                loop
                poster="@/assets/Genshin.jpg"
            />
            <v-row class="guide" no-gutters justify="cetner" align="cetner">
                <p>PS4 /모바일/PC 그랜드 오픈</p>
                <div class="Platform">
                    <div class="Platform-item" v-for="(item, i) in items" :key="i">
                        <a :href="item.href">
                            <img :src="item.img" :alt="item.alt" />
                        </a>
                    </div>
                </div>
                <div class="mouse_scroll">
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                </div>
            </v-row>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Visual',
    data() {
        return {
            items: [
                { href: '#', img: require('@/assets/ps4.png'), alt: '플레이스테이션4' },
                { href: '#', img: require('@/assets/ios.png'), alt: '아이폰' },
                { href: '#', img: require('@/assets/android.png'), alt: '안드로이드' },
                { href: '#', img: require('@/assets/windows.png'), alt: '윈도우' },
            ],
        };
    },
};
</script>

<style lang="scss">
.visual {
    height: 100vh;
}
.visual-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    min-width: 500px;
    height: 100%;
    .video {
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
.guide {
    z-index: 5;
    flex-flow: column;
    position: absolute;
    top: 80vh;
    left: 50%;
    transform: translate(-50%, -50%);
    p {
        font-size: 32px;
        color: #fff;
        text-align: center;
        text-shadow: 0 0 10px rgba(114, 71, 21, 0.68), 0 0 10px rgba(114, 71, 21, 0.68);
    }
    .Platform {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        min-width: 750px;
    }
    .Platform-item {
        background: #fff;
        border-radius: 30px;
        margin-right: 3%;
        filter: brightness(90%);
    }
    .Platform-item:hover {
        filter: none;
    }
    .Platform-item > a > img {
        text-align: center;
        width: 100%;
    }
    div:last-child {
        margin: 0;
    }
}
.mouse_scroll {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 30px;
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translate(-50%, 0);
    *,
    *:before,
    *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .m_scroll_arrows {
        display: block;
        width: 5px;
        height: 5px;
        -ms-transform: rotate(45deg); /* IE 9 */
        -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
        transform: rotate(45deg);

        border-right: 4px solid white;
        border-bottom: 4px solid white;
        // margin: 0 0 0px 4px;

        width: 20px;
        height: 20px;
    }

    .unu {
        margin-top: 1px;
    }

    .unu,
    .doi,
    .trei {
        -webkit-animation: mouse-scroll 0.8s infinite;
        -moz-animation: mouse-scroll 0.8s infinite;
        animation: mouse-scroll 0.8s infinite;
    }

    .unu {
        -webkit-animation-delay: 0.1s;
        -moz-animation-delay: 0.1s;
        -webkit-animation-direction: alternate;

        animation-direction: alternate;
        animation-delay: alternate;
    }

    .doi {
        -webkit-animation-delay: 0.2s;
        -moz-animation-delay: 0.2s;
        -webkit-animation-direction: alternate;

        animation-delay: 0.2s;
        animation-direction: alternate;

        margin-top: -6px;
    }

    .trei {
        -webkit-animation-delay: 0.3s;
        -moz-animation-delay: 0.3s;
        -webkit-animation-direction: alternate;

        animation-delay: 0.3s;
        animation-direction: alternate;

        margin-top: -6px;
    }

    @-webkit-keyframes mouse-scroll {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-moz-keyframes mouse-scroll {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @-o-keyframes mouse-scroll {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    @keyframes mouse-scroll {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
}
</style>
