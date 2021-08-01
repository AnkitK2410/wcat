let fs=require("fs");
let path=require("path");


let srcpath= "C:\\Users\\Ankit\\Desktop\\Web_DEV_PP12\\Week_2_File_And_Folders\\File.js";

let destfolderpath= "C:\\Users\\Ankit\\Desktop\\Web_DEV_PP12\\Week_2_File_And_Folders\\command";

let filename=path.basename(srcpath);

let destpath=path.join(destfolderpath,filename);

fs.copyFileSync(srcpath,destpath);