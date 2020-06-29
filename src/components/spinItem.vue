<template>
    <Spin fix>
        <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
        <div>{{spinTxt}}</div>
    </Spin>
</template>

<script>
export default {
    props: {
        spinTxt: {
            type: String,
            default: 'Loading'
        }
    },
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>