<template>
    <div class="my_container">
        <deviceOrSet title="我的主页"></deviceOrSet>
        <div class="main_cont_box">
            <div class="user_box">
                <div class="l_nav_user">
                    <div class="user_info">
                        <img :src="userInfoTxt.avatar" alt="">
                        <div class="name">{{userInfoTxt.title}}</div>
                    </div>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '1'}" @click="lNavTitleChange('1')">我的资料</a>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '2'}" @click="lNavTitleChange('2')">发出的评论</a>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '3'}" @click="lNavTitleChange('3')">收到的评论</a>
                    <a href="javascript:;" :class="{trem_txt: true, active: lNavIndex === '4'}" @click="lNavTitleChange('4')">头像设置</a>
                </div>
                <div class="r_cont_box">
                    <div class="user_data_box">
                        <div class="title_box">
                            <div class="l_name">{{lNavIndex === '1' ? '我的资料' : lNavIndex === '2' ? '发出的评论' : lNavIndex === '3' ? '收到的评论' : '头像设置'}}</div>
                            <!-- <div class="a_btn_box">
                                <a class="bj_btn" v-if="lNavIndex === '2'" href="javascript:;" @click="toEnidMessage">{{radioShowBtn?'删除':'编辑'}}</a>
                                <a class="bj_btn" v-if="radioShowBtn && lNavIndex === '2'" href="javascript:;" @click="toEnidChangeSuccess">完成</a>
                            </div> -->
                        </div>
                        <div class="c_box" v-if="lNavIndex === '1'">
                            <div class="inset_first_box" v-if="true">
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">手机号</div>
                                        <div class="h_info_txt" v-if="userPhoneShow">{{userInfoTxt.mobile}}</div>
                                        <input type="text" class="h_info_input" v-else v-model="userInfoEdit.phone" @keydown="changeSecondPhoneInput">
                                    </div>
                                    <div class="btn_a_box">
                                        <a class="r_txt" @click="editUserInfo('phone')">编辑</a>
                                        <a class="r_txt" v-if="!userPhoneShow" @click="changeSuccessInfo('phone')">完成</a>
                                    </div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">密码</div>
                                        <div class="h_info_txt" v-if="userPassShow">{{userInfoEdit.passwd === 1 ? '已设置' : '未设置'}}</div>
                                        <div class="pass_input_box" v-else>
                                            <div class="pass_txt" v-if="userInfoEdit.passwd !== 1">{{userInfoEdit.passwd === 1 ? '已设置' : '未设置'}}</div>
                                            <input class="r_input" type="password" placeholder="原密码" v-model="password" v-else>
                                            <input class="r_input" type="password" placeholder="新密码" v-model="userInfoEdit.pass" @blur="seePassOryz('first')">
                                            <input class="r_input" type="password" placeholder="确认新密码" v-model="userInfoEdit.passs" @blur="seePassOryz('second')">
                                        </div>
                                    </div>
                                    <div class="btn_a_box">
                                        <a class="r_txt" @click="editUserInfo('pass')">编辑</a>
                                        <a class="r_txt" v-if="!userPassShow" @click="changeSuccessInfo('pass')">完成</a>
                                    </div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">昵称</div>
                                        <div class="h_info_txt" v-if="userNameShow">{{userInfoTxt.title}}</div>
                                        <input type="text" class="h_info_input" v-else v-model="userInfoEdit.title">
                                    </div>
                                    <div class="btn_a_box">
                                        <a class="r_txt" @click="editUserInfo('name')">编辑</a>
                                        <a class="r_txt" v-if="!userNameShow" @click="changeSuccessInfo('name')">完成</a>
                                    </div>
                                </div>
                                <div class="item_box">
                                    <div class="l_label_box">
                                        <div class="h_txt">性别</div>
                                        <div class="h_info_txt" v-if="userSexShow">{{userInfoTxt.gender?userInfoTxt.gender === 1 ? '男' : '女' :'未选择'}}</div>
                                        <div class="h_info_radio_box" v-else>
                                            <div class="item_radio" @click="radioSex">
                                                <input type="radio" :checked="radiotxtBtn">
                                                <label for="one">男</label>
                                            </div>
                                            <div class="item_radio"  @click="radioSex">
                                                <input type="radio" :checked="!radiotxtBtn">
                                                <label for="one">女</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="btn_a_box">
                                        <a class="r_txt" @click="editUserInfo('sex')">编辑</a>
                                        <a class="r_txt" v-if="!userSexShow" @click="changeSuccessInfo('sex')">完成</a>
                                    </div>
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
                                        <div class="h_info_btn" @click="toLoginOut">退出登陆</div>
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
                                    <div class="title_box">
                                        <div class="l_box">
                                            <div class="name">{{item.user_title}}</div>    
                                            <div class="time">{{item.add_time}}</div>    
                                        </div>
                                        <div class="r_box">
                                            <a class="txt_a_btn" href="javascript:;" @click="toSeeMessageBox(item.comment_id)">删除</a>    
                                        </div>   
                                    </div>
                                    <div class="setout_message_box">
                                        <span class="fh_txt" v-if="item.comment_type !== 2">回复<span class="people_name">{{item.parent_user_title}}</span>：</span>
                                        <span class="my_fh_message">{{item.content}}</span>
                                    </div>
                                    <div class="comment_main">
                                        <span class="f_txt">{{item.comment_type === 2 ? '评论此文章' : item.parent_user_title + '的评论'}}</span>
                                        <span class="c_txt">{{item.comment_type === 2 ? item.article_title : item.parent_content}}</span>
                                    </div>
                                </div>
                                <div class="page_big_box">
                                    <pageItem v-if="pageNumDataF.length" :pageNumData="pageNumDataF" @changePage="changePage" :limit="limitF"></pageItem>
                                </div>
                            </div>
                        </div>
                        <div class="c_box" v-if="lNavIndex === '3'">
                            <div class="message_user_box">
                                <div class="trem_box" v-for="(item, index) in hfMessageList" :key="index">
                                    <div class="title_box">
                                        <div class="l_box">
                                            <div class="name">{{item.user_title}}</div>    
                                            <div class="time">{{item.add_time}}</div>
                                        </div>
                                        <div class="r_box" @mousemove="jbBtnMove(index)" @mouseleave="jbBtnMove(-1)" v-if="item.report !== 1">
                                            <img :src="bjBtnActive ? jbBtnImgActive : jbBtnImg" alt="">
                                            <a class="btn" href="javascript:;" v-if="bjBtnActive === index" @click="toJBMessages(item)">举报</a>   
                                        </div>   
                                    </div>
                                    <div class="setout_message_box">
                                        <span class="fh_txt">回复<span class="people_name">{{item.parent_user_title}}</span></span>
                                        <span class="my_fh_message">：{{item.content}}</span>
                                    </div>
                                    <div class="comment_main">
                                        <span class="f_txt">{{item.parent_user_title}}的评论:</span>
                                        <span class="c_txt">{{item.parent_content}}</span>
                                    </div>
                                </div>
                                <div class="page_big_box">
                                    <pageItem v-if="pageNumDataS.length" :pageNumData="pageNumDataS" @changePages="changePages" :limit="limitS" ItemIdex='2'></pageItem>
                                </div>
                            </div>
                        </div>
                        <div class="c_box" v-if="lNavIndex === '4'">
                            <div class="select_user_img">
                                <div class="select_img">
                                    <div class="inset_img">
                                        <div class="upload_box" v-if="!uploadImgSrc">
                                            <div class="show_txt">
                                                <img src="../assets/images/add_icon.png" alt="">
                                                <div>选择图片</div>
                                            </div>
                                            <input type="file" accept="image/*" ref="fileImg" class="fileInput" @change="selectImgUpload">
                                        </div>
                                        <div class="select_upload_img" v-else>
                                            <img :src="uploadImgSrc" alt="">
                                            <input type="file" accept="image/*" ref="fileImg" class="fileInput" @change="selectImgUpload">
                                        </div>
                                        <div class="js_txt">支持jpg,png大小不超过5M</div>
                                    </div>
                                    <div class="btn_box">
                                        <button @click="toUploadImg">确定</button>
                                        <button @click="toQXUploadImg">取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <Modal
        title="退出"
        v-model="loginOutBoxShow"
        @on-ok="sureLoginOut"
        class-name="vertical-center-modal">
        <p>确定退出登陆吗？</p>
    </Modal> -->
    <div class="message_mask_box" @mousewheel.prevent v-if="messageBoxMaskShow">
        <div class="cont_box">
            <div class="title">确定要删除该回复么？</div>
            <div class="btn_box">
                <button @click.stop="toSureDelMessageUser">确定</button>
                <button @click="tohideMessageBox">取消</button>
            </div>
        </div>
    </div>
    <div class="message_mask_box" @mousewheel.prevent v-if="messageBoxJBMaskShow">
        <div class="cont_box">
            <div class="title">确定要举报该评论么？</div>
            <div class="btn_box">
                <button @click.stop="reportToMessageChange">确定</button>
                <button @click="tohideMessageBoxJB">取消</button>
            </div>
        </div>
    </div>
    <div class="message_mask_box" @mousewheel.prevent v-if="loginOutBoxShow" @click="tohideLoginOutBox">
        <div class="cont_box">
            <div class="title">确定要退出么？</div>
            <div class="btn_box">
                <button @click="sureLoginOut">确定</button>
                <button @click="tohideLoginOutBox">取消</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import deviceOrSet from '@/components/topImgItem.vue'
import pageItem from '@/components/pageItem.vue'
import ajaxHttp from '@/api/index'
import Axios from 'axios'
import Qs from 'qs';
import {mapMutations} from 'vuex'

export default {
    data () {
        return {
            jbBtnImgActive: require('../assets/images/jt_tobot_active_icon.png'),
            jbBtnImg: require('../assets/images/jt_tobot_icon.png'),
            bjBtnActive: -1,
            radiotxtBtn: true,
            pageNumDataF:[],
            pageNumDataS:[],
            pageF: 1,
            limitF: 4,
            pageS: 1,
            limitS: 4,
            lNavIndex: '1',
            userCommentList:[],
            radioShowBtn: false,
            uploadImgFile: '',
            uploadImgSrc: '',
            userInfoTxt: '',
            userInfoEdit: {
                title: '',
                phone: '',
                pass: '',
                passs:''
            },
            userNameShow: true,
            userPhoneShow: true,
            userSexShow: true,
            loginOutBoxShow: false,
            userPassShow: true,
            password: '',
            messageBoxMaskShow: false,
            hfMessageList: [],
            userCommentId: '',
            userMessageCommentId: '',
            messageBoxJBMaskShow: false
        }
    },
    components: {
        deviceOrSet,
        pageItem
    },
    mounted () {
        this.getUserInfoToHttp()
    },
    methods: {
        getUserCommentList () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.changeisLogin(false)
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                page: this.pageF,
                limit: this.limitF
            }
            ajaxHttp.usercommenFeath(data).then(res => {
                let data = res.data.list
                data.forEach(i => {
                    i.radioShow = false
                });
                this.userCommentList = data
                this.pageNumDataF = []
                if (res.data.total > 4) {
                    for (let i = 1; i< Math.ceil((res.data.total)/4) + 1;i++){
                        this.pageNumDataF.push(i)
                    }
                } else if (res.data.total > 0 && res.data.total <= 4) {
                    this.pageNumDataF.push(1)
                }
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        changeSecondPhoneInput (e) {
            if (!e.key) {
                return
            }
            let a = e.key.replace(/[^\d]/g, "");
            if (!a && e.keyCode !== 8) {
              e.preventDefault();
            }
        },
        changePage (e) {
            if (this.pageF === e) {
                return
            }
            this.pageF = e
            this.getUserCommentList()
        },
        changePages (e) {
            if (this.pageS === e) {
                return
            }
            this.pageS = e
            this.getHFMessageList()
        },
        lNavTitleChange (str) {
            this.lNavIndex = str
            if (str === '2') {
                this.getUserCommentList();
            } else if (str === '1') {
                this.getUserInfoToHttp();
            } else if (str === '3') {
                this.getHFMessageList();
            }
        },
        // toEnidMessage () {
        //     if (this.radioShowBtn) {
        //         let arr = []
        //         this.userCommentList.forEach(i => {
        //             if (i.radioShow) {
        //                 arr.push(i.comment_id)
        //             }
        //         })
        //         let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        //         if (!userInfo) {
        //             this.$Message.error('用户状态失效，请重新登录')
        //             this.$router.push('/index')
        //             return
        //         }
        //         let data = {
        //             token: userInfo.token,
        //             user_id: userInfo.user_id,
        //             comment_id: arr.join(',')
        //         }
        //         ajaxHttp.delCommentInfoFeath(data).then(res => {
        //             this.$Message.success('删除成功')
        //             this.getUserCommentList()
        //         }).catch(err => {
        //             this.$Message.error(err.message)
        //         })
        //     } else {
        //         this.radioShowBtn = true
        //     }
        // },
        radioChange (index) {
            let data = this.userCommentList[index]
            data.radioShow = !data.radioShow
            this.$set(this.userCommentList, index, data)
        },
        // toEnidChangeSuccess () {
        //     this.radioShowBtn = false
        // },
        selectImgUpload () {
            let that = this
            this.uploadImgFile = this.$refs.fileImg.files[0]
            var reads= new FileReader();
            reads.readAsDataURL(this.uploadImgFile);
            reads.onload=function (e) {
                that.uploadImgSrc = e.target.result
            };
        },
        toUploadImg () {
            let that = this
            if (this.uploadImgFile === '') {
                this.$Message.error('请先上传图片')
                return
            }
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.$router.push('/index')
                return
            }
            let file = new FormData()
            file.append('file', this.uploadImgFile);
            file.append('token', userInfo.token);
            file.append('user_id', userInfo.user_id);
            let headers = {'Content-Type': 'multipart/form-data'}
            Axios.post(process.env.API_ROOT + '/api/user/upFile', file, headers).then(res => {
                if (res.data.code === 1) {
                    this.uploadImgSrc = res.data.data.url
                    this.uploadUserImg()
                } else if (res.data.code === -1) {
                    this.$Message.error('登陆超时，请重新登录')
                    localStorage.removeItem('userInfo')
                    location.reload()
                }
          }).catch(err => {
              this.$Message.error(err.data.message)
          })
        },
        uploadUserImg () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                avatar_url: this.uploadImgSrc,
                user_id: userInfo.user_id
            }
            ajaxHttp.updateUserImgFeath(data).then(res => {
                this.$Message.success('图片上传成功')
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        getUserInfoToHttp () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id
            }
            ajaxHttp.getUserInfoFeath(data).then(res => {
                this.userInfoTxt = res.data.user_info
                // this.userInfoEdit = res.data.user_info
                this.userInfoEdit.title = res.data.user_info.title
                this.userInfoEdit.phone = res.data.user_info.mobile
                this.userInfoEdit.title = res.data.user_info.title
                this.$set(this.userInfoEdit, 'passwd', res.data.user_info.passwd)
                this.uploadImgSrc = res.data.user_info.avatar
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        editUserInfo (str) {
            switch (str) {
                case 'phone':
                    this.userPhoneShow = false
                break;
                case 'name':
                    this.userNameShow = false
                break;
                case 'sex':
                    this.userSexShow = false
                break;
                case 'pass': 
                    this.userPassShow = false
                break;
            }
        },
        changeSuccessInfo (str) {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
             switch (str) {
                case 'phone':
                    console.log(this.userInfoEdit.phone)
                    if(!(/^1[3456789]\d{9}$/.test(this.userInfoEdit.phone))){ 
                        this.$Message.warning("手机号码有误，请重填");
                        this.userInfoEdit.phone = ''
                        return
                    }
                    this.userPhoneShow = true
                    if (!userInfo) {
                        this.$Message.error('用户状态失效，请重新登录')
                        this.$router.push('/index')
                        return
                    }
                    let dataP = {
                        token: userInfo.token,
                        user_id: userInfo.user_id,
                        mobile: this.userInfoEdit.phone
                    }
                    ajaxHttp.changeUserInfoFeath(dataP).then(res => {
                        this.$Message.success('更新成功')
                        this.getUserInfoToHttp()
                    }).catch(err => {
                        this.$Message.error(err.message)
                    })
                break;
                case 'name':
                    this.userNameShow = true
                    if (!userInfo) {
                        this.$Message.error('用户状态失效，请重新登录')
                        this.$router.push('/index')
                        return
                    }
                    let dataN = {
                        token: userInfo.token,
                        user_id: userInfo.user_id,
                        title: this.userInfoEdit.title
                    }
                    ajaxHttp.changeUserInfoFeath(dataN).then(res => {
                        this.$Message.success('更新成功')
                        this.getUserInfoToHttp()
                    }).catch(err => {
                        this.$Message.error(err.message)
                    })
                break;
                case 'sex':
                    this.userSexShow = true
                    if (!userInfo) {
                        this.$Message.error('用户状态失效，请重新登录')
                        this.$router.push('/index')
                        return
                    }
                    let dataS = {
                        token: userInfo.token,
                        user_id: userInfo.user_id,
                        gender: this.radiotxtBtn ? 1 : 2
                    }
                    ajaxHttp.changeUserInfoFeath(dataS).then(res => {
                        this.$Message.success('更新成功')
                        this.getUserInfoToHttp()
                    }).catch(err => {
                        this.$Message.error(err.message)
                    })
                break;
                case 'pass':
                    this.userPassShow = true
                    if (!userInfo) {
                        this.$Message.error('用户状态失效，请重新登录')
                        this.$router.push('/index')
                        return
                    }
                    let dataSS = {
                        token: userInfo.token,
                        user_id: userInfo.user_id,
                        passwd: this.password,
                        passwd_new: this.userInfoEdit.passs
                    }
                    ajaxHttp.changePassFeath(dataSS).then(res => {
                        this.$Message.success('更新成功')
                        this.getUserInfoToHttp()
                    }).catch(err => {
                        this.$Message.error(err.message)
                    })
                break;
            }
        },
        radioSex () {
            this.radiotxtBtn = !this.radiotxtBtn
        },
        toLoginOut () {
            this.loginOutBoxShow = true
        },
        sureLoginOut () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.$router.push('/index')
                this.loginOutBoxShow = false
                this.changeisLogin(false)
                return
            }

            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id
            }
            ajaxHttp.loginOutFeath(data).then(res => {
                this.loginOutBoxShow = false
                localStorage.removeItem('userInfo')
                this.changeisLogin(false)
                this.$router.push({path: '/index'})
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
        tohideLoginOutBox () {
            this.loginOutBoxShow = false
        },
        seePassOryz (str) {
            if (str ==='first') {
                if (this.userInfoEdit.pass.length < 8 || this.userInfoEdit.pass.length> 20) {
                    this.$Message.error('密码个数在8-20位之间')
                    this.userInfoEdit.pass = ''
                    return
                }
            } else {
                if (this.userInfoEdit.passs.length < 8 || this.userInfoEdit.passs.length> 20) {
                    this.$Message.error('密码个数在8-20位之间')
                    this.userInfoEdit.passs = ''
                    return
                }

                if (this.userInfoEdit.pass !== this.userInfoEdit.passs) {
                    this.$Message.error('两次密码不一致')
                    this.userInfoEdit.passs = ''
                    return
                }
            }
        },
        toQXUploadImg () {
            if (this.userInfoTxt.avatar !== this.uploadImgSrc) {
                this.uploadImgSrc = this.userInfoTxt.avatar
                this.$Message.success('已取消上传')
            } else {
                this.$Message.warning('你暂未添加图片')
            }
        },
        toSeeMessageBox (id) {
            this.messageBoxMaskShow = true
            this.userCommentId = id
        },
        tohideMessageBox () {
            this.messageBoxMaskShow = false
        },
        tohideMessageBoxJB () {
            this.messageBoxJBMaskShow = false
        },
        jbBtnMove (index) {
            this.bjBtnActive = index
        },
        getHFMessageList () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.$router.push('/index')
                this.changeisLogin(false)
                return
            }

            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                page: this.pageS,
                limit: this.limitS
            }
            ajaxHttp.getReplyListFeath(data).then(res => {
                console.log(res)
                this.hfMessageList = res.data.list
                this.pageNumDataS = []
                if (res.data.total > 4) {
                    for (let i = 1; i< Math.ceil((res.data.total)/4) + 1;i++){
                        this.pageNumDataS.push(i)
                    }
                } else if (res.data.total > 0 && res.data.total <= 4) {
                    this.pageNumDataS.push(1)
                }
            }).catch(err => {
                console.log(err)
            })
        },
        toSureDelMessageUser () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.changeisLogin(false)
                this.$router.push('/index')
                return
            }
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                comment_id: this.userCommentId
            }
            ajaxHttp.delCommentInfoFeath(data).then(res => {
                this.$Message.success('删除成功')
                this.messageBoxMaskShow = false
                this.getUserCommentList()
            }).catch(err => {
                this.messageBoxMaskShow = false
                this.$Message.error(err.message)
            })
        },
        toJBMessages (item) {
            this.userMessageCommentId = item.comment_id
            this.messageBoxJBMaskShow = true
        },
        reportToMessageChange () {
            let userInfo = JSON.parse(localStorage.getItem('userInfo'))
            if (!userInfo) {
                this.$Message.error('用户状态失效，请重新登录')
                this.changeisLogin(false)
                this.$router.push('/index')
                return
            }
            this.messageBoxJBMaskShow = false
            let data = {
                token: userInfo.token,
                user_id: userInfo.user_id,
                comment_id: this.userMessageCommentId
            }
            ajaxHttp.reportMessageFeath(data).then(res => {
                this.$Message.error('举报成功')
                this.getHFMessageList()
            }).catch(err => {
                this.$Message.error(err.message)
            })
        },
         ...mapMutations([
            'changeisLogin'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>