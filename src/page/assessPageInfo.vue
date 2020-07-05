<template>
    <div class="assessPageInfo_container">
        <deviceOrSet title="评估测评"></deviceOrSet>
        <div class="main_box">
            <div class="cont_product_box" v-html="assessmentData && assessmentData.assessment">
                <!-- <div class="first_box">
                    <div class="trem_box">
                        <div class="title">Razer DeathAdder V2评估</div>
                        <div class="js_txt">Razer的DeathAdder经过了多次迭代，超出了我们的估计，为什么不呢？它可以说是世界上最著名的游戏鼠标，并且每次发布都保持销量。除非您提供优质的产品，否则您将无法担任该职位，因此当Razer推出其旗舰鼠标的新版本时，我们总是会感到非常兴奋。在我们的审阅者看了一下Razer DeathAdder Elite并享受它之后，仅仅一年多，我们就让他看一下最新的DeathAdder V2。使用改进的电缆，更好的鼠标脚，减轻的重量，新的开关和板载内存，这将是危险。阅读完整的评论以获得完整的判决！</div>
                        <div class="img_box">
                            <img src="../assets/images/title_img.jpg" alt="">
                            <img src="../assets/images/title_img.jpg" alt="">
                        </div>
                    </div>
                    <div class="trem_box">
                        <div class="title">Razer DeathAdder V2评估</div>
                        <div class="js_txt">Razer的DeathAdder经过了多次迭代，超出了我们的估计，为什么不呢？它可以说是世界上最著名的游戏鼠标，并且每次发布都保持销量。除非您提供优质的产品，否则您将无法担任该职位，因此当Razer推出其旗舰鼠标的新版本时，我们总是会感到非常兴奋。在我们的审阅者看了一下Razer DeathAdder Elite并享受它之后，仅仅一年多，我们就让他看一下最新的DeathAdder V2。使用改进的电缆，更好的鼠标脚，减轻的重量，新的开关和板载内存，这将是危险。阅读完整的评论以获得完整的判决！</div>
                        <div class="img_box">
                            <img src="../assets/images/title_img.jpg" alt="">
                            <img src="../assets/images/title_img.jpg" alt="">
                        </div>
                    </div>
                    <div class="trem_box">
                        <div class="title">Razer DeathAdder V2评估</div>
                        <div class="js_txt">Razer的DeathAdder经过了多次迭代，超出了我们的估计，为什么不呢？它可以说是世界上最著名的游戏鼠标，并且每次发布都保持销量。除非您提供优质的产品，否则您将无法担任该职位，因此当Razer推出其旗舰鼠标的新版本时，我们总是会感到非常兴奋。在我们的审阅者看了一下Razer DeathAdder Elite并享受它之后，仅仅一年多，我们就让他看一下最新的DeathAdder V2。使用改进的电缆，更好的鼠标脚，减轻的重量，新的开关和板载内存，这将是危险。阅读完整的评论以获得完整的判决！</div>
                        <div class="img_box">
                            <img src="../assets/images/title_img.jpg" alt="">
                            <img src="../assets/images/title_img.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="second_box">
                    <div class="title">结论与建议</div>
                    <div class="cont_box">
                        <div class="l_box">
                            <div class="txt">例如新电缆，新的脚，更轻的重量和更好的涂层都是对DeathAdder的可靠设计的净改进。 DeathAdder是一款标志性的鼠标，Razer一直在努力跟上最新趋势，因此其旗舰指点设备始终处于其游戏的顶部，使2020版本的DeathAdder成为同类产品中最好的游戏鼠标之一（更大的人体工程学鼠标），对于DeathAdder Elite的拥有者而言确实是一个值得升级的产品。 我个人等不及无线的DeathAdder Ultimate。如果他们设法减轻重量，并提供与此处提供的质量相同的质量，那将是我本年度个人最喜欢的鼠标的有力竞争者，即使一月份还没有结束。</div>
                            <div class="txt">发布受人喜爱的产品的更新版本始终是一项冒险的工作；太多的制造商陷入了这样的陷阱：要么改变太多</div>
                            <div class="txt">他们所做的每项变更几乎都能引起关注，尽管其中一些改进看起来像是横向移动（例如，点击和传感器对大多数用户而言影响不大），例如新电缆，新的脚，更轻的重量和更好的涂层都是对DeathAdder的可靠设计的净改进。 DeathAdder是一款标志性的鼠标，Razer一直在努力跟上最新趋势，因此其旗舰指点设备始终处于其游戏的顶部，使2020版本的DeathAdder成为同类产品中最好的游戏鼠标之一（更大的人体工程学鼠标），对于DeathAdder Elite的拥有者而言确实是一个值得升级的产品。 我个人等不及无线的DeathAdder Ultimate。</div>
                            <div class="txt">发布受人喜爱的产品的更新版本始终是一项冒险的工作</div>
                        </div>
                        <div class="r_box">
                            <img class="pro_img" src="../assets/images/title_img.jpg" alt="">
                            <button class="pay_btn">
                                <img src="../assets/images/ymx_icon.png" alt="">
                                <span>去亚马逊购买</span>
                            </button>
                        </div>
                    </div>
                </div> -->
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
                                        <div class="t_txt">{{item.add_time}}</div>
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
                    <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" @changePage="changePage"></pageItem>
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
import ajaxHttp from '@/api/index'
export default {
    data () {
        return {
            pageNumData:[],
            deviceId: '',
            page: 1,
            limit: 5,
            commentListData: [],
            messageIndex: -1,
            messagePeopleTxt: '',
            messageTxt: '',
            messageTotal: 0,
            assessmentData: ''
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    created () {
        if (this.$route.query.id) {
            this.deviceId = this.$route.query.id
        }
    },
    mounted () {
        this.getDeviceInfo()
        this.getCommentList()
    },
    methods: {
        getDeviceInfo () {
            let data = {
                device_id: this.deviceId
            }
            ajaxHttp.proDeviceInfoFeath(data).then(res => {
                console.log(res)
                this.assessmentData = res.data.info
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getCommentList () {
            let data = {
                type: '2',
                data_id: this.deviceId,
                page: this.pageS,
                limit: this.limitS
            }
            ajaxHttp.commentListFeath(data).then(res => {
                console.log(res)
                this.commentListData = res.data.list
                this.messageTotal = res.data.total
                this.pageNumData = []
                if (res.data.total > 5) {
                    for (let i = 1; i< Math.ceil((res.data.total)/5) + 1;i++){
                        console.log(i)
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toTalkPeople (index) {
            this.messageIndex = index
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
                type: '2',
                data_id: this.deviceId,
                father_id: item.comment_id
            }
            ajaxHttp.submitPeocommenFeath(data).then(res => {
                console.log(res)
                this.$Message.success('回复成功')
                this.getCommentList()
                this.messageIndex = -1
                this.messagePeopleTxt = ''
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
                type: '2',
                data_id: this.deviceId
            }
            ajaxHttp.submitPeocommenFeath(data).then(res => {
                this.$Message.success('发表成功')
                this.getCommentList()
                this.messageTxt = ''
            }).catch(err => {
                this.$Message.error(err.message)
            })
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