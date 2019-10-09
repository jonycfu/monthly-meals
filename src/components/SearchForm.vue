<template>
    <form 
        id="grocery-search-form"
        @submit.prevent="fetchFoodQuery(searchText)"
        action="submit"
    >
        <input type="search" 
        v-model="searchText"
        name="grocery-search-input" 
        class="grocery-search-input">
        <button 
            @submit.prevent="fetchFoodQuery(searchText)"
            :disabled="loading" 
        >
            Search
        </button>
    </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { foodQueryMixin } from '@/mixins/foodQuery'
import Component, { mixins } from 'vue-class-component';

@Component
export default class SearchForm extends mixins(foodQueryMixin) {
    data() {
      return {
        searchText: '',
      }
    }
    get loading () { // set `false` as default
        return this.$store.state.loading || false
    }
}
</script>