`Case2. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, "qish")`;

let M = 6;
switch (M) {
  case 12:
  case 1:
  case 2:
    console.log(M, `chi oy "qish"`);
    break;
  case 3:
  case 4:
  case 5:
    console.log(M, `chi oy "bahor"`);
    break;
  case 6:
  case 7:
  case 8:
    console.log(M, `chi oy "yoz"`);
    break;
  case 9:
  case 10:
  case 11:
    console.log(M, `chi oy "kuz"`);
    break;
  default:
    console.log(`xato`);
    break;
}
