<template>
    <div class="deviceOrSet_container">
        <deviceOrSet title="CS GO 设备与设置列表"></deviceOrSet>
        <div class="main_box">
            <div class="js_title_box">
                <div class="txt">CS:GO设置和设备列表提供了从鼠标的型号到配置文件等所有数据。我们将在该数据库中尽快更新信息。如果我们有任何错误，请随时反馈给我们。如果您还有其他疑问，也可以参考我们的问答。</div>
            </div>
            <div class="cont_table_box">
                <div class="title_box">
                    <div class="btn" v-for="(item, index) in setTabelTitleData" :key="index">
                        <span>{{item}}</span>
                    </div>
                </div>
                <div class="cont_box">
                    <div class="trem_box" v-for="(item, index) in deviceConfigList" :key="index">
                        <div class="line_box">
                            <img :src="item.img" alt="">
                            <div class="txt">{{item.team}}</div>
                        </div>
                        <div class="line_box">
                            <img :src="item.nation_img" alt="">
                            <div class="txt">{{item.nation}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.name}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.鼠标}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.报告速率}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.DPI}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.游戏内DPI}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.灵敏度}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.开镜灵敏度}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.系统灵敏度}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.原始输入}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.鼠标加速}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.显示器}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.刷新率}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.分辨率}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.宽高比}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.缩放模式}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.显卡}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.键盘}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.耳机}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.鼠标垫}}</div>
                        </div>
                        <div class="line_box">
                            <a href="javascript:;" class="txt">详情</a>
                        </div>
                    </div>
                </div>
                <pageItem v-if="pageNumDataF.length" :pageNumData="pageNumDataF" :limit="limitF" @changePage="changePage"></pageItem>
            </div>
            <div class="comment_message_box" v-if="messageTotal > 0">
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
                <pageItem v-if="pageNumDataS.length" :pageNumData="pageNumDataS" @changePages="changePages" ItemIdex="2"></pageItem>
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
            setTabelTitleData: [
                '战队',
                '选手',
                '角色',
                '鼠标',
                '报告速率',
                'DPI',
                '游戏内DPI',
                '灵敏度',
                '开镜灵敏度',
                '系统灵敏度',
                '原始输入',
                '鼠标加速',
                '显示器',
                '刷新率',
                '分辨率',
                '宽高比',
                '缩放模式',
                '显卡',
                '键盘',
                '耳机',
                '鼠标垫',   
                '详情'
            ],
            pageNumDataF:[],
            pageNumDataS:[],
            deviceConfigList: [],
            limitF: 10,
            limitS: 5,
            pageS: 1,
            pageF: 1,
            messageTotal: 0,
            commentListData: [],
            messageIndex: -1,
            messagePeopleTxt: '',
            messageTxt: ''
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getDeviceConfig()
        this.getCommentList()
    },
    methods: {
        getDeviceConfig () {
            ajaxHttp.deviceConfigListFeath().then(res => {
                console.log(res)
                this.deviceConfigList = res.data.list
                if (res.data.total > 12) {
                    for (let i = 1; i< Math.ceil((res.data.total)/12) + 1; i++) {
                        this.pageNumDataF.push(i)
                    }
                } else {
                    this.pageNumDataF.push(1)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getCommentList () {
            let data = {
                type: '3',
                page: this.pageS,
                limit: this.limitS
            }
            ajaxHttp.commentListFeath(data).then(res => {
                console.log(res)
                this.commentListData = res.data.list
                this.messageTotal = res.data.total
                this.pageNumDataS = []
                if (res.data.total > 5) {
                    for (let i = 1; i< Math.ceil((res.data.total)/5) + 1;i++){
                        console.log(i)
                        this.pageNumDataS.push(i)
                    }
                } else {
                    this.pageNumDataS.push(1)
                }
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
                type: '3',
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
                type: '3'
            }
            ajaxHttp.submitPeocommenFeath(data).then(res => {
                this.$Message.success('发表成功')
                this.getCommentList()
                this.messageTxt = ''
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toTalkPeople (index) {
            this.messageIndex = index
        },
        changePage (e) {
            this.pageF = e
        },
        changePages (e) {
            this.pageS = e
            this.getCommentList()
        }
    }
}
</script>

<style scoped>

</style>