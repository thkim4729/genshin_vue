<template>
    <div class="appbar-list">
        <v-row class="list-wrap" no-gutters justify="center" align="center">
            <router-link to="/">홈</router-link>
            <a href="#">소식</a>
            <router-link to="/Character" @click="reload">캐릭터</router-link>

            <v-menu open-on-hover offset-y tile min-width="200px">
                <template v-slot:activator="{ on, attrs }">
                    <a href="#" v-bind="attrs" v-on="on"
                        >정보<v-icon dark style="vertical-align:middle">mdi-menu-down</v-icon></a
                    >
                </template>
                <v-list class="info-list" dark>
                    <a :href="item.link" v-for="(item, index) in items" :key="index">
                        <v-list-item class="info-list-item">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </a>
                </v-list>
            </v-menu>

            <a href="https://www.hoyolab.com/genshin/" target="_blank">포럼</a>
            <a href="https://webstatic-sea.mihoyo.com/payment/genshin/index.html#/" target="_blank"
                >상점</a
            >
            <router-link to="/Coupon" @click="reload">쿠폰교환</router-link>
        </v-row>
    </div>
</template>

<script defer>
export default {
    name: 'AppBarList',
    data() {
        return {
            items: [
                { link: '#', title: '컨텐츠' },
                { link: '#', title: '월드' },
                { link: '#', title: '여행기' },
                { link: '#', title: '만화' },
            ],
        };
    },
    methods: {
        reload() {
            setTimeout(() => {
                location.reload(true);
            }, 100);
        },
    },
};
</script>

<style lang="scss">
.appbar-list {
    display: flex;
    justify-content: center;
    align-items: center;
}
.list-wrap {
    min-width: 600px;
    flex-flow: row;
    a {
        display: block;
        width: auto;
        margin: 0 24px;
        font-size: 16px;
        color: #fff;
        line-height: 64px;
        filter: brightness(80%);
        transition: all 0.2s;
    }
    a:hover {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
        filter: none;
    }
}
.info-list {
    background: #272626 !important;
    padding: 0;
    a {
        display: block;
        color: #fff;
        .info-list-item {
            height: 60px;
            padding-left: 20px;
        }
        .info-list-item:hover {
            background: #3b3a3a;
        }
    }
}
</style>
