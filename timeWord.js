function timeToWords(timeString) {
    const timeParts = timeString.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
  
    const hoursInWords = [
      'midnight', 'one', 'two', 'three', 'four', 'five', 'six',
      'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'
    ];
  
    const minutesInWords = [
      'o’clock', 'oh one', 'oh two', 'oh three', 'oh four', 'oh five',
      'oh six', 'oh seven', 'oh eight', 'oh nine', 'ten', 'eleven',
      'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
      'eighteen', 'nineteen', 'twenty', 'twenty one', 'twenty two',
      'twenty three', 'twenty four', 'twenty five', 'twenty six',
      'twenty seven', 'twenty eight', 'twenty nine'
    ];
  
    let output = '';
  
    if (hours === 0 && minutes === 0) {
      output = 'midnight';
    } else if (hours === 12 && minutes === 0) {
      output = 'noon';
    } else {
      if (hours >= 12) {
        output += hoursInWords[hours - 12];
        output += ' ';
        output += minutesInWords[minutes];
        output += ' pm';
      } else {
        output += hoursInWords[hours];
        output += ' ';
        if (minutes === 0) {
          output += "o'clock";
        } else {
          output += minutesInWords[minutes];
          output += ' am';
        }
      }
    }
  
    return output;
  }
  

  console.log(timeToWords('00:00')); // midnight
  console.log(timeToWords('06:18')); // six eighteen am
  console.log(timeToWords('12:09')); // twelve oh nine pm
  console.log(timeToWords('23:23')); // eleven twenty three pm
  