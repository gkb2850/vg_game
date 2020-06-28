<template>
    <div class="grameUserInfo_container">
        <deviceOrSet title="CS GO 玩家们"></deviceOrSet>
        <div class="main_box">
            <div class="js_title_box">
                <div class="people_box">
                    <img src="../assets/images/title_img.jpg" class="img_user" alt="">
                    <div class="cont_box_people">
                        <div class="zd_name_box">
                            <img src="../assets/images/title_img.jpg" alt="">
                            <div>超强队员LOPJBKL</div>
                        </div>
                        <div class="or_txt">又名：lipou</div>
                        <div class="zd_name_box">
                            <img src="../assets/images/title_img.jpg" alt="">
                            <div>超强队员LOPJBKL</div>
                        </div>
                        <div class="xx_txt">超强队员LOPJBKL于1997年10月2日出生，目前为Natus Vincere作为AWPer参赛。</div>
                    </div>
                    <div class="bot_box_people">
                        <img src="../assets/images/tt_icon.png" alt="">
                        <img src="../assets/images/sz_icon.png" alt="">
                        <img src="../assets/images/fb_icon.png" alt="">
                        <img src="../assets/images/dx_icon.png" alt="">
                    </div>
                </div>
                <div class="game_sz_info">
                    <div class="table_info_st">
                        <div class="title">鼠标设置– ZOWIE FK1 + DIVINA EDITION</div>
                        <div class="table_title">
                            <div class="txt" v-for="(item, index) in setTabelTitleFirst" :key="index">{{item}}</div>
                        </div>
                        <div class="table_cont_txt">
                            <div class="txt">400</div>
                            <div class="txt">3.09</div>
                            <div class="txt">1236</div>
                            <div class="txt">上</div>
                            <div class="txt">1000</div>
                            <div class="txt">1.00</div>
                            <div class="txt">6</div>
                            <div class="txt">关</div>
                        </div>
                    </div>
                    <div class="table_info_st">
                        <div class="title">显示器设置– BENQ XL2540</div>
                        <div class="table_title">
                            <div class="txt" v-for="(item, index) in setTabelTitleSecond" :key="index">{{item}}</div>
                        </div>
                        <div class="table_cont_txt">
                            <div class="txt">1280x960</div>
                            <div class="txt">4:3</div>
                            <div class="txt">拉长的</div>
                            <div class="txt">240</div>
                        </div>
                    </div>
                    <div class="str_info_st">
                        <div class="title">十字线</div>
                        <div class="c_txt">cl_crosshairalpha 255; cl_crosshaircolor 4; cl_crosshairdot 1; cl_crosshairgap 0; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1; cl_crosshaircolor_r 255; cl_crosshaircolor_g 255; cl_crosshaircolor_b 165;</div>
                    </div>
                    <div class="str_info_st">
                        <div class="title">视图模型</div>
                        <div class="c_txt">cl_crosshairalpha 255; cl_crosshaircolor 4; cl_crosshairdot 1; cl_crosshairgap 0; cl_crosshairsize 2; cl_crosshairstyle 4; cl_crosshairusealpha 1; cl_crosshairthickness 0; cl_crosshair_drawoutline 0; cl_crosshair_sniper_width 1; cl_crosshaircolor_r 255; cl_crosshaircolor_g 255; cl_crosshaircolor_b 165;</div>
                    </div>
                    <div class="str_info_st">
                        <div class="title">CL_BOB</div>
                        <div class="c_txt">滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴滴</div>
                    </div>
                </div>
            </div>
            <div class="cont_product_box">
                <div class="first_box">
                    <div class="title">他的设备</div>
                    <div class="cont_box">
                        <div class="trem_box">
                            <img class="product_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name_box">
                                <div class="line"></div>
                                <div class="txt">鼠标</div>
                                <div class="line"></div>
                            </div>
                            <div class="name_info_box">
                                <span>罗技-huoplpyh</span>
                            </div>
                        </div>
                         <div class="trem_box">
                            <img class="product_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name_box">
                                <div class="line"></div>
                                <div class="txt">鼠标</div>
                                <div class="line"></div>
                            </div>
                            <div class="name_info_box">
                                <span>罗技-huoplpyh</span>
                            </div>
                        </div>
                         <div class="trem_box">
                            <img class="product_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name_box">
                                <div class="line"></div>
                                <div class="txt">鼠标</div>
                                <div class="line"></div>
                            </div>
                            <div class="name_info_box">
                                <span>罗技-huoplpyh</span>
                            </div>
                        </div>
                         <div class="trem_box">
                            <img class="product_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name_box">
                                <div class="line"></div>
                                <div class="txt">鼠标</div>
                                <div class="line"></div>
                            </div>
                            <div class="name_info_box">
                                <span>罗技-huoplpyhhuoplpyh</span>
                            </div>
                        </div>
                         <div class="trem_box">
                            <img class="product_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name_box">
                                <div class="line"></div>
                                <div class="txt">鼠标</div>
                                <div class="line"></div>
                            </div>
                            <div class="name_info_box">
                                <span>罗技-huoplpyh</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="second_box">
                    <div class="title">他的队友</div>
                    <div class="cont_box">
                        <div class="trem_box">
                            <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name">超强队员LOPJBKL</div>
                        </div>
                        <div class="trem_box">
                            <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name">超强队员LOPJBKL</div>
                        </div>
                        <div class="trem_box">
                            <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name">超强队员LOPJBKL</div>
                        </div>
                        <div class="trem_box">
                            <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                            <div class="name">超强队员LOPJBKL</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment_message_box">
                <div class="title">关于CS GO设备与设置的评论 (1233条)</div>
                <div class="cont_box">
                    <div class="trem_box">
                        <div class="people_box">
                            <div class="l_box">
                                <img class="people_img" src="../assets/images/title_img.jpg" alt="">
                            </div>
                            <div class="r_box">
                                <div class="name">露娜的冬瓜</div>
                                <div class="time_box">
                                    <div class="t_txt">2020年5月23日下午4:19</div>
                                    <a href="javascript:;">回复Ta</a>
                                </div>
                            </div>
                        </div>
                        <div class="message_box">
                            <img class="l_icon" src="" alt="">
                            <div class="txt_box">在徐州人家小区，发现白云南区9号楼2单元门前停放一辆电动自行车，从该楼高层甩下来一根黄色电线，正在充电</div>
                        </div>
                    </div>
                </div>
                <pageItem :pageNumData="pageNumData"></pageItem>
            </div>
            <div class="submit_messages_box">
                <div class="title">发表评论</div>
                <textarea class="sr_messages" placeholder="请输入你要发表的评论"></textarea>
                <div class="submit_btn">
                    <button>提交</button>
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
            setTabelTitleFirst: [
                'DPI',
                '灵敏度',
                'eDPI',
                '原始输入',
                '赫兹',
                '变焦灵敏度',
                'windos灵敏度',
                '鼠标加速'
            ],
            setTabelTitleSecond: [
                '解析度',
                '长度比',
                '缩放模式',
                '赫兹'
            ],
            pageNumData:['','','','','','','','','']
        }
    },
    components: {
        deviceOrSet,
        pageItem
    }
}
</script>

<style scoped>

</style>