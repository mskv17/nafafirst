const http=require("http");
const path=require("path");
const fs=require("fs");

server=http.createServer((req,res)=>{
    if(req.url==="/"){
        fs.readFile(path.join(__dirname,"./view","index.html"),"",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        });
    }
    if(req.url==="/css"){
        fs.readFile(path.join(__dirname,"./view","style.css"),"",(err,data)=>{
            if(err) throw err;
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(data);
        });
    }
});

PORT=4040;

server.listen(PORT,()=>console.log(`server is running ${PORT}`));