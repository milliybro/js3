"if18. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni 'ikki xonali juft son', 'uch xonali toq son' va x.k. ekranga yozadigan programma tuzilsin.";

x = 477;

if (x >= 10 && x <= 99) {
   res = "2 xonali ";
   if (x % 2 === 0) {
     res += "juft";
   } else {
     res += "toq";
   }
 } else if (x >= 100 && x <= 999) {
   res = "3 xonali ";
   if (x % 2 === 0) {
     res += "juft";
   } else {
     res += "toq";
   }
 } else {
   res = "1 xonali ";
   if (x % 2 === 0) {
      res += "juft";
    } else {
      res += "toq";
    }
 }

 console.log(x + " raqami = " + res);

