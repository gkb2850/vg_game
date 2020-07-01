<template>
    <div class="deviceOrSet_container">
        <deviceOrSet title="CS GO 设备与设置列表"></deviceOrSet>
        <div class="main_box">
            <div class="js_title_box">
                <div class="txt">欢迎使用我们的CS：GO Pro设置和齿轮列表。这是我们从中获取数据的地方，可以为您提供有关最常用游戏外围设备和装备的分析以及我们的竞争性设置指南。我们研究从DPI和eDPI等设置，灵敏度和分辨率到显示器和鼠标，齿轮和硬件等齿轮和硬件，我们可以找到的所有内容。</div>
                <div class="txt">也许您不想知道职业选手的平均敏感度是多少，但是对您最喜欢的CSGO专业人士（例如f0rest，scream，GeT_RiGhT，shox，device，smple或falled）使用的感觉更感兴趣。好吧，在那种情况下，这是正确的地方。我们选择了具有竞争力的CS：GO中的前30名球队，并将其列入我们的内部排名，该排名因近期和历史上的竞争表现而更加糟糕。</div>
                <div class="txt">您在下面看到的列表已连接到我们的数据库，我们将在该数据库中尽快更新信息。如果我们有任何错误，请随时加入我们的评论中，讨论这些设置及其来源。如果您还有其他疑问，也可以参考我们的常见问题解答。感谢您的阅读。</div>
            </div>
            <div class="cont_table_box">
                <div class="title_box">
                    <div class="btn" v-for="(item, index) in setTabelTitleData" :key="index">
                        <span>{{item}}</span>
                    </div>
                </div>
                <div class="cont_box">
                    <div class="trem_box" v-for="(item, index) in deviceConfigList" :key="index">
                        <div class="line_box">
                            <img :src="item.img" alt="">
                            <div class="txt">{{item.team}}</div>
                        </div>
                        <div class="line_box">
                            <img :src="item.nation_img" alt="">
                            <div class="txt">{{item.nation}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.name}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.鼠标}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.hz}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.dpi}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.速率}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.edpi}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.缩放感应}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.加速}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.灵敏度}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.原始输入}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.监控}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.赫兹}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.显卡}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.解析度}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.长宽比}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.缩放模式}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.鼠标垫}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.键盘}}</div>
                        </div>
                        <div class="line_box">
                            <div class="txt">{{item.耳机}}</div>
                        </div>
                        <div class="line_box">
                            <a href="javascript:;" class="txt">详情</a>
                        </div>
                    </div>
                </div>
                <pageItem v-if="pageNumDataF.length" :pageNumData="pageNumDataF" :limit="limitF"></pageItem>
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
                <pageItem v-if="pageNumDataS.length" :pageNumData="pageNumDataS" :limit="limitS"></pageItem>
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
import ajaxHttp from '@/api/index'
export default {
    data () {
        return {
            setTabelTitleData: [
                '战队',
                '玩家',
                '角色',
                '鼠标',
                'HZ',
                'DPI',
                '速率',
                'eDPI',
                '缩放感应',
                '加速',
                '灵敏度',
                '原始输入',
                '监控',
                '赫兹',
                '显卡',
                '解析度',
                '长宽比',
                '缩放模式',
                '鼠标垫',
                '键盘',
                '耳机',
                '配置'
            ],
            pageNumDataF:[],
            pageNumDataS:[],
            deviceConfigList: [],
            limitF: 10,
            limitS: 10
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getDeviceConfig()
    },
    methods: {
        getDeviceConfig () {
            ajaxHttp.deviceConfigListFeath().then(res => {
                console.log(res)
                this.deviceConfigList = res.data.list
                if (res.data.total > 12) {
                    for (let i = 1; i< Math.ceil((res.data.total)/12) + 1; i++) {
                        this.pageNumDataF.push(i)
                    }
                } else {
                    this.pageNumDataF.push(1)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    }
}
</script>

<style scoped>

</style>