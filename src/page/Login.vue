<template>
  <div>
    <el-row justify="center"  type="flex">
      <el-col :span="8">
        <el-card style="text-align: center;margin-top: 100px;">
          <el-form label-width="0" style="margin-bottom: 50px">
            <el-form-item >
              <el-input v-model="form.username" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item >
             <el-input v-model="form.userpwd" placeholder="密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login">登陆系统</el-button>
            </el-form-item>
            <div>
              <a style="float: left;color: cornflowerblue;text-decoration: underline;cursor: pointer" @click="dialog.register = true">注册</a>
              <a style="float: right;color: cornflowerblue;text-decoration: underline;cursor: pointer" @click="dialog.modify = true">修改密码</a>
            </div>
          </el-form>
        </el-card>
      </el-col>
    </el-row>

    <el-dialog title="注册" :visible.sync="dialog.register" >
      <el-form label-width="0" style="text-align: center;margin: 0 100px" >
          <el-form-item>
            <el-input v-model="form.username" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.userpwd" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="confirmPwd" placeholder="确认密码" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">注册账号</el-button>
          </el-form-item>
      </el-form>
    </el-dialog>

    <el-dialog title="修改密码" :visible.sync="dialog.modify" >
      <el-form label-width="0" style="text-align: center;margin: 0 100px" >
        <el-form-item>
          <el-input v-model="form.username" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.userpwd" placeholder="老密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.newpwd" placeholder="新密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="confirmPwd" placeholder="确认新密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="modify">修改密码</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        userpwd: '',
        newpwd: ''
      },
      confirmPwd: '',
      dialog: {
        register: false,
        modify: false
      }
    }
  },
  methods: {
    login () {
      this.$http.post('/login', this.form).then(
        () => {
          this.$success()
          this.$router.push('/')
        }
      )
    },
    register () {
      if (this.form.userpwd !== this.confirmPwd) {
        this.$warning('两次密码不一致，请确认')
        return
      }
      this.$http.post('/register', this.form).then(
        () => {
          this.dialog.register = false
          this.$success()
        }
      )
    },
    modify () {
      if (this.form.newpwd !== this.confirmPwd) {
        this.$warning('两次密码不一致，请确认')
        return
      }
      this.$http.post('/modifypwd', this.form).then(
        () => {
          this.dialog.modify = false
          this.form.userpwd = this.form.newpwd
          this.$success()
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
