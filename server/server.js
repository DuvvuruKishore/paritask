import dotenv from 'dotenv';
dotenv.config();
import express from'express';
import cors from 'cors';
import mysql from 'mysql';

const app=express();
const port=process.env.PORT||5000;

app.use(express.json());
app.use(cors());



/*const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Hacker#001"
  });*/

/*app.get('/',(req,res)=>{
  const sqlInsert="INSERT INTO movies (movieName,movieReview) VALUES ('king','good');"
  db.query(sqlInsert,(err,result)=>{
    res.send("hello World");
  })

 
})*/
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Hacker#001",
  database:"registration",
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

{/*app.get('/',(req,res)=>{
  const sqlInsert="INSERT INTO details (Name,Email,Mobile,DOB,Jobtype,Action) VALUES ('kishore','li@gmail.com','9490457347','26/10/1997','pt','edit');"
  con.query(sqlInsert ,function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  })
})  */}

app.post('/api/post',(req,res)=>{
  const Name=req.body.name;
  const Email=req.body.email;
  const Mobile=req.body.phoneNumber;
  const DOB=req.body.DOB;
  const Jobtype=req.body.jobtype;
  const Action='put';
 console.log(Jobtype);

  
  const sqlInsert="INSERT INTO details (Name,Email,Mobile,DOB,Jobtype,Action) VALUES (?,?,?,?,?,?)";
  con.query(sqlInsert, [Name,Email,Mobile,DOB,Jobtype,Action],(err, result)=> {
    if (err) throw err;
    console.log("Result: " + result);
  })
})

app.listen(port,(()=>{
    console.log(`port is running on ${port}`)
}))

