<template>
    <div class="foot_box">
        <div class="item_box" v-for="(item, index) in footNavData" :key="index">
            <div class="foot_nav" v-for="(items, indexs) in item" :key="indexs">
               <router-link class="nav_link" :to="items.path">
                    <span>{{items.txt}}</span>
               </router-link>
            </div>
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
                        txt:'最佳设备与设置',
                        path: '/index'
                    },
                    {
                        txt:'最新玩家数据库',
                        path: '/index'
                    },
                    {
                        txt:'常见问题',
                        path: '/index'
                    },
                ],
                [
                    {
                        txt:'设备与设置',
                        path: '/index'
                    },
                    {
                        txt:'CS GO',
                        path: '/index'
                    }
                ],
                [
                    {
                        txt:'玩家们',
                        path: '/index'
                    },
                    {
                        txt:'CS GO',
                        path: '/index'
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
                        txt:'最佳键盘',
                        path: '/index'
                    },
                    {
                        txt:'最佳耳机',
                        path: '/index'
                    },
                    {
                        txt:'最佳显示器',
                        path: '/index'
                    },
                    {
                        txt:'最佳鼠标垫',
                        path: '/index'
                    },
                ],
                [
                    {
                        txt:'隐私和会员',
                        path: '/index'
                    },
                    {
                        txt:'法律声明',
                        path: '/index'
                    },
                    {
                        txt:'版权所有',
                        path: '/index'
                    },
                ]
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .foot_box {
        background: #281C34;
        padding: 40px 150px;
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
</style>