/**
 * Created by Administrator on 2016/9/4.
 */
//首字母改大写
function firstLetterToUpperCase(str) {
    // var res;
    // if (typeof  str === 'string') {
    //     res = str.charAt(0).toUpperCase() + str.substr(1);
    // } else {
    //     res = str;
    // }
    // return str;
    var res;
    if(typeof str==='string'){
        res = str.substr(0,1).toUpperCase()+str.substr(1);
    }
    else{
        res=str;
    }
    return str;
}

//去掉字符串头尾的空格
function trim(str) {
    var res;
    if (typeof str === 'string') {
        res = str.replace(/^\s/g, '')
            .replace(/\s+$/, '');
    } else {
        res = str;
    }
    return res;
}

//将字符串中 _ 后面的小写字母变成大写，并且删除第一个 _;
function toCamelStyle(str) {
    // var res;
    // if (typeof  str === 'string') {
    //     var isFirstLetterUnderscore = str.charAt(0) === '_';
    //     var wordArr;
    //     if (isFirstLetterUnderscore) {
    //         str = str.substr(1);
    //     }
    //     wordArr = str.split('_');
    //     res = wordArr.map(function (word, index) {
    //         return index === 0 ? word : firstLetterToUpperCase(word);
    //     })
    //     res = wordArr.join('');
    //     if (isFirstLetterUnderscore) {
    //         res = '_' + res;
    //     } else {
    //         res = str;
    //     }
    // } else {
    //     res = str;
    // }
    // return res;
    var res;
    if(typeof str==='string'){
        var isFirstLetterUnderscore=str.chartAt(0)==='_';
        if(isFirstLetterUnderscore ){
           str=str.substr(1);
        }
       var word=str.split("_");
        res=word.map(function(item,index){
            if(!index===0){
                return item.substr(0,1).toUpperCase()+item.substr(1);
            }
        });
        res.join('');
        if(isFirstLetterUnderscore){
            res='_'+res;
        }
        else{
            res=str;
        }
    }
    else{
        res=str;
    }
    return res;
}

//删除字符串中所有的数字
function removeNum(str) {
    var res;
    if (typeof str === 'string') {
        res = res.replace(/\d/g, '');
    } else {
        res = str;
    }
    return res;
}


//反转字符串
function reverse(str) {
    var res;
    if (typeof  str === 'string') {
        res = [];
        var charArr = str.split('');
        var currentIndex = charArr.length - 1;
        for (; currentIndex >= 0; currentIndex--) {
            res.push(charArr[currentIndex]);
        }
        res = res.join('');
    } else {
        res = str;
    }
    return res;
}

function  reverseStr(str){
    return str.split('').reverse().join('');
}

//统计字符串中各字符出现的次数
function  calculateExistNum(str){
    var res=false;
    if (typeof str==='string'){
        res={};
        var charArr=str.split('');
        charArr.forEach(function (eachChar) {
            res[eachChar] ?res[eachChar]++:res[eachChar]==1;
        })
    }
    return res;
}
