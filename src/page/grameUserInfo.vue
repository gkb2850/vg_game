<template>
    <div class="grameUserInfo_container">
        <deviceOrSet title="CS GO 玩家们"></deviceOrSet>
        <div class="main_box">
            <div class="js_title_box">
                <div class="people_box">
                    <img :src="playerInfoData && playerInfoData.info.img" class="img_user" alt="">
                    <div class="cont_box_people">
                        <div class="zd_name_box">
                            <img :src="playerInfoData && playerInfoData.info.nation_img" alt="">
                            <div>{{playerInfoData && playerInfoData.info.name}}</div>
                        </div>
                        <div class="or_txt">又名：{{playerInfoData && playerInfoData.info.nickname}}</div>
                        <div class="zd_name_box">
                            <img :src="playerInfoData && playerInfoData.info.nation_img" alt="">
                            <div>{{playerInfoData && playerInfoData.info.nation}}</div>
                        </div>
                        <div class="xx_txt">{{playerInfoData && playerInfoData.info.introduction}}</div>
                    </div>
                    <div class="bot_box_people">
                        <img src="../assets/images/tt_icon.png" alt="">
                        <img src="../assets/images/sz_icon.png" alt="">
                        <img src="../assets/images/fb_icon.png" alt="">
                        <img src="../assets/images/dx_icon.png" alt="">
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
                        <div class="title">十字线</div>
                        <div class="c_txt">{{playerInfoData.info.crosshair}}</div>
                    </div>
                    <div class="str_info_st" v-if="playerInfoData && playerInfoData.info.view_model">
                        <div class="title">视图模型</div>
                        <div class="c_txt">{{playerInfoData.info.view_model}}</div>
                    </div>
                    <div class="str_info_st" v-if="playerInfoData && playerInfoData.info.cl_bob">
                        <div class="title">CL_BOB</div>
                        <div class="c_txt">{{playerInfoData.info.cl_bob}}</div>
                    </div>
                </div>
            </div>
            <div class="cont_product_box">
                <div class="first_box" v-if="playerInfoData && playerInfoData.device_list.length">
                    <div class="title">他的设备</div>
                    <div class="cont_box">
                        <div class="trem_box" v-for="(item, index) in playerInfoData.device_list" :key="index">
                            <img class="product_img" :src="item.img" alt="">
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
                        <div class="trem_box" v-for="(item, index) in playerInfoData.player_list" :key="index">
                            <img class="people_img" :src="item.img" alt="">
                            <div class="name">{{item.name}}</div>
                        </div>
                    </div>
                </div>
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
                <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" @changePage="changePage"></pageItem>
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
            pageS: 1,
            limitS: 5,
            commentListData: [],
            messageIndex: -1,
            messagePeopleTxt: '',
            messageTxt: '',
            messageTotal: 0
        }
    },
    created () {
        if (this.$route.query.id) {
            this.playerId = this.$route.query.id
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getPlayerInfo()
        this.getCommentList()
    },
    methods: {
        getPlayerInfo () {
            let data = {
                player_id: this.playerId
            }
            ajaxHttp.seePlayerInfoFeath(data).then(res => {
                console.log(res)
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
                console.log(this.setTabelTitleFirst)
            }).catch(err => {
                console.log(err)
                this.$Message.error(err.message)
            })
        },
        getCommentList () {
            let data = {
                type: '1',
                data_id: this.playerId,
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
            let data = {
                token: JSON.parse(localStorage.getItem('userInfo')).token,
                user_id: JSON.parse(localStorage.getItem('userInfo')).user_id,
                content: this.messagePeopleTxt,
                type: '1',
                data_id: this.playerId,
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
            let data = {
                token: JSON.parse(localStorage.getItem('userInfo')).token,
                user_id: JSON.parse(localStorage.getItem('userInfo')).user_id,
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
            this.pageS = e
            this.getCommentList()
        }
    }
}
</script>

<style scoped>

</style>