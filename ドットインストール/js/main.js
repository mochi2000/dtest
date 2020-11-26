'use strict';

let hp = 100;

while (hp > 0) {
  console.log(`${hp} HP left`);
  hp -= 15;
}

do {
  console.log(`${hp} HP left`);
  hp -= 15;
} while (hp >0);