<template>
  <div class="content">

<el-menu :default-active="activeIndex" align="center" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">最新资讯</el-menu-item>
  <el-submenu index="2">
    <template slot="title">技术教程</template>
    <el-menu-item index="2-1">网赚教程</el-menu-item>
    <el-menu-item index="2-2">it教程</el-menu-item>
    <el-menu-item index="2-3">泡妹教程</el-menu-item>
    <!-- <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu> -->
  </el-submenu>
  <el-submenu index="3">
    <template slot="title">活动线报</template>
    <el-menu-item index="3-1">现金活动</el-menu-item>
    <el-menu-item index="3-2">实物活动</el-menu-item>
    <el-menu-item index="3-3">话费活动</el-menu-item>
    <el-menu-item index="3-4">超级活动</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
    <template slot="title">软件下载</template>
    <el-menu-item index="4-1">PC软件</el-menu-item>
    <el-menu-item index="4-2">App软件</el-menu-item>
    <el-menu-item index="4-3">qq软件</el-menu-item>
    <el-menu-item index="4-4">辅助软件</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
    <template slot="title">开源项目</template>
    <el-menu-item index="5-1">企业网站源码</el-menu-item>
    <el-menu-item index="5-2">个人网站源码</el-menu-item>
    <el-menu-item index="5-3">ps模板源码</el-menu-item>
    <el-menu-item index="5-3">Ai模板源码</el-menu-item>
    <el-menu-item index="5-3">其他源码</el-menu-item>
  </el-submenu>
  <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
</el-menu>
<div class="line"></div>
  </div>
</template>

<script type="text/ecmascript-6">



export default {
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>
