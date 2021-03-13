module.exports = function toReadable (number) {
  let a = Math.trunc(number/100);
  let b = Math.trunc(number % 100 /10);
  let bb = number % 100;
  let c = number % 10;
  let str = '';
  if (number === 0) {
      str = 'zero'
  } else {
     if (bb > 10 && bb < 20) {
        switch (a) {
            case 9:
                str += 'nine hundred ';
                break;
            case 8:
                str += 'eight hundred ';
                break;
            case 7:
                str += 'seven hundred ';
                break;
            case 6:
                str += 'six hundred ';
                break;
            case 5:
                str += 'five hundred ';
                break;
            case 4:
                str += 'four hundred ';
                break;
            case 3:
                str += 'three hundred ';
                break;
            case 2:
                str += 'two hundred ';
                break;    
            case 1:
                str += 'one hundred ';
                break;   
          }
          switch (bb) {
            case 19:
                str += 'nineteen';
                break;
            case 18:
                str += 'eighteen';
                break;
            case 17:
                str += 'seventeen';
                break;
            case 16:
                str += 'sixteen';
                break;
            case 15:
                str += 'fifteen';
                break;
            case 14:
                str += 'fourteen';
                break;
            case 13:
                str += 'thirteen';
                break;
            case 12:
                str += 'twelve';
                break;    
            case 11:
                str += 'eleven';
                break;   
          }
     } else {
        switch (a) {
            case 9:
                str += 'nine hundred ';
                break;
            case 8:
                str += 'eight hundred ';
                break;
            case 7:
                str += 'seven hundred ';
                break;
            case 6:
                str += 'six hundred ';
                break;
            case 5:
                str += 'five hundred ';
                break;
            case 4:
                str += 'four hundred ';
                break;
            case 3:
                str += 'three hundred ';
                break;
            case 2:
                str += 'two hundred ';
                break;    
            case 1:
                str += 'one hundred ';
                break;   
          }
          switch (b) {
            case 9:
                str += 'ninety ';
                break;
            case 8:
                str += 'eighty ';
                break;
            case 7:
                str += 'seventy ';
                break;
            case 6:
                str += 'sixty ';
                break;
            case 5:
                str += 'fifty ';
                break;
            case 4:
                str += 'forty ';
                break;
            case 3:
                str += 'thirty ';
                break;
            case 2:
                str += 'twenty ';
                break;    
            case 1:
                str += 'ten';
                break;   
          }
          switch (c) {
            case 9:
                str += 'nine';
                break;
            case 8:
                str += 'eight';
                break;
            case 7:
                str += 'seven';
                break;
            case 6:
                str += 'six';
                break;
            case 5:
                str += 'five';
                break;
            case 4:
                str += 'four';
                break;
            case 3:
                str += 'three';
                break;
            case 2:
                str += 'two';
                break;    
            case 1:
                str += 'one';
                break;   
          }
     }
  }

  if (str[str.length-1]===' ') {
    str = str.slice(0,str.length-1);
  }

  return str;
}


