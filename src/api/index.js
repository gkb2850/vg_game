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
}