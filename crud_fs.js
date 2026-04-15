const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname, 'CRUD');
const myPath =`${myCRUD}/crud.txt`

// CREATE
// fs.writeFileSync(myPath, 'Create Read Update Delete');

// READ
// fs.readFile(myPath, 'utf8', (err, file) => {
//     console.error(file);
// });

// UPDATE
// fs.appendFile(myPath, " in Node.js", (err)=>{
//     if(err){
//         console.log("Your File is Upload Successfully!")
//     }
// })

// DELETE
// fs.unlinkSync(myPath);