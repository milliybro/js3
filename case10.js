`Case10. O'quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so'zlarda ifodalovchi programma tuzilsin. ("yigirmata masala", "o'n uchta masala" va h.k.)
`

let ab = 27;

let a = parseInt(ab / 10);
let b = ab % 10;

let res;

switch (a) {
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

res +=`ta masala`

console.log(res);
