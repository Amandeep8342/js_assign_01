const myVal = process.argv

let array2 = [];

// adding values to array
array2.push(Number(myVal[2]));
array2.push(Number(myVal[3]));


console.log(array2);


let x = Number(myVal[2]) + Number(myVal[3]);// sum of 2 numbers


if (x < 10)
{ 
   console.log(' Sum is: '+x+' and is less than 10');
}

else if  ( x>10 && x<100)
{
    console.log('Sum is: '+x +' and is  greater than 10 but less than 100');
}

else if ( x>100 && x<1000)
{
    console.log('Sum is: '+x+' and is  greater than 100 but less than 1000')
}
    else
    {
        console.log('Sum is:'+x+' greater than 1000')
    }