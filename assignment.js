function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var tenMileToFeet = feetToMile(52800);
console.log(tenMileToFeet);




function woodCalculator(chare, table, khat){
    var chareWood = chare * 12;
    var tableWood = table * 12;
    var khatWood = khat * 12;
    var totalWood = chareWood + tableWood + khatWood;
    return totalWood;
}


function tinyFriend(small){
    var tiny = small[0];
    for(var i = 0; i < small.length; i++){
        var smallFriend = small[i];
        if(smallFriend > tiny){
            tiny = smallFriend;
        }
    }
    return tiny;
}

var smallOne = tinyFriend(['Abubakar', 'Shamim', 'Soud',]);
console.log(smallOne);