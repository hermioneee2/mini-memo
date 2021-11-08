import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomToolbar = () =>(
    <div id = "toolbar">
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
    </div>
)


class EditorComponent extends Component{
    constructor(props){
        super(props);
    }

    modules = {
        toolbar: '#toolbar'
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
                <CustomToolbar/>
            </div>
        )
    }
}
export default EditorComponent