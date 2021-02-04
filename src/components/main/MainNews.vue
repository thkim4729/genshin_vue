<template>
    <div class="news">
        <v-row class="news-wrap" no-gutters justify="center" align="center">
            <img src="https://genshin.mihoyo.com/_nuxt/img/29770c4.jpg" />
            <h3>소식</h3>
            <v-row class="news-main" no-gutters justify="center" align="center">
                <div class="news-slide">
                    <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
                        <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
                            <v-row class="fill-height" align="center" justify="center"> </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </div>
                <div class="news-content">
                    <ul class="news_tab_list">
                        <li class="news_tab_item">최신</li>
                    </ul>
                    <ul class="news_list" v-for="(newsList, i) in newsLists" :key="i">
                        <li>
                            <a class="news_item" :href="newsList.link">
                                <p class="news_title">
                                    <!-- {{
                                        isMore
                                            ? newsList.title
                                            : newsList.title.slice(0, 36) + '...'
                                    }} -->
                                    {{ newsList.title }}
                                </p>
                                <v-spacer></v-spacer>
                                <p class="news_date">{{ newsList.date }}</p>
                            </a>
                        </li>
                    </ul>
                    <a href="https://genshin.mihoyo.com/ko/news" class="news_more">더보기</a>
                </div>
            </v-row>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'News',
    data() {
        return {
            isMore: false,
            slides: [
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20210203/2021020311562573939.png',
                },
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20210202/2021020212030855385.png',
                },
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20210127/2021012712103252965.png',
                },
                {
                    src:
                        'https://uploadstatic-sea.mihoyo.com/contentweb/20210125/2021012511571014892.jpg',
                },
            ],
            newsLists: [
                {
                    link: '#',
                    title: '<원신> 데인 여담 - 「소: 항마대성」',
                    date: '2021년 2월 3일',
                },
                {
                    link: '#',
                    title: '1.3 버전 신규 이벤트 알아보기',
                    date: '2021년 2월 3일',
                },
                {
                    link: '#',
                    title: '「복을 부르는 오색」 이벤트 설명',
                    date: '2021년 2월 3일',
                },
                {
                    link: '#',
                    title: '「밤하늘을 수놓은 등불」 1.3 버전 업데이트 상세안내',
                    date: '2021년 2월 3일',
                },
                {
                    link: '#',
                    title: '<원신> 신규 캐릭터 플레이 - 「소(魈): 억겁불제」',
                    date: '2021년 2월 2일',
                },
            ],
        };
    },
};
</script>

<style lang="scss">
.news-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    }
    h3 {
        position: absolute;
        top: 220px;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        font-weight: 400;
        color: #fff;
    }
    h3::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(calc(-100% - 32px), -50%);
        width: 385px;
        height: 14px;
        background: url(('../../assets/img/news_title_pattern.png')) no-repeat right center/cover;
    }
    h3::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(calc(100% + 32px), -50%) rotateY(180deg);
        width: 385px;
        height: 14px;
        background: url(('../../assets/img/news_title_pattern.png')) no-repeat right center/cover;
    }
    .news-main {
        position: absolute;
        width: 1280px;
        min-width: 640px;
        height: 400px;
        margin: 0 auto;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(38, 18, 12, 0.62);
        align-items: flex-start;
        .news-slide,
        .news-content {
            width: 50%;
        }
        .news-slide {
            .v-carousel__controls__item {
                margin: 0 !important;
            }
        }
        .news-content {
            height: 100%;
        }
        .news_tab_list {
            display: flex;
            align-items: flex-start;
            width: 592px;
            margin: 35px auto 0;
            border-bottom: 3px solid rgba(255, 255, 255, 0.1);
            padding-left: 0 !important;
            .news_tab_item {
                color: #ffd49f;
                position: relative;
                padding: 0 19px 12px;
                font-size: 18px;
                text-align: center;
                cursor: pointer;
            }
            .news_tab_item::after {
                position: absolute;
                left: 0;
                bottom: -3px;
                display: block;
                content: '';
                width: 100%;
                height: 3px;
                background: #ffd49f;
            }
        }
        .news_list {
            width: 592px;
            margin: 0 auto;
            padding-left: 0 !important;
            .news_item {
                position: relative;
                display: flex;
                align-items: center;
                width: 100%;
                height: 50px;
                border-bottom: 2px solid rgba(255, 255, 255, 0.08);
                box-sizing: content-box;
                font-size: 16px;
                color: #fff;
                .news_title {
                    margin: 0;
                    padding-left: 11px;
                }
                .news_date {
                    position: absolute;
                    top: 0;
                    right: 11px;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 14px;
                    height: 50px;
                    line-height: 50px;
                }
            }
            .news_item:hover {
                background: rgba(255, 212, 159, 0.06);
            }
        }
        .news_more {
            position: absolute;
            right: 33px;
            bottom: 20px;
            height: 22px;
            line-height: 22px;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.75);
            cursor: pointer;
            padding-left: 38px;
            background: url('../../assets/img/more.png') no-repeat left center/22px;
        }
        .news_more:hover {
            color: rgba(255, 212, 159, 0.75);
            background: url('../../assets/img/more_hover.png') no-repeat left center/22px;
        }
    }
}
</style>
