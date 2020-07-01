<template>
    <div class="container">
        <div class="page_btn_box">
            <div class="f_btn btn" @click="pageToChange('left')">
                <a class="icon iconfont icon-zuojiantou_huaban"></a>
            </div>
            <div class="btn" v-for="(item, index) in pageArrayList" :key="index" @click="pageIndexChange(item)">
                <a :class="[pageIndex === item ? 'active' : '']">{{item}}</a>
            </div>
            <div class="l_btn btn" @click="pageToChange('right')">
                <a href="javascript:;" class="icon iconfont icon-youjiantou"></a>
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
            pageArrayList: [],
            pageIndex: 1,
            addIndex: 1,
            pageDataChange: false
        }
    },
    created () {
        
    },
    mounted () {
        
    },
    methods: {
        pageToChange (str) {
            this.pageDataChange = true
            switch (str) {
                case 'left':
                    this.pageIndex = --this.pageIndex < 1 ? 1 : this.pageIndex
                    if (this.pageArrayList[this.pageArrayList.length-1] - 10 > 0) {
                        let data = this.pageArrayList
                        data.forEach((i, oi) => {
                           this.$set(this.pageArrayList, oi, i+-1)
                        })
                    }
                break;
                case 'right':
                    if (10<this.pageIndex + 1 && this.pageIndex<this.pageNumData[this.pageNumData.length-1]) {
                        console.log(this.pageArrayList)
                        let data = this.pageArrayList
                        data.forEach((i, oi) => {
                           this.$set(this.pageArrayList, oi, i+1)
                        })
                    }
                    this.pageIndex = ++this.pageIndex > this.pageNumData[this.pageNumData.length-1] ? this.pageNumData[this.pageNumData.length-1] : this.pageIndex
                    console.log(this.pageIndex)
                break;
            }
        },
        pageIndexChange (index) {
            this.pageIndex = index
            this.$emit('changePage', index)
        }
    },
    watch: {
        pageNumData (val) {
            if (this.pageDataChange) {
                return
            }
            console.log(123)
            if (val.length > 10) {
                for (let i=1;i<11;i++) {
                    this.$set(this.pageArrayList, i-1, i)
                }
            } else {
                this.pageArrayList = this.pageNumData
            }
        },
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
                height: 100%;
                width: 32px;
                margin-right: 8px;
                a {
                    line-height: 30px;
                    text-align: center;
                    font-size:14px;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(77,54,98,1);
                    background: #EDEBEF;
                    width: 100%;
                    border: none;
                    outline: none;
                    text-decoration: none;
                    background: transparent;
                    text-align: center;
                    display: block;
                    height: 100%;
                }
                a.active {
                    color: #fff;
                    background: #8C6F9A;
                }
            }
            .btn:last-child {
                margin: 0;
            }
        }
    }
</style>