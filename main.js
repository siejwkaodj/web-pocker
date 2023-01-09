// 입력 객체 생성
const readline = require(`readline`);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let peopleNum = -1;

while(peopleNum < 0 || isNaN(peopleNum)){
    console.log('사람 인원 수 입력 : ');
    rl.on('line', (line)=>{
        peopleNum = parseInt(line);
        if(isNaN(peopleNum)){
            console.error('inputType - integer');
            rl.close();
        }
    });
}

// 여러 줄 입력
/*
rl.on('line', (line)=>{
    input = line.split(' ').map(el => parseInt(el));
    rl.close();
});

rl.on('close', ()=>{
    input.forEach(el => console.log(el));
    process.exit();
});
*/


// 입력 객체 닫음
rl.on('close', ()=>{
    process.exit();
});