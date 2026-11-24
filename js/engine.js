let path=require("path")
let fs=require("fs")
const os = require("os")

console.log("----------------------------------")
console.log("                                   ")
console.log("        Mini_Search_Engine         ")
console.log("                                   ")
console.log("----------------------------------")


function findTxtFiles(rootdir){
    
    let out=[];
    let walk=(dir)=>{
      let entries;
      try{entries=fs.readdirSync(dir,{withFileTypes:true});}
      catch(err){
         console.error(`Cannot access ${dir}: ${err.message}`);
    return;
}
      for(const e of entries){
         const full=path.join(dir,e.name);
         if(e.isDirectory()){
            walk(full)  
         }
         else if(e.isFile()&&path.extname(e.name).toLowerCase()===".txt"){
             out.push(full)
         }
      }
    }
    walk(rootdir)
    return out

}
let dossier = path.join(os.homedir(), "Desktop", "tlscontact");

let arr = findTxtFiles(dossier);
let myMap=new Map()

arr.forEach(ele => {
    try {
        myMap.set(ele, fs.readFileSync(ele, "utf-8"));
    } catch (err) {
        console.error(`Cannot read ${ele}: ${err.message}`);
    }
});


let search=(word)=>{
     let motTrim=(word||"").trim()
       if (!motTrim) {
        console.log("Please enter a search word.");
        return;
    }
     const escaped = motTrim.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
     const regex =new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "giu");
     let count=0
     let cou=0
for (const [file, content] of myMap) {
    let resulta = content.match(regex);
    let nombre = resulta ? resulta.length : 0;

    if (nombre > 0) {
        count++;
        cou += nombre;

        console.log(path.basename(file), ":", nombre);
    }
}
console.log(`\nTotal: ${cou} matches in ${count} of ${myMap.size} files.`);

}

if(require.main===module){
     const word = process.argv[2] || "python";
    search(word);
  

}
module.exports={search}

