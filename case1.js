`Case1. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.(1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a'lo). Agar k soni 1-5 gacha oraliqqa tegishli bolmasa "xato" deb chiqarilsin.`;

let K = 5;

switch (K) {
  case 5:
    console.log(`a'lo`);
    break;
  case 4:
    console.log(`yahshi`);
    break;
  case 3:
    console.log(`qoniqarli`);
    break;
  case 2:
    console.log(`qoniqarsiz`);
    break;
  case 1:
    console.log(`yamon`);
    break;

  default:
   console.log(`xato`);
    break;
}
