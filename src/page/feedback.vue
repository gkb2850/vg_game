<template>
    <div class="feedback_container">
        <deviceOrSet title="反馈"></deviceOrSet>
        <div class="main_cont_box">
            <div class="user_info_box">
                <img src="../assets/images/title_img.jpg" alt="">
                <div class="name">滴滴滴</div>
            </div>
            <textarea class="textarea_txt" placeholder="友善、描述精准的问题，更快得到解答"></textarea>
            <input class="input_txt" type="text" placeholder="请输入你的账号、昵称*">
            <div class="btn_box">
                <button>发布</button>
            </div>
            <div class="lx_about_me">
                <div class="txt">联系我们：</div>
                <a class="txt" href="contact@gamecfg.com">contact@gamecfg.com</a>
            </div>
        </div>
    </div>
</template>

<script>
import deviceOrSet from '@/components/topImgItem.vue'
import {mapMutations} from 'vuex'

export default {
    data () {
        return {

        }
    },
    created() {
        this.checkRoutePath(this.$route.path)
    },
    components: {
        deviceOrSet
    },
    methods: {
        ...mapMutations([
            'checkRoutePath'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>