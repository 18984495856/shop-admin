<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <router-link to="Index">
        <el-menu-item index="1">
          <!--<i class="el-icon-menu"></i>-->
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
      <router-link to="Swipe">
        <el-menu-item index="2">
          <!--<i class="el-icon-document"></i>-->
          <span slot="title">轮播图管理</span>
        </el-menu-item>
      </router-link>
      <el-submenu index="3">
        <template slot="title">商品管理</template>
        <el-menu-item index="3-1" @click="$router.push('/GoodsType')">分类</el-menu-item>
        <el-menu-item index="3-2" @click="$router.push('/GoodsManager')">管理</el-menu-item>
        <el-menu-item index="3-3" @click="$router.push('/GoodsPush')">添加</el-menu-item>
      </el-submenu>
      <router-link to="AdminManager">
        <el-menu-item index="5">
          <!--<i class="el-icon-setting"></i>-->
          <span slot="title">管理员激活</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>

</style>
