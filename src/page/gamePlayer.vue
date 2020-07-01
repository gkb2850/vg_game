<template>
    <div class="gamePlayer_container">
        <deviceOrSet title="CS GO 玩家们"></deviceOrSet>
        <div class="main_cont_box">
            <div class="people_box">
                <div class="trem_box" v-for="(item, index) in playerListData" :key="index">
                    <div class="img_header">
                        <img :src="item.img" alt="">
                        <div class="top_name">CS GO</div>
                    </div>
                    <div class="c_box">
                        <div class="zd_name">{{item.name}}</div>
                        <div class="other_box" @click="seePlayerInfo(item)">
                            <a href="javascript:;">
                                <div>查看更多</div>
                                <img src="../assets/images/toright_icon.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="bot_box">
                        <div class="txt">{{item.add_time}}</div>
                        <div class="line"></div>
                        <div class="txt">1234666条评论</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_big_box">
            <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" :limit="limit"></pageItem>
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
            pageNumData: [],
            playerListData: [],
            limit: 10
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getPlayerList()
    },
    methods: {
        getPlayerList () {
            ajaxHttp.playerPageListFeath().then(res => {
                this.playerListData = res.data.list
                // this.pageNumData = new Array(res.data.list.length)
                this.pageNumData = []
                console.log(this.pageNumData)
                if (res.data.total > 10) {
                    for (let i = 1; i< Math.ceil((res.data.total)/10) + 1;i++){
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
                
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        seePlayerInfo (item) {
            this.$router.push({
                path: '/grameUserInfo',
                query: {
                    id: item.player_id
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>