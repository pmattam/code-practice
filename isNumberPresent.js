/* Given an array of integers, for each element determine whether that element occurs earlier in the array and whether it occurs
later in the array. Return an array of two binary integers as strings where each binary digit is 1 if the value occurs in the 
earlier or later subarrays, or 0 if not. The index of each binary digit matches the index of the array element being tested. 
The first string is related to lower indices and the second to higher.

For example, given num = [1,2,3,2,1] we perform the following tests:
                                        Bit Value
i   A[i]    A[0:i-1]    A[i+1:n-1]  First   Second
-   ---     -------     ---------   -----   -----
0   1       NULL        [2,3,2,1]   0       1
1   2       [1]         [3,2,1]     0       1
2   3       [1,2]       [2,1]       0       0
3   2       [1,2,3]     [1]         1       0
4   1       [1,2,3,2]   NULL        1       0

Our first output is 00011 and our second is 11000*/


function bitPattern(num) {
    console.log(num);
    var firstStr = '';
    var secondStr = '';
    var result = [];
    num.forEach((n, i) => {
        if (num.slice(0, i).indexOf(n) !== -1) {
            firstStr += '1';
        } else {
            firstStr += '0';
        }
        console.log(firstStr);
        if (num.slice(i + 1).indexOf(n) !== -1) {
            secondStr += '1';
        } else {
            secondStr += '0';
        }
        console.log(secondStr);
    });
    result.push(firstStr, secondStr);
    return result;
}

console.log(bitPattern([1, 2, 3, 2, 1]));