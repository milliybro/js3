`Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo'lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.
`;

D = 27;
M = 6;

switch (M) {
  case 12:
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
    M = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    M = 30;
    break;
  case 2:
    M = 28;
  default:
    break;
}
