<template>
    <div class="my_container">
        <deviceOrSet title="我的主页"></deviceOrSet>
        <div class="main_cont_box">
            <div class="user_box">
                <div class="l_nav_user">
                    <div class="user_info">
                        <img src="../assets/images/title_img.jpg" alt="">
                        <div class="name">昵称</div>
                    </div>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '1'}" @click="lNavTitleChange('1')">我的资料</a>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '2'}" @click="lNavTitleChange('2')">我的评论</a>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '3'}" @click="lNavTitleChange('3')">头像设置</a>
                </div>
                <div class="r_cont_box">
                    <div class="user_data_box">
                        <div class="title_box">
                            <div class="l_name">{{lNavIndex === '1' ? '我的资料' : lNavIndex === '2' ? '我的评论' : '头像设置'}}</div>
                            <a class="bj_btn" v-if="lNavIndex === '2'" href="javascript:;" @click="toEnidMessage">{{radioShowBtn?'删除':'编辑'}}</a>
                        </div>
                        <div class="c_box" v-if="lNavIndex === '1'">
                            <div class="inset_first_box" v-if="true">
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">手机号</div>
                                        <div class="h_info_txt" v-if="false">123456789</div>
                                        <input type="number" class="h_info_input" v-else>
                                    </div>
                                    <div class="r_txt">编辑</div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">密码</div>
                                        <div class="h_info_txt" v-if="false">123456789</div>
                                        <div class="pass_input_box" v-else>
                                            <div class="pass_txt" v-if="true">未设置</div>
                                            <input class="r_input" type="text" placeholder="当前密码" v-else>
                                            <input class="r_input" type="text" placeholder="新密码">
                                            <input class="r_input" type="text" placeholder="确认新密码">
                                        </div>
                                    </div>
                                    <div class="r_txt">编辑</div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">昵称</div>
                                        <div class="h_info_txt" v-if="false">滴滴滴</div>
                                        <input type="number" class="h_info_input" v-else>
                                    </div>
                                    <div class="r_txt">编辑</div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">性别</div>
                                        <div class="h_info_txt" v-if="false">男</div>
                                        <div class="h_info_radio_box">
                                            <div class="item_radio">
                                                <input type="radio" id="one" value="男" v-model="SelectRadio">
                                                <label for="one">男</label>
                                            </div>
                                            <div class="item_radio">
                                                <input type="radio" id="one" value="女" v-model="SelectRadio">
                                                <label for="one">女</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="r_txt">编辑</div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">第三方</div>
                                        <img src="../assets/images/wx_icon.png" class="h_info_icon" alt="">
                                    </div>
                                    <div class="r_txt">绑定</div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">账号</div>
                                        <div class="h_info_btn">退出登陆</div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="inset_second_box" v-else>
                                <div class="item_box">
                                    <div class="l_label">手机号</div>
                                    <input class="r_input" type="number" placeholder="请输入你的手机号">
                                </div>
                                <div class="item_box">
                                    <div class="l_label">密码</div>
                                    <div class="input_box">
                                        <input class="r_input" type="text" placeholder="当前密码">
                                        <input class="r_input" type="text" placeholder="新密码">
                                        <input class="r_input" type="text" placeholder="确认新密码">
                                    </div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label">昵称</div>
                                    <input class="r_input" type="number" placeholder="请输入你的昵称">
                                </div>
                                <div class="item_box">
                                    <div class="l_label">性别</div>
                                    <div class="radio_box">
                                        <div class="item_radio">
                                            <input type="radio" id="one" value="男" v-model="SelectRadio">
                                            <label for="one">男</label>
                                        </div>
                                        <div class="item_radio">
                                            <input type="radio" id="one" value="女" v-model="SelectRadio">
                                            <label for="one">女</label>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                        <div class="c_box" v-if="lNavIndex === '2'">
                            <div class="message_user_box">
                                <div class="trem_box" v-for="(item, index) in userCommentList" :key="index">
                                    <div class="people_box">
                                        <div class="l_box">
                                            <img class="people_img" :src="item.acatar" alt="">
                                        </div>
                                        <div class="r_box">
                                            <div class="name">{{item.user_title}}</div>
                                            <div class="time_box">
                                                <div class="t_txt">{{item.add_time}}</div>
                                            </div>
                                        </div>
                                        <div class="rr_box" v-if="radioShowBtn">
                                            <input type="radio" :checked="item.radioShow" @click="radioChange(index)">
                                        </div>
                                    </div>
                                    <div class="message_box">
                                        <img class="l_icon" src="" alt="">
                                        <div class="txt_box">{{item.content}}</div>
                                    </div>
                                </div>
                                <div class="page_big_box">
                                    <pageItem v-if="pageNumData.length" :pageNumData="pageNumData" @changePage="changePage" :limit="limit"></pageItem>
                                </div>
                            </div>
                        </div>
                        <div class="c_box" v-if="lNavIndex === '3'">
                            <div class="select_user_img">
                                <div class="select_img">
                                    <div class="inset_img">
                                        <div class="upload_box">
                                            <div class="show_txt">
                                                <img src="../assets/images/add_icon.png" alt="">
                                                <div>选择图片</div>
                                            </div>
                                            <input type="file" class="fileInput">
                                        </div>
                                        <div class="js_txt">支持jpg,png大小不超过5M</div>
                                    </div>
                                    <div class="btn_box">
                                        <button>确定</button>
                                        <button>取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            SelectRadio: 'one',
            pageNumData:['','','','','',''],
            page: 1,
            limit: 4,
            lNavIndex: '1',
            userCommentList:[],
            radioShowBtn: false
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {},
    methods: {
        getUserCommentList () {
            let data = {
                token: JSON.parse(localStorage.getItem('userInfo')).token,
                user_id: JSON.parse(localStorage.getItem('userInfo')).user_id,
                page: this.page,
                limit: this.limit
            }
            ajaxHttp.usercommenFeath(data).then(res => {
                let data = res.data.list
                data.forEach(i => {
                    i.radioShow = false
                });
                this.userCommentList = data
                this.pageNumData = []
                if (res.data.total > 4) {
                    for (let i = 1; i< Math.ceil((res.data.total)/4) + 1;i++){
                        this.pageNumData.push(i)
                    }
                } else {
                    this.pageNumData.push(1)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        changePage (e) {
            this.page = e
            this.getUserCommentList()
        },
        lNavTitleChange (str) {
            this.lNavIndex = str
            console.log(str)
            if (str === '2') {
                this.getUserCommentList();
            }
        },
        toEnidMessage () {
            if (this.radioShowBtn) {

            } else {
                this.radioShowBtn = true
            }
        },
        radioChange (index) {
            console.log(22)
            let data = this.userCommentList[index]
            data.radioShow = !data.radioShow
            this.$set(this.userCommentList, index, data)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>