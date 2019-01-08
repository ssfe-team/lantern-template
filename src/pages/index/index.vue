<template>
  <div class="demo-page">
    <p>如需新增页面，在 pages 文件夹下新建文件夹，文件结构仿照 index 文件夹：</p>
    <img src="./img/index_tree_example.png" alt="页面文件结构">
    <p>如有其他问题与建议，请联系该 <a href="https://github.com/ssfe-team/lantern-template">项目</a> 维护者</p>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'index page'
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
</style>
