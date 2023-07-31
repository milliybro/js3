`Case8. Robot faqat to'rtta tomonga ko'cha oladi ("s"-shimol, "j"-janub, "q"-sharq, "g"-g'arb) va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-o'ngga buril. Y - robot yo'nalishi va K - kamanda berilgan. Berilgan kamanda bajarilgandan keying robot holatini aniqlovchi programma tuzilsin.`;

let Y = `j`;
let K = 1;

switch (Y) {
  case `s`:
    Y = `shimol`;
    break;
  case `j`:
    Y = `janub`;
    break;
  case `q`:
    Y = `sharq`;
    break;
  case `g`:
    Y = `garb`;
    break;

  default:
    console.log(`xato`);
    break;
}

switch (K) {
  case 0:
    K = `harakatni davom ettir`;
    break;
  case 1:
    K = `chapga buril`;
    break;
  case 2:
    K = `o'nga buril`;
    break;

  default:
   console.log(xato);
    break;
}

console.log(Y, `- ` + K);
