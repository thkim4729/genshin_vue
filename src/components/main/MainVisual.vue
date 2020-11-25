<template>
    <div class="visual">
        <v-row class="visual-wrap" no-gutters justify="center" align="center">
            <video
                class="video"
                src="@/assets/video/Genshin.mp4"
                autoplay
                muted
                loop
                poster="@/assets/img/Genshin.jpg"
            />
            <v-row class="guide" no-gutters justify="cetner" align="cetner">
                <p>PS4 /모바일/PC 그랜드 오픈</p>
                <div class="Platform">
                    <div class="Platform-item" v-for="(item, i) in items" :key="i">
                        <a :href="item.href" target="_blank">
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
                {
                    href:
                        'https://store.playstation.com/ko-kr/product/EP6261-CUSA23678_00-OSRELSIEEGENSHIN',
                    img: require('@/assets/img/ps4.png'),
                    alt: '플레이스테이션4',
                },
                {
                    href: 'https://apps.apple.com/kr/app/%EC%9B%90%EC%8B%A0/id1517783697',
                    img: require('@/assets/img/ios.png'),
                    alt: '아이폰',
                },
                {
                    href: 'https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact',
                    img: require('@/assets/img/android.png'),
                    alt: '안드로이드',
                },
                {
                    href:
                        'https://ys-api-os.mihoyo.com/event/download_porter/link/ys_global/genshinimpactpc/default',
                    img: require('@/assets/img/windows.png'),
                    alt: '윈도우',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import '@/components/main/mainCss/MouseScroll.scss';
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
        filter: brightness(95%);
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
</style>
