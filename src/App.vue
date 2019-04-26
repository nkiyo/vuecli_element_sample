<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-dialog
        title="hoge"
        :visible.sync="isDialogVisible"
        :before-close="onCloseDialog"
      ></el-dialog>
      <el-button type="success" round @click="hogefunc">el-button</el-button>
      <el-button
        type="success"
        round
        :disabled="isBtnDisable"
        @click="isDialogVisible = true"
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
      isBtnDisable: false,
      isDialogVisible_: false
    };
  },
  computed: {
    isDialogVisible: {
      get: function() {
        return this.isDialogVisible_;
      },
      set: function(newValue) {
        this.isDialogVisible_ = newValue;
        console.log(`## set isDialogVisible = ${newValue}`);
      }
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    hogefunc: function() {
      this.x += 1;
      this.isBtnDisable = !this.isBtnDisable;
      console.log(`## hogefunc ${this.x}`);
    },
    onCloseDialog: function() {
      this.isDialogVisible = false;
      console.log(`## onCloseDialog ${this.isDialogVisible}`);
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
