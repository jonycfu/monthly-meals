<template>
  <ul>
    <li v-for="(val,idx) in linkList" v-bind:key="idx">
      <router-link to="/">{{val}}</router-link>
    </li>
    <!-- <li>
      <router-link to="/analyze">Analysis</router-link>
    </li>
    <li>
      <router-link to="/settings">Settings</router-link>
    </li>-->
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavTab extends Vue {
  @Prop() private msg!: string;
  @Prop() linkList!: Array<string>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
