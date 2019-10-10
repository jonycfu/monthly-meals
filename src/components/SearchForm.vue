<template>
    <validationProvider v-slot="{ errors }">
        <form 
            id="grocery-search-form"
            @submit.prevent="fetchFoodQuery(searchText)"
            action="submit"
        >
            <input 
                type="search" 
                required
                min
                v-model="searchText"
                name="grocery-search-input" 
                class="grocery-search-input"
            >
            <button 
                class="grocery-search-button"
                @submit.prevent="fetchFoodQuery(searchText)"
                :disabled="loading" 
            >
                Search
            </button>
            <span class="error-text">{{ errors[0] }}</span>
        </form>
    </validationProvider>
</template>

<style lang="scss" scoped>
    form {
        display: flex;
        flex-direction: column;
        padding-bottom: 2rem;
        position: relative;
    }
    input[type="search"] {
        font-size: 1rem;
        padding: 0.7rem;
        margin-bottom: 0.5rem;
        border-width: 0 0 1px 0;
        border-color: rgba(lightslategray, 0.5);
        &:hover, &:active {
            border-color: mediumseagreen;
        }
    }
    .grocery-search-button {
        padding: 0.5rem;
        font-size: 1.5rem;
        border-radius: 6px;
        border: 1px solid darkblue;
        color: whitesmoke;
        background: darkslateblue;
    }
    .error-text {
        font-size: 1.25rem;
        background: rgba(crimson, 0.2);
        width: 100%;
        color: crimson;
        position: absolute;
        margin: 0 auto;
        bottom: 0;
    }
</style>

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