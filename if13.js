"if13. A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o`sish tartibida berilgan bo`lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.";

A = 5.5;
B = 8.7;
C = 11.3;

if (A < B && B < C) {
  A *= 2;
  B *= 2;
  C *= 2;
} else {
  A *= -1;
  B *= -1;
  C *= -1;
}

console.log("A:", A);
console.log("B:", B);
console.log("C:", C);

