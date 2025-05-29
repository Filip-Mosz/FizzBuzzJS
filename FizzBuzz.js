// i% 3 -> fizz
// i% -> 5 buzz
// both -> FizzBuzz
// none -> i

for (let i = 1; i <= 100; i++) {
    let out ='';
    let flag = true

    if( i % 3 === 0){
        out += 'Fizz';
        flag = false;
    }
    if( i % 5 === 0){
        out += 'Buzz';
        flag = false;
    }
    if(flag){
        out = i;
    }


    console.log(out);
}

//output in 7minutes, 23seconds