<template>
    <ul class="food-search-result" v-if="!loading">
        <slot></slot>
    </ul>
    
</template>

<style lang="scss" scoped>
  .food-search-result {
    padding: 0;
    max-height: 55vh;
    overflow: scroll;
    & > li {
      padding: 1.5rem 1rem; 
      text-align: left;
      color: darkslateblue;
      background: rgba(darkviolet, 0.2);
      margin: 0.25rem;
    }
  }

</style>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import { foodQueryMixin } from '@/mixins/foodQuery'

@Component
export default class SearchResultsList extends mixins(foodQueryMixin) {
}
</script>