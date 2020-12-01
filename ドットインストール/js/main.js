'use strict';

{
  const otherScores = [10,20];
  const scores = [80,90,40,70, ...otherScores];
  

  function sum(a,b) {
    console.log(a + b);
  }
  sum(...otherScores);
}
