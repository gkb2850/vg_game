<template>
    <div class="header_box">
        <div class="first_box">
            <div class="txt">欢迎来到XXX ~ 请登录你的游戏人生</div>
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
                    <input type="text" placeholder="请输入关键字">
                    <img src="../assets/images/search_icon.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                    path: '/index'
                },
                {
                    txt: '最佳装备',
                    path: '/index'
                },
                {
                    txt: '评估评测',
                    path: '/index'
                },
                {
                    txt: '问答',
                    path: '/index'
                }
            ]
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
    }
</style>