<template>
    <el-card>
      <div slot="header" class="clearfix">
        <span>商品管理</span>
        <!--<el-button style="float: right; padding: 3px 0" type="text">添加</el-button>-->
      </div>
      <div style="text-align: right">
        <pagination ref="page" action="/goods" @update="updateTable" @update-before="loading=true" @update-finish="loading=false"></pagination>
        <br>
        <goods-list :items="items" v-loading="loading"></goods-list>
      </div>
    </el-card>
</template>

<script>
import Pagination from '../../components/Pagination'
import GoodsList from './GoodsList'
export default {
  name: 'Goods',
  components: {
    Pagination, GoodsList
  },
  data () {
    return {
      loading: false,
      items: null,
      unWatchItems: [],
      review_status_group: [
        '待审核', '通过', '不通过', '无需通过'
      ]
    }
  },
  watch: {
    items: function (newValue, oldValue) {
      console.log(this.items)
    }
  },
  methods: {
    updateTable (data) {
      this.items = data
    },
    onItemChange () {

    }
  }
}
</script>

<style scoped>

</style>
