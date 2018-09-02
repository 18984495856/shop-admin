<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>商品添加</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
    </div>
      <goods-info v-model="form"></goods-info>
  </el-card>
</template>

<script>
import GoodsInfo from './GoodsInfo'
export default {
  name: 'GoodsPush',
  components: {
    GoodsInfo
  },
  data () {
    return {
      form: {
        goods_id: null,
        store_id: null,
        cat_id: null,
        goods_sn: null,
        goods_name: null,
        click_count: null,
        goods_number: null,
        goods_weight: null,
        default_shipping: null,
        market_price: null,
        shop_price: null,
        promote_price: null,
        promote_start_date: null,
        promote_end_date: null,
        warn_number: null,
        keywords: null,
        goods_brief: null,
        goods_desc: null,
        goods_thumb: null,
        goods_img: null,
        is_on_sale: null,
        add_time: null,
        sort_order: null,
        is_delete: null,
        is_best: null,
        is_new: null,
        is_hot: null,
        last_update: null,
        goods_type: null,
        seller_note: null,
        review_status: null,
        review_content: null,
        comments_number: null,
        sales_volume: null
      }
    }
  },
  methods: {
    update (data) {
      this.tableData = data
    }
  }
}
</script>

<style scoped>

</style>
