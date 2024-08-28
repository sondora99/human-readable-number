module.exports = function toReadable (number) {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twenties = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result;
    
    const getOnes = function(number){
        return ones[number]
    };

    const getTens = function(number){
        return tens[number%10]
    };

    const getTwenties = function(number){
        if (number%10 == 0){
            return  `${twenties[Math.floor(number/10)-2]}`
        }
         else {return `${twenties[Math.floor(number/10)-2]} ${ones[number%10]}`}
    };

    const getHundred = function(number){
        if (number%100 == 0){
            return `${ones[number/100]} hundred`
        } else if (number%100 > 0 && number%100 < 10) {
            return `${ones[Math.floor(number/100)]} hundred ${getOnes(number%100)}`
        }
        else if (number%100 >= 10 && number%100 <= 19) {
            return `${ones[Math.floor(number/100)]} hundred ${getTens(number%100)}`
        } else if (number >= 120 && number <= 999 && number%10 == 0){  //120, 130 ... 980, 990
            return `${ones[Math.floor(number/100)]} hundred ${getTwenties(number%100)}`
        } else if (number >= 120 && number <= 999 && number%10 != 0){
            return `${ones[Math.floor(number/100)]} hundred ${getTwenties(number%100)}`
        }
    }

    if (number >= 0 && number <= 9){
        result = getOnes(number)
    } else if (number >= 10 && number <= 19) {
        result = getTens(number)
    } else if (number >=20 && number <= 99) {
        result = getTwenties(number)
    } else if (number >= 100 && number <= 999) {
        result = getHundred(number)
    } /*else if (number >= 100 && number <= 999 && number%10 == 0) {
        return `${ones[Math.floor(number/100)]+1} hundred and ${twenties[number%100%10]}`
    }*/
   return result
}