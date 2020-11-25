<template>
  <div class="header">
    <div class="router-link">
      <router-link to="/base"
        ><Button type="info" class="btn">引导填写</Button></router-link
      >
    </div>
    <div class="router-link">
      <router-link to="/preview">
        <Button type="success" class="btn">预览编辑</Button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 56px;
  text-align: center;
  background-color: #373d41;
  overflow: hidden;
}
.router-link {
  margin-left: 10px;
  padding-right: 40px;
  line-height: 56px;
  display: inline-block;
}
.router-link a {
  display: block;
  color: #404040;
  line-height: 56px;
  text-decoration: none;
  font-size: 14px;
}
.router-link-exact-active {
  color: #00c091 !important;
  border-bottom: 2px solid #00c091;
}
</style>
