'use strict';

for(let i =1; i <= 10; i++) {
  if(i % 3 === 0) {
    continue;
  }
  if(i === 4) {
    break;
  }
  console.log(i)
}