import express from 'express';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactServerDom from 'react-dom/server';
import App from '../src/App'; 


const app = express()

const PORT = 8080 || 3001


app.use("^/$", (req, res) => {
  
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {


      if(err){
        console.log(err);
        return res.status(500).send("error happened while reading build")
      }


      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactServerDom.renderToString(<App />)}</div>`
        )
      );
  })

});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => console.log(`app lunched on port ${PORT}`));