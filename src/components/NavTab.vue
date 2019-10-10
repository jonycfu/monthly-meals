<template>
  <ul>
    <li v-for="(val,idx) in linkList" v-bind:key="idx">
      <router-link :to="val">{{val}}</router-link>
    </li>
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
<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  background: darkslateblue;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
li { 
  padding: 2em;

  &:nth-child(2) {
    border-right: 1px solid lightblue;
    border-left: 1px solid lightblue;
  }
}
a {
  color: whitesmoke;
}
.router-link-active {
  color: lightblue;
}
</style>
