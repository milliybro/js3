`Case4. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr, 2-kilometr, 3-metr, 4-millimeter, 5- santimetr. Uzunlik birligini bildiruvchi son berilgan (1 - 5 oraliqda) va shu birlikdagi kesma uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.`;

let U = 3; //Uzunlikni bildiruvchi son
let K = 5.5; //Kesma uzunligi

switch (U) {
  case 1:
    console.log(K, `dm =`, K / 10,`metr`); //1-desimetr
    break;
  case 2:
    console.log(K, `km =`, K * 1000,`metr`); //2-kilometr
    break;
  case 3:
    console.log(K, `m =`, K,`metr`); //3-metr
    break;
  case 4:
    console.log(K, `mm =`, K / 1000,`metr`); //4-milimetr
    break;
  case 5:
    console.log(K, `sm =`, K / 100,`metr`); //5-santimetr
    break;

  default:
   console.log(`xato`);
    break;
}
