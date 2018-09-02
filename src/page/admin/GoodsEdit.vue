<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>商品编辑</span>
      <el-button style="float: right; padding: 3px 0;color: #f56c6c" type="text" @click="$router.back()">返回</el-button>
    </div>
    <goods-info v-model="form" v-loading="loading"></goods-info>
  </el-card>
</template>
a
<script>
import GoodsInfo from './GoodsInfo'
import _ from 'lodash'

export default {
  name: 'GoodsEdit',
  components: {
    GoodsInfo
  },
  data () {
    return {
      loading: false,
      form: null,
      unWatch: null
    }
  },
  activated () {
    this.loading = true
    this.$http.get('/goods/' + this.$route.params.goods_id).then(
      response => {
        this.loading = false
        this.form = response.data
      }
    )
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedUpdate = _.debounce(this.update, 1000)

    this.$watch('form', function (newVal, oldVal) {
      console.log(oldVal)
      if (oldVal != null) {
        this.debouncedUpdate()
      }
    }, {deep: true}) // 需要深度监听对象
  },
  // watch: {
  //   form: function (newVal, oldVal) {
  //     console.log(213)
  //     // if (oldVal != null) {
  //     //   this.debouncedUpdate(newVal)
  //     // }
  //   }
  // },
  methods: {
    update () {
      this.$http.put('/goods/' + this.form.goods_id, this.form).then(
        () => {
          this.$success('已经自动保存修改')
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
