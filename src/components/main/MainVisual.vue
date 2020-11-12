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
                <ul>
                    <a href="">
                        <li><img src="@/assets/ps4.png" alt="플레이스테이션4" /></li>
                    </a>
                    <a href="">
                        <li><img src="@/assets/ios.png" alt="플레이스테이션4" /></li>
                    </a>
                    <a href="">
                        <li><img src="@/assets/android.png" alt="플레이스테이션4" /></li>
                    </a>
                    <a href="">
                        <li><img src="@/assets/windows.png" alt="플레이스테이션4" /></li>
                    </a>
                </ul>
            </v-row>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Visual',
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
        font-size: 36px;
        color: #fff;
        text-align: center;
        text-shadow: 0 0 10px rgba(114, 71, 21, 0.68), 0 0 10px rgba(114, 71, 21, 0.68);
    }
    ul {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
    }
    ul > li {
        width: 20%;
        margin-right: 5%;
    }
    ul > li:last-child {
        margin: 0;
    }
}
</style>
