'use strict';

{
  const otherprops = {
    r: 4,
    color: 'red',
  }
  const point = {
    x:100, 
    y:100,
    ...otherprops
  };

  const {x, r, ...others} = point;
    console.log(x);
    console.log(r);
    console.log(others);
}

