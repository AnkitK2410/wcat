//implementation-> files/ folder interact
//directory
//file-> read/write/update/delete

let fs=require("fs");
let content=fs.readFileSync("abc.text");


//buffer->audio,video,text
console.log("content :",content);
//+->concatinate -> String => text
console.log("content: "+content);

//write-> writeFileSync
//if file doesn't exit->create it,and put content in it
// already exist-> override content in file

fs.writeFileSync("abc.text","bhai khush ho");
//update
fs.writeFileSync("abc.text","khus kyu nahi");

//delete a file by passing it's path
//fs.unlinkSync("abc.text");
console.log("file is removed");

//****************directory******************

fs.mkdirSync("mydirectory");
//delete
fs.rmdirSync("mydirectory");






