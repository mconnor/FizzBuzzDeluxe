var key;
var a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";

function arrayHasOwnIndex(array, prop) {
    return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
}
//And then we'd use it like this:

for (key in a) {
    if (arrayHasOwnIndex(a, key)) {
        console.log(a[key]);
    }
}


/// ecmascript 5 way (no ie8)

var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});