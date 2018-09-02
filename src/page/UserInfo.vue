<template>
    <div>
      <div style="text-align: center" v-if="!user">
        <i class="el-icon-loading"></i>
        加载中...
      </div>
      <el-form label-width="130px"  v-else>
        <el-form-item label="用户名称">
          <el-input   clearable v-model="user.nick"></el-input>
        </el-form-item>
        <el-form-item label="点击上传（删除）头像图片">
          <el-upload
            class="avatar-uploader"
            :action="this.$uploadUrl"
            :show-file-list="false"
            :on-success="uploaderSuccess"
            style="border: 1px dashed #d9d9d9;border-radius: 6px;text-align: center;width: 178px;height: 178px"
          >
            <img v-if="user.header_img" :src="user.header_img" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="user.sex" :label="0">未知</el-radio>
          <el-radio v-model="user.sex" :label="1">男</el-radio>
          <el-radio v-model="user.sex" :label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="简介">
          <el-input
            type="textarea"
            v-model="user.simple_desc"
            :autosize = "{ minRows: 3, maxRows: 10}"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">确认修改</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['userId'],
  data () {
    return {
      user: null
    }
  },
  mounted () {
    // 第一次创建组件时,watch侦听不到变化
    this.getUserInfo(this.userId)
  },
  watch: {
    // 用来侦听UserId变化，并变更数据
    userId: function (newUserId, oldUserId) {
      this.getUserInfo(newUserId)
    }
  },
  methods: {
    uploaderSuccess (response, file, fileList) {
      this.user.header_img = response.url
    },
    submit () {
      this.$http.put('/admin/user/' + this.userId, this.user).then(
        () => {
          this.$success()
        }
      )
    },
    getUserInfo (userId) {
      this.user = null
      this.$http.get('/admin/user/' + userId).then(
        response => {
          this.user = response.data
        }
      )
    }
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
