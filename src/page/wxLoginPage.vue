<template>
    <div class="wxLoginPage_container">
        <deviceOrSet title="返回页面"></deviceOrSet>
        <div>333</div> 
    </div>
</template>

<script>
import deviceOrSet from '@/components/topImgItem.vue'

export default {
    data () {
        return {

        }
    },
    components: {
        deviceOrSet
    },
    created () {
        console.log(this.$route)
    },
    mounted () {
        console.log(this.$route)

    }
}
</script>

<style lang="scss" scoped>
    .wxLoginPage_container {
        height: 60px;
        background: #fff;
    }
</style>