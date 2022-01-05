module.exports = function toReadable (number) {
  let len = String(number).length
  if(len === 1) {
    if (number === 0) {
      return 'zero'
  } else return getNumber1(number)
  } else if (len === 2){
    return getNumber2(String(number))
  } else {return getNumber3(number)};
}


function getNumber1(num){
  let str = '';
  switch(num){
      case 1: str = 'one'
      break;
      case 2: str = 'two'
      break;
      case 3: str = 'three'
      break;
      case 4: str = 'four'
      break;
      case 5: str = 'five';
      break;
      case 6: str = 'six';
      break;
      case 7: str = 'seven';
      break;
      case 8: str = 'eight';
      break;
      case 9: str = 'nine';
      break;
  }
  return str
}

function getNumber2(str){

let arr1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]
let arr2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
if(str[0] === '1'){
    return arr1[+str[1]]
} else if (str[1] === '0'){
    return arr2[+str[0]-2]
} else  return arr2[+str[0]-2] + ' ' + getNumber1(+str[1])

}

function getNumber3(num){
  let str = String(num);
  if (str[1] === '0' && str[2] === '0'){
     return getNumber1(+str[0]) + ' hundred'
  } else if(str[1] === '0'){
    return getNumber1(+str[0]) + ' hundred ' + getNumber1(+str[2])
  } else return getNumber1(+str[0]) + ' hundred ' + getNumber2(str[1]+str[2])
}