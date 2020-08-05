<template>
    <div class="foot_bot_box">
        <div class="foot_box">
            <div class="item_box" v-for="(item, index) in footNavData" :key="index">
                <div class="foot_nav" v-for="(items, indexs) in item" :key="indexs">
                   <router-link class="nav_link" :to="items.path" v-if="items.path">
                        <span>{{items.txt}}</span>
                   </router-link>
                    <span v-else class="other_txt">{{items.txt}}</span>
                </div>
            </div>
        </div>
        <div class="foot_message_box">
            <div class="js_message_box">
                <img src="../assets/images/guohui.png" alt="">
                <a target="_blank" href="http://www.beian.miit.gov.cn" class="txt">苏ICP备20031555号-2</a>
            </div>
            <div class="js_message_box">
                <img src="../assets/images/guihui.png" alt="">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011302320986" class="txt">苏公网安备 32011302320986号</a>
            </div>
            <!-- <div class="js_message_box"> 
                <div class="txt">© 2020 南京锦宏源科技</div>
                <div class="line"></div>
                <img src="../assets/images/guohui.png" alt="">
                <div class="txt">增值电信业务经营许可证：苏A0-00000000</div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            footNavData: [
                [
                    {
                        txt:'首页'
                    },
                    {
                        txt:'设备评测',
                        path: '/assessPage'
                    },
                    {
                        txt:'问答',
                        path: '/answerPage'
                    }
                ],
                [
                    {
                        txt:'设备与设置'
                    },
                    {
                        txt:'CS:GO',
                        path: '/deviceOrSet'
                    }
                ],
                [
                    {
                        txt:'选手'
                    },
                    {
                        txt:'CS:GO',
                        path: '/gamePlayer'
                    }
                ],
                [
                    {
                        txt:'最佳装备'
                    },
                    {
                        txt:'最佳鼠标',
                        path: '/index'
                    },
                    {
                        txt:'最佳显示器',
                        path: '/index'
                    },
                    {
                        txt:'最佳键盘',
                        path: '/index'
                    },
                    {
                        txt:'最佳耳机',
                        path: '/index'
                    },
                    {
                        txt:'最佳鼠标垫',
                        path: '/index'
                    },
                ],
                [
                    {
                        txt:'法律信息'
                    },
                    {
                        txt:'隐私政策',
                        path: '/privacyPage'
                    },
                    {
                        txt:'法律声明',
                        path: '/lawMessagePage'
                    },
                    {
                        txt:'联系我们',
                        path: '/feedback'
                    }
                ]
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .foot_bot_box {
        .foot_box {
            padding-bottom: 10px;
            box-sizing: border-box;
            background: #281C34;
            padding: 50px 150px;
            display: flex;
            .item_box {
                flex: 1;
                overflow: hidden;
                .foot_nav {
                    height: 17px;
                    margin-bottom: 15px;
                    .nav_link {
                        text-decoration: none;
                        span {
                            height: 100%;
                            line-height: 17px;
                            font-size:12px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:rgba(255,255,255,1);
                            width: 100%;
                            display: block;
                            text-align: left;
                        }
                    }
                    .other_txt {
                        line-height: 17px;
                        font-size:12px;
                        font-family:PingFangSC-Medium,PingFang SC;
                        font-weight:500;
                        color:rgba(255,255,255,1);
                        width: 100%;
                        display: block;
                        text-align: left;
                    }
                }
                .foot_nav:first-child {
                    margin-bottom: 20px;
                    height: 20px;
                    span {
                        font-size: 14px;
                        line-height: 20px;
                    }
                }
            }
            .item_box:last-child {
                flex: none;
            }
        }
        .foot_message_box {
            background: #191320;
            height: 68px;
            display: flex;
            justify-content: center;
            align-items: center;
            .js_message {
                height: 20px;
                line-height: 20px;
                font-size:12px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(255,255,255,1);
                text-align: center;
            }
            .js_message_box {
                height: 30px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                img {
                    height: 12px;
                    width: 12px;
                    margin-right: 5px;
                }
                .txt {
                    height: 20px;
                    line-height: 20px;
                    font-size:12px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
                .line {
                    height: 14px;
                    width: 1px;
                    background: #fff;
                    margin: 0 11px;
                }
            }
            .js_message_box:first-child {
                margin-right: 10px;
            }
        }
        
    }
    
</style>