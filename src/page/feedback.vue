<template>
    <div class="feedback_container">
        <deviceOrSet title="反馈"></deviceOrSet>
        <div class="main_cont_box">
            <div class="user_info_box">
                <img :src="userInfoTxt.avatar" alt="">
                <div class="name">{{userInfoTxt.title}}</div>
            </div>
            <textarea class="textarea_txt" placeholder="友善、描述精准的问题，更快得到解答" v-model="submitTxt"></textarea>
            <input class="input_txt" type="text" placeholder="请输入你的账号、昵称*" v-model="name">
            <div class="btn_box">
                <button @click="submitMessage">发布</button>
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
import ajaxHttp from '@/api/index.js'


export default {
    data () {
        return {
            submitTxt: '',
            name: '',
            userInfoTxt: ''
        }
    },
    created() {
        this.checkRoutePath(this.$route.path)
    },
    components: {
        deviceOrSet
    },
    mounted () {
        this.getUserInfoToHttp()
    },
    methods: {
        ...mapMutations([
            'checkRoutePath'
        ]),
        submitMessage () {
            if (this.name === '') {
                this.$Message.error('请输入你的昵称')
                return
            }
            if (this.submitTxt === '') {
                this.$Message.error('请反馈内容')
                return
            }
            let data = {
                name: this.name,
                content: this.submitTxt
            }
            this.$Spin.show();
            ajaxHttp.submitFeedbackFeath(data).then(res => {
                this.$Spin.hide();
                this.$Message.error('反馈成功')
            }).catch(err => {
                this.$Spin.hide();
                this.$Message.error(err.message)
            })
        },
        getUserInfoToHttp () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id
            }
            ajaxHttp.getUserInfoFeath(data).then(res => {
                this.userInfoTxt = res.data.user_info
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
    }
}
</script>

<style lang="scss" scoped>

</style>