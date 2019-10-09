import { 
NUTRITIONIX_ENDPOINT as url,
NUTRITIONIX_HEADERS as headers,
NUTRITIONIX_SEARCH_FIELDS as paramsList,
} from "./../api/nutritionix"

import Vue from 'vue';
import axios from 'axios';
import Component from "vue-class-component";

@Component
export class foodQueryMixin extends Vue {
    async fetchFoodQuery(keyword?:string) {
        
        const params = { 
            fields: paramsList.join() 
        }
        this.$store.dispatch('toggleLoading', true);
        
        try {
            const { data: { hits } } = await axios({
                "method":"GET",
                url: `${url}${keyword || 'apple'}`,
                headers,
                params
            });
            this.$store.dispatch('addSearchResults', hits)
        } catch (error) {
            throw new Error(error)
        }
        this.$store.dispatch('toggleLoading', false);
    }
}
