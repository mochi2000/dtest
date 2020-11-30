'use strict';

{
  const scores = [80,90,40,70];
  
  scores.push(60,50);
  scores.shift();

  for (let i =0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}
