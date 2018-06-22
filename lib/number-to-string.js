/**
 * Copyright 2018 FieryDev
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * |||Need to be simplified
 * Translate numbers into strings
 * 
 * @param {number} num need to be translated
 * @returns {string} numStr tmpStr string num translate to
 * 
 */
const numToStr = (num) => {

    if (Number(num) == 0){return 'zero';}

    var th = ['','thousand','million'];//, 'billion','trillion', 'quadrillion', 'quintillion'];
    var dg = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
    var tn = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    var tw = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    var numStr = '';
    num = num.toString().replace(/[\, ]/g,'');
    var singleNum = num.split('');
    var len = num.length;
    if (num.length > 9)
        return 'Error: Exceede length limit';
    if (num < 1000) {
        numStr =  dg[singleNum[0]] + ' hundred ';
        if (singleNum[1] == '1')
            numStr = numStr + tn[singleNum[2]];
        else if (singleNum[1] == '0')
            numStr = numStr + dg[singleNum[2]];
        else 
            numStr = numStr + tw[singleNum[1]-2] + ' ' + dg[singleNum[2]];
    }
    else if (num % 1000 == 0) {
        if ((len-1) % 3 == 0)
            numStr = dg[singleNum[0]] + ' ' + th[(len-1)/3];
        else if ((len-2) % 3 == 0) 
            numStr = tn[singleNum[1]] + ' ' + th[(len-2)/3];
        else if (len % 3 == 0) 
            numStr = dg[singleNum[0]] + ' hundrend ' + tn[singleNum[1]] + ' ' + dg[singleNum[2]] + ' ' + th[(len-3)/3];
    }
    else{
        var subStr2 = '';
        var subStr1 = '';
        var subStr3 = '';
        if (singleNum[len-3] != '0')
            subStr3 = dg[singleNum[len-3]] + ' hundred ';
        if (singleNum[len-2] == '1')
            subStr3 = subStr3 + tn[singleNum[len-1]];
        else if (singleNum[len-2] == '0')
            subStr3 = subStr3 + dg[singleNum[len-1]];
        else 
            subStr3 = subStr3 + tw[singleNum[len-2]-2] + ' ' + dg[singleNum[len-1]];
        if (len > 4){
            if (len == 5){
                if (singleNum[0] == '1')
                    subStr2 = tn[singleNum[1]] + ' ' + th[1] + ' ';
                else
                    subStr2 = tw[singleNum[0]] + ' ' + dg[singleNum[1]] + ' ' + th[1]+ ' ';
            }
            else if (len == 6){
                if (singleNum[0] != '0')
                    subStr2 = dg[singleNum[0]] + ' hundred '; 
                if (singleNum[1] == '1')
                    subStr2 = subStr2 + tn[singleNum[2]] + ' ' + th[1] + ' ';
                else if (singleNum[1] == '0')
                    subStr2 = subStr2 + dg[singleNum[2]] + th[1] + ' ';
                else
                    subStr2 = subStr2 + tw[singleNum[1]-2] + ' ' + dg[singleNum[2]] + ' ' + th[1]+ ' ';
            }
            if (len > 6){
                if (len = 7)
                    subStr1 = dg[singleNum[0]] + ' ' + th[1] + ' '; 
                else if (len = 8){
                    if (singleNum[0] == '1')
                        subStr1 = tn[singleNum[1]] + ' ' + th[2] + ' ';
                    else
                        subStr1 = tw[singleNum[0]] + ' ' + dg[singleNum[1]] + ' ' + th[2]+ ' ';
                }
                else if (len = 9){
                    if (singleNum[0] != '0')
                        subStr1 = dg[singleNum[0]] + ' hundred '; 
                    if (singleNum[1] == '1')
                        subStr1 = subStr1 +  tn[singleNum[2]] + ' ' + th[2] + ' ';
                    else if (singleNum[1] == '0')
                        subStr1 = subStr1 +  dg[singleNum[2]] + th[2] + ' ';
                    else
                        subStr1 = subStr1 +  tw[singleNum[1]-2] + ' ' + dg[singleNum[2]] + ' ' + th[2]+ ' ';
                }
            }
        }  
        numStr = subStr1 + subStr2 + subStr3;
    }
    return numStr;
};

// /**
//  * Translate words into numbers
//  * 
//  * @param {string} tmpStr string to translate
//  * @returns {number} number after translation
//  * 
//  */
// const StrToNum = (tmpStr, ExpNum) => { 
//     var numList = {
//         'zero': 0,
//         'one': 1,
//         'two': 2,
//         'three': 3,
//         'four': 4,
//         'five': 5,
//         'six': 6,
//         'seven': 7,
//         'eight': 8,
//         'nine': 9,
//         'ten': 10,
//         'eleven': 11,
//         'twelve': 12,
//         'thirteen': 13,
//         'fourteen': 14,
//         'fifteen': 15,
//         'sixteen': 16,
//         'seventeen': 17,
//         'eighteen': 18,
//         'nineteen': 19,
//         'twenty': 20,
//         'thirty': 30,
//         'forty': 40,
//         'fifty': 50,
//         'sixty': 60,
//         'seventy': 70,
//         'eighty': 80,
//         'ninety': 90
//     };
    
//     var Magnitude = {
//         'thousand':     1000,
//         'million':      1000000,
//         'billion':      1000000000,
//         'trillion':     1000000000000,
//         'quadrillion':  1000000000000000,
//         'quintillion':  1000000000000000000,
//         'sextillion':   1000000000000000000000,
//         'septillion':   1000000000000000000000000,
//         'octillion':    1000000000000000000000000000,
//         'nonillion':    1000000000000000000000000000000,
//         'decillion':    1000000000000000000000000000000000,
//     };

//     var numberRes = 0;
//     var numArr = tmpStr.toString().split(/[\s-]+/);
//     var num = numList[numArr[0]];
//     if (num == Null)
//         alert("Unqualified number: " + numArr[0]);  
//     else 
//         numberRes += num;
//         if (numArr[1] == 'hundred')
//             numberRes *= 100;
//             if (numArr[2] != Null)
//                 numberRes *= Magnitude[numArr[2]];
//         else 
//             numberRes *= Magnitude[numArr[1]];

//     return numberRes;
// }



/**
 * Adds the following to the `String.prototype` if it's not already a function:
 *  - NumToStr
 * 
 * This is NON-DESTRUCTIVE! If there is already a function defined, no new function will be set.
 */
const addPrototypes = () => {
    if (typeof String.prototype.numToStr != 'function')
        String.prototype.numToStr = function() {return numToStr.call(null, this); }

}

module.exports = {
    numToStr: numToStr,
    addStringPrototypes: addPrototypes
}
