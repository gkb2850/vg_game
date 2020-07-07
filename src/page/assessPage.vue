<template>
    <div class="assessPage_container">
        <deviceOrSet title="设备评测"></deviceOrSet>
        <div class="main_cont_box">
            <div class="product_box">
                <div :class="{trem_box: true, moveProActive: deviceBoxIndex === index}" v-for="(item, index) in deviceListData" :key="index" @click="toSeeAssessInfo(item)" @mousemove="toSeeAssessInfoMove(index)" @mouseleave="toSeeAssessInfoMove(999)">
                    <div class="device-img" :style="{height: imgHeight + 'px'}" ref="devicerefbox"><img :src="item.img" alt=""></div>
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
import {mapMutations} from 'vuex'

export default {
    data () {
        return {
            pageNumData: [],
            deviceListData: [],
            page: 1,
            limit: 8,
            deviceBoxIndex: -1,
            imgHeight: 0
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
        this.getDeviceList()
    },
    methods: {
        getDeviceList () {
            let data = {
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.proDeviceListFeath(data).then(res => {
                this.deviceListData = res.data.list
                this.pageNumData = []
                if (res.data.total > 8) {
                    for (let i = 1; i< Math.ceil((res.data.total)/8) + 1; i++) {
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
                this.$nextTick(() => {
                    if (this.$refs.devicerefbox) {
                        this.imgHeight = (this.$refs.devicerefbox[0].offsetWidth) * 3 / 4
                    }
                })
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
            if (this.page === e) {
                return
            }
            this.page = e
            this.getDeviceList()
        },
        ...mapMutations([
            'checkRoutePath'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>