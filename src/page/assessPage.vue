<template>
    <div class="assessPage_container">
        <deviceOrSet title="评估测评"></deviceOrSet>
        <div class="main_cont_box">
            <div class="product_box">
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
                </div>
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
                </div>
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
                </div>
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
                </div>
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
                </div>
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
                </div>
                <div class="trem_box">
                    <img class="img_header" src="../assets/images/title_img.jpg" alt="">
                    <div class="pc_name">评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测评测</div>
                    <div class="time_txt">2020年4月25日</div>
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
export default {
    data () {
        return {
            pageNumData: ['','','','','','','']
        }
    },
    components: {
        deviceOrSet,
        pageItem
    }
}
</script>

<style lang="scss" scoped>

</style>