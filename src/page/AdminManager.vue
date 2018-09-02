<template>
  <div>
    <!--表格组件-->
    <el-table
      v-loading="loading"
      :data="items"
      border
      stripe
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="scope">
          <a style="color: red;text-decoration: underline;cursor: pointer" @click="alive(scope.row)" v-if="scope.row.alive">封禁</a>
          <a style="color: gray;text-decoration: underline;cursor: pointer" @click="alive(scope.row)" v-else>激活</a>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AdminManager',
  data () {
    return {
      loading: false,
      items: [],
      user: null
    }
  },
  activated () {
    this.getItems()
  },
  methods: {
    getItems () {
      this.loading = true
      this.$http.get('/user').then(
        response => {
          this.items = response.data
          this.loading = false
        }
      )
    },
    alive (row) {
      if (row.alive) {
        this.$http.put('/user/unalive/' + row.id).then(
          () => {
            row.alive = false
            this.$success('封禁成功')
          }
        )
      } else {
        this.$http.put('/user/alive/' + row.id).then(
          () => {
            row.alive = true
            this.$success('激活成功')
          }
        )
      }
    }
  }
}
</script>

<style scoped>

</style>
