<template>
    <div class="productPageInfo_container">
        <deviceOrSet title="CS GO 最佳显示器"></deviceOrSet>
        <div class="main_box">
            <div class="intro-box">
                <div class="articeText">
                    <p>欢迎使用我们的CS：GO Pro设置和齿轮列表。这是我们从中获取数据的地方，可以为您提供有关最常用游戏外围设备和装备的分析以及我们的竞争性设置指南。我们研究从DPI和eDPI等设置，灵敏度和分辨率到显示器和鼠标，齿轮和硬件等齿轮和硬件，我们可以找到的所有内容。</p>
                    <p>也许您不想知道职业选手的平均敏感度是多少，但是对您最喜欢的CSGO专业人士（例如f0rest，scream，GeT_RiGhT，shox，device，smple或falled）使用的感觉更感兴趣。好吧，在那种情况下，这是正确的地方。我们选择了具有竞争力的CS：GO中的前30名球队，并将其列入我们的内部排名，该排名因近期和历史上的竞争表现而更加糟糕。</p>
                    <p>您在下面看到的列表已连接到我们的数据库，我们将在该数据库中尽快更新信息。如果我们有任何错误，请随时加入我们的评论中，讨论这些设置及其来源。如果您还有其他疑问，也可以参考我们的常见问题解答。感谢您的阅读。</p>
                </div>
            </div>
            <div
                class="sec_product_box"
                v-if="deviceInfoData.device_list && deviceInfoData.device_list.length"
            >
                <div class="articeSecondTitle">前五名</div>
                <div class="cont_box">
                    <div
                        class="trem_box"
                        v-for="(item, index) in deviceInfoData.device_list"
                        :key="index"
                        @click="toSeeDevicePc(item)"
                    >
                        <div class="b-img">
                            <img :src="item.img" alt />
                        </div>
                        <div class="b_txt">
                            <span>{{index + 1}}.{{item.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-html="deviceInfoData.content"></div>
        </div>
    </div>
</template>

<script>
import deviceOrSet from "@/components/topImgItem.vue";
import ajaxHttp from "@/api/index";
import {mapMutations} from 'vuex'

export default {
    data() {
        return {
            baseId: "",
            deviceInfoData: ""
        };
    },
    created() {
        this.checkRoutePath(this.$route.path)
    },
    components: {
        deviceOrSet
    },
    mounted() {
        if (this.$route.query.id) {
            this.baseId = this.$route.query.id;
            this.getBasDevInfo();
        } else {
            this.$router.push({
                path: "/index"
            });
        }
    },
    methods: {
        getBasDevInfo() {
            let data = {
                base_id: this.baseId
            };

            ajaxHttp
                .bastDeviceInfoFeath(data)
                .then(res => {
                    this.deviceInfoData = res.data;
                })
                .catch(err => {
                    this.$Message.error(err.message);
                });
        },
        toSeeDevicePc(item) {
            this.$router.push({
                path: "/assessPageInfo",
                query: {
                    id: item.device_id
                }
            });
        },
        ...mapMutations([
            'checkRoutePath'
        ])
    }
};
</script>

<style scoped>
</style>