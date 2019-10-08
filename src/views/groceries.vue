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
  import { Component, Prop, Vue, Watch } from "vue-property-decorator";

  @Component({
    beforeRouteEnter (to, from, next) {
      // if(to.params.search) {
      // }
      console.log('yo');
      
      next(vm => console.log(to.params.search))
    }
  })
  export default class Groceries extends Vue {
    @Prop({ default(){ return [] } })
      groceriesList!:Array<IfoodSKU>
    @Prop({ default: false }) 
      loading!: boolean
    @Prop({ default: '' }) 
      errorMessage!: string | undefined
    

  }
</script>
