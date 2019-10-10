<template>
  <section>
    <h1>Groceries Purchased:</h1>
    <article 
      class="food-search-loading-message"
      v-if="loading"
    >
      Loading...
    </article>
    <search-form></search-form>

    <!-- Make into component search-results-list with slots-->
    <search-results-list>
      <li v-for="grocery in searchResults" v-bind:key="grocery.id">
        {{grocery.item_name}}
      </li>
      <li v-if="searchResults.length === 0">
        No groceries found.
      </li>
    </search-results-list>

  </section>
</template>

<style lang="scss" scoped>
  .food-search-loading-message {
    font-size: 1rem;
  }
</style>

<script lang="ts">
  import Vue from "vue";
  import Component, { mixins } from 'vue-class-component';
  import store from '../store';
  import { IfoodSKU } from "@/types/food"
  import { foodQueryMixin } from '@/mixins/foodQuery'
  import SearchForm from '@/components/SearchForm.vue';
  import SearchResultsList from '@/components/SearchResultsList.vue';

  @Component({
    components: { 
      SearchForm,
      SearchResultsList
    }
  })
  export default class Groceries extends mixins(foodQueryMixin) {
    mounted() {
      this.fetchFoodQuery('apple');
    }
    get searchResults():Array<IfoodSKU> {
      return this.$store.state.searchResults;
    }
  }
</script>
