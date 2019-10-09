<template>
    <validationProvider v-slot="{ errors }">
        <form 
            id="grocery-search-form"
            @submit.prevent="fetchFoodQuery(searchText)"
            action="submit"
        >
                <input type="search" 
                required
                min
                v-model="searchText"
                name="grocery-search-input" 
                class="grocery-search-input">
            <button 
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
        font-size: 2rem;
        margin-bottom: 0.5rem;
        border-width: 0 0 1px 0;
        border-color: rgba(lightslategray, 0.5);
        &:hover, &:active {
            border-color: mediumseagreen;
        }
    }
    button {
        font-size: 2rem;
        border-radius: 6px;
        border: 1px solid blueviolet;
        color: blueviolet;
        background: white;
    }
    .error-text {
        font-size: 1.25rem;
        color: whitesmoke;
        width: 100%;
        background: crimson;
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