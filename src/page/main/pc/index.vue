<template>
  <div class="content">
    <pageSearch></pageSearch>
   <pageHeader></pageHeader>
   <pageBanner></pageBanner>
   <bodyer></bodyer>
    <pageFooter></pageFooter>
  </div>
</template>

<script type="text/ecmascript-6">
import bodyer from '../Bodyer/index'
import pageFooter from '../pageFooter/index'
import pageHeader from '../pageHeader/index'
import pageSearch from '../pageSearch/index'
import pageBanner from '../pageBanner/index'


export default {
  components: {
    bodyer,
    pageFooter,
    pageHeader,
    pageSearch,
   pageBanner
  }
}
</script>

<style scoped lang="scss">

</style>
