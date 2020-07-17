<template>
    <div class="searchPage_container">
        <deviceOrSet title="搜索结果"></deviceOrSet>
        <div class="main_cont_box">
            <div class="people_box" v-if="searchData.list.length">
                <div class="trem_box" v-for="(item, index) in searchData.list" :key="index" @click="setDeviceInfo(item)">
                    <div class="img_header" :style="{height: imgHeight + 'px'}">
                        <img :src="item.img" alt="" :style="{height: imgHeight + 'px', width: item.type === 'player' ? '100%' : imgWidths + 'px'}" ref="peoplerefbox">
                        <div class="top_name">CS:GO</div>
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
                        <div class="txt">{{item.click_num > 0 ? item.click_num + '条评论' : '暂无评论'}}</div>
                    </div>
                </div>
            </div>
            <div class="message_serarch_txt" v-else>暂无结果</div>
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
import {mapState, mapGetters, mapMutations} from 'vuex'

export default {
    data () {
        return {
            limit: 20,
            page: 1,
            imgHeight: 0,
            imgWidths: 0
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    created () {

    },
    mounted () {
        this.$nextTick(() => {
            setTimeout(() =>{
                if (this.$refs.peoplerefbox) {
                    this.imgHeight = (this.$refs.peoplerefbox[0].offsetWidth) * 4 / 3
                }
                if (this.$refs.peoplerefbox) {
                    this.imgWidths = (this.imgHeight) * 4 / 3
                }
            }, 200)
        })
    },
    methods: {
        changeSearch (data) {
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
        },
        changePage (e) {
            if (this.page === e) {
                return
            }
            this.page = e
            this.getSearchData()
        },
        getSearchData () {
            let data = {
                key_word: this.searchtxt,
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.indexSearchFeath(data).then(res => {
                let data = res.data.list ? res.data : {list:[],total: 0}
                this.changeSearchData(data)
                this.changeSearchTxt(this.searchtxt)
                let pageNumData = []
                if (data.total > 20) {
                 for (let i = 1; i< Math.ceil((data.total)/20) + 1;i++){
                         pageNumData.push(i)
                     }
                 } else if(data.total > 0 && data.total <=20) {
                     pageNumData.push(1)
                 }
                 this.changeSearchPage(pageNumData)
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        setDeviceInfo (item) {
            this.$router.push({
                path: '/assessPageInfo',
                query: {
                    id: item.id
                }
            })
        },
        ...mapMutations([
            'changeSearchData',
            'changeSearchPage',
            'changeSearchTxt'
        ]),
    },
    computed: {
        ...mapState({
            searchtxt: 'searchTxt'
        }),
        ...mapGetters({
            searchData: 'searchData',
            pageNumData: 'searchPageNum'
        })
    },
    watch: {

    }
}
</script>

<style lang="scss" scoped>

</style>