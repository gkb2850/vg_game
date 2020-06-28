import apiAxios from '../http/index'
console.log(apiAxios)

export default {
    indexPlayeFeath: (data) => apiAxios('post', '/api/player/getPlayerTitleList', data)
}