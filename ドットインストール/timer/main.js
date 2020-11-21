(function(){
  'use strict';
  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');

  var startTime;
  var elapsedTime = 0;
  var timerId;
  var timeToadd = 0;

  let c1 = document.getElementById('c1') 
  let c2 = document.getElementById('c2') 
  
  let t1 = document.getElementById('tama')
  let t2 = document.getElementById('tama2') 

  t2.style.display = 'none';

  c1.addEventListener('click', function() {
    t2.style.display = 'none';
    t1.style.display = 'flex';
  });

  c2.addEventListener('click', function() {
      t1.style.display = 'none';
      t2.style.display = 'flex';
    });

  function updateTimetText(){

      var m = Math.floor(elapsedTime / 60000);

      var s = Math.floor(elapsedTime % 60000 / 1000);

      var ms = elapsedTime % 1000;

      m = ('0' + m).slice(-2); 
      s = ('0' + s).slice(-2);
      // ms = ('0' + ms).slice(-3);

      timer.textContent = m + ':' + s;
  }

  function xxx(t) {
    let star = Math.floor(t / 1000);
    let b = document.getElementById('b')
    // let c = document.getElementById('c')

    if(star % 10  === 0 && star % 60  === 0) {
      const p = document.createElement('p');
      let val = 'a';
      p.setAttribute("id",val);
      b.appendChild(p);
      p.textContent = "★" ;
    } else if(star % 10 === 0) {
      const p = document.createElement('p');
      let val = 'a';
      p.setAttribute("id",val);
      
      b.appendChild(p);
      p.textContent = "☆" ;
    }
  }

  function xxxx(t) {
    let star = Math.floor(t / 1000);
    let b = document.getElementById('b')
    // let c = document.getElementById('c')

    if(star % 10  === 0 && star % 60  === 0) {
      const p = document.createElement('p');
      let val = 'a';
      p.setAttribute("id",val);
      b.appendChild(p);
      p.textContent = "★" ;
    } else if(star % 10 === 0) {
      const p = document.createElement('p');
      let val = 'a';
      p.setAttribute("id",val);
      
      b.appendChild(p);
      p.textContent = "☆" ;
    }
  }

  function countUp(){

      timerId = setTimeout(function(){
          
          elapsedTime = Date.now() - startTime + timeToadd;
          updateTimetText()

          countUp();
          if(c1.checked === true){
            xxx(elapsedTime);
          } else {
            xxxx(elapsedTime);
          }
      },1000);
  }

  start.addEventListener('click',function(){

      startTime = Date.now();

      countUp();
  });

  stop.addEventListener('click',function(){

     clearTimeout(timerId);

     timeToadd += Date.now() - startTime;

  });

  reset.addEventListener('click',function(){

      elapsedTime = 0;

      timeToadd = 0;

      updateTimetText();
      
      let dom = document.getElementById('a');
        if (dom) {
        dom.parentNode.removeChild(dom);
      }

      document.getElementById('b').innerHTML = '';  
      // document.getElementById('c').innerHTML = ''; 
  });
})();