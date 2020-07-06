<template>
    <div class="deviceOrSet_container">
        <deviceOrSet title="CS GO 数据"></deviceOrSet>
        <div class="main_box">
            <div class="js_title_box">
                <div class="txt">CS:GO设置和设备列表提供了从鼠标的型号到配置文件等所有数据。我们将在该数据库中尽快更新信息。如果我们有任何错误，请随时反馈给我们。如果您还有其他疑问，也可以参考我们的问答。</div>
            </div>
            <div class="cont_table_box">
                <div class="title_box">
                    <a :class="{btn: true, moveActiveTtile: FTLabelIndex === index, active: CTtileIndex === index}" v-for="(item, index) in setTabelTitleData" :key="index" @click="clickFTlabel(index)" @mousemove="firstTitleLabelMove(index)" @mouseleave="firstTitleLabelMove(999)">
                        <span>{{item}}</span>
                        <div class="sort_box" v-if="index < 2">
                            <img class="srot_top" :src="sortStatus === index+1 && sortType === 1 ? ftabelImgActive :ftabelImg" alt="" />
                            <img class="srot_bot" :src="sortStatus === index+1 && sortType === 2 ? stabelImgActive : stabelImg" alt="" />
                        </div>
                    </a>
                </div>
                <div class="cont_box">
                    <div :class="{trem_box: true, moveTabelActive: tableLindeIndex === index}" v-for="(item, index) in deviceConfigList" :key="index" @mousemove="tableLineMove(index)" @mouseleave="tableLineMove(999)">
                        <div class="line_box">
                            <img :src="item.team_logo" alt="">
                            <div class="txt">{{item.team}}</div>
                        </div>
                        <div class="line_box">
                            <img :src="item.nation_img" alt="">
                            <div class="txt">{{item.name}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.role}}</div>
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
                            <a href="javascript:;" class="txt" @click="toSeePlayerInfo(item)">详情</a>
                        </div>
                    </div>
                </div>
                <pageItem v-if="pageNumDataF.length" :pageNumData="pageNumDataF" :limit="limitF" @changePage="changePage"></pageItem>
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
                    <pageItem v-if="pageNumDataS.length" :pageNumData="pageNumDataS" @changePages="changePages" ItemIdex="2" :limit="limitS"></pageItem>
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
import {mapMutations} from 'vuex'
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
            limitF: 12,
            limitS: 5,
            pageS: 1,
            pageF: 1,
            messageTotal: 0,
            commentListData: [],
            messageIndex: -1,
            messagePeopleTxt: '',
            messageTxt: '',
            FTLabelIndex: -1,
            CTtileIndex: -1,
            tableLindeIndex: -1,
            sortStatus: 0,//排序对象
            sortType: 0, //1升序2降序
            ftabelImg: require('../assets/images/top_s_icon.png'),
            ftabelImgActive: require('../assets/images/top_active_icon.png'),
            stabelImg: require('../assets/images/below_s_icon.png'),
            stabelImgActive: require('../assets/images/below_active_icon.png'),
        }
    },
    created() {
        this.checkRoutePath(this.$route.path)
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
            let data = {
                page: this.pageF,
                limit: this.limitF
            }
            ajaxHttp.deviceConfigListFeath(data).then(res => {
                this.deviceConfigList = res.data.list
                this.pageNumDataF = []
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
                this.commentListData = res.data.list
                this.messageTotal = res.data.total
                this.pageNumDataS = []
                if (res.data.total > 5) {
                    for (let i = 1; i< Math.ceil((res.data.total)/5) + 1;i++){
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
            this.getDeviceConfig()
        },
        changePages (e) {
            this.pageS = e
            this.getCommentList()
        },
        toSeePlayerInfo (item) {
            this.$router.push({
                path: '/grameUserInfo',
                query: {
                    id: item.player_id
                }
            })
        },
        firstTitleLabelMove (index) {
            this.FTLabelIndex = index
        },
        clickFTlabel (index) {
            this.CTtileIndex = index
            this.sortType = this.sortType === 0 ? 1 : this.sortType === 1 ? 2 : this.sortType === 2 ? 0 : ''
            this.sortStatus = index + 1
            if (index === 0) {
                this.changeSortFeach(2)
            } else if (index === 1) {
                this.changeSortFeach(1)
            }
        },
        tableLineMove (index) {
            this.tableLindeIndex = index
        },
        changeSortFeach (orderid, order) {
            let data = {
                page: this.pageF,
                limit: this.limitF,
                order_by: this.sortType ? orderid : '',
                order: this.sortType ? this.sortType : ''
            }
            ajaxHttp.deviceConfigListFeath(data).then(res => {
            this.deviceConfigList = res.data.list
            this.pageNumDataF = []
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
        ...mapMutations([
            'checkRoutePath'
        ])
    }
}
</script>

<style scoped>

</style>