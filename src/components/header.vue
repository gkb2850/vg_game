<template>
    <div class="header_box">
        <div class="first_box">
            <div v-if="!isLogin" class="txt_box">
                <div class="message_txt">欢迎访问Gamecfg</div>
                <a class="login_a" href="javascript:;" @click="loginBoxShow('show')">登录</a>
                <a href="javascript:;" @click="registerBoxShow('show')">注册</a>
            </div>
            <a v-else class="txt_box">
                <div class="message_txt_user" @click="toMyPage" @mousemove="toSeeMessageNum('in')" @mouseleave="toSeeMessageNum('out')">{{userName}}
                    <div class="rigint_num_txt" v-if="replyNum > 0">{{replyNum > 99 ? '99+' : replyNum}}</div>
                    <div class="mask_num_box" v-if="specificMessageShow && replyNum > 0" @click.stop="toSeeMyComment">
                        <img src="../assets/images/message_bg.png" alt="">
                        <div class="txt_num_box">
                            <div>收到的评论</div>
                            <div>{{replyNum}}</div>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" @click="toLoginOut">退出</a>
            </a>
        </div>
        <div class="nav_box">
            <div class="l_box">
                <img src="../assets/images/logo@2x.png" alt="">
            </div>
            <div class="c_box">
                <div class="header_nav_mask" v-if="navIndexShow" @mousemove="hideLabelsBox"></div>
                <div class="nav_txt" v-for="(item, index) in navData" :key="index">
                    <router-link class="nav_link" :to="index !== 3 ? item.path: ''">
                        <span :class="{active: navIndexTop === index, moveActive: navIndexTopMove === index}" @click="toNavClick(index)" @mousemove="toNavMove(index)" @mouseleave="toNavMove(-1)">{{item.txt}}</span>
                        <div class="labels_box" v-if="index === 3 && navIndexShow">
                            <div :class="{item_box: true, active: llabelIndex === 0}" @mousemove="labelNavClick('first')">2020年最佳设备</div>
                            <div :class="{item_box: true, active: llabelIndex === 1}" @mousemove="labelNavClick('second')">CS:GO最佳设备</div>
                            <div class="llable_box">
                                <div :class="{itxt: true, active: secondLabelIndex === indexs ? true : false}" v-for="(item, indexs) in deiceListData" :key="indexs" @click="toSeeDevicInfo(item, indexs)">{{item.title}}</div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="r_box">
                <div class="search_box">
                    <input type="text" placeholder="请输入关键字"  @keyup.enter="getSearchData" v-model="searchtxt">
                    <img @click="getSearchData" src="../assets/images/search_icon.png" alt="">
                </div>
            </div>
        </div>
        <div class="register_box" v-if="registerBoxShowStutas" @mousewheel.prevent>
            <div class="mask_bg"></div>
            <div class="cont_box">
                <div class="title_box">
                    <div class="txt">注册</div>
                    <a href="javascript:;" class="del_btn" @click="registerBoxShow('hide')">
                        <img src="../assets/images/del_icon.png" alt="">
                    </a>
                </div>
                <div v-if="true">
                    <div class="item_box">
                        <input type="text" placeholder="请输入昵称" class="input_txt" v-model="registerData.title">
                    </div>
                    <div class="phone_box">
                        <div class="h_txt">中国 +86</div>
                        <div class="line"></div>
                        <input type="number" placeholder="手机号" class="input_txt" v-model="registerData.phone" @change="registerPhoneInput" @keydown="handleRegisterPhoneInput">
                    </div>
                    <div class="item_box">
                        <input type="text" placeholder="请输入6位短信验证码" class="input_txt" v-model="registerData.yzCode">
                        <button @click="getRegisterCode">获取短信验证码</button>
                    </div>
                    <div class="item_box">
                        <input type="password" placeholder="8-20位密码" class="input_txt" v-model="registerData.pass" @change="registerPassInput">
                    </div>
                </div>
                <div v-else>
                    <div class="item_box">
                        <input type="text" placeholder="请输入昵称" class="input_txt" v-model="registerData.title">
                    </div>
                    <div class="item_box">
                        <input type="password" placeholder="8-20位密码" class="input_txt" v-model="registerData.pass" @change="registerPassInput">
                    </div>
                </div>
                <a href="javascript:;" class="submit_btn" @click="toRegister">注册</a>
            </div>
        </div>
        <div class="login_box" v-if="loginBoxShowStutas" @mousewheel.prevent>
            <div class="mask_bg"></div>
            <div class="cont_box">
                <div class="title_box">
                    <a href="javascript:;" class="item_box" @click="ChangeloginType(0)">
                        <div :class="{txt: true, active: loginType === 0}">免密码登录</div>
                        <div class="line" v-if="loginType === 0"></div>
                    </a>
                    <a href="javascript:;" class="item_box" @click="ChangeloginType(1)">
                        <div :class="{txt: true, active: loginType === 1}">密码登录</div>
                        <div class="line" v-if="loginType === 1"></div>
                    </a>
                    <a href="javascript:;" class="del_btn"  @click="loginBoxShow('hide')">
                        <img src="../assets/images/del_icon.png" alt="">
                    </a>
                </div>
                <div class="c_box" v-if="loginType === 1">
                    <div class="c_trem_box">
                        <input type="number" placeholder="手机号" class="input_txt" v-model="loginData.phone" @blur="loginPhoneChange" @keydown="handleLoginPhoneInput">
                    </div>
                    <div class="c_trem_box">
                        <input type="password" placeholder="密码" class="input_txt" v-model="loginData.pass">
                    </div>
                    <div class="c_trem_a_box">
                        <a href="javascript:;" @click="registerBoxShow('show')" class="txta">注册账号</a>
                    </div>
                </div>
                <div class="c_box" v-else>
                    <div class="phone_box">
                        <div class="h_txt">中国 +86</div>
                        <div class="line"></div>
                        <input type="number" placeholder="手机号" class="input_txt" v-model="loginData.phone" @blur="loginPhoneChange" @keydown="handleLoginPhoneInput">
                    </div>
                    <div class="item_box">
                        <input type="text" placeholder="请输入6位短信验证码" class="input_txt" v-model="loginData.yzCode">
                        <button @click="togetMessgeCode">获取短信验证码</button>
                    </div>
                    <div class="other_item">
                        <div class="txt">社交账号登录</div>
                        <div class="wx_box">
                            <img src="../assets/images/wx_icon.png" alt="">
                            <div>微信</div>
                        </div>
                        <a href="javascript:;" @click="registerBoxShow('show')" class="txt">注册账号</a>
                    </div>
                </div>
                <a href="javascript:;" class="submit_btn" @click="toLogin">登陆</a>
            </div>
        </div>
        <div class="message_mask_loginout_box" @mousewheel.prevent v-if="loginOutBoxShow">
        <div class="cont_box">
                <div class="title">确定要退出么？</div>
                <div class="btn_box">
                    <button @click="sureLoginOut">确定</button>
                    <button @click="tohideLoginOutBox">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ajaxHttp from '@/api/index.js'
import searchPage from '../page/searchPage.vue'
import {mapMutations, mapState} from 'vuex'
var content = searchPage
export default {
    data () {
        return {
            navData: [
                {
                    txt: '首页',
                    path: '/index'
                },
                {
                    txt: 'CS:GO数据',
                    path: '/deviceOrSet'
                },
                {
                    txt: 'CS:GO选手',
                    path: '/gamePlayer'
                },
                {
                    txt: '最佳装备',
                    path: '/productPageInfo'
                },
                {
                    txt: '设备评测',
                    path: '/assessPage'
                },
                {
                    txt: '问答',
                    path: '/answerPage'
                }
            ],
            searchtxt: '',
            registerData: {
                phone: '',
                pass:'',
                title: '',
                yzCode: ''
            },
            loginBoxShowStutas: false,
            registerBoxShowStutas: false,
            loginData: {
                phone:'',
                pass:'',
                yzCode: ''
            },
            deiceListData: [],
            llabelIndex: 0,
            deiceListDataAll: [],
            navIndexShow: false,
            navIndexTop: 0,
            secondLabelIndex: 0,
            navIndexTopMove: -1,
            userName: '',
            loginOutBoxShow: false,
            specificMessageShow: false,
            loginType: 0
        }
    },
    created () {
        if (localStorage.getItem('userInfo')) {
            this.changeisLogin(true)
        }
        if (this.$route.path !== '/searchPage') {
            this.searchtxt = ''
        }
        if (localStorage.getItem('userName')) {
            this.userName = localStorage.getItem('userName')
        }
    },
    mounted () {
        this.getDevListData()
    },
    methods: {
        getDevListData () {
            ajaxHttp.bastDeviceListFeath().then(res => {
                this.deiceListData = res.data.list['2020最佳设备']
                this.deiceListDataAll = res.data.list
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getSearchData (e) {
            if (this.searchtxt === '') {
                return
            }
            let data = {
                key_word: this.searchtxt
            }
            ajaxHttp.indexSearchFeath(data).then(res => {
                let data = res.data.list ? res.data : {list:[],total: 0}
                this.changeSearchData(data)
                this.changeSearchTxt(this.searchtxt)
                let pageNumData = []
                if (data.total > 20) {
                 for (let i = 1; i< Math.ceil((data.total)/20) + 1;i++){
                         pageNumData.push(i)
                     }
                 } else if(data.total > 0 && data.total <=20) {
                     pageNumData.push(1)
                 }
                 this.changeSearchPage(pageNumData)
                if (this.$route.path !== '/searchPage') {
                    this.$router.push('/searchPage')
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        registerPhoneInput (e) {
            if(!(/^1[3456789]\d{9}$/.test(this.registerData.phone))){ 
                this.$Message.warning("手机号码有误，请重填");
                this.registerData.phone = ''
                return
            }
        },
        registerPassInput (e) {
            if (this.registerData.pass.length < 8 || this.registerData.pass.length > 20) {
                this.$Message.warning("请保持密码长度在8-20位")
                this.registerData.pass = ''
                return
            }
        },
        toRegister () {
            if (this.registerData.title === '') {
                this.$Message.warning('请输入昵称!')
                return
            }
            if (this.registerData.phone === '') {
                this.$Message.warning('请输入手机号!')
                return
            }
            if (this.registerData.yzCode === '') {
                this.$Message.warning('请输入验证码!')
                return
            }
            if (this.registerData.pass === '') {
                this.$Message.warning('请填写密码!')
                return
            }
            let data = {
                mobile: this.registerData.phone,
                title: this.registerData.title,
                passwd: this.registerData.pass,
                type: 1,
                code: this.registerData.yzCode
            }
            ajaxHttp.registerFeath(data).then(res => {
                this.$Message.success('注册成功')
                this.loginBoxShowStutas = true
                this.registerBoxShowStutas = false
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        loginBoxShow (str) {
            if (str === 'show') {
                this.loginBoxShowStutas = true
            } else {
                this.loginBoxShowStutas = false
                this.loginData.phone = ''
                this.loginData.pass = ''
            }
        },
        registerBoxShow (str) {
            if (str === 'show') {
                this.registerBoxShowStutas = true
                this.loginBoxShowStutas = false
            } else {
                this.registerBoxShowStutas = false
                this.registerData.title = ''
                this.registerData.phone = ''
                this.registerData.pass = ''
            }
        },
        getRegisterCode () {
            if (this.registerData.phone === '') {
                this.$Message.warning('请输入手机号!')
                return
            }
            let data = {
                mobile: this.registerData.phone
            }
            ajaxHttp.getMessageCodeFeath(data).then(res => {
                console.log(res)
                this.$Message.error('发送成功')
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        togetMessgeCode () {
            if (this.loginData.phone === '') {
                this.$Message.warning('请输入手机号!')
                return
            }
            let data = {
                mobile: this.loginData.phone
            }
            ajaxHttp.getMessageCodeFeath(data).then(res => {
                console.log(res)
                this.$Message.error('发送成功')
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        ChangeloginType (index) {
            this.loginType = index
            this.loginData.phone = ''
        },
        toLogin () {
            if (this.loginType === 0) {
                if (this.loginData.phone === '') {
                    this.$Message.warning('请输入手机号!')
                    return
                }
                if (this.loginData.yzCode === '') {
                    this.$Message.warning('请填写验证码!')
                    return
                }
                let data = {
                    mobile: this.loginData.phone,
                    passwd:'',
                    type: 1,
                    code: thsi.loginData.yzCode
                }
                ajaxHttp.loginFeath(data).then(res => {
                    this.$Message.success('登录成功')
                    localStorage.setItem('userInfo', JSON.stringify(res.data))
                    this.loginBoxShowStutas = false
                    this.changeisLogin(true)
                    this.changeUserInfo(res.data)
                    this.getUserInfoToHttp()
                }).catch(err => {
                    this.$Message.error(err.message)
                })

            } else {
                if (this.loginData.phone === '') {
                    this.$Message.warning('请输入手机号!')
                    return
                }
                if (this.loginData.pass === '') {
                    this.$Message.warning('请填写密码!')
                    return
                }
                let data = {
                    mobile: this.loginData.phone,
                    passwd: this.loginData.pass,
                    type: 0,
                    code: ''
                }
                ajaxHttp.loginFeath(data).then(res => {
                    this.$Message.success('登录成功')
                    localStorage.setItem('userInfo', JSON.stringify(res.data))
                    this.loginBoxShowStutas = false
                    this.changeisLogin(true)
                    this.changeUserInfo(res.data)
                    this.getUserInfoToHttp()
                }).catch(err => {
                    this.$Message.error(err.message)
                })
            }
        },
        toMyPage () {
            let path = this.$route.path
            if (path === '/my') {
                return
            }
            this.$router.push('/my')
        },
        labelNavClick (str) {
            if (str === 'first') {
                this.llabelIndex = 0
                this.deiceListData = this.deiceListDataAll['2020最佳设备']
            } else if (str === 'second') {
                this.llabelIndex = 1
                this.deiceListData = this.deiceListDataAll['csgo']
            }
        },
        toNavClick (index) {
            if (index === 3) {
                this.navIndexShow = true
            } else {
                this.navIndexShow = false
            }
            this.navIndexTop = index
            this.searchtxt = ''
        },
        toNavMove (index) {
            this.navIndexTopMove = index
            if (index === 3) {
                this.navIndexShow = true
            } else if (index !== -1) {
                this.navIndexShow = false
            }
        },
        hideLabelsBox () {
            this.navIndexShow = false
        },
        toSeeDevicInfo (item, index) {
            this.navIndexShow = false
            this.secondLabelIndex = index
            if (this.$route.path !== '/productPageInfo') {
                this.$router.push({
                    path: '/productPageInfo',
                    query: {
                        id: item.id
                    }
                })
            } else {
                this.$router.push('/index')
                setTimeout(() => {
                    this.$router.push({
                        path: '/productPageInfo',
                        query: {
                            id: item.id
                        }
                    })
                }, 50)
            }
            
        },
        loginPhoneChange () {
            if (this.loginData.phone === '') {
                return
            }
            if(!(/^1[3456789]\d{9}$/.test(this.loginData.phone))){ 
                this.$Message.warning("手机号码有误，请重填");
                this.loginData.phone = ''
                return
            }
        },
        handleLoginPhoneInput (e) {
            if (!e.key) {
                return
            }
            let a = e.key.replace(/[^\d]/g, "");
            if (!a && e.keyCode !== 8) {
              e.preventDefault();
            }
        },
        handleRegisterPhoneInput (e) {
            if (!e.key) {
                return
            }
            let a = e.key.replace(/[^\d]/g, "");
            if (!a && e.keyCode !== 8) {
              e.preventDefault();
            }
        },
        getUserInfoToHttp () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.changeisLogin(false)
                if (this.$route.path !== '/index') {
                    this.$router.push('/index')
                }
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id
            }
            ajaxHttp.getUserInfoFeath(data).then(res => {
                this.userName = res.data.user_info.title
                localStorage.setItem('userName', res.data.user_info.title)
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        sureLoginOut () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                if (this.$route.path !== '/index') {
                    this.$router.push('/index')
                }
                this.loginOutBoxShow = false
                this.changeisLogin(false)
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id
            }
            ajaxHttp.loginOutFeath(data).then(res => {
                this.loginOutBoxShow = false
                localStorage.removeItem('userInfo')
                this.changeisLogin(false)
                if (this.$route.path !== '/index') {
                    this.$router.push({
                        path: '/index'
                    })
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toLoginOut () {
            this.loginOutBoxShow = true
        },
        toSeeMessageNum (str) {
            if (str === 'in') {
                this.specificMessageShow = true
            } else {
                this.specificMessageShow = false
            }
        },
        toSeeMyComment () {
            this.$router.push({
                path: '/my',
                query: {
                    message: true
                }
            })
        },
        tohideLoginOutBox () {
            this.loginOutBoxShow = false
        },
        ...mapMutations([
            'changeSearchData',
            'changeSearchPage',
            'changeSearchTxt',
            'changeUserInfo',
            'changeisLogin'
        ])
    },
    computed: {
        ...mapState({
            navIndexTops: 'navTLabelIndex',
            isLogin: 'isLogin',
            replyNum: 'replyNum'
        })
    },
    watch: {
        navIndexTops (val) {
            this.navIndexTop = val
        },
    }
}
</script>

<style scoped lang='scss'>
    .header_box {
        .first_box {
            padding: 0 150px;
            box-sizing: border-box;
            background: #fff;
            height: 40px;
            display: flex;
            justify-content: flex-end;
            .txt_box {
                display: flex;
                justify-content: flex-end;
                height: 100%;
                .message_txt {
                    height: 100%;
                    line-height: 40px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(47,47,54,1);
                    padding-right: 25px;
                    padding-left: 25px;
                }
                .message_txt_user {
                    height: 100%;
                    line-height: 40px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(47,47,54,1);
                    padding-right: 25px;
                    padding-left: 25px;
                    position: relative;
                    .rigint_num_txt {
                        position: absolute;
                        right: 0;
                        top: 50%;
                        margin-right: -10px;
                        transform: translate(-80%, -100%);
                        background: #8C6F9A;
                        border-radius: 2px;
                        padding: 0 3px;
                        height: 12px;
                        line-height: 12px;
                        font-size:10px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                    }
                    .mask_num_box {
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        transform: translateY(100%);
                        width: 140px;
                        height: 47px;
                        img {
                            width: 100%;
                            height: 100%;
                            display: block;
                        }
                        .txt_num_box {
                           position: absolute;
                           left: 0;
                           top: 0;
                           width: 100%;
                           height: 100%;
                           display: flex;
                           padding: 9px 8px 0;
                           box-sizing: border-box;
                           display: flex;
                           align-items: center;
                           justify-content: space-between;
                           div:first-child {
                               height:20px;
                               font-size:14px;
                               font-family:PingFangSC-Regular,PingFang SC;
                               font-weight:400;
                               color:rgba(77,54,98,1);
                               line-height:20px;
                           }
                           div:nth-child(2) {
                               height: 12px;
                               line-height: 12px;
                               border-radius: 2px;
                               background: #8C6F9A;
                               padding: 0 3px;
                               font-size:10px;
                               font-family:PingFangSC-Regular,PingFang SC;
                               font-weight:400;
                               color:rgba(255,255,255,1);
                           }
                        }
                    }
                }
                a {
                    height: 100%;
                    line-height: 40px;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(47,47,54,1);
                }
                .login_a {
                    color: #894FA0;
                    padding-right: 25px;
                }
            }
            .txt {
                height: 100%;
                line-height: 40px;
                font-size:14px;
                font-family:PingFangSC-Regular,PingFang SC;
                font-weight:400;
                color:rgba(47,47,54,1);
                flex: 1;
                text-align: right;
            }
        }
        .nav_box {
            padding: 0 150px;
            box-sizing: border-box;
            height: 75px;
            display: flex;
            align-items: center;
            background: #4D3662;
            .l_box {
                height: 44px;
                width: 102px;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .c_box {
                flex: 1;
                display: flex;
                height: 100%;
                justify-content: flex-end;
                .header_nav_mask {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                }
                .nav_txt {
                    position: relative;
                    z-index: 12;
                    .nav_link {
                        text-decoration: none;
                        span {
                            padding: 0 23px;
                            height: 75px;
                            line-height: 75px;
                            font-size:14px;
                            font-family:PingFangSC-Regular,PingFang SC;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            width: 100%;
                            display: block;
                        }
                        span.active {
                            background: #604876;
                        }
                        span.moveActive {
                            background: #604876;
                        }
                        .labels_box {
                            position: absolute;
                            left: 50%;
                            bottom: -80px;
                            width:416px;
                            z-index: 12;
                            transform: translateX(-50%);
                            margin-left: 104px;
                            .item_box {
                                height: 40px;
                                line-height: 40px;
                                text-align: center;
                                font-size:14px;
                                font-family:PingFangSC-Medium,PingFang SC;
                                font-weight:500;
                                color:#220B37;
                                background: #FFF;
                                width: 208px;
                            }
                            .item_box.active {
                                color: rgba(117, 79, 137, 1);
                                background: #F3F3F3;
                                box-shadow:0px 2px 18px 0px rgba(199,189,203,0.47);
                            }
                            .llable_box {
                                position: absolute;
                                right: 208px;
                                transform: translateX(100%);
                                top: 0;
                                width: 208px;
                                z-index: 10;
                                background:#fff;
                                .itxt {
                                    height: 40px;
                                    line-height: 40px;
                                    text-align: center;
                                    font-size:14px;
                                    font-family:PingFangSC-Medium,PingFang SC;
                                    font-weight:500;
                                    color:#220B37;
                                    background: #fff;
                                }
                                .itxt.active {
                                    color:rgba(117,79,137,1);
                                    background: #F3F3F3;
                                    box-shadow:0px 2px 18px 0px rgba(199,189,203,0.47);
                                }
                            }
                        }
                    }
                }
                .nav_txt:last-child {
                    margin-right: 0;
                }
            }
            .r_box {
                height: 100%;
                display: inline-flex;
                align-items: center;
                margin-left: 45px;
                .search_box {
                    display: inline-flex;
                    height: 32px;
                    box-sizing: border-box;
                    border: 1px solid #F2F4F5;
                    padding: 8px;
                    align-items: center;
                    input {
                        flex: 1;
                        overflow: hidden;
                        padding-right: 4px;
                        height: 100%;
                        line-height: 32px;
                        font-size:12px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(242,244,245,1);
                        background: transparent;
                        border: none;
                        outline: none;
                    }
                    input::-webkit-input-placeholder {
                        color:#fff;
                    }
                    input::-moz-placeholder { 
                        color:#fff;
                    }
                    input:-ms-input-placeholder {
                        color:#fff;
                    }
                    input:-moz-placeholder {
                        color:#fff;
                    }
                    img {
                        height: 16px;
                        width: 16px;
                        border-top: 8px solid transparent;
                        border-bottom: 8px solid transparent;
                        box-sizing: content-box;
                    }
                }
            }
        }
        .register_box {
            position: fixed;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 10;
            .mask_bg {
                width: 100%;
                height: 100%;
                background:rgba(0,0,0,0.5);
            }
            .cont_box {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                padding: 30px 37px 38px;
                box-sizing: border-box;
                width: 647px;
                .title_box {
                    height: auto;
                    .txt {
                        height: 33px;
                        line-height: 33px;
                        text-align: center;
                        font-size:24px;
                        font-family:PingFangSC-Semibold,PingFang SC;
                        font-weight:600;
                        color:#4D3662;
                    }
                    margin-bottom: 14px;
                    .del_btn {
                        padding: 10px;
                        position: absolute;
                        top: 3px;
                        right: 3px;
                        img {
                            height: 24px;
                            width: 24px;
                            display: block;
                        }
                    }
                }
                .phone_box {
                    height: 66px;
                    display: flex;
                    border-bottom: 1px solid #C9C2D0;
                    align-items: center;
                    .h_txt {
                        height: 25px;
                        line-height: 25px;
                        font-size:18px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:#C9C2D0;
                    }
                    .line {
                        margin: 0 15px;
                        height: 22px;
                        width: 1px;
                        background: #C9C2D0;
                    }
                    .input_txt {
                        flex: 1;
                        height: 25px;
                        line-height: 25px;
                        border: none;
                        outline: none;
                        font-size:18px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:#C9C2D0;
                    }
                    .input_txt::-webkit-input-placeholder {
                        color:#C9C2D0;
                    }
                    .input_txt::-moz-placeholder { 
                        color:#C9C2D0;
                    }
                    .input_txt:-ms-input-placeholder {
                        color:#C9C2D0;
                    }
                    .input_txt:-moz-placeholder {
                        color:#C9C2D0;
                    }
                }
                .item_box {
                    display: flex;
                    height: 66px;
                    border-bottom: 1px solid #DDD8CF;
                    align-items: center;
                    .input_txt {
                        height: 25px;
                        line-height: 25px;
                        border: none;
                        outline: none;
                        font-size:18px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:#C9C2D0;
                        flex: 1;
                    }
                    .input_txt::-webkit-input-placeholder {
                        color:#C9C2D0;
                    }
                    .input_txt::-moz-placeholder { 
                        color:#C9C2D0;
                    }
                    .input_txt:-ms-input-placeholder {
                        color:#C9C2D0;
                    }
                    .input_txt:-moz-placeholder {
                        color:#C9C2D0;
                    }
                    button {
                        height: 25px;
                        font-size:18px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:#894FA0;
                        line-height:25px;
                        background: transparent;
                        border: none;
                        outline: none;
                    }
                }
                .submit_btn {
                    margin: 41px auto 37px;
                    background: #4D3662;
                    width: 384px;
                    height: 50px;
                    text-align: center;
                    font-size:18px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height: 50px;
                }
            }
        }
        .login_box {
            position: fixed;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            z-index: 10;
            .mask_bg {
                width: 100%;
                height: 100%;
                background:rgba(0,0,0,0.5);
            }
            .cont_box {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                padding: 30px 37px 38px;
                box-sizing: border-box;
                width: 647px;
                .title_box {
                    height: 42px;
                    display: flex;
                    .item_box {
                        position: relative;
                        margin-right: 50px;
                        .txt {
                            height: 42px;
                            font-size:21px;
                            font-family:PingFangSC-Semibold,PingFang SC;
                            font-weight:400;
                            color:#4D3662;
                            line-height:29px;
                        }
                        .txt.active {
                            color: #4D3662;
                            font-weight:600;
                        }
                        .line {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 100%;
                            height: 1px;
                            background: #4D3662;
                        }
                    }
                    .del_btn {
                        padding: 10px;
                        position: absolute;
                        top: 3px;
                        right: 3px;
                        img {
                            height: 24px;
                            width: 24px;
                            display: block;
                        }
                    }
                }
                .c_box {
                    .c_trem_box {
                        height: 50px;
                        margin-top: 16px;
                        border-bottom: 1px solid #C9C2D0;
                        display: flex;
                        align-items: center;
                        .input_txt {
                            height: 25px;
                            line-height: 25px;
                            border: none;
                            outline: none;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:#C9C2D0;
                            flex: 1;
                        }
                        .input_txt::-webkit-input-placeholder {
                            color:#C9C2D0;
                        }
                        .input_txt::-moz-placeholder { 
                            color:#C9C2D0;
                        }
                        .input_txt:-ms-input-placeholder {
                            color:#C9C2D0;
                        }
                        .input_txt:-moz-placeholder {
                            color:#C9C2D0;
                        }
                    }
                    .c_trem_a_box {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        padding-top: 15px;
                        .txta {
                            height:25px;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:rgba(77,54,98,1);
                            line-height:25px;
                        }
                    }
                    .phone_box {
                        height: 66px;
                        display: flex;
                        border-bottom: 1px solid #C9C2D0;
                        padding-top: 28px;
                        box-sizing: border-box;
                        .h_txt {
                            height: 25px;
                            line-height: 25px;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:#C9C2D0;
                        }
                        .line {
                            margin: 0 15px;
                            height: 22px;
                            width: 1px;
                            background: #C9C2D0;
                        }
                        .input_txt {
                            flex: 1;
                            height: 25px;
                            line-height: 25px;
                            border: none;
                            outline: none;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:#C9C2D0;
                        }
                        .input_txt::-webkit-input-placeholder {
                            color:#C9C2D0;
                        }
                        .input_txt::-moz-placeholder { 
                            color:#C9C2D0;
                        }
                        .input_txt:-ms-input-placeholder {
                            color:#C9C2D0;
                        }
                        .input_txt:-moz-placeholder {
                            color:#C9C2D0;
                        }
                    }
                    .item_box {
                        display: flex;
                        height: 66px;
                        border-bottom: 1px solid #DDD8CF;
                        align-items: center;
                        .input_txt {
                            height: 25px;
                            line-height: 25px;
                            border: none;
                            outline: none;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:#C9C2D0;
                            flex: 1;
                        }
                        .input_txt::-webkit-input-placeholder {
                            color:#C9C2D0;
                        }
                        .input_txt::-moz-placeholder { 
                            color:#C9C2D0;
                        }
                        .input_txt:-ms-input-placeholder {
                            color:#C9C2D0;
                        }
                        .input_txt:-moz-placeholder {
                            color:#C9C2D0;
                        }
                        button {
                            height: 25px;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:#894FA0;
                            line-height:25px;
                            background: transparent;
                            border: none;
                            outline: none;
                        }
                    }
                    .other_item {
                        display: flex;
                        margin: 15px 0 51px;
                        .txt {
                            height:25px;
                            font-size:18px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:rgba(77,54,98,1);
                            line-height:25px;
                        }
                        .wx_box {
                            margin-left: 28px;
                            flex: 1;
                            height: 25px;
                            display: flex;
                            img {
                                width: 25px;
                                height: 25px;
                                margin-right: 5px;
                            }
                            div {
                                height:25px;
                                font-size:18px;
                                font-family:PingFangSC-Medium,PingFang SC;
                                font-weight:400;
                                color:rgba(129,129,135,1);
                                line-height:25px;
                            }
                        }
                    }
                }
                .submit_btn {
                    margin: 88px auto 0;
                    width: 384px;
                    height: 50px;
                    background: #4D3662;
                    text-align: center;
                    font-size:18px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height: 50px;
                }
            }
        }
        .message_mask_loginout_box {
            position: fixed;
            width: 100%;
            height: 100%;
            background:rgba(0,0,0,0.4);
            left: 0;
            top: 0;
            z-index: 10;
            .cont_box {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: #fff;
                border-radius: 4px;
                width: 270px;
                padding: 26px 36px 18px;
                box-sizing: border-box;
                .title {
                    height:26px;
                    font-size:16px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(47,47,54,1);
                    line-height:26px;
                    text-align: center;
                    margin-bottom: 28px;
                }
                .btn_box {
                    display: flex;
                    justify-content: space-between;
                    button {
                        width: 64px;
                        height: 31px;
                        text-align: center;
                        line-height: 29px;
                        outline: none;
                        border-radius: 2px;
                    }
                    button:first-child {
                        font-size:16px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        background: #8C6F9A;
                        border: 1px solid #8C6F9A;
                    }
                    button:nth-child(2) {
                        font-size:16px;
                        font-family:PingFangSC-Regular,PingFang SC;
                        font-weight:400;
                        color:rgba(129,129,135,1);
                        background: #F7F9FA;
                        border: 1px solid #AFB0B1;
                    }
                }
            }
        }
    }
</style>