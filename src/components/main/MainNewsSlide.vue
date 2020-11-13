<template>
    <div class="news-slide">
        <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
                <v-row class="fill-height" align="center" justify="center"></v-row>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script>
export default {
    name: 'MainNewsSlide',
    date() {
        return {
            slides: [
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20201108/2020110811325362131.png',
                },
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20201111/2020111111125298653.png',
                },
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20201110/2020111012002678874.png',
                },
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20201107/2020110721543412021.png',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.news-slide {
    width: 50%;
    .v-carousel__controls__item {
        margin: 0 !important;
    }
}
</style>
