import React, { useState } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import DatePicker from 'react-date-picker';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import RegisteredList from './RegisteredList';
 import Axios from './Axios';



function App() {
  const [phone,setPhone]=useState();
  const [jobtype,setJobtype]=useState('jobType')
  const [location,setLocation]=useState();
  const [date, setDate] = useState(new Date());
 const [fullname,setFullname]=useState('');
 const [email,setEmail]=useState('');
const [pic,setPic]=useState();


const addDetails=()=>{
  const details={
    name:fullname,
    email:email,
    phoneNumber:phone,
    DOB:date,
    jobtype:jobtype,
    pic:pic,
    location:location
  
  }
  console.log(details);
  Axios.post('/api/post',{ name:fullname,
    email:email,
    phoneNumber:phone,
    DOB:date,
    jobtype:jobtype,
    pic:pic,
    location:location
  });
}


  const handleChange=(e)=>{
setJobtype(e.target.value);
console.log(e.target.value);
  }

  const changeLocation=(e)=>{
setLocation(e.target.value);
console.log(e.target.value);
  }

console.log(pic);
  return (
    <div className="app">
    <h2>Registration form</h2>
    <Card>
    <CardContent>
    <div className="app_full">
    <div className="app_left">
    <div className="adjust">
    <h3 >fullname</h3>
    <TextField  variant="outlined" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
    </div>
    <div className="adjust">
    <h3>mobile</h3>
    <div className="phone_number">
    <PhoneInput
  
  value={phone}
  onChange={phone=> setPhone(phone)}
/>
</div>
</div>
<div className="adjust">
<h3>Job Type</h3>
<Select
labelId="demo-simple-select-placeholder-label-label"
id="demo-simple-select-placeholder-label"
value={jobtype}
onChange={handleChange}
>
<MenuItem value={jobtype}>
  <em>jobtype</em>
</MenuItem>
<MenuItem value="fulltime">FullTime</MenuItem>
<MenuItem value="parttime">partTime</MenuItem>
<MenuItem value="consultant">consultant</MenuItem>
</Select>
</div>

<div className="adjust">
<h3>location</h3>
<Accordion className="accordian">
<AccordionSummary
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <Typography >choose location</Typography>
</AccordionSummary>
<AccordionDetails>
<FormControl component="fieldset">
 
<RadioGroup aria-label="gender" name="gender1" value={location} onChange={changeLocation}>
<FormControlLabel value="chennai" control={<Radio />} label="chennai" />
<FormControlLabel value="bangalore" control={<Radio />} label="bangalore" />
<FormControlLabel value="hyderabad" control={<Radio />} label="hyderabad" />
<FormControlLabel value="anylocation" control={<Radio />} label="anylocation" />
</RadioGroup>   
</FormControl>
</AccordionDetails>
</Accordion>
</div>
</div>
<div className="app_right">
<div>
<div className="adjust">
<h3>profile pic</h3>
<input type="file" onChange={(e)=>setPic(e.target.value)}/>
</div>
</div>
<div className="adjust">
<h3>Email</h3>
<TextField  variant="outlined" label="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
</div>
<div className="adjust">
<h3>DOB</h3>
<DatePicker
onChange={setDate}
value={date}
/>
</div>
</div>
</div>
 </CardContent>
 <div className="details">
 <Button onClick={addDetails} variant="contained" color="primary">
 Add Details
</Button>
</div>
      </Card>
     <div className="register">
      <RegisteredList/>
      </div>
    </div>
  );
}

export default App;
