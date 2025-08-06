const {add,sub,mul,div} = require('./lib/math')

const readline = require('readline');
const fs = require('fs')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter Number 1 :', (num1) => {
    const n1 = Number(num1)
    if(isNaN(n1)){
        console.log('invalid number 1')
        rl.close();
    }

    rl.question('Enter Number 2 : ', (num2)=>{
        const n2 = Number(num2)
        if(isNaN(n2)){
            console.log('invalid number 2')
            rl.close()
        }
    

    // console.log('addition of number 1 and number 2 is : ',add(n1,n2))
    // console.log('subtraction of number 1 and number 2 is : ',sub(n1,n2))
    // console.log('multiplication of number 1 and number 2 is : ',mul(n1,n2))
    // console.log('division of number 1 and number 2 is : ',div(n1,n2))


    const results = [['operation','number1','number2','result'],
                     ['addition',n1,n2,add(n1,n2)],
                     ['substraction',n1,n2,sub(n1,n2)],
                     ['multiplication',n1,n2,mul(n1,n2)],
                     ['division',n1,n2,div(n1,n2)]]


    const csvData = results.map((data)=>data.join(',')).join('\n')

    fs.writeFile('csv_result.csv',csvData,(err)=>{
        if(err){
            console.log('error occured')
            
        }
        else{
            console.log('csv made successfully')
        }
        rl.close()
    })


    })
    
});
