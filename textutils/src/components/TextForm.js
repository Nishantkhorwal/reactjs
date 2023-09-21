import React , {useState} from 'react'

export default function TextForm(props) {
    const handleupClick=()=>{
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handlelowClick=()=>{
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handlecleartext=()=>{
        let newText= '';
        setText(newText)
    }
    const handlecopytext=()=>{
        var text = document.getElementById("Myform");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleonChange= (event)=>{
        setText(event.target.value);
    }
    

    const [text,setText]= useState('Enter here');
  return (
   <div style={{color: props.mode==='light'?'#042743':'white'}}>
    <h1>{props.heading} </h1>    
   <div class="mb-3">
            <label for="Myform" class="form-label"></label>
            <textarea class="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'#042743':'white'}} id="Myform" rows="8"></textarea>
            <button class="btn btn-primary my-3" onClick={handleupClick}>Convert To Uppercase</button>
            <button class="btn btn-primary my-3 mx-3" onClick={handlelowClick}>Convert To LowerCase</button>
            <button class="btn btn-primary my-3 mx-3" onClick={handlecleartext}>Clear Text</button>
            <button class="btn btn-primary my-3 mx-3" onClick={handlecopytext}>Copy</button>
   </div>
   </div>
  )
}