"if12. Uchta son berilgan. Shu sonlarning yig'indisi eng katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.";

a = 19;
b = 16;
c = 10;

sum1 = a + b;
sum2 = b + c;
sum3 = a + c;

if (sum1 > sum2) {
  console.log(a, b);
} else if (sum2 > sum1 && sum2 > sum3) {
  console.log(b, c);
} else if (sum3 > sum2 && sum3 > sum1) {
  console.log(a, c);
} else {
  console.log(`qiymatlar teng`);
}
