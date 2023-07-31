`Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").`;

let abc = 227;

let a = parseInt(abc / 100);
let b = parseInt((abc % 100) / 10);
let c = abc % 10;

let res;

switch (a) {
  case 1:
    res = `1 yuz`;
    break;
  case 2:
    res = `2 yuz`;
    break;
  case 3:
    res = `3 yuz`;
    break;
  case 4:
    res = `4 yuz`;
    break;
  case 5:
    res = `5 yuz`;
    break;
  case 6:
    res = `6 yuz`;
    break;
  case 7:
    res = `7 yuz`;
    break;
  case 8:
    res = `8 yuz`;
    break;
  case 9:
    res = `9 yuz`;
    break;

  default:
   console.log('...');
    break;
}

res += " ";

switch (b) {
  case 1:
    res += "O'n";
    break;
  case 2:
    res += "Yigirma";
    break;
  case 3:
    res += "O'ttiz";
    break;
  case 4:
    res += "Qirq";
    break;
  case 5:
    res += "Ellik";
    break;
  case 6:
    res += "Oltmish";
    break;
  case 4:
    res += "Yetmish";
    break;
  case 4:
    res += "Sakson";
    break;
  case 4:
    res += "To'qson";
    break;
  default:
    res = "xato";
}

res += " ";

switch (c) {
  case 1:
    res += "bir";
    break;
  case 2:
    res += "ikki";
    break;
  case 3:
    res += "uch";
    break;
  case 4:
    res += "to'rt";
    break;
  case 5:
    res += "besh";
    break;
  case 6:
    res += "olti";
    break;
  case 7:
    res += "yetti";
    break;
  case 8:
    res += "sakkiz";
    break;
  case 9:
    res += "to'qqiz";
    break;
}



console.log(res);
