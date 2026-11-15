let path=require("path")
let fs=require("fs")
const { ifError } = require("assert")
const { devNull } = require("os")



// le role de cette exercie et trouve python.txt
/*
--1  cherche dans mon dossier et aprés apprend Comprendre le fonctionnement du code
 me permet de développer un code qui effectue une recherche dans l'ensemble de l'ordinateur. 
-- 2 cherche dans le dossier sur les filles fini à ".txt" .
-- 3 cherche dans cette les files sur le mot de cherche2 .
*/



function FindFile() {
    const files = [];

    console.log("--------------------");
    console.log("       engine       ");
    console.log("--------------------");

    const parentDir = path.dirname(__dirname);

    const entries = fs.readdirSync(parentDir);

    entries.forEach((folder) => {

        const fullPath = path.join(parentDir, folder);

        if (fs.statSync(fullPath).isDirectory()) {

            const insideFiles = fs.readdirSync(fullPath);

            insideFiles.forEach((file) => {

                if (path.extname(file) === ".txt") {

                    files.push(
                        path.join(fullPath, file)
                    );
                }

            });

        }

    });

    return files;
}





 function chercher_sur_mot(mot){

let arr=FindFile()

arr.map((x)=>{
    let regex=new RegExp(`\\b${mot}\\b`,"ig")
   let b= fs.readFileSync(x,"utf-8")
   let resulta=b.match(regex)
   let nombre=resulta?resulta.length:0
   console.log(path.basename(x)," : ",nombre)
   
})

}

module.exports=chercher_sur_mot





