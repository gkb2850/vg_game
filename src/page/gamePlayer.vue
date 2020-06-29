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
                        <div class="other_box">
                            <div>查看更多</div>
                            <img src="../assets/images/toright_icon.png" alt="">
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
            <pageItem :pageNumData="pageNumData"></pageItem>
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
            pageNumData: ['','','','','','',''],
            playerListData: []
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
                console.log(res)
                this.playerListData = res.data.list
            }).catch(err => {
                this.$Message.error(err.message)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

</style>