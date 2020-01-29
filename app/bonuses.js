//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let tmpArr = str.split(" ");
  tmpArr[0] = tmpArr[0].toLowerCase();
  for (let i = 1; i < tmpArr.length; i++) {

    tmpArr[i] = tmpArr[i].charAt(0).toUpperCase() + tmpArr[i].slice(1);

  }
  return tmpArr.join("");
}
