<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button type="success" round @click="hogefunc">el-button</el-button>
      <el-button type="success" round :disabled="isBtnDisable"
        >el-button</el-button
      >
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data: function() {
    return {
      x: 0,
      isBtnDisable: false
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    hogefunc: function() {
      this.x += 1;
      this.isBtnDisable = !this.isBtnDisable;
      console.log(`## hogefunc ${this.x}`);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
