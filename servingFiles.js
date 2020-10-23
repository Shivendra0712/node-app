const fs=require("fs");
const http=require("http");
const fileContent=fs.readFileSync("neonTxt.html");
const CSSfile=fs.readFileSync("neonTxtStyle.css");
const server=http.createServer((req,res)=> {
    switch(req.url) {
        case '/neonTxtStyle.css' :
            res.writeHead(200,{'Content-type':"text/css"});
            res.end(CSSfile);
            break;
        default:
            res.writeHead(200,{'Content-type':"text/html"});
            res.end(fileContent);
            break;
    }
    
});
server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
});