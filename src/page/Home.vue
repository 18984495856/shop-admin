<template>
    <div class="fullscreen" v-loading="loading">
      <el-container class="fullscreen">
        <el-aside width="200px">
          <left-menu style="height: 100%;background-color: rgb(84, 92, 100)"></left-menu>
        </el-aside>
        <el-container>
          <!--<el-header>Header</el-header>-->
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
          <!--<el-footer>Footer</el-footer>-->
        </el-container>
      </el-container>
    </div>
</template>

<script>
import LeftMenu from '../components/LeftMenu.vue'
export default {
  name: 'Home',
  data () {
    return {
      loading: false
    }
  },
  components: {
    LeftMenu
  },
  activated () {
    this.$http.get('/user/read').then(
      response => {
        this.$store.commit('updateUser', response.data)
      }
    ).catch(
      () => {
        this.$router.push('/login')
      }
    )
  }
}
</script>

<style scoped>

</style>
