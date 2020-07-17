<template>
    <div class="grameUserInfo_container">
        <deviceOrSet title="CS:GO 选手"></deviceOrSet>
        <div class="main_box">
            <div class="js_title_box">
                <div class="people_box">
                    <img :src="playerInfoData && playerInfoData.info.img" class="img_user" alt="">
                    <div class="cont_box_people">
                        <div class="zd_name_box">
                            <img :src="playerInfoData && playerInfoData.info.nation_img" alt="">
                            <div>{{playerInfoData && playerInfoData.info.name}}</div>
                        </div>
                        <!-- <div class="or_txt">又名：{{playerInfoData && playerInfoData.info.nickname}}</div> -->
                        <div class="zd_name_box">
                            <img :src="playerInfoData && playerInfoData.info.team_logo" alt="">
                            <div>{{playerInfoData && playerInfoData.info.team}}</div>
                        </div>
                        <div class="xx_txt">{{playerInfoData && playerInfoData.info.introduction}}</div>
                    </div>
                    <div class="bot_box_people" v-if="playerInfoData.live_roome_list && playerInfoData.live_roome_list.length">
                        <div class="img_box">
                            <div v-for="(item, index) in playerInfoData.live_roome_list" :key="index">
                                <a v-if="item.type === 1" :href="item.url" ><img src="../assets/images/tt_icon.png" alt=""></a>
                                <a v-if="item.type === 2" :href="item.url" ><img src="../assets/images/sz_icon.png" alt=""></a>
                                <a v-if="item.type === 3" :href="item.url" ><img src="../assets/images/fb_icon.png" alt=""></a>
                                <a v-if="item.type === 4" :href="item.url" ><img src="../assets/images/dx_icon.png" alt=""></a>
                                </div>
                        </div>
                        <div class="img_box">
                            <div v-for="(item, index) in playerInfoData.live_roome_list" :key="index">
                                <a v-if="item.type ===6" :href="item.url"><img src="../assets/images/blibli_icon.png" alt=""></a>
                                <a v-if="item.type ===8" :href="item.url"><img src="../assets/images/weibo_icon.png" alt=""></a>
                                <a v-if="item.type ===7" :href="item.url"><img src="../assets/images/tuite_icon.png" alt=""></a>
                                <a v-if="item.type ===5" :href="item.url"><img src="../assets/images/shayu_icon.png" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="game_sz_info">
                    <div class="table_info_st">
                        <div class="title">鼠标设置– ZOWIE FK1 + DIVINA EDITION</div>
                        <div class="table_title">
                            <div class="txt" v-for="(item, index) in setTabelTitleFirst.title" :key="index">{{item}}</div>
                        </div>
                        <div class="table_cont_txt">
                            <div class="txt" v-for="(item, index) in setTabelTitleFirst.conttxt" :key="index">{{item}}</div>
                        </div>
                    </div>
                    <div class="table_info_st">
                        <div class="title">显示器设置– BENQ XL2540</div>
                        <div class="table_title">
                            <div class="txt" v-for="(item, index) in setTabelTitleSecond.title" :key="index">{{item}}</div>
                        </div>
                        <div class="table_cont_txt">
                            <div class="txt" v-for="(item, index) in setTabelTitleSecond.conttxt" :key="index">{{item}}</div>
                        </div>
                    </div>
                    <div class="str_info_st" v-if="playerInfoData && playerInfoData.info.crosshair">
                        <div class="title">准星</div>
                        <div class="c_txt">{{playerInfoData.info.crosshair}}</div>
                    </div>
                    <div class="str_info_st" v-if="playerInfoData && playerInfoData.info.view_model">
                        <div class="title">视角</div>
                        <div class="c_txt">{{playerInfoData.info.view_model}}</div>
                    </div>
                    <div class="str_info_st" v-if="playerInfoData && playerInfoData.info.cl_bob">
                        <div class="title">手臂晃动方向与幅度</div>
                        <div class="c_txt">{{playerInfoData.info.cl_bob}}</div>
                    </div>
                    <div class="str_info_st" v-if="playerInfoData && playerInfoData.info.download">
                        <div class="title">
                            <span>下载</span>
                            <a href="javascript:;" @click="toSeeAnswerInfo">cfg文件使用方法</a>
                        </div>
                        <a :href="playerInfoData.info.download" download="gfg" class="download_box">CFG文件</a>
                    </div>
                </div>
            </div>
            <div class="cont_product_box">
                <div class="first_box" v-if="playerInfoData && playerInfoData.device_list.length">
                    <div class="title">他的设备</div>
                    <div class="cont_box">
                        <div :class="{trem_box: true, moveDeviceActive: deviceBoxIndex === index}" v-for="(item, index) in playerInfoData.device_list" :key="index" @click="toSeeDeviceInfo(item)" @mousemove="toSeeDeviceInfoMove(index)" @mouseleave="toSeeDeviceInfoMove(999)">
                            <img class="product_img" :src="item.img" alt="" :style="{height: imgHeight + 'px'}" ref="devicerefbox">
                            <div class="name_box">
                                <div class="line"></div>
                                <div class="txt">{{item.category}}</div>
                                <div class="line"></div>
                            </div>
                            <div class="name_info_box">
                                <span>{{item.title}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second_box" v-if="playerInfoData && playerInfoData.player_list.length">
                    <div class="title">他的队友</div>
                    <div class="cont_box">
                        <div :class="{trem_box: true, movePlayerActive: playerBoxIndex === index}" v-for="(item, index) in playerInfoData.player_list" :key="index" @click="toSeePlayerInfo(item)" @mousemove="toSeePlayerInfoMove(index)" @mouseleave="toSeePlayerInfoMove(999)">
                            <img class="people_img" :src="item.img" alt="" :style="{height: imgHeight + 'px'}" ref="peoplerefbox">
                            <div class="name">{{item.name}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment_message_box">
                <div v-if="messageTotal > 0">
                    <div class="title">关于CS:GO设备与设置的评论 ({{messageTotal}}条)</div>
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
                                <div class="rs_box" @mousemove="jbBtnMove(index)" @mouseleave="jbBtnMove(-1)" v-if="item.report !== 1">
                                    <img :src="bjBtnActive ? jbBtnImgActive : jbBtnImg" alt="">
                                    <a class="btn" href="javascript:;" v-if="bjBtnActive === index" @click="toJBMessages(item)">举报</a>   
                                </div> 
                            </div>
                            <div class="message_box">
                                <img class="l_icon" src="../assets/images/dsj_icon.png" alt="">
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
        <div class="message_mask_box" @mousewheel.prevent v-if="messageBoxJBMaskShow">
            <div class="cont_box">
                <div class="title">确定要举报该评论么？</div>
                <div class="btn_box">
                    <button @click.stop="reportToMessageChange">确定</button>
                    <button @click="tohideMessageBoxJB">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import deviceOrSet from '@/components/topImgItem.vue'
import pageItem from '@/components/pageItem.vue'
import ajaxHttp from '@/api/index.js'
import {mapMutations} from 'vuex'

export default {
    data () {
        return {
            jbBtnImgActive: require('../assets/images/jt_tobot_active_icon.png'),
            jbBtnImg: require('../assets/images/jt_tobot_icon.png'),
            setTabelTitleFirst: {
                title: [],
                conttxt: []
            },
            setTabelTitleSecond: {
                title: [],
                conttxt: []
            },
            pageNumData:[],
            playerId: '',
            playerInfoData: '',
            page: 1,
            limit: 5,
            commentListData: [],
            messageIndex: -1,
            messagePeopleTxt: '',
            messageTxt: '',
            messageTotal: 0,
            deviceBoxIndex: -1,
            playerBoxIndex: -1,
            imgHeight: 0,
            imgHeights: 0,
            questionList:[],
            bjBtnActive: -1,
            userMessageCommentId: '',
            messageBoxJBMaskShow: false
        }
    },
    created () {
        if (this.$route.query.id) {
            this.playerId = this.$route.query.id
        }
        this.checkRoutePath(this.$route.path)
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getPlayerInfo()
        this.getCommentList()
        this.getQuestionList()
    },
    methods: {
        getPlayerInfo () {
            let data = {
                player_id: this.playerId
            }
            ajaxHttp.seePlayerInfoFeath(data).then(res => {
                this.playerInfoData = res.data
                res.data.mouse
                let firstTitleF = []
                let firstTitleS = []
                for (let i in res.data.info.mouse) {
                    firstTitleF.push(i)
                    firstTitleS.push(res.data.info.mouse[i])
                }
                this.setTabelTitleFirst.title = firstTitleF
                this.setTabelTitleFirst.conttxt = firstTitleS
                let secondTitleF = []
                let secondTitleS = []
                for (let i in res.data.info.keyboard) {
                    secondTitleF.push(i)
                    secondTitleS.push(res.data.info.keyboard[i])
                }
                this.setTabelTitleSecond.title = secondTitleF
                this.setTabelTitleSecond.conttxt = secondTitleS
                this.$nextTick(() => {
                        if (this.$refs.devicerefbox) {
                            this.imgHeight = (this.$refs.devicerefbox[0].offsetWidth) * 3 / 4
                        }
                        if (this.$refs.peoplerefbox) {
                            this.imgHeights = (this.$refs.peoplerefbox[0].offsetWidth) * 4 / 3
                        }
                })
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getCommentList () {
            let data = {
                type: '1',
                data_id: this.playerId,
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.commentListFeath(data).then(res => {
                this.commentListData = res.data.list
                this.messageTotal = res.data.total
                this.pageNumData = []
                if (res.data.total > 5) {
                    for (let i = 1; i< Math.ceil((res.data.total)/5) + 1;i++){
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
                this.changeisLogin(false)
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                content: this.messagePeopleTxt,
                type: '1',
                data_id: this.playerId,
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
                this.changeisLogin(false)
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                content: this.messageTxt,
                type: '1',
                data_id: this.playerId
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
            if (this.page === e) {
                return
            }
            this.pageS = e
            this.getCommentList()
        },
        toSeePlayerInfo (item) {
            this.playerId = item.player_id
            this.getPlayerInfo()
            this.commentListData()
        },
        toSeeDeviceInfo (item) {
            this.$router.push({
                path: '/assessPageInfo',
                query: {
                    id: item.device_id
                }
            })
        },
        toSeePlayerInfoMove (index) {
            this.playerBoxIndex = index
        },
        toSeeDeviceInfoMove (index) {
            this.deviceBoxIndex = index
        },
        ...mapMutations([
            'checkRoutePath',
            'changeisLogin'
        ]),
        toSeeAnswerInfo () {
            if (this.questionList.length) {
                this.$router.push({
                    path: '/answerInfoPage',
                    query: {
                        id: this.questionList[0].id
                    }
                })
            }
            
        },
        getQuestionList () {
            let data = {
                page: 1,
                limit: 10
            }
            ajaxHttp.questionListFeath(data).then(res => {
                this.questionList = res.data.list
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        jbBtnMove (index) {
            this.bjBtnActive = index
        },
        toJBMessages (item) {
            this.userMessageCommentId = item.comment_id
            this.messageBoxJBMaskShow = true
        },
        reportToMessageChange () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.changeisLogin(false)
                this.$router.push('/index')
                return
            }
            this.messageBoxJBMaskShow = false
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                comment_id: this.userMessageCommentId
            }
            ajaxHttp.reportMessageFeath(data).then(res => {
                this.$Message.error('举报成功')
                this.getCommentList()
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        tohideMessageBoxJB () {
            this.messageBoxJBMaskShow = false
        },
    }
}
</script>

<style scoped>

</style>