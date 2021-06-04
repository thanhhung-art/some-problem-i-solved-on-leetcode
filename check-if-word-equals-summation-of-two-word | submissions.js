var isSumEqual = function(firstWord, secondWord, targetWord) {
    let chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"];
    function convertToNumber(str){
        if(str.length === 1){
            return chars.indexOf(str);
        }
        let arrStr = str.split("");
        let changeArrStr = arrStr.map( e => "" + chars.indexOf(e));
        let strNums = changeArrStr.join("");
        return parseInt(strNums);
    }
    
    let sumFirst = convertToNumber(firstWord);
    let sumSecond = convertToNumber(secondWord);
    let sumTarget = convertToNumber(targetWord);
    
    if( sumFirst === sumSecond && sumSecond === sumTarget){
        return true;
    }
    else if(sumFirst + sumSecond === sumTarget){
        return true;
    }
    return false;
};
