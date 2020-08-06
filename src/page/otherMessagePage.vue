<template>
    <div class="otherMessagePage_container">
        <deviceOrSet :title="typeTxt"></deviceOrSet>
        <div class="main_box">
            <div class="cont_txt">敬请关注</div>
        </div>
    </div>
</template>

<script>
import deviceOrSet from "@/components/topImgItem.vue";
import ajaxHttp from "@/api/index";
import {mapMutations, mapGetters} from 'vuex'

export default {
    data() {
        return {
            deviceInfoData: "",
            typeTxt: 'CS:GO最佳设备'
        };
    },
    created() {
        console.log(this.$route.query.type)
        if (this.$route.query.type) {
            if (this.$route.query.type === 'zj') {
                this.typeTxt = 'CS:GO最佳设备'
            } else if (this.$route.query.type === 'pz') {
                 this.typeTxt = '设备评测'
            }
        }
    },
    components: {
        deviceOrSet
    },
    mounted() {

    },
    methods: {

    },
    computed: {

    },
    watch: {

    },
};
</script>

<style scoped lang='scss'>
    .otherMessagePage_container {
        .main_box {
            .cont_txt {
                padding: 60px;
                text-align: center;
                height: 60px;
                line-height: 60px;
                font-size: 32px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: #4D3662;
                box-sizing: content-box;
            }
        }
    }
</style>