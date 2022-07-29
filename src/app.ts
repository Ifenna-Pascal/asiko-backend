import express from 'express';
import dotenv from 'dotenv';


// load config paths
dotenv.config({path: 'src/config/.env'});


// initialize app
const app = express();

// setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add headers to prevent cors
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type,X-auth-token');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // Pass to next layer of middleware
    next();
  });
  // end of header to prent cors
  
  // adding morgan logger

export default app;