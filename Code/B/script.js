
/* Part-1 (All Fundamentals of JavaScript)*/
// Fundamentals of JavaScript:
// arrays and objects
// function return
// async js coding
// forEach map filter find indexof


// // forEach()
// let arr=[1,2,3,4]
// arr.forEach(function(val){
//     console.log(val+" hello"); 
// })
// console.log(arr.length);
// console.log(typeof(arr));

// // map()
// let newArr=arr.map(function(val){
//     return val**2;
// })
// console.log(newArr);

// // filter()
// let ans=arr.filter(function(val){
//     if(val>2){
//         return true;
//     }
// })
// console.log(ans);

// // find
// let Ans=arr.find(function(val){
//     if(val==2){
//         return val;
//     }
// })
// console.log(Ans);

// // indexof
// console.log(arr.indexOf(2));
// console.log(arr.indexOf(8));


// // objects
// let obj={
//     name: "Alex",
//     age: "22"
// }
// console.log(obj.name); 
// console.log(obj['age']);
// console.log(typeof(obj));

// obj.name="justin"
// console.log(obj['name']);

// Object.freeze(obj)

// obj.age=20
// console.log(obj.age);

// // function
// function first(a,b,c){

// }
// console.log(first.length);
// console.log(typeof(first));

// function abcd(){
//     return 12;
// }
// let result=abcd();
// console.log(result);

// // async js coding
// // line by line code chale isey kahte hai synchronous.
// // jo bhi code async nature ka ho, usey side stack main bhej do and agle code ko chalao jo bhi sync nature ka ho, 
// // jab bhi saara sync code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua 
// // ho to usey main stack main laao and chala do.
// async function abc(){
//    var blob= await fetch(`https://randomuser.me/api/`);
//    var answer=await blob.json();
//    console.log(answer.results[0].name);
// }
// abc();



/* Part-2 (Node.js and npm with File System Operations)*/
// Node.js Basics:
// Introduction to Node.js
// Installing Node.js and npm
// node & npm
// working with node and npm
// npm init
// node basic usage
// Working with modules
// File system operations
// understanding HTTP module


/*Introduction to Node.js- JS runtime environment
  Story: JS se backend nahi ban sakta kyuki js ke pass functionalities nahi hai jinse backend banta hai.
  'Ryan Dahl' socha js se backend banna chahiya. Google chrome ka v8 engine ka code open source hai and 
  isne us code main chhedkhaani ker raha hai. Kyuki chrome ka v8 engine bana hai c++ main. Fir usne socha
  ki humein to js mein code karna hai.
  
  hum JS ka code likhenge jo ki wrapper layer of JS receive karegi and wo code v8 engine ke C++ modules ke
  saat ek server create krega.

  node is a js runtime environment

*/ 
// callback API - writefile, appendfile, copyfile, rename, unlink

// const fs=require('fs')

//writefile-
// fs.writeFile("hey.txt","hey hello kaise ho", function(err){
//   if(err) console(err)
//   else console.log("done")
// })

//appendfile-
// fs.appendFile("hey.txt","mai to achha hu", function(err){
//   if(err) console(err)
//   else console.log("done")
// })


//rename
// fs.rename("hey.txt","hello.txt", function(err){
//   if(err) console.log(err);
//   else console.log("done");
// })

// copyfile
// fs.copyFile("hello.txt","./hey.txt", function(err){
//   if(err) console.log(err.message);
//   else console.log("done");
// })

// unlink (delete file)
// fs.unlink("hello.txt", function(err){
//   if(err) console.log(err.message);
//   else console.log("done");
// })

// rmdir (delete empty folder)
// fs.rmdir("./hello", function(err){
//   if(err) console.log(err.message);
//   else console.log("done");
// })

// rmdir (delete not empty folder)
// fs.rmdir("./hello", {recursive: true}, function(err){
//   if(err) console.log(err.message);
//   else console.log("done");
// })

// rm (delete not empty folder)
// fs.rm("./hello", {recursive: true}, function(err){
//   if(err) console.log(err.message);
//   else console.log("done");
// })



/*http and https-

http- protocol
internet par kuchh bhi karne ke liya rules banaaye gaye hai unke dwaara jinhone internet banaaya hai,
ab un rules ko follow karna jaruri hai, aur ye rules follow ho isliya ye rules app ke operating system ke
software mein pre installed aate hai

yahi protocol hai ya rule hai jisko follow kare bina aap internet pe naa hi kuchh bhej sakte ho, naa hi 
kuchh mnga sakte ho


*/

// const http=require('http');
// const server=http.createServer(function(req,res){
//   res.end("hello world")
// })
// server.listen(3000)





/* Part-3 (NPM Basics & Advanced Features)*/
// NPM understanding
//npm-node package manager 
/*
  module- node js core mein jo installed atta hai wo kehlaata hain module
  package- npm se download krte hai wo hota hai package
*/

// installing and unistalling anything basics & advanced
// Install-> npm i packageName
// Uninstall-> npm uninstall packageName
// Installing particular versions-> npm i packageName@Versions

// understanding node_modules
// dependencies- packages and packages ki dependencies
// devdependencies- aise packages jo sirf development mein kaam aayege par jab app ban jaayega aur upload ho 
//                  jaayega tab hum in packages ko use nahi kar rahe honge


// scripts- understanding default scripts PATH and custom scripts
// kai baar ap koi script chalaate ho and us script mein aap likhte ho ye command
// npm start
// npm test
// npm run dev
// npm run concurrent



/* Part-4 (Express.js, Routing & middleware)*/
// Express.js Framework:

// Introduction to Express.js.
// express js ek npm package hai
// framework
// manages everything from receiving the request and giving the response

// Setting up & basic Express application.
// Routing.

// Middleware
// Jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech me rokte ho and kuchh perform karte ho, to ye element middleware kehlaata hai 

// Request and response handling.
// Error handling.
