`Case5. Og'irlik birliklari quyidagi tartibda berilgan. 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5- sentner. Og'irlik birligini bildiruvchi soni berilgan va shu birlikdagi og'irlik qiymati berilgan. Og'irlikni kilogramda ifodalofchi programma tuzilsin.`;

let O = 4; //Og'irlikni bildiruvchi son
let Q = 7; //Og'irlik qiymati

switch (O) {
  case 1:
    console.log(Q, `kg =`, Q, `kilogram`); //1-kilogram
    break;
  case 2:
    console.log(Q, `mg =`, Q / 10000, `kilogram`); //2-milligram
    break;
  case 3:
    console.log(Q, `g =`, Q/1000, `kilogram`); //3-gram
    break;
  case 4:
    console.log(Q, `t =`, Q * 1000, `kilogram`); //4-tonna
    break;
  case 5:
    console.log(Q, `sn =`, Q * 100, `kilogram`); //5-sentner
    break;

  default:
    console.log(`xato`);
    break;
}
