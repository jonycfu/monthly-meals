<template>
  <section>
    <h1>Groceries</h1>
    <article v-if="loading">Loading...</article>
    <!-- <article v-if="groceriesList.length === 0">
      <input type="search" name="grocery-search" id="search">
      <button>Search</button>
    </article> -->
    <ul>
      <li v-for="grocery in groceriesList" v-bind:key="grocery.id">
        {{grocery.name}}
      </li>
      <li v-if="groceriesList.length === 0">
        No groceries found.
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
  import { IfoodSKU } from "@/types/food"
  import { Component, Prop, Vue } from "vue-property-decorator";

  export default class Groceries extends Vue {
    @Prop() groceriesList:Array<IfoodSKU> = []
    @Prop() loading: boolean = false
    @Prop() private errorMessage: string = ''
  }
</script>
