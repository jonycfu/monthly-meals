import { 
NUTRITIONIX_ENDPOINT as url,
NUTRITIONIX_HEADERS as headers,
NUTRITIONIX_SEARCH_FIELDS as paramsList,
} from "./../api/nutritionix"

import Vue from 'vue';
import axios from 'axios';
import Component from "vue-class-component";
import idbs from '@/api/indexedDBService'

@Component
export class foodQueryMixin extends Vue {
    async fetchFoodQuery(keyword:string) {
        
        const params = { fields: paramsList.join() };
        let results;
        
        this.$store.dispatch('toggleLoading', true);
        try {
            // Storage <=> Request Data Conditions:
            // 1) IF Cached keyword exists, DISPATCH that to store
            // 2) IF Cached keyword provided returns nothing (new)

            results = (await idbs.checkStorage('search-results', keyword));
            console.log(results 
                ? 'Existing Storage Results Found.' 
                : 'Nothing Found. Fetching new query...'
            );
            

            if (!results && keyword) {
                
                console.log('Do a http request for new key:', (keyword));
                const { data: { hits } } = await axios({
                    "method":"GET",
                    url: `${url}${keyword}`,
                    headers,
                    params
                });
                results = hits

                idbs.saveToStorage('search-results', results, keyword)
            }  

            this.$store.dispatch('addSearchResults', results)

        } catch ({ response }) {
            console.error(response)
        }
        this.$store.dispatch('toggleLoading', false);
    }

    get loading():boolean { // set `false` as default
        return this.$store.state.loading || false
    }
    get cachedGroceryList():Array<any> {
        // Use Cache API to retrieve previous search list
        return [];
    }
}
