class MyString {
    constructor(value) {
        this.value = value;
        let count = 0;
        let length = 0;
        let forLengh = [];
        let forConcat = [];
        let concatCount = 0;
        let forSubstring = [];
        
        this.calcLength = function () {
            while (true) {
                if (value[count] == undefined) return length;
                forLengh.push(value[count]);
                count++;
                length++;
            }
        }
        this.concatFunction = function (concText) {
            this.concText = concText;
            this.calcLength();
            forConcat = forLengh;
            while (true) {
                if (concText[concatCount] == undefined) return forConcat.join('');
                forConcat.push(concText[concatCount]);
                concatCount++;
            }
        }
        this.elementAt = function (index) {
            this.index = index;
            this.calcLength();
            return forLengh[index];
        }
        this.subText = function (startingIndex) {
            this.startingIndex = startingIndex;
            this.calcLength();
            while (true) {
                if (forLengh[startingIndex] == undefined) return forSubstring.join('');
                forSubstring.push(forLengh[startingIndex]);
                startingIndex++;
            }
        }
    }
};

let testValue = new MyString('lorem ipsum');
let firstMethod = testValue.calcLength();
let secondMethod = testValue.concatFunction(' lorem ipsum dolor ')
let thirdMethod = testValue.elementAt(6);
let fourthMethod = testValue.subText(14)
console.log('length : ' + firstMethod);
console.log('concat :' + secondMethod);
console.log('index :' + thirdMethod);
console.log('SubTxt:' + fourthMethod); 