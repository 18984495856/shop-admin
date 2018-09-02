<template>
    <div>

    </div>
</template>

<script>
import Page from '../../components/Pagination'
export default {
  name: 'GoodsType',
  components: {
    Page
  },
  data () {
    return {
      tableData: null
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
