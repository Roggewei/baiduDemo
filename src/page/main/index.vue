<template>
  <div>
    <el-button @click="post">demo</el-button>
    <el-radio v-model="radio"
      label="1">备选项</el-radio>
    <el-radio v-model="radio"
      label="2">备选项</el-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1'
    }
  },
  methods: {
    log() {
      this.$get({
        api: '/auth/addUrl/http://www.baidu.com',
        param: {}
      }).then(data => {
        console.log(data)
      })
    },
    post() {
      this.$post({
        api: '/auth/getUrlList',
        param: {
          current: 1,
          size: 10
        }
      }).then(data => {
        console.log(data)
      })
    }
  },
  mounted () {
    // if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    //   // window.location.href="移动端url"
    //   alert("mobile")
    // }
    // else {
    //   // window.location.href="pc端url"
    //   alert("pc")
    // }
  }
}
</script>

<style lang='scss' scoped>

</style>
