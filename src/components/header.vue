<template>
    <div class="header_box">
        <div class="first_box">
            <a v-if="!isLogin" class="txt" @click="loginBoxShow('show')">欢迎来到XXX ~ 请登录你的游戏人生</a>
            <a v-else class="txt" @click="toMyPage">欢迎用户</a>
        </div>
        <div class="nav_box">
            <div class="l_box">
                <img src="../assets/images/logo@2x.png" alt="">
            </div>
            <div class="c_box">
                <div class="nav_txt" v-for="(item, index) in navData" :key="index">
                    <router-link class="nav_link" :to="item.path">
                        <span>{{item.txt}}</span>
                    </router-link>
                </div>
            </div>
            <div class="r_box">
                <div class="search_box">
                    <input type="text" placeholder="请输入关键字"  @keyup.enter="getSearchData" v-model="searchtxt">
                    <img src="../assets/images/search_icon.png" alt="">
                </div>
            </div>
        </div>
        <div class="register_box" v-if="registerBoxShowStutas">
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
                        <input type="number" placeholder="手机号" class="input_txt" v-model="registerData.phone" @change="registerPhoneInput">
                    </div>
                    <!-- <div class="item_box">
                        <input type="text" placeholder="请输入6位短信验证码" class="input_txt">
                        <button>获取短信验证码</button>
                    </div> -->
                    <div class="item_box">
                        <input type="text" placeholder="8-20位密码" class="input_txt" v-model="registerData.pass" @change="registerPassInput">
                    </div>
                </div>
                <div v-else>
                    <div class="item_box">
                        <input type="text" placeholder="请输入昵称" class="input_txt" v-model="registerData.title">
                    </div>
                    <div class="item_box">
                        <input type="text" placeholder="8-20位密码" class="input_txt" v-model="registerData.pass" @change="registerPassInput">
                    </div>
                </div>
                <a href="javascript:;" class="submit_btn" @click="toRegister">注册</a>
            </div>
        </div>
        <div class="login_box" v-if="loginBoxShowStutas">
            <div class="mask_bg"></div>
            <div class="cont_box">
                <div class="title_box">
                    <!-- <a href="javascript:;" class="item_box">
                        <div class="txt">免密码登录</div>
                        <div class="line"></div>
                    </a> -->
                    <a href="javascript:;" class="item_box">
                        <div class="txt active">密码登录</div>
                        <div class="line"></div>
                    </a>
                    <a href="javascript:;" class="del_btn"  @click="loginBoxShow('hide')">
                        <img src="../assets/images/del_icon.png" alt="">
                    </a>
                </div>
                <div class="c_box" v-if="true">
                    <div class="c_trem_box">
                        <input type="number" placeholder="手机号" class="input_txt" v-model="loginData.phone">
                    </div>
                    <div class="c_trem_box">
                        <input type="text" placeholder="密码" class="input_txt" v-model="loginData.pass">
                    </div>
                </div>
                <div class="c_box" v-else>
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
                        <a href="javascript:;" @click="registerBoxShow('show')" class="txt">注册账号</a>
                    </div>
                </div>
                <a href="javascript:;" class="submit_btn" @click="toLogin">登陆</a>
            </div>
        </div>
    </div>
</template>

<script>
import ajaxHttp from '@/api/index.js'
import searchPage from '../page/searchPage.vue'
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
                    txt: '设备与设置',
                    path: '/deviceOrSet'
                },
                {
                    txt: '玩家们',
                    path: '/gamePlayer'
                },
                {
                    txt: '最佳装备',
                    path: '/productPageInfo'
                },
                {
                    txt: '评估评测',
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
                title: ''
            },
            loginBoxShowStutas: false,
            registerBoxShowStutas: false,
            loginData: {
                phone:'',
                pass:''
            }
        }
    },
    created () {
        if (JSON.parse(localStorage.getItem('userInfo'))) {
            this.isLogin = true
        } else {
            this.isLogin = false
        }
        if (this.$route.path !== '/searchPage') {
            this.searchtxt = ''
        }
    },
    mounted () {},
    methods: {
        getSearchData (e) {
            if (this.searchtxt === '') {
                return
            }
            let data = {
                key_word: this.searchtxt
            }
            ajaxHttp.indexSearchFeath(data).then(res => {
                if (this.$route.path !== '/searchPage') {
                    this.$router.push({
                        path: '/searchPage',
                        query: {
                            data: res.data.list? res.data : {list: [],total: 0}
                        }
                    })
                } else {
                    this.$router.push('/index')
                    setTimeout(() => {
                        this.$router.push({
                            path: '/searchPage',
                            query: {
                                data: res.data.list? res.data : {list: [],total: 0}
                            }
                        })
                    },50)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        registerPhoneInput (e) {
            console.log(e)
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
            if (this.registerData.pass === '') {
                this.$Message.warning('请填写密码!')
                return
            }
            let data = {
                mobile: this.registerData.phone,
                title: this.registerData.title,
                passwd: this.registerData.pass
            }
            ajaxHttp.registerFeath(data).then(res => {
                console.log(res)
                this.$Message.success('注册成功')
                this.loginBoxShow = true
                this.registerBoxShow = false
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        loginBoxShow (str) {
            if (str === 'show') {
                this.loginBoxShowStutas = true
            } else {
                this.loginBoxShowStutas = false
            }
        },
        registerBoxShow (str) {
            if (str === 'show') {
                this.registerBoxShowStutas = true
                this.loginBoxShowStutas = false
            } else {
                this.registerBoxShowStutas = false
            }
        },
        toLogin () {
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
                passwd: this.loginData.pass
            }
            ajaxHttp.loginFeath(data).then(res => {
                console.log()
                this.$Message.success('登录成功')
                this.loginBoxShowStutas = false
                localStorage.setItem('userInfo', JSON.stringify(res.data))

            }).catch(err => {
                this.$Message.error(err.msg)
                
            })
        },
        toMyPage () {
            let path = this.$route.path
            if (path === '/my') {
                return
            }
            this.$router.push('/my')
        }
    },
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
            padding: 6px 150px;
            box-sizing: border-box;
            height: 75px;
            display: flex;
            align-items: center;
            background: #4D3662;
            .l_box {
                height: 64px;
                width: 147px;
                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            .c_box {
                flex: 1;
                overflow: hidden;
                display: flex;
                height: 100%;
                justify-content: flex-end;
                .nav_txt {
                    margin-right: 30px;
                    .nav_link {
                        text-decoration: none;
                        span {
                            height: 64px;
                            line-height: 64px;
                            font-size:18px;
                            font-family:PingFangSC-Regular,PingFang SC;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            width: 100%;
                            display: block;
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
                    img {
                        height: 16px;
                        width: 16px;
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
    }
</style>