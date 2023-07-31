`Case12. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo'lbars, quyon, ajdar, ilon, ot, qo'y, maymun, tovuq, it va to'ngizlardan) nomlaring kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: "Yashil sichqon yili".`;

let y = 2023;

let a = (y - 1984) % 12;
let c = Math.floor((y - 1984) / 12) % 5;
console.log(c);
switch (a) {
  case 0:
    a = "sichqon";
    break;
  case 1:
    a = "sigir";
    break;
  case 2:
    a = "yo'lbars";
    break;
  case 3:
    a = "quyon";
    break;
  case 4:
    a = "ajdar";
    break;
  case 5:
    a = "ilon";
    break;
  case 6:
    a = "ot";
    break;
  case 7:
    a = "qo'y";
    break;
  case 8:
    a = "maymun";
    break;
  case 9:
    a = "tovuq";
    break;
  case 10:
    a = "it";
    break;
  case 11:
    a = "to'ng'iz";
    break;

  default:
    console.log(`xato`);
    break;
}


switch (c) {
  case 0:
    c = `yashil`;
    break;
  case 1:
    c = `qizil`;
    break;
  case 2:
    c = `sariq`;
    break;
  case 3:
    c = `oq`;
    break;
  case 4:
    c = `qora`;
    break;

  default:
    console.log(`xato`);
    break;
}

console.log(c +` `, a);


