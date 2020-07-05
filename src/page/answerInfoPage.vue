<template>
    <div class="answerInfoPage_container">
        <deviceOrSet title="问答"></deviceOrSet>
        <div class="main_box">
            <div class="question_box_cont">
                <div class="title">{{questionInfoData.title}}</div>
                <div class="c_txt" v-html="questionInfoData.content"></div>
            </div>
            <div class="comment_message_box">
                <div v-if="messageTotal > 0">
                    <div class="title">关于CS GO设备与设置的评论 ({{messageTotal}}条)</div>
                        <div class="cont_box">
                            <div class="trem_box" v-for="(item, index) in commentListData" :key="index">
                                <div class="people_box">
                                    <div class="l_box">
                                        <img class="people_img" :src="item.avatar" alt="">
                                    </div>
                                    <div class="r_box">
                                        <div class="name">
                                            <div>{{item.user_title}}</div>
                                            <div v-if="item.father_id !== 0">回复{{item.parent_user_title}}</div>
                                        </div>
                                        <div class="time_box">
                                            <div class="t_txt">2020年5月23日下午4:19</div>
                                            <a href="javascript:;" @click="toTalkPeople(index)">回复Ta</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="message_box">
                                    <img class="l_icon" src="" alt="">
                                    <!-- <div class="txt_box">{{item.father_id !== 0 ? item.parent_content : item.content}}</div> -->
                                    <div class="txt_box">{{item.content}}</div>
                                </div>
                                <div class="hf_message_box" v-if="messageIndex === index">
                                    <textarea placeholder="请输入你要回复的内容" v-model="messagePeopleTxt"></textarea>
                                    <a href="javascript:;" class="submit_btn" @click="toSubmitToPeople(item)">发表</a>
                                </div>
                            </div>
                        </div>
                        <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" @changePage="changePage" :limit="limit"></pageItem>
                </div>
            </div>
            <div class="submit_messages_box">
                <div class="title">发表评论</div>
                <textarea class="sr_messages" placeholder="请输入你要发表的评论" v-model="messageTxt"></textarea>
                <div class="submit_btn">
                    <a href="javascript:;" @click="toSubmitMessage">提交</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import deviceOrSet from '@/components/topImgItem.vue'
import pageItem from '@/components/pageItem.vue'
import ajaxHttp from '@/api/index.js'
export default {
    data () {
        return {
            pageNumData:[],
            questionId: '',
            page: 1,
            limit: 5,
            messageTxt: '',
            commentListData: [],
            messagePeopleTxt: '',
            messageIndex: -1,
            messageTotal: 0,
            questionInfoData: ''
        }
    },
    created () {
        if (this.$route.query.id) {
            this.questionId = this.$route.query.id
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getCommentList()
        this.getQuestionInfo()
    },
    methods: {
        getQuestionInfo () {
            let data = {
                question_id: this.questionId
            }
            ajaxHttp.questionInfoFeath(data).then(res => {
                console.log(res)
                this.questionInfoData = res.data.info
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getCommentList () {
            let data = {
                type: '5',
                data_id: this.questionId,
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.commentListFeath(data).then(res => {
                this.commentListData = res.data.list
                this.pageNumData = []
                this.messageTotal = res.data.total
                if (res.data.total > 5) {
                    for (let i = 1; i< Math.ceil((res.data.total)/5) + 1;i++){
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
                console.log(this.pageNumData)
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toSubmitMessage () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                content: this.messageTxt,
                type: '5',
                data_id: this.questionId
            }
            ajaxHttp.submitPeocommenFeath(data).then(res => {
                this.$Message.success('发表成功')
                this.getCommentList()
                this.messageTxt = ''
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toSubmitToPeople (item) {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                content: this.messagePeopleTxt,
                type: '5',
                data_id: this.questionId,
                father_id: item.comment_id
            }
            ajaxHttp.submitPeocommenFeath(data).then(res => {
                this.$Message.success('回复成功')
                this.getCommentList()
                this.messageIndex = -1
                this.messagePeopleTxt = ''
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toTalkPeople (index) {
            this.messageIndex = index
        },
        changePage (e) {
            this.page = e
            this.getCommentList()
        }
    }
}
</script>

<style scoped>

</style>