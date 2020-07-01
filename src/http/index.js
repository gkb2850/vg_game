import Qs from 'qs';
import Vue from 'vue'
import { Spin } from 'view-design';
import 'view-design/dist/styles/iview.css';

// 配置API接口地址
var root = process.env.API_ROOT
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
 
function apiAxios (method, url, params={}, that) {
    return new Promise((resolve, reject) => {
        if (params) {
            params = filterNull(params)
        }
          axios({
            method: method,
            url: url,
            data: method === 'POST' || method === 'PUT' ? Qs.stringify(params) : null,
            params: method === 'GET' || method === 'DELETE' ? params : null,
            baseURL: root,
            withCredentials: false,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          }).then(function (res) {
            if (res.data.code === 1) {
                resolve(res.data)
            } else if (res.data.code === -1) {//需要登录
              Message.error('登陆超时，请重新登录')
              localStorage.removeItem('userInfo')
            } else {
              reject(res.data)
            }
          }).catch(function (err) {
            reject(err.data)
          })
    })
}
 
// 返回在vue模板中的调用接口
export default apiAxios