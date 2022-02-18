import React,{useState}  from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import MoodIcon from '@material-ui/icons/Mood';
const App = () =>{

   const[cnum,newnum]=useState(0);
    const incevent = () =>{
      newnum(cnum+1)  
    
    }
    
    const decevent = () =>{
        if(cnum>0){
      newnum(cnum-1);
        }
        else 
        alert("exceed your limit");
    }
return(
    <>
<div className="main-div">
<div className="center-div">
<h1>{cnum}</h1>
 <div className="btn-div"><br/>
 <Button onClick={incevent}><AddCircleIcon /></Button>
 <Button onClick={decevent}><DeleteIcon/></Button>
 <br/>


 </div>
</div>


</div>
</>
);
}
export default App;