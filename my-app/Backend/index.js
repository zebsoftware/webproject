import http from "http";
const server= http.createServer((req,res)=>{
    
    if(req.url=="/login"){
        res.write("login credentials are processing ");
        res.end()
    }
    if(req.url=="/register");
    res.write("registeration is being processed ");
    res.end();
}
)
server.listen(5000);