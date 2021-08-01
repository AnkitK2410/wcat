
let fs = require("fs");
let path=require("path");

let inputarr=process.argv.slice(2);
let command=inputarr[0];
// console.log(command);
switch(command)
{
    case "-s":
        for(let i=1;i<inputarr.length;i++)   
     {   let ans="";
         let content="";
         if(fs.existsSync(inputarr[i]))
         {
              content=content+fs.readFileSync(inputarr[i]);
             
              let count=0;
              for(let j=0;j<content.length;j++)
              {

                  if(content.charAt(j)=="\n"||content.charAt(j)=="\r")
                  {
                     count++;
                  }
                  if(count<=4)
                  {
                      ans=ans+content.charAt(j);
                  }
                  else if(content.charAt(j)!="\n"&&content.charAt(j)!="\r")
                  {
                      ans=ans+content.charAt(j);
                      count=0;
                  }
              }
           
         }
         else
         {
             console.log("file doesn't exist");
         }
         console.log(ans);
         
     }
    break;
     

    case "-n":
        for(let i=1;i<inputarr.length;i++)   
     {
        let ans="1 ";
         let content="";
         if(fs.existsSync(inputarr[i]))
         {
             
             content=content+fs.readFileSync(inputarr[i]);
            
             
             let val=2;
             for(let i=0;i<content.length;i++)
             {
                if(content.charAt(i)=="\n")
               {
                 ans=ans+content.charAt(i);
                 ans=ans+val+" ";
                 val++;
               }
               else
               {
                   ans=ans+content.charAt(i);
               }
             }
         }
         else
         {
             console.log("file doesn't exist");
         }
         console.log(ans);
     }

    break;
    case "-b":
        for(let i=1;i<inputarr.length;i++)   
     {
        let ans="";
         let content="";
         if(fs.existsSync(inputarr[i]))
         {
             
             content=content+fs.readFileSync(inputarr[i]);
            
             
             let val=1;
             for(let i=0;i<content.length;i++)
             {
                if(content.charAt(i)=="\n"&&content.charAt(i+1)=="\r")
               {
                 ans=ans+content.charAt(i);
                 ans=ans+val+" ";
                 val++;
               }
               else
               {
                   ans=ans+content.charAt(i);
               }
             }
         }
         else
         {
             console.log("file doesn't exist");
         }
         console.log(ans);
     }

    break;
   
    default:
     for(let i=0;i<inputarr.length;i++)   
     {
         let content="";
         if(fs.existsSync(inputarr[i]))
         {
            
             content=content+fs.readFileSync(inputarr[i]);
            console.log(content);
         }
         else
         {
             console.log("file doesn't exist");
         }
        
     }

}