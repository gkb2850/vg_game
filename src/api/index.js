import apiAxios from '../http/index'

export default {
    indexPlayeFeath: (data) => apiAxios('POST', '/api/player/getPlayerTitleList', data),//首页选手列表
    indexPlayeImgFeath: (data) => apiAxios('POST', '/api/player/getPlayList', data),//选手列表
    indexgetNewProFeath: (data) => apiAxios('POST', '/api/device/getNewList', data),//首页最近设备
    indexgetholdProFeath: (data) => apiAxios('POST', '/api/device/getClickList', data),//首页最新设备
    seePlayerInfoFeath: (data) => apiAxios('POST', '/api/player/getPlayInfo', data),//选手详情
    playerPageListFeath: (data) => apiAxios('POST', '/api/player/getPlayPageList', data),//选手列表页
    indexSearchFeath: (data) => apiAxios('POST', '/api/player/search', data),//搜索
    proDeviceInfoFeath: (data) => apiAxios('POST', '/api/device/getDeviceInfo', data),//设备信息
    proDeviceListFeath: (data) => apiAxios('POST', '/api/device/getList', data),//设备评测列表
    deviceConfigListFeath: (data) => apiAxios('POST', '/api/player/getDeviceConfigList', data),//选手设备与设置
    registerFeath: (data) => apiAxios('POST', '/api/user/register', data),//注册
    loginFeath: (data) => apiAxios('POST', '/api/user/login', data),//登录
    commentListFeath: (data) => apiAxios('POST', '/api/comment/getList', data),//评论列表
    submitPeocommenFeath: (data) => apiAxios('POST', '/api/comment/publishComment', data),//发表评论
    usercommenFeath: (data) => apiAxios('POST', '/api/comment/getUserCommentList', data),//用户评论列表
    questionListFeath: (data) => apiAxios('POST', '/api/question/getList', data),//问答列表
    questionInfoFeath: (data) => apiAxios('POST', '/api/question/getDetail', data),//问答详情
    bastDeviceListFeath: (data) => apiAxios('POST', '/api/device/getBastDeviceList', data),//状态栏最佳设备表
    bastDeviceInfoFeath: (data) => apiAxios('POST', '/api/device/getBastDeviceInfo', data),//最佳设备详情
    delCommentInfoFeath: (data) => apiAxios('POST', '/api/comment/delComment', data),//删除评论
    uploadImgFeath: (data) => apiAxios('POST', '/api/user/upFile', data),//图片上传
    getUserInfoFeath: (data) => apiAxios('POST', '/api/user/getUserInfo', data),//获取用户信息
    changeUserInfoFeath: (data) => apiAxios('POST', '/api/user/updateUserInfo', data),//更新用户信息
    updateUserImgFeath: (data) => apiAxios('POST', '/api/user/updateAvatar', data),//更新用户头像
    changePassFeath: (data) => apiAxios('POST', '/api/user/changePasswd', data),//修改密码
    gameCuideFeath: (data) => apiAxios('POST', '/api/player/gameGuide', data),//csgo游戏信息指导
    getReplyNumFeath: (data) => apiAxios('POST', '/api/user/get_reply_num', data),//回复数量
    loginOutFeath: (data) => apiAxios('POST', '/api/user/login_out', data),//注销token
    getReplyListFeath: (data) => apiAxios('POST', '/api/comment/get_reply_list', data),//回复列
    reportMessageFeath: (data) => apiAxios('POST', '/api/comment/report', data),//举报评论
    submitFeedbackFeath: (data) => apiAxios('POST', '/api/user/feedback', data),//反馈
    getMessageCodeFeath: (data) => apiAxios('POST', '/api/user/codeSend', data),//验证码发送
}