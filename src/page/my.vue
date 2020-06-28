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
                    <div class="trem_txt active">我的资料</div>
                    <div class="trem_txt">我的评论</div>
                    <div class="trem_txt">头像设置</div>
                </div>
                <div class="r_cont_box">
                    <div class="user_data_box">
                        <div class="title_box">
                            <div class="l_name">我的资料</div>
                        </div>
                        <div class="c_box" v-if="true">
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
                        <div class="c_box" v-if="false">
                            <div class="message_user_box">
                                <div class="trem_box">
                                    <div class="people_box">
                                        <div class="l_box">
                                            <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                                        </div>
                                        <div class="r_box">
                                            <div class="name">露娜的冬瓜</div>
                                            <div class="time_box">
                                                <div class="t_txt">2020年5月23日下午4:19</div>
                                            </div>
                                        </div>
                                        <div class="rr_box">
                                            <input type="radio">
                                        </div>
                                    </div>
                                    <div class="message_box">
                                        <img class="l_icon" src="" alt="">
                                        <div class="txt_box">在徐州人家小区，发现白云南区9号楼2单元门前停放一辆电动自行车，从该楼高层甩下来一根黄色电线，正在充电</div>
                                    </div>
                                    <div class="page_big_box">
                                        <pageItem :pageNumData="pageNumData"></pageItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="c_box" v-if="false">
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
export default {
    data () {
        return {
            SelectRadio: 'one',
            pageNumData:['','','','','','']
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