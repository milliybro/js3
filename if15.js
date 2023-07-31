"if15. To`rtta butun son berilgan. Shu sonlarni uchtasi o`zaro teng, qolgan bittasini tartib raqami aniqlansin.";

a = 7;
b = 7;
c = 7;
d = 5;

if (a == b && b == c) {
  console.log(4);
} else if (a == b && b == d) {
  console.log(3);
} else if (a == c && c == d) {
  console.log(2);
} else if (b == c && c == d) {
  console.log(1);
}
else{
   console.log(`error`);
}
