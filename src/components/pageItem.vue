<template>
    <div class="container">
        <div class="page_btn_box">
            <div class="f_btn btn">
                <button class="icon iconfont icon-zuojiantou_huaban"></button>
            </div>
            <div class="btn" v-for="(item, index) in pageNumData" :key="index">
                <button>{{index + 1}}</button>
            </div>
            <div class="l_btn btn">
                <button class="icon iconfont icon-youjiantou"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pageNumData: {
            type: Array,
            default: []
        }
    },
    data () {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
    .container {
        padding: 49px 0;
        box-sizing: border-box;
        .page_btn_box {
            height: 32px;
            display: flex;
            justify-content: flex-end;
            .btn {
                box-sizing: border-box;
                border: 1px solid #8C6F9A;
                border-radius: 2px;
                background: #EDEBEF;
                height: 100%;
                width: 32px;
                margin-right: 8px;
                button {
                    line-height: 30px;
                    text-align: center;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(77,54,98,1);
                    background: transparent;
                    width: 100%;
                    border: none;
                    outline: none;
                }
            }
            .btn:last-child {
                margin: 0;
            }
        }
    }
</style>