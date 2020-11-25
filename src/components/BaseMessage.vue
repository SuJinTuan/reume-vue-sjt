<template>
  <div class="basemsg">
    <h3 class="title">基本信息 <Icon type="md-chatbubbles" /></h3>
    <Row>
      <Col :span="16">
        <Form
          ref="baseMsg"
          :rules="rules"
          :model="baseMsg"
          status-icon
          label-width="80px"
        >
          <FormItem label="姓名" prop="name">
            <Input
              icon="ios-clock-outline"
              clearable
              v-model.trim="baseMsg.name"
              placeholder="请输入姓名"
            />
          </FormItem>
          <FormItem label="电话" prop="phone">
            <Input
              clearable
              v-model.trim="baseMsg.phone"
              placeholder="请输入手机号码"
            />
          </FormItem>
          <FormItem label="邮箱" prop="email">
            <Input
              clearable
              v-model="baseMsg.email"
              placeholder="请输入常用邮箱"
            />
          </FormItem>
          <FormItem label="地址" prop="address">
            <Input
              clearable
              v-model="baseMsg.address"
              placeholder="请输入个人地址"
            />
          </FormItem>
          <FormItem label="求职意志" prop="position">
            <Input
              clearable
              v-model="baseMsg.position"
              placeholder="请输入您的求职意向"
            />
          </FormItem>
          <FormItem label="个人网站" prop="web">
            <Input
              clearable
              v-model="baseMsg.web"
              placeholder="请输入个人博客网址"
            />
          </FormItem>
          <FormItem size="large">
            <Button type="success" @click="saveBaseMsg('baseMsg')">保存</Button>
            <Button type="info" @click="next">下一步</Button>
          </FormItem>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BaseMessage",
  data() {
    return {
      // formCustom: {
      //   age: "",
      // },
      // ruleCustom: {
      //   age: [{ validator: validateAge, trigger: "blur" }],
      // },
      form: {
        name: "",
        phone: "",
        email: "",
        address: "",
        position: "",
        web: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入名称", trigger: "blur" },
          {
            min: 2,
            max: 12,
            message: "长度在 2 到 12 个字符",
            trigger: "blur",
          },
        ],
        phone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          {
            pattern: /^1[3|4|5|7|8|9]\d{9}$/,
            message: "手机号码错误",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }],
        position: [{ required: true, message: "请输入名称", trigger: "blur" }],
      },
      flag: false, // 填写表单正确标识
    };
  },
  computed: {
    ...mapState(["baseMsg"]),
  },
  methods: {
    // handleSubmit(name) {
    //   this.$refs[name].validate((valid) => {
    //     if (valid) {
    //       this.$Message.success("Success!");
    //     } else {
    //       this.$Message.error("Fail!");
    //     }
    //   });
    // },
    // handleReset(name) {
    //   this.$refs[name].resetFields();
    // },
    // 初始化数据
    fetchBaseMsg() {
      const data = this.baseMsg;
      this.form.name = data.name;
      this.form.phone = data.phone;
      this.form.email = data.email;
      this.form.address = data.address;
      this.form.position = data.position;
      this.form.web = data.web;
    },

    // 点击下一步
    next() {
      console.log(this.flag, "fl");
      this.saveBaseMsg("baseMsg");
      this.flag === true
        ? this.$router.push("/skill")
        : this.$message.error("填写表单错误");
    },

    // 保存用户填写的基本信息
    saveBaseMsg(formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid, "li");
        if (valid) {
          sessionStorage.setItem("baseMsg", JSON.stringify(this.baseMsg));
          this.$store.commit("saveBaseMsg", this.baseMsg);
          this.flag = true;
          this.$message({
            type: "success",
            message: "信息保存成功",
            duration: 1200,
          });
        } else {
          this.flag = false;
          this.$message.error("表单填写错误");
        }
      });
    },
  },

  created() {
    this.fetchBaseMsg();
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 20px;
  color: #404040;
  font-weight: bold;
}
.basemsg {
  padding: 10px;
  width: 100%;
  overflow: hidden;
}
</style>
