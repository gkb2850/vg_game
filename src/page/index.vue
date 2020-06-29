<template>
    <div class="index_container">
        <div class="title_box">
            <img class="t_img" src="../assets/images/title_img.jpg" alt="">
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
                                <div class="f_txt">不要处于劣势</div>
                                <div class="s_txt">研究专业游戏玩家设置</div>
                            </div>
                        </div>
                    </div>
                    <div class="trem_box">
                        <img class="img_bg" src="../assets/images/cf_icon.png" alt="">
                        <div class="inside_box">
                            <img class="samll_img" src="../assets/images/xd_icon_bg.png" alt="">
                            <div class="txt_box">
                                <div class="f_txt">处理数据</div>
                                <div class="s_txt">获取详细的统计信息，详尽的指南，深入的分析和全面的评论33333333</div>
                            </div>
                        </div>
                    </div>
                    <div class="trem_box">
                        <img class="img_bg" src="../assets/images/cf_icon.png" alt="">
                        <div class="inside_box">
                            <img class="samll_img" src="../assets/images/yx_icon_bg.png" alt="">
                            <div class="txt_box">
                                <div class="f_txt">选择自己喜欢的</div>
                                <div class="s_txt">可以跟随专业人士的选择</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item_s_box">
                <div class="title">最近更新设备</div>
                <div class="cont">
                    <div class="trem_box" v-for="(item, index) in newProListData" :key="index" @click="seeAssessInfo(item)">
                        <img class="order_img" :src="item.img" alt="">
                        <div class="f_txt">{{item.title}}</div>
                        <div class="s_txt">{{item.add_time}}</div>
                    </div>
                </div>
            </div>
            <div class="item_t_box">
                <div class="title">最近更新选手</div>
                <div class="cont">
                    <div class="trem_box" v-for="(item, index) in playeListData" :key="index" @click="seePlayeInfo(item)">
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
                        <div class="f_txt">分析了</div>
                        <div class="s_txt">2888</div>
                        <div class="t_txt">职业玩家</div>
                    </div>
                    <div class="trem_box">
                        <div class="f_txt">共有</div>
                        <div class="s_txt">2000</div>
                        <div class="t_txt">队伍</div>
                    </div>
                    <div class="trem_box">
                        <div class="f_txt">共有</div>
                        <div class="s_txt">80</div>
                        <div class="t_txt">游戏类型</div>
                    </div>
                </div>
            </div>
            <div class="main_s_box">
                <div class="title">CS GO</div>
                <div class="cont">
                    <div class="l_box">
                        <img src="../assets/images/title_img.jpg" class="l_img" alt="">
                    </div>
                    <div class="r_box">
                        <div class="trem_box">
                            <div class="title_txt">GS GO 设置指南</div>
                            <div class="txt active">GS GO 设置和装备列表</div>
                            <div class="txt">GS GO 最佳设置指南</div>
                            <div class="txt">GS GO 设置和装备列表</div>
                            <div class="txt">GS GO 设置和装备列表</div>
                            <div class="txt">GS GO 设置和装备列表</div>
                        </div>
                        <div class="trem_box">
                            <div class="title_txt">GS GO 硬件指南</div>
                            <div class="txt">GS GO PC指南</div>
                            <div class="txt">GS GO CPU指南</div>
                            <div class="txt">GS GO 设置指南</div>
                            <div class="txt">GS GO 设置和装备列表</div>
                            <div class="txt">GS GO 设置和装备列表</div>
                        </div>
                        <div class="trem_box">
                            <div class="title_txt">GS GO 装备</div>
                            <div class="txt">GS GO 鼠标指南</div>
                            <div class="txt">GS GO 键盘指南</div>
                            <div class="txt">GS GO 鼠标垫指南</div>
                            <div class="txt">GS GO 显示器指南</div>
                            <div class="txt">GS GO 耳机指南</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_t_box"> 
                <div class="title">热门CS GO 队员</div>
                <div class="cont">
                    <div class="trem_box" v-for="(item, index) in playeImgListData" :key="index" @click="seePlayeInfo(item)">
                        <img class="top_img_p" :src="item.img" alt="">
                        <div class="js_txt">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="main_ff_box">
                <div class="title">热门CS GO设备</div>
                <div class="cont">
                    <div class="trem_box" v-for="(item, index) in holdProListData" :key="index" @click="seeAssessInfo(item)">
                        <img class="img_product" :src="item.img" alt="">
                        <div class="txt">{{item.title}}</div>
                    </div>
                </div>
            </div>
            <div class="main_fs_box">
                <div class="title">常见问题</div>
                <div class="cont">
                    <div class="txt_box">
                        <div class="tit_box">
                            <div class="t_txt">很多职业玩家都使用赞助设备，对吗?</div>
                        </div>
                        <div class="c_box">
                            <div class="js_f_txt">专业团队通常有装备赞助商。但是，在大多数情况下，玩家在比赛时仍可以使用自己的个人鼠标选择。仍然有玩家被迫使用赞助商装备的情况（例如，即使他们对赞助商必须提供的鼠标形状感到不舒服），但我们感到这种情况越来越少。当我们分析专业人士时，我们将始终考虑他们实际用于竞争的装备，而不是支付给他们做广告的装备。</div>
                            <div class="js_s_txt">我们会尝试为您提供一个有趣的新角度，供您在购买下一个游戏外设时考虑，虽然职业玩家使用的几乎所有装备客观上都是一件很好的装备，但我们还是鼓励您细心研究我们的装备结果盐，并在购买新的鼠标，显示器或键盘之前始终进行自己的研究。</div>
                        </div>
                    </div>
                    <div class="txt_box">
                        <div class="tit_box">
                            <div class="t_txt">很多职业玩家都使用赞助设备，对吗?</div>
                        </div>
                        <div class="c_box">
                            <div class="js_f_txt">专业团队通常有装备赞助商。但是，在大多数情况下，玩家在比赛时仍可以使用自己的个人鼠标选择。仍然有玩家被迫使用赞助商装备的情况（例如，即使他们对赞助商必须提供的鼠标形状感到不舒服），但我们感到这种情况越来越少。当我们分析专业人士时，我们将始终考虑他们实际用于竞争的装备，而不是支付给他们做广告的装备。</div>
                            <div class="js_s_txt">我们会尝试为您提供一个有趣的新角度，供您在购买下一个游戏外设时考虑，虽然职业玩家使用的几乎所有装备客观上都是一件很好的装备，但我们还是鼓励您细心研究我们的装备结果盐，并在购买新的鼠标，显示器或键盘之前始终进行自己的研究。</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="register_box" v-if="false">
            <div class="mask_bg"></div>
            <div class="cont_box">
                <div class="title_box">
                    <div class="txt">注册</div>
                    <div class="del_btn">
                        <img src="../assets/images/del_icon.png" alt="">
                    </div>
                </div>
                <div class="phone_box">
                    <div class="h_txt">中国 +86</div>
                    <div class="line"></div>
                    <input type="number" placeholder="手机号" class="input_txt">
                </div>
                <div class="item_box">
                    <input type="text" placeholder="请输入6位短信验证码" class="input_txt">
                    <button>获取短信验证码</button>
                </div>
                <div class="item_box">
                    <input type="text" placeholder="8-20位密码" class="input_txt">
                </div>
                <div class="submit_btn">注册</div>
            </div>
        </div>
        <div class="login_box" v-if="false">
            <div class="mask_bg"></div>
            <div class="cont_box">
                <div class="title_box">
                    <div class="item_box">
                        <div class="txt">免密码登录</div>
                        <div class="line"></div>
                    </div>
                    <div class="item_box">
                        <div class="txt active">密码登录</div>
                        <div class="line"></div>
                    </div>
                    <div class="del_btn">
                        <img src="../assets/images/del_icon.png" alt="">
                    </div>
                </div>
                <div class="c_box" v-if="false">
                    <div class="c_trem_box">
                        <input type="number" placeholder="手机号" class="input_txt">
                    </div>
                    <div class="c_trem_box">
                        <input type="text" placeholder="密码" class="input_txt">
                    </div>
                </div>
                <div class="c_box">
                    <div class="phone_box">
                        <div class="h_txt">中国 +86</div>
                        <div class="line"></div>
                        <input type="number" placeholder="手机号" class="input_txt">
                    </div>
                    <div class="item_box">
                        <input type="text" placeholder="请输入6位短信验证码" class="input_txt">
                        <button>获取短信验证码</button>
                    </div>
                    <div class="other_item">
                        <div class="txt">社交账号登录</div>
                        <div class="wx_box">
                            <img src="../assets/images/wx_icon.png" alt="">
                            <div>微信</div>
                        </div>
                        <div class="txt">注册账号</div>
                    </div>
                </div>
                <div class="submit_btn">登陆</div>
            </div>
        </div>
    </div>
</template>

<script>
import ajaxHttp from '@/api/index.js'
import spinItem from '@/components/spinItem.vue'
export default {
    data () {
        return {
            playeListData: [],
            playeImgListData: [],
            newProListData: [],
            holdProListData: []
        }
    },
    mounted () {
        this.getPlayeList()
        this.getPlayeImgList()
        this.getNewProList()
        this.getHoldProList()
    },
    methods: {
        getPlayeList() {
            ajaxHttp.indexPlayeFeath().then(res => {
                console.log(res)
                this.playeListData = res.data.list
            }).catch(err => {
                console.log(err)
                this.$Message.error(err.message);
            })
        },
        getPlayeImgList () {
            ajaxHttp.indexPlayeImgFeath().then(res => {
                this.playeImgListData = res.data.list
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getNewProList () {
            ajaxHttp.indexgetNewProFeath().then(res => {
                this.newProListData = res.data.list
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getHoldProList () {
            ajaxHttp.indexgetholdProFeath().then(res => {
                this.holdProListData = res.data.list
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        seePlayeInfo (item) {
            console.log(item.player_id)
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
    },
    components: {
        spinItem
    }
}
</script>

<style scoped>

</style>