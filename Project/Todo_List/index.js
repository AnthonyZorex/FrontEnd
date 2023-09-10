const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  const fs = require("fs");
 
// асинхронное чтение
fs.readFile("todoList.txt", "utf-8", 
            function(error,data){
                if(error) throw error; // если возникла ошибка
                res.end(data);  // выводим считанные данные
});
})
// синхронное чтение
/* console.log("Синхронное чтение файла")
let fileContent = fs.readFileSync("todoList.txt", "utf-8");
res.end(fileContent);
}); */
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});