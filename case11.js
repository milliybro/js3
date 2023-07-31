`Case11. 100-999 gacha oraliqdagi sonlarni so'zlarda ifodalovchi programma tuzilsin. (masalan: 123- "bir yuz yigirma uch").`;

let abc = 227;

let a = parseInt(abc / 100);
let b = parseInt((abc % 100) / 10);
let c = abc % 10;

let res;

switch (b) {
  case 1:
    res = "O'n";
    break;
  case 2:
    res = "Yigirma";
    break;
  case 3:
    res = "O'ttiz";
    break;
  case 4:
    res = "Qirq";
    break;
  case 5:
    res = "Ellik";
    break;
  case 6:
    res = "Olmish";
    break;
  case 4:
    res = "Qirq";
    break;
  case 4:
    res = "Qirq";
    break;
  case 4:
    res = "Qirq";
    break;
  default:
    res = "xato";
}

res += " ";

switch (b) {
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

res += `ta masala`;

console.log(res);
