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

const n2s = require('../../lib/number-to-string');
n2s.addStringPrototypes();

describe('Number2String (Unit)', () => {

    

    /** 
     * Check string#numToStr(tmpStr) 
     */
    describe('#numToStr(num)', () => {
        it("should return zero", () => {
            expect(stringz.numToStr(0)).toBe('zero');
        });
        it("should return zero", () => {
            expect('0'.numToStr()).toBe('zero');
        });
        it('should return a string', () => {
            expect('122'.numToStr()).toBe('one hundred twenty two');
        });
        it('should return error message when digit exceed limit 21', () => {
            expect('10000000000000'.numToStr()).toBe('Error: Exceede length limit');
        });
        it('should return correct string for num has 3* digit', () => {
            expect('2000'.numToStr()).toBe('two thousand');
        });
        it('should return correct string for num has 3* digit', () => {
            expect('1000000'.numToStr()).toBe('one million');
        });
        it('should return correct string for num is not 3* digit', () => {
            expect('12000'.numToStr()).toBe('twelve thousand');
        });
        it('should return correct string for num is not 3* digit', () => {
            expect('666000'.numToStr()).toBe('six hundrend sixteen six thousand');
        });
        it('should return correct string for num ', () => {
            expect('12345'.numToStr()).toBe('twelve thousand three hundred forty five');
        });
        it('should return correct string for num ', () => {
            expect('123456'.numToStr()).toBe('one hundred twenty three thousand four hundred fifty six');
        });
        it('should return correct string for num including 0', () => {
            expect('12305'.numToStr()).toBe('twelve thousand three hundred five');
        });
        it('should return correct string for num including 0', () => {
            expect('123056'.numToStr()).toBe('one hundred twenty three thousand fifty six');
        });
        // it('should return correct string for num ', () => {
        //     expect('123456789'.numToStr()).toBe('twelve thousand four hundred fifty six');
        // });
    });

});
