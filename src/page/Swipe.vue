<template>
  <div>
    <swipe-manager title="首页轮播图" :upload-img-url="$uploadUrl" get-url="/index/swipe" save-url="/index/swipe"/>
    <!--<br>-->
    <!--<swipe-manager title="vip充值页轮播图" :upload-img-url="$uploadUrl" get-url="/admin/vip/indexSwipe" save-url="/admin/vip/saveSwipe"/>-->
  </div>
</template>

<script>
import SwipeManager from '../components/SwipeManager'
export default {
  name: 'Swipe',
  components: {
    SwipeManager
  }
}
</script>

<style scoped>

</style>
