<template>
    <el-row :gutter="20" v-if="form">
      <el-col :span="12">
        <el-form label-width="80px" label-position="top">
          <el-form-item label=商品的唯一货号 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='60' clearable v-model="form.goods_sn" placeholder="请输入商品的唯一货号"></el-input>
          </el-form-item>
          <el-form-item label=商品的名称 required>
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='120' clearable v-model="form.goods_name" placeholder="请输入商品的名称"></el-input>
          </el-form-item>
          <el-form-item label=商品关键字，放在商品页的关键字中，为搜索引擎收录用 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='255' clearable v-model="form.keywords" placeholder="请输入商品关键字，放在商品页的关键字中，为搜索引擎收录用"></el-input>
          </el-form-item>
          <el-form-item label=商品的商家备注，仅商家可见 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='255' clearable v-model="form.seller_note" placeholder="请输入商品的商家备注，仅商家可见"></el-input>
          </el-form-item>
          <el-form-item label=商品审核不通过内容 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='255' clearable v-model="form.review_content" placeholder="请输入商品审核不通过内容"></el-input>
          </el-form-item>
          <el-form-item label=商品的简短描述 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='255' clearable v-model="form.goods_brief" placeholder="请输入商品的简短描述"></el-input>
          </el-form-item>
          <el-form-item label=商品在前台显示的微缩图片，如在分类筛选时显示的小图片 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='150' clearable v-model="form.goods_thumb" placeholder="请输入商品在前台显示的微缩图片，如在分类筛选时显示的小图片"></el-input>
          </el-form-item>
          <el-form-item label=商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片 >
            <el-input   type='textarea' autosize rows='3' minlength='1' maxlength='150' clearable v-model="form.goods_img" placeholder="请输入商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片"></el-input>
          </el-form-item>

          <!--日期-->
          <el-form label-width="80px" label-position="top" inline>
            <el-form-item label=促销价格开始日期 required >
              <el-date-picker
                v-model="form.promote_start_date"
                type="date"
                value-format="timestamp"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label=促销价格结束日期 required>
              <el-date-picker
                v-model="form.promote_end_date"
                type="date"
                value-format="timestamp"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label=最近一次更新商品配置的时间 required>
              <el-date-picker
                v-model="form.last_update"
                type="date"
                value-format="timestamp"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-form>

          <el-form-item label=商品所属平台商品分类id required>
            <el-input-number :min='0' v-model="form.cat_id"  label="请输入商品所属平台商品分类id"></el-input-number>
          </el-form-item>

          <el-form-item label=商品所属类型id，取值表goods_type的cat_id required>
            <el-input-number :min='0' v-model="form.goods_type"  label="请输入商品所属类型id，取值表goods_type的cat_id"></el-input-number>
          </el-form-item>
          <el-form-item label=商品审核状态,1待审核，2不通过，3通过，5无需审核 required>
            <el-switch v-model="form.review_status" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label=商品的详细描述 >
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <!--开关-->
        <el-form label-width="80px" label-position="top" inline>
          <el-form-item label=商品是否已经删除 required class="form-border-item">
            <el-switch v-model="form.is_delete" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label=是否是精品 required class="form-border-item">
            <el-switch v-model="form.is_best" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label=是否是新品 required class="form-border-item">
            <el-switch v-model="form.is_new" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label=是否热销 required class="form-border-item">
            <el-switch v-model="form.is_hot" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
          <el-form-item label=该商品是否开放销售 required class="form-border-item">
            <el-switch v-model="form.is_on_sale" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-form-item>
        </el-form>

        <!--数量-->
        <el-form label-width="80px" label-position="top" inline>
          <el-form-item label=商品点击数 required class="form-border-item">
            <el-input-number :min='0' v-model="form.click_count"  label="请输入商品点击数"></el-input-number>
          </el-form-item>
          <el-form-item label=商品库存数量 required class="form-border-item">
            <el-input-number :min='0' v-model="form.goods_number"  label="请输入商品库存数量"></el-input-number>
          </el-form-item>
          <el-form-item label=商品的重量，以千克为单位 required class="form-border-item">
            <el-input-number :precision="3" :min='0' v-model="form.goods_weight"  label="请输入商品的重量，以千克为单位"></el-input-number>
          </el-form-item>
          <el-form-item label=默认配送 required class="form-border-item">
            <el-input-number :min='0' v-model="form.default_shipping"  label="请输入默认配送"></el-input-number>
          </el-form-item>
          <el-form-item label=市场售价 required class="form-border-item">
            <el-input-number :precision="2" :min='0' v-model="form.market_price"  label="请输入市场售价"></el-input-number>
          </el-form-item>
          <el-form-item label=本店售价 required class="form-border-item">
            <el-input-number :precision="2" :min='0' v-model="form.shop_price"  label="请输入本店售价"></el-input-number>
          </el-form-item>
          <el-form-item label=促销价格 required class="form-border-item">
            <el-input-number :precision="2" :min='0' v-model="form.promote_price"  label="请输入促销价格"></el-input-number>
          </el-form-item>
          <el-form-item label=平台对商品的显示排序 required class="form-border-item">
            <el-input-number :min='0' v-model="form.sort_order"  label="请输入平台对商品的显示排序"></el-input-number>
          </el-form-item>
          <el-form-item label=评论数 required class="form-border-item">
            <el-input-number :min='0' v-model="form.comments_number"  label="请输入评论数"></el-input-number>
          </el-form-item>
          <el-form-item label=商品销量 required class="form-border-item">
            <el-input-number :min='0' v-model="form.sales_volume"  label="请输入商品销量"></el-input-number>
          </el-form-item>
          <el-form-item label=商品报警数量 required class="form-border-item">
            <el-input-number :min='0' v-model="form.warn_number"  label="请输入商品报警数量"></el-input-number>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
</template>

<script>
export default {
  model: {
    prop: 'form',
    event: 'change'
  },
  props: {
    form: Object
  },
  name: 'GoodsInfo',
  data () {
    return {
    }
  },
  watch: {
    form: function (newVal, oldVal) {
      this.$emit('change', newVal)
    }
  }
}
</script>

<style scoped>
  .form-border-item{
    text-align: center;
    padding: 20px;
    width: 200px;
    border: 1px #dcdfe6 solid;
  }
</style>
