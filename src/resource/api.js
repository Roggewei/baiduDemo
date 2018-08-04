import Vue from 'vue'
import axios from 'axios'
// import qs from 'qs'

axios.defaults.baseURL = `${window.location.origin}/wp/`

axios.defaults.timeout = 50000
const vue = new Vue()

const create = (options = {}) => {
  return axios.create(options)
}

const callApi = method => {
  return function({ api, param, mock = false, axiosOptions = {} }) {
    if (mock) {
      axiosOptions = Object.assign(axiosOptions, {
        baseURL: 'https://easy-mock.com/mock/5ae2d5a02583f30c65a45cc4/wp/'
      })
    }

    const axios = create(axiosOptions)
    // const params = qs.stringify(JSON.stringify(param))

    return axios({
      method,
      url: api,
      data: param
    })
      .then(({ data: { retcode, retcontent, retdesc } }) => {
        if (retcode !== '0' && retcode !== 0) {
          vue.$message.error(`${retdesc}`)
          return Promise.reject(retdesc)
        }
        return retcontent
      })
      .catch(error => {
        vue.$message.error(`${error}`)
        // 统一处理错误然后再抛出错误,供调用者使用
        return Promise.reject(error)
      })
  }
}

const get = callApi('get')
const post = callApi('post')

export { get, post }
