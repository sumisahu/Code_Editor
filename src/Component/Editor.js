import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {



function handleChange(editor,data,value)
{
props.onChange(value)

}


  return (
    <div className='editor-container'>
        <div className='editor-title'>
       {props.titleName}
       <button>O/C</button>
        </div>
       
        <ControlledEditor 
         onBeforeChange={handleChange}
         value={props.value}
         className="code-mirror-wrapper"
         options={{
          lineWrapping:true,
          lint:true,
          mode:props.language,
          lineNumbers:true,
          theme:'material '
         }}
        
        
        
        />
    </div>
  )
}
