`Case3. Oy raqami berilgan. Shu oyda nechta kun borligini aniqlovchi programma tuzilsin.`;

M = 6;

switch (M) {
  case 12:
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
    console.log(M, `chi oyda 31 kun bor`);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(M, `chi oyda 30 kun bor`);
    break;
  case 2:
   console.log(M, `chi oyda 28/29 kun bor`);
  default:
    break;
}
