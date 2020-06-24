<template>
    <div class="container">
        <div class="top_box">
            <img class="top_img_t" src="../assets/images/title_img.jpg" alt="">
            <div class="sm_box">
                <div class="txt">{{title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data () {
        return {

        }
    },
}
</script>

<style scoped lang="scss">
    .container {
        height: 275px;
        position: relative;
        .top_box {
            height: 100%;
            .top_img_t {
                width: 100%;
                height: 100%;
                display: block;
            }
            .sm_box {
                position: absolute;
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                background: rgba(8,6,4,0.47);
                padding: 0 150px;
                box-sizing: border-box;
                .txt {
                    height: 67px;
                    line-height: 67px;
                    margin-top: 93px;
                    font-size:48px;
                    font-family:PingFangSC-Medium,PingFang SC;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                }
            }
        }
    }
</style>