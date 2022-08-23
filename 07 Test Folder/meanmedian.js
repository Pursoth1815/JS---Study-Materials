let inputNum = [1,4,6,4,6,7,2,9];

findLength(...inputNum);

function findLength(){

    let len = inputNum.length;
    let sum = 0;
    let sortedEle = inputNum.sort()
    
    // Mean

    for( i in inputNum){

        sum += inputNum[i];
    }

    console.log('Total Sum of an Array is :',sum);
    console.log('Total Length of an Array is :',len);
    let mean = sum/len;
    console.log('Mean :',mean);

    // Median

    if(len%2==0){
        let medianEle = (sortedEle[len/2 - 1] + sortedEle[len/2]) / 2 ;
        console.log('Median :',medianEle);
    }
    else {
        let medianEle = parseInt(len/2);

        console.log('Median :',sortedEle[medianEle]);
    }

    // Mode

    const obj = {}
    inputNum.forEach( number => {
        if(!obj[number]) {
            obj[number] = 1;
            // console.log(obj);
        }
        else {
            obj[number] += 1;
            // console.log(obj);
        }
    });
    console.log(obj);

}