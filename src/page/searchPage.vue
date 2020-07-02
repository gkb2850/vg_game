<template>
    <div class="searchPage_container">
        <deviceOrSet title="搜索结果"></deviceOrSet>
        <div class="main_cont_box">
            <div class="people_box" v-if="searchData.length">
                <div class="trem_box" v-for="(item, index) in searchData" :key="index">
                    <div class="img_header">
                        <img :src="item.img" alt="">
                        <div class="top_name">CS GO</div>
                    </div>
                    <div class="c_box">
                        <div class="zd_name">{{item.title}}</div>
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
                        <div class="txt">{{item.click_num}}条评论</div>
                    </div>
                </div>
            </div>
            <div class="message_serarch_txt" v-else>暂无结果</div>
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
            limit: 20,
            searchData: []
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    created () {
        if (this.$route.query.data) {
            let data = this.$route.query.data
            this.searchData = data.list
            this.pageNumData = []
             if (data.total > 20) {
                 for (let i = 1; i< Math.ceil((data.total)/20) + 1;i++){
                     this.pageNumData.push(i)
                 }
             } else if(data.total > 0 && data.total <=20) {
                 this.pageNumData.push(1)
             }
        }
    },
    mounted () {

    },
    methods: {
        changeSearch (data) {
            console.log(data)
            this.searchData = data.list
            this.pageNumData = []
             if (data.total > 20) {
                 for (let i = 1; i< Math.ceil((data.total)/20) + 1;i++){
                     this.pageNumData.push(i)
                 }
             } else if(data.total > 0 && data.total <=20) {
                 this.pageNumData.push(1)
             }
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