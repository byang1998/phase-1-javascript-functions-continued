// Your code here
function saturdayFun(defaultactivity="roller-skate") {
 return(`This Saturday, I want to ${defaultactivity}!`);
}

const mondayWork = function(defaultactivity="go to the office") {
    return(`This Monday, I will ${defaultactivity}.`);
}

function wrapAdjective(first= '*'){
    return function innerFunction (str ="a hard worker"){
     return `You are ${first}${str}${first}!`
    }
    
    }


