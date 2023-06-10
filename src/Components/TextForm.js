import React from 'react'
import { useState } from 'react';
// To add buttons to make the texts upper to lower case and vise versa
export default function TextForm(props) {

    const [text, setState] = useState("")

    const HandleOnChange = (event) => {
        setState(event.target.value)
    }
    const HandleUpclick = () => {
        //console.log("To UpperCase");
        const upText = text.toUpperCase();
        setState(upText);
    }

    const HandleLoclick = () => {
        //console.log("To Lowercase");
        const loText = text.toLowerCase();
        setState(loText);
    }

    const HandleCopy = () => {
        // let copyText = document.getElementById("Textarea1");
        // copyText.select();        
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
    }

    const HandleExtraSpace = () => {
        let extraSpaceText = text.split(/[ ]+/)
        setState(extraSpaceText.join(" "));
    }

    const HandleClear = () => {
        setState("");
    } 

    return (
        <>
            <div className="container" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
                <div>
                    <h4>{props.title}</h4>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={HandleOnChange} 
                            style= {{backgroundColor : props.mode === 'light'?'white':'#24b593', color : props.mode === 'dark'?'white':'#042743'}} 
                            id="Textarea1" rows="8"> 
                        </textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" id="btnUpper" onClick={HandleUpclick}>Convert to UpperCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" id="btnLower" onClick={HandleLoclick}>Convert to LowerCase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" id="btnCopy" onClick={HandleCopy}>Copy Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" id="btnRemoveExtraSpace" onClick={HandleExtraSpace}>Remove Extra Spaces</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" id="btnClear" onClick={HandleClear}>Clear Text</button>
                </div>
                <div className="container my-3" style = {{color : props.mode === 'dark'?'white':'#042743'}}>
                    <h6>Your Text Summary Below:</h6>
                    {/* <h5>{text = " "?'white':'#042743'} Words and {text.length} Characters</h5> */}
                    <h5>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} Words and {text.length} Characters</h5>
                </div>
            </div>
        </>
    )
}
