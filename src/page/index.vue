<template>
    <div class="index_container">
        <div class="title_box">
            <img class="t_img" src="../assets/images/title_img_index.jpg" alt="">
        </div>
        <div class="top_f_box">
            <div class="item_f_box">
                <div class="title">竞技中最佳的设备与设置</div>
                <div class="cont">
                    <div class="trem_box">
                        <img class="img_bg" src="../assets/images/cf_icon.png" alt="">
                        <div class="inside_box">
                            <img class="samll_img" src="../assets/images/sj_icon_bg.png" alt="">
                            <div class="txt_box">
                                <div class="f_txt">不处于劣势</div>
                                <div class="s_txt">选择职业选手的设置和设备</div>
                            </div>
                        </div>
                    </div>
                    <div class="trem_box">
                        <img class="img_bg" src="../assets/images/cf_icon.png" alt="">
                        <div class="inside_box">
                            <img class="samll_img" src="../assets/images/xd_icon_bg.png" alt="">
                            <div class="txt_box">
                                <div class="f_txt">处理数据</div>
                                <div class="s_txt">获取详细的统计信息，进行深入的分析，提供全面的评测</div>
                            </div>
                        </div>
                    </div>
                    <div class="trem_box">
                        <img class="img_bg" src="../assets/images/cf_icon.png" alt="">
                        <div class="inside_box">
                            <img class="samll_img" src="../assets/images/yx_icon_bg.png" alt="">
                            <div class="txt_box">
                                <div class="f_txt">选择自己喜欢的</div>
                                <div class="s_txt">职业选手用的装备不会差</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item_s_box" v-if="newProListData.length">
                <div class="title">最近更新设备</div>
                <div class="cont">
                    <div :class="{trem_box: true, movelatelyActive: latelyBoxIndex === index ? true : false}" v-for="(item, index) in newProListData" :key="index" @click="seeAssessInfo(item)" @mousemove="seeAssessInfoMove(index)" @mouseleave="seeAssessInfoMove(999)">
                        <img class="order_img" :src="item.img" alt="" :style="{height: imgHeighthotdevice + 'px'}" ref="hotdevicerefbox">
                        <div class="f_txt">{{item.title}}</div>
                        <div class="s_txt">{{item.add_time}}</div>
                    </div>
                </div>
            </div>
            <div class="item_t_box" v-if="playeListData.length">
                <div class="title">最近更新选手</div>
                <div class="cont">
                    <div :class="{trem_box: true, moveplayerActive: playerBoxIndex === index ? true : false}" v-for="(item, index) in playeListData" :key="index" @click="seePlayeInfo(item)" @mousemove="seePlayeInfoMove(index)" @mouseleave="seePlayeInfoMove(999)">
                        <div class="f_txt">{{item.name}}</div>
                        <div class="s_txt">{{item.add_time}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main_f_box">
            <div class="item_f_box">
                <img class="main_f_img" src="../assets/images/title_img.jpg" alt="">
                <div class="main_f_txtbox">
                    <div class="trem_box">
                        <div class="f_txt">共有</div>
                        <div class="s_txt">431</div>
                        <div class="t_txt">名职业选手</div>
                    </div>
                    <div class="trem_box">
                        <div class="f_txt">共有</div>
                        <div class="s_txt">107</div>
                        <div class="t_txt">支战队</div>
                    </div>
                    <div class="trem_box">
                        <div class="f_txt">共有</div>
                        <div class="s_txt">1</div>
                        <div class="t_txt">个游戏</div>
                    </div>
                </div>
            </div>
            <div class="main_s_box">
                <div class="title">CS:GO</div>
                <div class="cont">
                    <div class="l_box">
                        <img src="../assets/images/csgame.jpg" class="l_img" alt="">
                    </div>
                    <div class="r_box">
                        <div class="trem_box">
                            <router-link to="/deviceOrSet" class="title_txt">CS:GO 数据</router-link>
                            <a href="javascript:;" :class="{txt: true, active: lookIndexItem === 0}" @click="toSeeSJInfo" @mousemove="lookItemZNInfo(0)" @mouseleave="lookItemZNInfo(-1)">CS:GO 数据列表</a>
                            <router-link to="/gamePlayer" class="title_txt">CS:GO 选手</router-link>
                            <a href="javascript:;" :class="{txt: true, active: lookIndexItem === 1}" v-if="gameGuideData.player_list && gameGuideData.player_list.length" @click="toSeePeopleInfo(gameGuideData.player_list[0])" @mousemove="lookItemZNInfo(1)" @mouseleave="lookItemZNInfo(-1)">{{gameGuideData.player_list[0].name}}</a>
                        </div>
                        <div class="trem_box" v-if="gamedevice_listF.length">
                            <router-link to="/assessPage" class="title_txt">CS:GO 设备</router-link>
                            <a href="javascript:;" @click="toSeeDeciveInfo(item)" @mousemove="lookItemZNInfo(index + 2)" @mouseleave="lookItemZNInfo(-1)" :class="{txt: true, active: lookIndexItem === index + 2}" v-for="(item, index) in gamedevice_listF" :key="index">{{item.title}}</a>
                        </div>
                        <div class="trem_box" v-if="gamedevice_listS.length">
                            <div class="title_txt"></div>
                            <a href="javascript:;" @click="toSeeDeciveInfo(item)" :class="{txt: true, active: lookIndexItem === index + gamedevice_listF.length + 2}" @mousemove="lookItemZNInfo(index + gamedevice_listF.length + 2)" @mouseleave="lookItemZNInfo(-1)" v-for="(item, index) in gamedevice_listS" :key="index">{{item.title}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_t_box" v-if="playeImgListData.length"> 
                <div class="title">热门 CS:GO 选手</div>
                <div class="cont">
                    <div :class="{trem_box: true, moveholtActive: playerholtBoxIndex === index}" v-for="(item, index) in playeImgListData" :key="index" @click="seePlayeInfo(item)" @mousemove="seePlayeholtMove(index)" @mouseleave="seePlayeholtMove(999)">
                        <img class="top_img_p" :src="item.img" alt="" :style="{height: imgHeighthotsspeople + 'px'}" ref="hotsspeoplerefbox">
                        <div class="js_txt">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="main_ff_box" v-if="holdProListData.length">
                <div class="title">热门 CS:GO 设备</div>
                <div class="cont">
                    <div :class="{trem_box: true, moveholtProActive: proholtBoxIndex === index}" v-for="(item, index) in holdProListData" :key="index" @click="seeAssessInfo(item)" @mousemove="seeProholtMove(index)" @mouseleave="seeProholtMove(999)">
                        <img class="img_product" :src="item.img" alt="" :style="{height: imgHeighthotssdevice + 'px'}" ref="hotssdevicerefbox">
                        <div class="txt">{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="main_fs_box">
                <div class="cont">
                    <div class="txt_box">
                        <div class="tit_box">
                            <div class="t_txt">我们在做什么？</div>
                        </div>
                        <div class="c_box">
                            <div class="js_f_txt">为玩家提供电竞选手的游戏设置和设备，收集职业选手的显示器、鼠标等设置、设备数据并进行分析。</div>
                            <div class="js_s_txt">为CS：GO之类的游戏选择最佳的设备可能有点麻烦，我们可以帮您。如果大量的职业玩家使用某种鼠标，那么对于普通玩家来说也是一个不错的选择。同样，我们认为拥有职业玩家使用的最常见游戏设置数据库可以帮助我们的用户决定如何调整其个人设置。</div>
                            <div class="js_s_txt">因此，我们分析了数百名职业选手，以发现他们使用的设备和调整的设置等之间的共通性。目的是帮助玩家决定应该购买什么设备，或者需要改变哪些设置以获得竞争优势。</div>
                        </div>
                    </div>
                    <div class="txt_box">
                        <div class="tit_box">
                            <div class="t_txt">职业选手都使用赞助的设备吗？</div>
                        </div>
                        <div class="c_box">
                            <div class="js_f_txt">职业战队通常有设备赞助商。在大多数情况下，选手在比赛时仍可以使用自己的鼠标。但仍有一些比赛迫使选手使用赞助商的设备（即使对赞助商提供的鼠标手感差），但这种情况很少。当我们分析职业选手时，将始终考虑他们实际用于比赛的设备，而不是做广告的设备。</div>
                            <div class="js_s_txt">虽然客观上职业玩家使用的所有设备都是不错的选择，但我们还是鼓励您细心了解我们的数据，并在购买新的鼠标、显示器或键盘之前先尝试。</div>
                        </div>
                    </div>
                    <div class="txt_box">
                        <div class="tit_box">
                            <div class="t_txt">数据一直是最新的吗？</div>
                        </div>
                        <div class="c_box">
                            <div class="js_f_txt">职业选手一直在改变他们的设备和设置。即使我们努力确保数据是最新的，仍有可能短时间内过时。如果您发现我们在某些不是最新数据，请随时向我们反馈。我们非常感谢活跃和热情的玩家。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ajaxHttp from '@/api/index.js'
import spinItem from '@/components/spinItem.vue'
import {mapMutations, mapGetters, mapState} from 'vuex'
export default {
    data () {
        return {
            playeListData: [],
            playeImgListData: [],
            newProListData: [],
            holdProListData: [],
            latelyBoxIndex: -1,
            playerBoxIndex: -1,
            playerholtBoxIndex: -1,
            proholtBoxIndex: -1,
            gameGuideData: '',
            gamedevice_listF: [],
            gamedevice_listS: [],
            imgHeighthotdevice: 0,
            imgHeighthotsspeople: 0,
            imgHeighthotssdevice: 0,
            lookIndexItem: -1
        }
    },
    created () {
        this.checkRoutePath(this.$route.path)
    },
    mounted () {
        this.getPlayeList()
        this.getPlayeImgList()
        this.getNewProList()
        this.getHoldProList()
        this.getGameGuideData()
        this.$nextTick(() => {
                if (this.$refs.hotdevicerefbox) {
                    this.imgHeighthotdevice = (this.$refs.hotdevicerefbox[0].offsetWidth) * 3 / 4
                }
                if (this.$refs.hotsspeoplerefbox) {
                    this.imgHeighthotsspeople = (this.$refs.hotsspeoplerefbox[0].offsetWidth) * 4 / 3
                }
                if (this.$refs.hotssdevicerefbox) {
                    this.imgHeighthotssdevice = (this.$refs.hotssdevicerefbox[0].offsetWidth) * 3 / 4
                }
        })
        this.getHFNumFeach()
    },
    methods: {
        getPlayeList() {
            ajaxHttp.indexPlayeFeath().then(res => {
                this.playeListData = res.data.list
            }).catch(err => {
                this.$Message.error(err.message);
            })
        },
        getHFNumFeach () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            let data = {
                token: userInfo ? userInfo.token : '',
                user_id: userInfo ? userInfo.user_id : ''
            }
            ajaxHttp.getReplyNumFeath(data).then(res => {
                this.changeReplyNum(res.data.reply_num)
            }).catch(err => {
                console.log(err)
            })
        },
        getPlayeImgList () {
            ajaxHttp.indexPlayeImgFeath().then(res => {
                this.playeImgListData = res.data.list
                this.$nextTick(() => {
                        if (this.$refs.hotsspeoplerefbox) {
                            this.imgHeighthotsspeople = (this.$refs.hotsspeoplerefbox[0].offsetWidth) * 4 / 3
                        }
                })
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        seeAssessInfoMove (index) {
            this.latelyBoxIndex = index
        },
        seePlayeInfoMove (index) {
            this.playerBoxIndex = index
        },
        seePlayeholtMove (index) {
            this.playerholtBoxIndex = index
        },
        seeProholtMove (index) {
            this.proholtBoxIndex = index
        },
        getNewProList () {
            ajaxHttp.indexgetNewProFeath().then(res => {
                this.newProListData = res.data.list
                this.$nextTick(() => {
                        if (this.$refs.hotdevicerefbox) {
                            this.imgHeighthotdevice = (this.$refs.hotdevicerefbox[0].offsetWidth) * 3 / 4
                        }
                })
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getHoldProList () {
            ajaxHttp.indexgetholdProFeath().then(res => {
                this.holdProListData = res.data.list

                this.$nextTick(() => {
                        if (this.$refs.hotssdevicerefbox) {
                            this.imgHeighthotssdevice = (this.$refs.hotssdevicerefbox[0].offsetWidth) * 3 / 4
                        }
                })

            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        seePlayeInfo (item) {
            this.$router.push({
                path: '/grameUserInfo',
                query: {
                    id: item.player_id
                }
            })
        },
        seeAssessInfo (item) {
            this.$router.push({
                path: '/assessPageInfo',
                query: {
                    id: item.device_id
                }
            })
        },
        toSeeSJInfo () {
            this.$router.push('/deviceOrSet')
        },
        toSeePeopleInfo (item) {
            this.$router.push({
                path: '/grameUserInfo',
                query: {
                    id: item.player_id
                }
            })
        },
        toSeeDeciveInfo (item) {
            this.$router.push({
                path: '/productPageInfo',
                query: {
                    id: item.device_id
                }
            })
        },
        lookItemZNInfo (index) {
            this.lookIndexItem = index
        },
        getGameGuideData () {
            ajaxHttp.gameCuideFeath().then(res => {
                this.gameGuideData = res.data
                if (res.data.device_list && res.data.device_list.length > 2) {
                    res.data.device_list.forEach((i, oi) => {
                        if (oi > 2) {
                            this.$set(this.gamedevice_listS, oi-3, i)
                        } else {
                            this.$set(this.gamedevice_listF, oi, i)
                        }
                    });
                } else {
                    this.gamedevice_listF = res.data.device_list
                    this.gamedevice_listS = []
                } 
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        ...mapMutations([
            'checkRoutePath',
            'changeReplyNum',
            'changeisLogin'
        ]),
    },
    computed: {

    },
    components: {
        spinItem
    }
}
</script>

<style scoped>

</style>