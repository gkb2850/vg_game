<template>
    <div class="foot_bot_box">
        <div class="foot_box">
            <div class="item_box" v-for="(item, index) in footNavData" :key="index">
                <div class="foot_nav" v-for="(items, indexs) in item" :key="indexs">
                   <router-link class="nav_link" :to="items.path">
                        <span>{{items.txt}}</span>
                   </router-link>
                </div>
            </div>
        </div>
        <div class="js_message">© 2020 南京锦宏源科技</div>
        <div class="js_message_box">
            <img src="../assets/images/guihui.png" alt="">
            <div class="txt">工商网监电子标识</div>
            <div class="txt">备案号</div>
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
                        txt:'首页',
                        path: '/index'
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
                        txt:'设备与设置',
                        path: '/deviceOrSet'
                    },
                    {
                        txt:'CS GO',
                        path: '/deviceOrSet'
                    }
                ],
                [
                    {
                        txt:'选手',
                        path: '/gamePlayer'
                    },
                    {
                        txt:'CS GO',
                        path: '/gamePlayer'
                    }
                ],
                [
                    {
                        txt:'最新装备',
                        path: '/index'
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
                        txt:'法律信息',
                        path: '/index'
                    },
                    {
                        txt:'服务协议',
                        path: '/index'
                    },
                    {
                        txt:'服务政策',
                        path: '/index'
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
        background: #281C34;
        padding: 40px 150px;
        .foot_box {
            padding-bottom: 10px;
            box-sizing: border-box;
            display: flex;
            .item_box {
                flex: 1;
                overflow: hidden;
                .foot_nav {
                    height: 40px;
                    margin-bottom: 5px;
                    .nav_link {
                        text-decoration: none;
                        span {
                            height: 100%;
                            line-height: 40px;
                            font-size:14px;
                            font-family:PingFangSC-Medium,PingFang SC;
                            font-weight:500;
                            color:rgba(255,255,255,1);
                            width: 100%;
                            display: block;
                            text-align: left;
                        }
                    }
                }
                .foot_nav:first-child {
                    margin-bottom: 15px;
                }
            }
            .item_box:last-child {
                flex: none;
            }
        }
        .js_message {
            height: 20px;
            line-height: 20px;
            font-size:14px;
            font-family:PingFangSC-Medium,PingFang SC;
            font-weight:500;
            color:rgba(255,255,255,1);
            text-align: center;
        }
        .js_message_box {
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                height: 15px;
                width: 15px;
                margin-right: 5px;
            }
            .txt {
                height: 20px;
                line-height: 20px;
                font-size:14px;
                font-family:PingFangSC-Medium,PingFang SC;
                font-weight:500;
                color:rgba(255,255,255,1);
                margin-right: 20px;
            }
        }
    }
    
</style>