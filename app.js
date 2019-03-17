#!/usr/bin/node

const http=require('http');
      log=console.log;

      http.createServer((req,res)=>{
        log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
        log(req.headers);
        log();

        res.end('{"code":200,"reason":"请求成功","result":{"aera"}}')
      }).listen(8080);
