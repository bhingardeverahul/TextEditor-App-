import React,{useState}from 'react';
// import {useParams} from "react-router-dom"

function TextForm  ({mode,showAlert}) {
    const [text, setText] = useState(" ")
    
    const handleUpChange=()=>{
        console.log('clicked up');
        let bdata=text.toUpperCase();
        setText(bdata)
        showAlert("Conveted to Uppercase","success")
    }
    const handleLowerChange=()=>{
        console.log('clicked up');
        // let bdata=text.toLowerCase();
        setText(text.toLowerCase())
        showAlert("Conveted to Lowercase","success")
    }
    const handleDltChange=()=>{
     let a= " " 
     setText(a)
     showAlert("Deleted successfully","success")
    }
    const handlecopy=()=>{
        // const text=document.getElementById("text")
        // text.select()
        navigator.clipboard.writeText(text)
        showAlert("Text has been copied","success")
    }
    const handleSpChange=()=>{
        const newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        showAlert("Remove Extra spaces","success")
    }
    const changed=(event)=>{
        console.log("changed")
        setText(event.target.value)
    }
    return (
        <>
    {/* <h1>This is  Text page {id}</h1> */}
          <h1 className='d-flex justify-content-center align-items-center gap-2'> <i class="fa-sharp fa-solid fa-text-height"></i> <b>TextEditor App</b></h1>
        <div className='d-flex  justify-content-center ' style={{color:mode==='dark'?"white":"black"}}>
            <div className=" mb-3 my-4  w-50">
  <label htmlFor="text" className="text fs-4"> <b >Try it for Text edit,counting words...</b>  </label>
  <textarea className="form-control" value={text} style={{backgroundColor:mode==='dark'?"skyblue":"white" ,color:mode==='dark'?"white":"black"}} onChange={changed}  id="text" rows="8"></textarea>
</div>
        </div>  
        <div className="d-flex justify-content-center">

        <button type="button" className="btn btn-dark mx-3 my-2 " onClick={handleUpChange} >Text Uppercase</button>
        <button type="button" className="btn btn-dark mx-3 my-2"  onClick={handleLowerChange}>Text Lowercase</button>
        <button type="button" className="btn btn-dark mx-3 my-2" onClick={handleDltChange} >Delete</button>
        <button type="button" className="btn btn-dark mx-3 my-2" onClick={handleSpChange} >Space Remove</button>
        <button type="button" className="btn btn-dark mx-3 my-2" onClick={handlecopy} >Copy Text</button>
        </div>
        <div className="cot my-3 d-flex justify-content-center ">

          <h1 >Your Text Counter</h1>
        </div>
          <p className='my-3 d-flex justify-content-center '>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} word and {text.length}</p>
          <p className='my-3 d-flex justify-content-center '>{0.008*text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes</p>
          <div className="d-flex justify-content-center">
         <h1>Preview of Text</h1>
          </div>
        <p  className="d-flex justify-content-center">{text.length>0?text:"Enter a something here"}</p>
        </>
    );
}

export default TextForm;
