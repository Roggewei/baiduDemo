<template>
    <el-card class="box-card">

    <el-row :gutter="10">
      <el-col :span="5">
        <img src="image/logoquan15310962427.PNG" />
      </el-col>
      <el-col :span="5">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script type="text/ecmascript-6">



export default {
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>