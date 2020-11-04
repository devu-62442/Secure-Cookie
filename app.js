import express from 'express' 
import cookieParser from 'cookie-parser' // Cookie Library
let app = express() 
import encrypt from './encrypt.js'

app.use(cookieParser()); 

//JSON object to be added in the cookie 
let users = { 
    name : "Ritik", 
    Age : "18"
} 
  
// Encrypting a Cookie
var cookiedata = encrypt.encrypt(users)
  
app.get('/', (req, res)=>{ 
res.send('Cookie Security'); 
}); 
  
//Route for adding cookie 
app.get('/setuser', (req, res)=>{ 
res.cookie('Login', cookiedata, { httpOnly: true, sameSite: 'strict', secure: true });
res.send('user data added to cookie'); 
}); 
  
//Iterate users data from cookie 
app.get('/getuser', (req, res)=>{ 
//shows all the cookies 
res.send(req.cookies); 
}); 

//Route for destroying cookie 
app.get('/logout', (req, res)=>{ 
    res.clearCookie('Login'); 
    res.send('user logout successfully'); 
    }); 
  
//server listens to port  
app.listen(3800, (err)=>{ 
if(err) 
throw err; 
console.log('listening on port 3800'); 
}); 