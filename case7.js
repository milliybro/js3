`Case7. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo'lmagan yil sanasi kiritiladi). Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.
`;

ab = 27;
M = 6;

a = parseInt(ab / 10);
b = ab % 10;

switch (a) {
  case 1:
    console.log(`O'n`);
    break;
  case 2:
    console.log(`Yigirma`);
    break;
  case 3:
    console.log(`O'ttiz`);
    break;

  default:
    break;
}
switch (++b) {
  case 1:
    console.log(`birinchi`);
    break;
  case 2:
    console.log(`ikkinchi`);
    break;
  case 3:
    console.log(`uchinchi`);
    break;
  case 4:
    console.log(`to'rtinchi`);
    break;
  case 5:
    console.log(`beshinchi`);
    break;
  case 6:
    console.log(`oltinchi`);
    break;
  case 7:
    console.log(`yettinchi`);
    break;
  case 8:
    console.log(`sakkizinchi`);
    break;
  case 9:
    console.log(`toqqizinchi`);
    break;

  default:
    break;
}

switch (M) {
  case 1:
    console.log(`Yanvar`);
    break;
  case 2:
    console.log(`Fevral`);
    break;
  case 3:
    console.log(`Mart`);
    break;
  case 4:
    console.log(`Aprel`);
    break;
  case 5:
    console.log(`May`);
    break;
  case 6:
    console.log(`Iyun`);
    break;
  case 7:
    console.log(`Iyul`);
    break;
  case 8:
    console.log(`Avgust`);
    break;
  case 9:
    console.log(`Sentabr`);
    break;
  case 10:
    console.log(`Oktabr`);
    break;
  case 11:
    console.log(`Noyabr`);
    break;
  case 12:
    console.log(`Dekabr`);
    break;

  default:
    break;
}
