
const NUTRITIONIX_ENDPOINT = "https://nutritionix-api.p.rapidapi.com/v1_1/search/"
const NUTRITIONIX_HEADERS = { 
    "x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
    "x-rapidapi-key": process.env.VUE_APP_NUTRITIONIX_API_KEY 
}

const NUTRITIONIX_SEARCH_FIELDS = [
    'brand_name',
    'item_name',
    'brand_id',
    'item_id',
    'upc',
    'item_type',
    'item_description',
    'nf_ingredient_statement',
    'nf_calories',
    'nf_calories_from_fat',
    'nf_total_fat',
    'nf_saturated_fat',
    'nf_monounsaturated_fat',
    'nf_polyunsaturated_fat',
    'nf_trans_fatty_acid',
    'nf_cholesterol',
    'nf_sodium',
    'nf_total_carbohydrate',
    'nf_dietary_fiber',
    'nf_sugars',
    'nf_protein',
    'nf_vitamin_a_dv',
    'nf_vitamin_c_dv',
    'nf_calcium_dv',
    'nf_iron_dv',
    'nf_potassium',
]

export {
    NUTRITIONIX_ENDPOINT,
    NUTRITIONIX_HEADERS,
    NUTRITIONIX_SEARCH_FIELDS,
}