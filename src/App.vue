<template>
  <div id="app">
    <router-view id="content-area" />
    <nav-tab :linkList="navList"></nav-tab>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
#content-area {
  padding: 30px;
  flex: 1;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavTab from "@/components/NavTab.vue";

@Component({
  components: {
    NavTab
  },
  data() {
    return { navList: ["groceries", "analysis", "settings"] };
  }
})
export default class App extends Vue {}
</script>