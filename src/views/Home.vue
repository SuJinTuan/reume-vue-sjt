<template>
  <div class="home">
    <Header />
    <Row :gutter="20">
      <Col :md="6" class="left-panel">
        <ul class="left-message">
          <li v-for="(item, key) in modules" :key="key">
            <span class="move-delete">
              <Icon type="md-trash" @click="deleteModule(item)" />
              <i class="el-icon el-icon-delete"></i>
            </span>
            <Icon :type="icon[item.id]" />
            <span :class="isActive(key)" @click="jump(key)">{{
              item[item.id]
            }}</span>
          </li>
          <!-- <li v-for="(item, key) in Newmodules" :key="key">
            <span> Name: {{ item }} </span>
          </li> -->
          <!-- <li v-for="(item, key) in Newmodules" :key="key">
            <span :class="isActive(key)" @click="jump(key)">{{ item }}</span>
          </li> -->
          <li @click="confirm">
            <span>
              <Icon type="md-add-circle" />
              添加自定义模块 Name: {{ value }}
            </span>
          </li>
        </ul>
      </Col>
      <Col :md="16" class="right-panel" :offet="1">
        <router-view />
      </Col>
    </Row>
  </div>
</template>

<script>
import Header from "components/Header";
export default {
  name: "Home",
  data() {
    return {
      theme3: "light",
      title: "请输入模块名称",
      module: [],
      value: "",
      modules: [],
      Newmodules: [],
      icon: {
        1: "md-document",
        2: "md-chatbubbles",
        3: "md-heart",
        4: "md-leaf",
        5: "md-home",
        6: "ios-add-circle-outline",
      },
    };
  },
  components: { Header },
  methods: {
    // 初始化模块的相关数据
    fetchModulesData() {
      // this.modules = this.$store.state.modules;
      for (let item of this.$store.state.modules) {
        this.modules.push(item);
      }
    },

    // 当前导航被激活
    isActive(name) {
      if (name === this.$router.currentRoute.name) {
        return "isActive";
      }
    },

    // 点击下一步
    jump(name) {
      this.$router.push(`/${name.id}`);
      return name.id;
    },

    // 新增模块
    confirm() {
      // console.log(this.$Modal);
      // console.log(this.$message);
      // console.log(this.$Modal.confirm);resetFields
      this.$Modal.confirm({
        render: (h) => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "请输入你添加的模块名称!!",
              clearable: "",
            },
            on: {
              input: (val) => {
                this.value = val;
                if (val !== "") {
                  this.module.push(this.value);
                }
                let flattened = [[...this.modules], [...this.module]].reduce(
                  function (a, b) {
                    return a.concat(b);
                  },
                  []
                );
                console.log(flattened);
              },
            },
          });
          // console.log(this.value);
        },
      });

      // this.$Modal.confirm({
      //   title: "请输入自定义模块的名称",
      //   content: `<Input clearable style='width: 200px' placeholder='请输入自定义模块的名称'/>`,

      //   onOk: (title) => {
      //     this.title = title;
      //     console.log(this.title);
      //     this.$Message.success("您成功添加模块！");
      //   },
      //   onCancel: () => {
      //     this.$Message.info("模块添加已取消！");
      //   },
      // });
    },

    // 删除模块
    deleteModule(name) {
      // console.log(name.id);
      this.$delete(this.modules, name.id);
    },
  },

  created() {
    this.fetchModulesData();
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  overflow: hidden;
}
.isActive {
  color: #00c091;
  padding-left: 12px;
  border-left: 4px solid #00c091;
}
.move-delete i:hover {
  color: #fff;
  background: #11a480;
}
.move-delete i {
  margin-left: 10px;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  color: #11a480;
  background: #fff;
}
.move-delete {
  text-align: right;
  display: none;
  position: absolute;
  right: 10px;
}
.left-message li:hover .move-delete {
  display: block;
}
.left-message li {
  color: #9c9c9c;
  padding: 10px;
  min-height: 26px;
  margin: 42px 45px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: relative;
}
.left-message li:hover {
  color: #11a480;
}
.left-message {
  margin: 5px;
  padding: 5px;
  text-align: center;
  display: block;
  text-align: center;
}
.left-panel,
.right-panel {
  border: 1px solid #dedfe1;
  text-align: center;
  padding: 5px;
  margin: 20px;
  color: #fff;
  background-color: #fff;
}
</style>
