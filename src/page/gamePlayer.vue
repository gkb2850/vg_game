<template>
    <div class="gamePlayer_container">
        <deviceOrSet title="CS GO 玩家们"></deviceOrSet>
        <div class="main_cont_box">
            <div class="people_box">
                <div :class="{trem_box: true, movePlayerActive: playerSelectIndex === index}" v-for="(item, index) in playerListData" :key="index" @click="seePlayerInfo(item)" @mousemove="seePlayerInfoMove(index)" @mouseleave="seePlayerInfoMove(999)">
                    <div class="img_header">
                        <img :src="item.img" alt="">
                        <div class="top_name" v-if="item.game">{{item.game}}</div>
                    </div>
                    <div class="c_box">
                        <div class="zd_name">{{item.name}}</div>
                        <div class="other_box">
                            <a href="javascript:;">
                                <div>查看更多</div>
                                <img src="../assets/images/toright_icon.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="bot_box">
                        <div class="txt">{{item.add_time}}</div>
                        <div class="line"></div>
                        <div class="txt">{{item.comment > 0 ? item.comment + '条评论' : '暂无评论'}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page_big_box">
            <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" :limit="limit" @changePage="changePage"></pageItem>
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
            limit: 10,
            page: 1,
            playerSelectIndex: -1
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
            let data = {
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.playerPageListFeath(data).then(res => {
                this.playerListData = res.data.list
                this.pageNumData = []
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
        },
        changePage (e) {
            this.page = e
            this.getPlayerList()
        },
        seePlayerInfoMove (index) {
            this.playerSelectIndex = index
        }
    }
}
</script>

<style lang="scss" scoped>

</style>