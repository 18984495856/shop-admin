<template>
  <el-table
    :data="items"
    border
    stripe
    style="width: 100%">
    <el-table-column
      align="center"
      label="ID"
      width="80"
      prop="goods_id"
    ></el-table-column>
    <el-table-column
      label="缩略图"
      width="100"
      align="center"
    >
      <template slot-scope="scope">
        <img :src="scope.row.goods_thumb" style="height: 80px;width: 80px">
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      align="center"
      prop="goods_name"
      width="350px"
    >
    </el-table-column>
    <el-table-column
      label="简述"
      align="center"
      prop="goods_brief"
      width="250px"
    >
    </el-table-column>
    <el-table-column
      label="排序"
      align="center"
      prop="sort_order"
      width="150px"
    >
    </el-table-column>
    <el-table-column
      label="审核"
      align="center"
      width="150px"
    >
      <template slot-scope="scope">
        <el-tag type="warning" v-if="scope.row.review_status === 1">待审核</el-tag>
        <el-tag type="danger" v-if="scope.row.review_status === 2">不通过</el-tag>
        <el-tag type="success" v-if="scope.row.review_status === 3">通过</el-tag>
        <el-tag type="info" v-if="scope.row.review_status === 5">无需审核</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
    >
      <template slot-scope="scope">
        <el-button type="success" plain v-if="scope.row.review_status === 1 || scope.row.review_status === 2 "
                   @click="scope.row.review_status = 3;updateItem(scope.$index)">通过</el-button>
        <el-button type="warning" plain v-if="scope.row.review_status === 1"
                   @click="scope.row.review_status = 2;updateItem(scope.$index)">不通过</el-button>
        <el-button type="warning" plain v-if="scope.row.review_status === 3"
                   @click="scope.row.review_status = 1;updateItem(scope.$index)">下架</el-button>

        <el-button  plain type="primary" @click="$router.push({name:'GoodsEdit', params: {goods_id:scope.row.goods_id}})">编辑</el-button>
        <el-button type="danger" plain @click="deleteItem(scope.$index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ['items'],
  name: 'GoodsList',
  methods: {
    updateItem (index) {
      this.$http.put('/goods/' + this.items[index].goods_id, this.items[index])
        .then(
          () => {
            this.$success('修改成功')
          })
        .catch(
          () => {
            this.$refs.page.update()
          }
        )
    },
    deleteItem (index) {
      this.$http.delete('/goods/' + this.items[index].goods_id)
        .then(
          () => {
            this.$success('删除成功')
            this.items.splice(index, 1)
          })
    }
  }
}
</script>

<style scoped>

</style>
