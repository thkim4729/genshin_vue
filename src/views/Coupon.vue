<template>
    <div class="coupon">
        <div class="coupon-user">
            <img src="@/assets/img/coupon/star.png" alt="별" />
            <div>thkim4729<span class="coupon-user-btn">[로그아웃]</span></div>
        </div>
        <coupon-main></coupon-main>
    </div>
</template>

<script>
export default {
    name: 'Coupon',
    components: {
        CouponMain: () => import('@/components/coupon/CouponMain.vue'),
    },
};
</script>

<style lang="scss" scoped>
.coupon {
    background-image: url('../assets/img/coupon/bg.jpg');
    padding: 225px 0 116px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.coupon-user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto 12px;
    width: 1080px;
    height: 17px;
    font-size: 16px;
    color: #fff;
    img {
        margin-right: 7px;
        width: 17px;
        height: 17px;
    }
    .coupon-user-btn {
        margin-left: 7px;
        cursor: pointer;
    }
}
</style>
