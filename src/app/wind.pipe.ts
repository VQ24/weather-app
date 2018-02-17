import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
	name: 'wind'
})

export class WindPipe implements PipeTransform {
	transform (deg) {


  switch (Math.round(deg/22.5)) {	
  	case 0: 
  	  return "N";  	
  	case 1: 
  	  return "NN-E";
  	case 2: 
  	  return "N-E";
  	case 3: 
  	  return "N-EE";
  	case 4: 
  	  return "E";
  	case 5: 
  	  return "S-EE";
  	case 6: 
  	  return "S-E";
  	case 7: 
  	  return "SS-E";
  	case 8: 
  	  return "S";
  	case 9: 
  	  return "SS-W";
  	case 10: 
  	  return "S-W";
  	case 11: 
  	  return "S-WW";
  	case 12: 
  	  return "W";
  	case 13: 
  	  return "N-WW";
  	case 14: 
  	  return "N-W";
  	case 15: 
  	  return "NN-W";
    case 16: 
      return "N";
      
  }
return "calm";
}
	}
