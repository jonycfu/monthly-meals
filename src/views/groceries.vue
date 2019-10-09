<template>
  <section>
    <h1>Groceries</h1>
    <article 
      class="food-search-loading-message"
      v-if="loading"
    >
      Loading...
    </article>
    <search-form></search-form>
    <ul class="food-search-result" v-if="!loading">
      <li v-for="grocery in searchResults" v-bind:key="grocery.id">
        {{grocery.item_name}}
      </li>
      <li v-if="searchResults.length === 0">
        No groceries found.
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .food-search-loading-message {
    font-size: 2rem;
  }
  .food-search-result {
    padding: 0;
    color: whitesmoke;
    & > li {
      padding-left: 1rem; 
      text-align: left;
      background: darkslategray;
      margin: 0.25rem;
    }
  }
</style>

<script lang="ts">
  import { IfoodSKU } from "@/types/food"
  import Vue from "vue";
  import store from '../store';
  import { foodQueryMixin } from '@/mixins/foodQuery'
  import SearchForm from "@/components/SearchForm.vue";
  import Component, { mixins } from 'vue-class-component';

  @Component({
    components: { SearchForm },
  })
  export default class Groceries extends mixins(foodQueryMixin) {
    data() {
      return {
        errorMessage: ''
      }
    }
    mounted() {
      this.fetchFoodQuery();
    }
    get searchResults():Array<IfoodSKU> {
      return this.$store.state.searchResults;
    }
    get loading ():boolean { // set `false` as default
        return this.$store.state.loading || false
    }
  }
</script>
