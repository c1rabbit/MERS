//mod 10 weight 2
function generate (orgID,loanNum) {
  if (orgID.toString().length != 6 ){
    return "[error]: org ID is not 6 digits";
  } else if (loanNum.toString().length > 9){
    return "[error]: loan number is longer than 9 digits"
  } else if (loanNum.toString().length < 9){
    while(loanNum.toString().length < 9){
      loanNum = "0" + loanNum;
    }
    console.log("orgID: " + orgID + "\tloanNum: " + loanNum);
  } else{
    console.log("orgID: " + orgID + "\tloanNum: " + loanNum);
  }
  var temp = orgID.toString() + loanNum.toString();
  var sum = 0;
  for(var i = 0; i < temp.length; i++){
    if(i % 2 == 0){
      var x2 = parseInt(temp[i])*2;
      if(x2 > 9){
        sum += 1 + x2 % 10;
        //console.log(1 + x2 % 10);
      }else{
        sum += x2;
        //console.log(x2);
      }
    }else{
      sum += parseInt(temp[i]);
      //console.log(temp[i]);
    }
  }
  //console.log("sum" + sum);
  var digit = Math.ceil(sum/10)*10 - sum
  //console.log(Math.ceil(sum/10)*10);
  return digit;

}

function validate (min){
  var digit = generate(min.toString().substring(0,6),min.toString().substring(6,15));
  return digit == min.toString().substring(15);
}

console.log(generate("0123","0123"));
console.log(generate("123456","0123456789"));
console.log("--------------");
console.log(generate("123456","012034"));
console.log(generate("125647","1"));
console.log(generate("111111","111111111"));
console.log(validate("1111111111111117"));
console.log(generate("516311","111111111"));
console.log(validate("5163111111111115"));
console.log(generate("516171","151111111"));
console.log(validate("5161711511111110"));


module.exports = {
    generate,
    validate
}
