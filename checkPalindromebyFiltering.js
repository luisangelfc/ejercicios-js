function isAlphabeticPalindrome(code) {
    let stringClean="";
    for (let i=0; i<code.length; i++){
        if(code[i].toLowerCase() !== code[i].toUpperCase()){
            stringClean += code[i].toLowerCase();
        }
    }
    let i=0;
    let j= stringClean.length-1;

    while(i<j){
        if(stringClean[i] !== stringClean[j]){
            return 0;
        }
    i++;
    j--;    
    }
    return 1;

}