<template>
    <div class="log-in">
        <v-overlay :absolute="absolute" :value="isLogIn">
            <div class="log-in-logo">
                <img src="@/assets/img/mihoyo_logo_white.png" alt="미호요 로고" />
            </div>
            <div class="log-in-box">
                <v-btn class="close-btn" icon color="black" @click="closeLogIn">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-text-field
                    ref="name"
                    v-model="name"
                    :rules="[() => !!name || '*내용을 입력해주세요.']"
                    :error-messages="errorMessages"
                    label="아이디/이메일"
                    required
                    solo
                ></v-text-field>
                <v-text-field
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    name="input-10-2"
                    label="비밀번호"
                    hint="At least 8 characters"
                    class="input-group--focused"
                    @click:append="showPassword = !showPassword"
                    solo
                ></v-text-field>
                <v-btn block height="48px" style="font-size:18px">로그인</v-btn>
                <v-row class="register-bar" no-gutters justify="center" align="center">
                    <a href="#">문제 발생</a>
                    <v-spacer></v-spacer>
                    <a href="#">회원가입</a>
                </v-row>
                <div class="platform-log-in">
                    <p>또는 소셜 계정으로 로그인</p>
                    <v-row class="platform-icon" no-gutters justify="center" align="center">
                        <v-btn icon color="black" fab style="margin-right:24px">
                            <v-icon x-large>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon color="black" fab>
                            <v-icon x-large>mdi-twitter</v-icon>
                        </v-btn>
                    </v-row>
                </div>
            </div>
        </v-overlay>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'LogIn',
    data() {
        return {
            absolute: false,
            showPassword: false,
            rules: {
                required: (value) => !!value || '*비밀번호를 입력해주세요.',
                min: (v) => v.length >= 8 || '*최소 8글자 이상 입력해주세요.',
                emailMatch: () => `The email and password you entered don't match`,
            },
            name: null,
            errorMessages: '',
        };
    },
    computed: {
        ...mapState(['isLogIn']),
        form() {
            return {
                name: this.name,
            };
        },
    },
    methods: {
        closeLogIn() {
            this.$store.commit('toggleLogIn');
        },
    },
    watch: {
        name() {
            this.errorMessages = '';
        },
    },
};
</script>

<style lang="scss" scoped>
.log-in-logo {
    width: 120px;
    height: 40px;
    margin: 0 auto;
    img {
        width: 100%;
    }
}
.log-in-box {
    position: relative;
    width: 450px;
    height: 440px;
    background-color: #fff;
    padding: 70px 40px;
    border-radius: 4px;
    position: relative;
    margin-top: 24px;
    .close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
    }
    .register-bar {
        margin: 16px 0;
        a {
            text-decoration: none;
            color: #777;
        }
    }
    .platform-log-in {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        p {
            margin-bottom: 10px;
            font-size: 14px;
            color: #aaa;
        }
    }
}
</style>
