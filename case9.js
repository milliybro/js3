`Case9. O'yin kartasi turlari berilgan 1-g'isht, 2-olma, 3-chillak, 4-qarg'a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o'zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6≤ N ≤14), M-karta turi(1≤M ≤4) kiritilganda karta nomlarini (masalan: "olti qarg'a”) chiqarib beruvchi programma tuzilsin.`;

let N = 12; //karta raqami
let M = 4; //karta turi

switch (N) {
  case 6:
    N = `Olti`;
    break;
  case 7:
    N = `Yetti`;
    break;
  case 8:
    N = `Sakkiz`;
    break;
  case 9:
    N = `To'qqiz`;
    break;
  case 10:
    N = `O'n`;
    break;
  case 11:
    N = `Valet`;
    break;
  case 12:
    N = `Dama`;
    break;
  case 13:
    N = `Qirol`;
    break;
  case 14:
    N = `Tuz`;
    break;

  default:
    console.log("xato");
    break;
}

switch (M) {
  case 1:
    M = `g'isht`;
    break;
  case 2:
    M = `olma`;
    break;
  case 3:
    M = `chillak`;
    break;
  case 4:
    M = `qarg'a`;
    break;

  default:
    console.log(`xato`);
    break;
}

console.log(N + ``,M);
