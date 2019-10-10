<template>
  <ul>
    <router-link v-for="(val,idx) in linkList" 
      v-bind:key="idx"
      :to="val"
      tag="li"
    >
      <font-awesome-icon :icon="[ 'fas', navIcons[val] ]" />
    </router-link>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavTab extends Vue {
  @Prop() linkList!: Array<string>
  @Prop({
    default() { return { 
      groceries: 'shopping-basket',
      analysis: 'chart-line',
      settings: 'cog',
    } }
  }) private navIcons: any
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
li { 
  padding: 2em;
  background: darkslateblue;
  color: whitesmoke;
  width: 100%;
  &:nth-child(2) {
    border-right: 0.5px solid indigo;
    border-left: 0.5px solid indigo;
  }
  &.router-link-active {
    color: violet;
  }
}
</style>
