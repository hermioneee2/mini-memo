import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class EditorComponent extends Component{
    constructor(props){
        super(props);
    }

    modules = {
        toolbar: [
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
        ],
      }
    
      formats = [
        //'font',
        
        'bold', 'italic', 'underline', 
        'link', 'image',      
      ]

    render(){
        const {value, onChange } = this.props;
        return(
            <div style={{height: "350px"}}>
                <ReactQuill 
                    style={{height: "300px"}} 
                    theme="snow" 
                    modules={this.modules} 
                    formats={this.formats} 
                    value={value || ''} 
                    onChange={(content, delta, source, editor) => onChange(editor.getHTML())} //can extract only text by getText
                    
                />
            </div>
        )
    }
}
export default EditorComponent