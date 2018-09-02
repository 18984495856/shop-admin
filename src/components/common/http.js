import axios from 'axios'
import { Message } from 'element-ui'
// axios.defaults.baseURL = 'http://127.0.0.1/gues-ht/public'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.withCredentials = true
  // dev
  axios.defaults.baseURL = 'http://127.0.0.1/super/admin-ht/public'
  // axios.defaults.baseURL = 'http://www.luyuanling.com/guanjiaxiangqing-admin-ht/public'
} else {
  // build
  // axios.defaults.baseURL = 'http://www.luyuanling.com/guanjiaxiangqing-admin-ht/public'
  axios.defaults.baseURL = 'http://www.luyuanling.com/super/admin-ht/public'
}

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response === undefined)Message({message: error.message, type: 'error'})
    else if (error.response.status === undefined) Message({message: '服务器无响应', type: 'error'})
    else if (error.response.status === 422) {
      Message({message: error.response.data, type: 'error'})
    } else if (error.response.status === 401) {
      // 未登录状态码，跳转登陆页面
      Message({message: '请先登陆', type: 'warning'})
    } else {
      Message({message: '未知错误', type: 'error'})
    }
    return Promise.reject(error)
  }
)

export default axios
