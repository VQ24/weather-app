import { TestBed, async } from '@angular/core/testing';
import { WindPipe } from './wind.pipe';

describe('Wind direction', () => {

  let pipe = new WindPipe();

  it ('0 -> N',()=>{
    expect(pipe.transform(0)).toBe('N');
  });

  it ('5 -> N',()=>{
    expect(pipe.transform(5)).toBe('N');
  });

  it ('11,2 -> N',()=>{
    expect(pipe.transform(11.2)).toBe('N');
  }); 

  it ('11,3 -> NN-E',()=>{
    expect(pipe.transform(11.3)).toBe('NN-E');
  });  

  it ('-90 -> calm',()=>{
    expect(pipe.transform(-90)).toBe('calm');
  });

  it ('qwer -> calm',()=>{
    expect(pipe.transform('qwer')).toBe('calm');
  });

});