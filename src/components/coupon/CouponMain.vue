<template>
    <div class="coupon-main">
        <div class="coupon-form">
            <div class="form-title">코드 리딤</div>
            <div class="form-field">
                <div class="form-label-box">
                    <div class="region form-label">서버</div>
                </div>
                <div class="form-input-box">
                    <v-select
                        :items="items"
                        label="서버를 선택해주세요"
                        solo
                        dense
                        flat
                        outlined
                        style="width:360px"
                        :menu-props="{ bottom: true, offsetY: true }"
                    ></v-select>
                </div>
            </div>
            <div class="form-field">
                <div class="form-label-box">
                    <div class="region form-label">닉네임</div>
                </div>
                <div class="form-input-box">
                    <v-select
                        disabled
                        label="캐릭터 닉네임 자동 불러오기"
                        dense
                        flat
                        outlined
                        style="width:360px"
                        :menu-props="{ bottom: true, offsetY: true }"
                    ></v-select>
                </div>
            </div>
            <div class="form-field">
                <div class="form-label-box">
                    <div class="region form-label">리딤코드</div>
                </div>
                <div class="form-input-box">
                    <v-text-field
                        label="리딤코드를 입력해 주세요"
                        solo
                        dense
                        flat
                        outlined
                        style="width:360px"
                    ></v-text-field>
                </div>
            </div>
            <v-btn class="form-btn" x-large dark>리딤 확인</v-btn>
        </div>
        <div class="coupon-info">
            <div class="info-title">코드 리딤 설명</div>
            <div class="info-text">
                <p>
                    1. 코드 리딤 전에 계정에 로그인하여 게임 캐릭터 생성 여부를 확인해 주세요.
                    그리고 유저 센터에서 미호요 통행증을 연동해 주세요. 해당 설정이 되어있지 않을
                    경우 교환할 수 없습니다.<br /><br />
                    2. 리딤코드 교환 성공 시 시스템에서 우편 형식으로 보상을 발송해 드립니다.<br /><br />
                    3. 리딤코드의 사용 조건과 리딤 기한에 주의해 주세요. 기한 초과 시 교환할 수
                    없습니다.<br /><br />
                    4. 같은 리딤코드는 1번만 사용 가능하며, 동일한 캐릭터는 같은 유형의 리딤코드를
                    중복 사용할 수 없습니다.<br /><br />
                    5. 리딤코드 교환 후 철회할 수 없습니다. 로그인되어 있는 계정이 맞는 계정인지
                    꼼꼼하게 확인해 주세요.<br /><br />
                    6. 리딤 도중 문제 발생 시 고객센터로 문의해 주세요.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CouponForm',
    data() {
        return { items: ['America', 'Europe', 'Asia', 'TW, HK, MO'] };
    },
};
</script>

<style lang="scss" scoped>
.coupon-main {
    display: flex;
    align-items: stretch;
    padding: 70px 35px;
    margin: 0 auto;
    width: 1080px;
    height: 490px;
    background: url('../../assets/img/coupon/box.png') center/cover no-repeat;
    background-size: cover;
    background-position: center;
}
.coupon-form {
    width: 584px;
    .form-title {
        margin-bottom: 34px;
        text-align: center;
        line-height: 25px;
        font-size: 24px;
        font-weight: bold;
        color: #4e4d4b;
    }
    .form-field {
        display: flex;
        align-items: flex-start;
        .form-label-box {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            min-height: 38px;
            .region {
                flex-shrink: 0;
                padding-right: 15px;
                width: 145px;
                text-align: right;
                line-height: 19px;
                font-size: 18px;
                color: #373534;
            }
        }
    }
    .form-btn {
        width: 360px;
        margin: 16px 0 0 145px;
        font-size: 24px;
    }
}
.form-label::before {
    content: '*';
    margin-right: 4px;
    color: #ff2800;
    vertical-align: top;
}
.coupon-info {
    position: relative;
    padding-left: 60px;
    width: 426px;
    color: #4e4d4b;
    background: url('../../assets/img/coupon/border.png') top left/10px 350px no-repeat;
    .info-title {
        margin-bottom: 34px;
        text-align: center;
        line-height: 25px;
        font-size: 24px;
        font-weight: bold;
    }
    .info-text {
        padding-right: 24px;
        height: 250px;
        font-size: 16px;
        line-height: 24px;
        overflow-y: auto;
    }
    .info-text::before {
        content: '';
        position: absolute;
        right: 24px;
        bottom: -10px;
        left: 60px;
        z-index: 1;
        height: 40px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0,
            rgba(243, 240, 236, 0.5) 20px
        );
    }
    .info-text::after {
        content: '';
        display: block;
        height: 25px;
    }
}
</style>
