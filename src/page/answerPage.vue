<template>
    <div class="answerPage_container">
        <deviceOrSet title="问答"></deviceOrSet>
        <div class="main_cont_box">
            <div class="product_box">
                <a :class="{trem_box:true, moveActive: itemBoxIndex === index}" v-for="(item, index) in questionList" :key="index" @click="toSeeQuestionInfo(item)" @mousemove="toSeeQuestionMove(index)" @mouseleave="toSeeQuestionMove(-1)">
                    <div class="title">{{item.title}}</div>
                    <div class="c_box">
                        <div class="c_txt">{{item.simple_content}}</div>
                        <div class="bot_box">
                            <div class="txt">{{item.add_time}}</div>
                            <div class="line"></div>
                            <div class="txt">5条评论</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <div class="page_big_box">
            <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" @changePage="changePage" :limit="limit"></pageItem>
        </div>
    </div>
</template>

<script>
import deviceOrSet from '@/components/topImgItem.vue'
import pageItem from '@/components/pageItem.vue'
import ajaxHttp from '@/api/index'
import {mapMutations} from 'vuex'

export default {
    data () {
        return {
            pageNumData: [],
            page: 1,
            limit: 10,
            questionList: [],
            itemBoxIndex: -1
        }
    },
    created() {
        this.checkRoutePath(this.$route.path)
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getQuestionList()
    },
    methods: {
        getQuestionList () {
            let data = {
                page: this.page,
                limit: this.limit
            }
            this.$Spin.show();
            ajaxHttp.questionListFeath(data).then(res => {
                this.$Spin.hide();
                this.questionList = res.data.list
                this.pageNumData = []
                if (res.data.total > 10) {
                    for (let i = 1; i< Math.ceil((res.data.total)/10) + 1;i++){
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
            }).catch(err => {
                this.$Spin.hide();
                this.$Message.error(err.message)
            })
        },
        changePage (e) {
            if (this.page ===e) {
                return
            }
            this.page = e
            this.getQuestionList()
        },
        toSeeQuestionInfo (item) {
            this.$router.push({
                path: '/answerInfoPage',
                query: {
                    id: item.id
                }
            })
        },
        ...mapMutations([
            'checkRoutePath'
        ]),
        toSeeQuestionMove (index) {
            this.itemBoxIndex = index
        }
    },
}
</script>

<style lang="scss" scoped>

</style>