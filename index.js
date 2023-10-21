import { readFile, readFileSync } from 'fs';
// Cannot use split('\r') on Linux
const art = readFileSync('ascii_art.txt').toString().split('\r\n');
// console.log(art);

const info = readFileSync('info.txt').toString().split('\n');
// console.log(info);

const line_num = Math.max(art.length, info.length);
const len_art = 2;
let maxLength = 0;
art.forEach((line) => {
    const lineLength = line.length;
    maxLength = Math.max(maxLength, lineLength);
  });
  
// console.log(maxLength);
const padding = maxLength + 10;
for (var i = 0; i < line_num; i++){
    if (i < art.length && i < info.length){
        console.log(art[i].padEnd(padding), info[i]);
    }
    else if (i >= art.length){
        console.log(' '.padEnd(padding), info[i]);
    }
    else {
        console.log(art[i]);
    }
}

