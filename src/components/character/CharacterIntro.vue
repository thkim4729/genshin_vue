<template>
    <div class="character-intro">
        <div class="character-visual">
            <agile
                class="character-visual-list"
                ref="main"
                :options="options1"
                :as-nav-for="asNavFor1"
            >
                <div
                    class="character-visual-item"
                    v-for="(char, index) in charsMondstadt"
                    :key="index"
                    :class="`char--${index}`"
                >
                    <img class="character-person" :src="char.img" />
                    <img class="character-icon" :src="char.icon" />
                    <div class="character-info">
                        <div class="info-name">
                            <p>{{ char.name }}</p>
                        </div>
                        <div class="info-cv" v-show="!switchName" @click="isSwitchName">
                            <div class="cv-name">
                                <div>
                                    <p>CV: {{ char.cvKor }}</p>
                                </div>
                            </div>
                            <div class="voice"></div>
                            <div class="cv-switch">
                                <div class="switch-inner">
                                    <div class="switch-text">한</div>
                                    <div class="switch-circle"></div>
                                </div>
                            </div>
                        </div>
                        <div class="info-cv" v-show="switchName" @click="isSwitchName">
                            <div class="cv-name">
                                <div>
                                    <p>CV: {{ char.cvJpn }}</p>
                                </div>
                            </div>
                            <div class="voice"></div>
                            <div class="cv-switch">
                                <div class="switch-inner">
                                    <div class="switch-circle"></div>
                                    <div class="switch-text">일</div>
                                </div>
                            </div>
                        </div>

                        <div class="info-text">
                            <div class="info-text-box">
                                <div v-html="'<p>' + char.info + '</p>'"></div>
                            </div>
                        </div>
                    </div>
                    <img class="character-word" :src="char.word" />
                </div>
            </agile>
        </div>
        <div class="character-page">
            <div class="character-page-container">
                <agile
                    class="thumbnails character-page-list"
                    ref="thumbnails"
                    :options="options2"
                    :as-nav-for="asNavFor2"
                >
                    <div
                        class="character-page-item"
                        v-for="(char, index) in charsMondstadt"
                        :key="index"
                        :class="`char--${index}`"
                        @click="$refs.thumbnails.goTo(index)"
                    >
                        <img :src="char.thumb" />
                        <p>{{ char.name }}</p>
                    </div>
                    <template class="prevButton" slot="prevButton"></template>
                    <template class="nextButton" slot="nextButton"></template>
                </agile>
            </div>
        </div>
    </div>
</template>

<script defer>
import { VueAgile } from 'vue-agile';
export default {
    name: 'CharMain',
    components: {
        agile: VueAgile,
    },
    props: ['charsMondstadt'],
    data() {
        return {
            switchName: false,
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
    methods: {
        isSwitchName() {
            this.switchName = !this.switchName;
        },
    },
    mounted() {
        this.asNavFor1.push(this.$refs.thumbnails);
        this.asNavFor2.push(this.$refs.main);
    },
};
</script>

<style lang="scss">
@import '@/components/character/characterCss/CharacterVisual.scss';
@import '@/components/character/characterCss/CharacterPage.scss';
ul,
li {
    list-style: none;
}
.character-intro {
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('https://genshin.mihoyo.com/_nuxt/img/6c9d197.png') no-repeat;
    background-position: center bottom;
    background-size: auto 100vh;
}

.agile__list {
    height: 100%;
    .agile__track {
        height: 100%;
    }
}
.agile__nav-button {
    width: 45px;
    height: 64px;
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

.thumbnails .agile__nav-button--prev,
.prevButton {
    left: -45px;
    background: url('../../assets/img/character/prev.png');
    background-size: contain;
}

.thumbnails .agile__nav-button--next,
.nextButton {
    right: -45px;
    background: url('../../assets/img/character/next.png');
    background-size: contain;
}
</style>
