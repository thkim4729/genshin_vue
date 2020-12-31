<template>
    <div class="city">
        <ul class="city-list" v-for="(city, i) in cities" :key="i">
            <li class="city-list-item">
                <div class="city-list-bg">
                    <img :src="city.bgImg" :alt="city.bgAlt" />
                </div>
                <a :href="city.link">
                    <p>{{ city.text }}</p>
                </a>
                <div class="city-list-char">
                    <img :src="city.charImg" :alt="city.charAlt" />
                </div>
            </li>
        </ul>
        <ul class="city-list">
            <li class="city-list-item">
                <div class="city-list-bg">
                    <img src="@/assets/img/Soon.jpg" alt="기대해주세요" />
                </div>
                <a href="#">
                    <p>기대해주세요</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'City',
    data() {
        return {
            cities: [
                {
                    id: 0,
                    link: '#',
                    bgImg: require('@/assets/img/Mondstadt.jpg'),
                    text: '몬드성',
                    charImg: require('@/assets/img/Jean.png'),
                    bgAlt: '몬드성',
                    charAlt: '진',
                },
                {
                    id: 1,
                    link: '#',
                    bgImg: require('@/assets/img/Liyue.jpg'),
                    text: '리월 항구',
                    charImg: require('@/assets/img/Xiao.png'),
                    bgAlt: '리월 항구',
                    charAlt: '소',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.city {
    width: 100%;
}
.city-list {
    overflow: hidden;
    padding-left: 0 !important;
    .city-list-item {
        position: relative;
        width: 100%;
        height: 260px;
        background: center no-repeat;
        background-size: 100% auto;
        // cursor: pointer;
        overflow: hidden;
        .city-list-bg {
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            transition: transform 0.4s 0s ease-out, -webkit-transform 0.4s 0s ease-out;
            img {
                width: 100%;
                height: 100%;
            }
        }
        a {
            display: inline-block;
            position: relative;
            z-index: 2;
            font-size: 36px;
            color: #fff;
            line-height: 260px;
            width: 100%;
            height: 260px;
            background: url('../../assets/img/city-title-pattern.png') center no-repeat;
            background-size: 132px;
            text-align: center;
            text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
            margin: 0 !important;
            overflow: hidden;
            p::after {
                position: absolute;
                bottom: 91px;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
                display: block;
                content: '';
                width: 210px;
                height: 10px;
                background: url('../../assets/img/city-title-pattern2.png') center no-repeat;
                background-size: 210px 10px;
                opacity: 0;
            }
        }
        .city-list-char {
            overflow: hidden;
            position: absolute;
            z-index: 2;
            top: 0;
            left: 0;
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.2s 0s ease-in;
            border: #fff solid 6px;
            box-sizing: border-box;
            img {
                position: absolute;
                left: 45%;
            }
        }
    }
    .city-list-item::before {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 0;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        transition: all 0.4s;
    }
    .city-list-item:hover::before {
        background: rgba(0, 0, 0, 0.2);
    }
    .city-list-item:hover .city-list-bg {
        transform: scale(1.05);
    }
    .city-list-item:hover p::after,
    .city-list-item:hover a::after,
    .city-list-item:hover .city-list-char {
        opacity: 1;
    }
}
</style>
