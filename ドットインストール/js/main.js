'use strict';

const x = 2;
//　この定数はどこでも有効

function f() {
  const x = 1;
  // この定数はこの処理でのみ有効
  console.log(x);
}


