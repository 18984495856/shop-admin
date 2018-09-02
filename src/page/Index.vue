<template>
    <div>
      <!--统计表格-->
      <el-row :gutter="20">
        <!--用户增长统计-->
        <el-col :span="8">
            <el-table
              v-loading="!userUpTotalList"
              :data="userUpTotalList"
              border
              stripe
              style="width: 100%">
              <el-table-column
                prop="name"
                label="用户增长"
              >
              </el-table-column>
              <el-table-column
                prop="total"
                label="数量"
                width="150px"
                >
              </el-table-column>
            </el-table>
        </el-col>
        <!--访问增长统计-->
        <el-col :span="8">
          <el-table
            v-loading="!visitTotalList"
            :data="visitTotalList"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="访问详情"
            >
            </el-table-column>
            <el-table-column
              prop="total"
              label="数量"
              width="150px"
            >
            </el-table-column>
          </el-table>
        </el-col>
        <!--盈利统计-->
        <el-col :span="8">
          <el-table
            v-loading="!revenueTotalList"
            :data="revenueTotalList"
            border
            stripe
            style="width: 100%">
            <el-table-column
              prop="name"
              label="盈利统计"
            >
            </el-table-column>
            <el-table-column
              prop="total"
              label="数量"
              width="150px"
            >
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <br>
      <!--性别以及用户分布统计-->
      <el-card>
        <template slot="header">
          用户分析
        </template>
        <el-row :gutter="20">
          <el-col :span="12">
            <ve-pie :data="chartSexData"></ve-pie>
          </el-col>
          <el-col :span="12">
            <ve-map v-loading="!chartMapData.rows.length" :data="chartMapData" :settings="chartMapSettings" ></ve-map>
          </el-col>
        </el-row>
      </el-card>
    </div>
</template>

<script>
import Vue from 'vue'
import VCharts from 'v-charts'
Vue.use(VCharts)
export default {
  name: 'Index',
  data () {
    return {
      chartMapSettings: {
        position: 'china',
        zoom: 1,
        label: false,
        roam: true
      },
      userUpTotalList: null,
      visitTotalList: null,
      revenueTotalList: null,
      chartMapData: {
        columns: ['位置', '数量'],
        rows: []
      },
      chartSexData: {
        columns: ['性别', '数量'],
        rows: []
      }
    }
  },
  activated () {
    this.$http.get('/userUpTotalList').then(
      response => {
        this.userUpTotalList = response.data
      }
    )

    this.$http.get('/visitTotalList').then(
      response => {
        this.visitTotalList = response.data
      }
    )

    this.$http.get('/revenueTotalList').then(
      response => {
        this.revenueTotalList = response.data
      }
    )

    this.$http.get('/sexTotalList').then(
      response => {
        this.chartSexData.rows = response.data
      }
    )

    this.$http.get('/mapTotalList').then(
      response => {
        this.chartMapData.rows = response.data
      }
    )
  }
}
</script>

<style scoped>

</style>
