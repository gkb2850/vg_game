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
            <div class="comment_message_box">
                <div class="title">关于CS GO设备与设置的评论 (1233条)</div>
                <div class="cont_box">
                    <div class="trem_box">
                        <div class="people_box">
                            <div class="l_box">
                                <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                            </div>
                            <div class="r_box">
                                <div class="name">露娜的冬瓜</div>
                                <div class="time_box">
                                    <div class="t_txt">2020年5月23日下午4:19</div>
                                    <a href="javascript:;">回复Ta</a>
                                </div>
                            </div>
                        </div>
                        <div class="message_box">
                            <img class="l_icon" src="" alt="">
                            <div class="txt_box">在徐州人家小区，发现白云南区9号楼2单元门前停放一辆电动自行车，从该楼高层甩下来一根黄色电线，正在充电</div>
                        </div>
                    </div>
                </div>
                <pageItem :pageNumData="pageNumData"></pageItem>
            </div>
            <div class="submit_messages_box">
                <div class="title">发表评论</div>
                <textarea class="sr_messages" placeholder="请输入你要发表的评论"></textarea>
                <div class="submit_btn">
                    <button>提交</button>
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
            pageNumData:['','','','','','','','',''],
            playerId: '',
            playerInfoData: ''
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
    }
}
</script>

<style scoped>

</style>