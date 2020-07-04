<template>
    <div class="assessPage_container">
        <deviceOrSet title="评估测评"></deviceOrSet>
        <div class="main_cont_box">
            <div class="product_box">
                <div :class="{trem_box: true, moveProActive: deviceBoxIndex === index}" v-for="(item, index) in deviceListData" :key="index" @click="toSeeAssessInfo(item)" @mousemove="toSeeAssessInfoMove(index)" @mouseleave="toSeeAssessInfoMove(999)">
                    <img class="img_header" :src="item.img" alt="">
                    <div class="pc_name">{{item.title}}</div>
                    <div class="time_txt">{{item.add_time}}</div>
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
import ajaxHttp from '@/api/index'
export default {
    data () {
        return {
            pageNumData: [],
            deviceListData: [],
            page: 1,
            limit: 10,
            deviceBoxIndex: -1
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getDeviceList()
    },
    methods: {
        getDeviceList () {
            let data = {
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.proDeviceListFeath(data).then(res => {
                console.log(res)
                this.deviceListData = res.data.list
                if (res.data.total > 10) {
                    for (let i = 1; i< Math.ceil((res.data.total)/10) + 1; i++) {
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        toSeeAssessInfo (item) {
            this.$router.push({
                path: '/assessPageInfo',
                query: {
                    id: item.device_id
                }
            })
        },
        toSeeAssessInfoMove (index) {
            this.deviceBoxIndex = index
        },
        changePage (e) {
            this.page = e
        }
    }
}
</script>

<style lang="scss" scoped>

</style>