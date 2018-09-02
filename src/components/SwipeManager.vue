<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>{{title}}</span>
      <!--<el-button type="primary" plain @click="submit">提交虚拟用户</el-button>-->
      <el-button style="float: right; padding: 3px 0" type="text" @click="add">新增轮播图</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="图片"
        width="220"
      >
        <template slot-scope="scope">
          <img :src="scope.row.url" width="200px" height="200px">
        </template>
      </el-table-column>
      <el-table-column
        label="跳转地址"
        width="500"
      >
        <template slot-scope="scope">
          <el-input v-model="scope.row.to" @change="submit"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope" >
          <div style="display: flex;align-items: center">
            <el-button type="warning" for="fileuploader"  class="uploader_button" plain>
              修改图片
              <input type="file" @change="e => { // eslint-disable-line
              update(e,scope.$index)
            }" >
            </el-button>
            <el-button type="danger" @click="deleteImg(scope.$index)" plain>删除图片</el-button>
            <span style="display: inline-flex;flex-direction: column;justify-content: flex-start;margin: 10px">
            <el-button type="success" @click="up(scope.$index)" plain  style="margin-bottom: 10px">上移</el-button>
            <el-button type="success" @click="down(scope.$index)" plain style="margin: 0">下移</el-button>
          </span>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  props: ['uploadImgUrl', 'saveUrl', 'getUrl', 'title'],
  name: 'SwipeManager',
  data () {
    return {
      inputUrlDialog: false,
      tableData: []
    }
  },
  mounted () {
    this.$http.get(this.getUrl).then(
      response => {
        this.tableData = response.data
      }
    )
  },
  activated () {
    this.$http.get(this.getUrl).then(
      response => {
        this.tableData = response.data
      }
    )
  },
  methods: {
    submit () {
      this.$http.post(this.saveUrl, this.tableData)
    },
    add () {
      this.tableData.push({url: null, to: null})
    },
    update (e, index) {
      if (e.srcElement.files.length > 0) {
        let file = e.srcElement.files[0]
        let param = new FormData() // 创建form对象
        param.append('file', file)// 通过append向form对象添加数据
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        }
        this.$http.post(this.$uploadUrl, param, config).then(
          response => {
            this.$success()
            this.tableData[index].url = response.data.url
            this.submit()
          }
        )
      }
    },
    deleteImg (index) {
      this.tableData.splice(index, 1)
      this.submit()
    },
    up (index) {
      if (index > 0) {
        let temp1 = this.tableData[index]
        let temp2 = this.tableData[index - 1]
        this.tableData.splice(index - 1, 1, temp1)
        this.tableData.splice(index, 1, temp2)
        this.submit()
      }
    },
    down (index) {
      if (index < this.tableData.length - 1) {
        let temp1 = this.tableData[index]
        let temp2 = this.tableData[index + 1]
        this.tableData.splice(index + 1, 1, temp1)
        this.tableData.splice(index, 1, temp2)
        this.submit()
      }
    }
  }
}
</script>

<style scoped>
  .uploader_button {
    position: relative;
  }

  .uploader_button input {
    position: absolute;
    font-size: 15px;
    width: 100%;
    height: 100%;
    right: 0;
    top: 0;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer
  }
</style>
