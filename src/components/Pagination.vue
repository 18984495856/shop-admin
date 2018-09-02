<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="index"
    :page-sizes="sizes"
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</template>

<script>
export default {
  props: ['action'],
  name: 'Page',
  data () {
    return {
      index: 1,
      size: 10,
      sizes: [5, 10, 20, 50, 100, 200, 300, 400],
      total: 0
    }
  },
  activated () {
    this.update()
  },
  methods: {
    handleSizeChange (val) {
      this.size = val
      this.update()
    },
    handleCurrentChange (val) {
      this.index = val
      this.update()
    },
    update () {
      this.$emit('update-before')
      this.$http.get(this.action, {headers: {'page-index': this.index, 'page-size': this.size}})
        .then(response => {
          this.$emit('update', response.data.items)
          this.total = response.data.pageSize
          this.$emit('update-finish')
        })
    }
  }
}
</script>

<style scoped>

</style>
