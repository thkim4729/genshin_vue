<template>
    <div class="footer">
        <v-card dark flat tile class="footer-inner">
            <v-row
                class="footer-top"
                style="padding:5px"
                justify="center"
                align="center"
                no-gutters
            >
                <v-btn
                    large
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-2 icon"
                    icon
                    :ripple="false"
                    id="no-background-hover"
                >
                    <v-icon size="32px">
                        {{ icon }}
                    </v-icon>
                </v-btn>
                <v-spacer></v-spacer>

                <v-menu top :offset-y="true">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            large
                            text
                            :ripple="false"
                            id="no-background-hover"
                            class="icon"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon size="24px" class="mx-4">mdi-earth</v-icon>
                            한국어
                            <v-icon size="24px" class="ml-4">mdi-menu-down</v-icon>
                        </v-btn>
                    </template>

                    <v-list class="lang-list">
                        <v-list-item v-for="(item, index) in items" :key="index">
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-row>

            <v-divider></v-divider>

            <v-row class="footer-bottom" justify="center" align="center" no-gutters>
                <v-row class="footer-left" align="center" no-gutters>
                    <div class="mihoyo-logo">
                        <img
                            src="https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/mihoyo_1586770772_9709.png"
                            alt="미호요로고"
                        />
                    </div>
                    <div class="genshin-logo">
                        <img
                            src="https://uploadstatic-sea.mihoyo.com/hk4e/upload/officialsites/202004/GIKR_1587984241_9146.png"
                            alt="원신로고"
                        />
                    </div>
                </v-row>
                <v-row class="footer-right" align="center" no-gutters>
                    <div class="content-links">
                        <a href="#">개인정보 처리방침</a>
                        <a href="#">이용약관</a>
                        <a href="#">개인정보 수집 및 이용 동의</a>
                        <a href="#">고객센터</a>
                    </div>
                    <div class="copyright">
                        Copyright© 2012-2020 miHoYo ALL RIGHTS RESERVED
                    </div>
                    <div class="content-info">
                        "PlayStation Family Mark" and "PS4 logo" are registered trademarks or<br />
                        trademarks of Sony Interactive Entertainment Inc.
                    </div>
                    <div class="content-icon">
                        <img
                            src="https://webstatic-sea.mihoyo.com/upload/event/2020/12/07/1c815dcb772be24409961e7d94e729c9_3752895997708255975.png"
                            alt="게임 등급"
                        />
                    </div>
                </v-row>
            </v-row>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-youtube',
                'mdi-instagram',
                'mdi-alpha-n-circle',
                'mdi-discord',
                'mdi-reddit',
            ],
            items: [
                { title: '한국어' },
                { title: '日本語' },
                { title: '简体中文' },
                { title: '繁體中文' },
                { title: 'English' },
                { title: 'Deutsch' },
                { title: 'Español' },
                { title: 'Français' },
                { title: 'Português' },
                { title: 'Русский' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.footer {
    background: #1e1e1e;
}
.footer-inner {
    max-width: 1300px;
    margin: 0 auto;
}
#no-background-hover::before {
    background-color: transparent !important;
}
.footer-top {
    // width: 100%;
    .icon {
        filter: brightness(50%);
        transition: all 0.2s;
        font-size: 16px;
    }
    .icon:hover {
        filter: none;
    }
}
.lang-list {
}
.footer-bottom {
    // width: 1200px;
    padding: 20px 0;
}
.footer-bottom > .footer-left,
.footer-right {
    width: 50%;
    padding: 0 20px;
}
.footer-left {
    justify-content: center;
    .mihoyo-logo {
        padding: 0 30px;
    }
    .genshin-logo {
        position: relative;
    }
}
.genshin-logo::after {
    position: absolute;
    content: '';
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    background-color: #bfbfbf;
    width: 1px;
    height: 60px;
}
.footer-right {
    justify-content: center;
    .content-links {
        a {
            font-size: 14px;
            color: #999;
            padding: 0 10px;
            border-right: 1px solid #999;
            transition: all 0.2s;
        }
        a:first-child {
            padding-left: 0 !important;
        }
        a:last-child {
            border: 0;
        }
        a:hover {
            color: white;
        }
    }
    .content-info {
        font-size: 14px;
        color: #999;
        text-align: left;
    }
}
.footer-right > div {
    margin: 10px 0;
}
</style>
