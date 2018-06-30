/*
Project Euler: Problem 19: Counting Sundays
You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)? 
*/

function countingSundays(firstYear, lastYear) {
    let sundays = 0;
    let displayDate = [];

    for (var y = firstYear; y <= lastYear; y++) {
        for (var m = 1; m <= 12; m++) {
            if (new Date(y, m - 1, 1).getDay() === 0) {
                sundays++;
                displayDate.push(new Date(y, m - 1).toString());
            }
        }
    }
    console.log(displayDate);
    return sundays;
}

console.log(countingSundays(1943, 1946));
console.log(countingSundays(1995, 2000));
console.log(countingSundays(1901, 2000));