import { Action } from "@ngrx/store";

export interface City{
	name: string,
	id: string ,
	country: string ,
	temp: string ,
	temp_min: string ,
	temp_max: string ,
	description: string ,
	icon: string 
}
 
export function cityReducer(state:City[] = [], action)
{
    switch (action.type)
    {

        case 'ADD_CITY': {
        let duplicate = false;
	      state.map(city => {
	        if (city.id === action.payload.id) {duplicate = true;}	        
	      });
	      if ( !duplicate) {

	      	return [...state, action.payload];
	      } else {
	      	let _st = state.filter(city => city.id !== action.payload.id);
	      	return [..._st, action.payload];
	      }
	      }

	    case 'REMOVE_CITY':	
	    	return state.filter(city => city.id !== action.payload.id);

        default: return state;
    }
}