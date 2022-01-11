import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Textaria cleared", "success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied", "success");
    }
    const handleExtraSpaces = ()=>{
        var newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to text here
    // setText("new text"); // correct way to text here
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-3">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{background:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter your text to preview here"}</p>
        </div>
        </>
    )
}


