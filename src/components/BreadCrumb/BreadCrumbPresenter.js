import React, {useState} from "react"
import {Breadcrumb} from "antd"
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";


const BreadCrumbPresenter = (cwd) => {
    //console.log(cwd.cwd.cwd)
    let hierarchy =[];
    let folder_title = ""
    const real_cwd = cwd.cwd.cwd
    //console.log(parent)
    //console.log(real_cwd)
    //hierarchy.push("root")
    const adding_hierarchy = (real_cwd) => {
        if(real_cwd.name !='/'){
            hierarchy.unshift(real_cwd.name)
            return adding_hierarchy(real_cwd.parent())
        }
        else{
            hierarchy.unshift("root")
            return
        }
    }
    adding_hierarchy(real_cwd)
    
    if (real_cwd.name ==='/'){
        folder_title = "home"
    }
    else{
        folder_title = real_cwd.name
    }
    //console.log(hierarchy)
    const hierarchy_render = hierarchy.map((pt) => 
    (<Breadcrumb.Item>{pt}</Breadcrumb.Item>))
    return (
        <div style = {BreadcrumbBox_style}>
            <Breadcrumb style = {Breadcrumb_style}>
                {hierarchy_render}
            </Breadcrumb>
            <strong style = {{padding: "14px 0px 6px", fontSize:18}}>{folder_title}</strong>
        </div>
    )
}


const BreadcrumbBox_style = {

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "16px 24px",
    margin: "auto",
    position: "relative",
    width: "80%",
    height: "102px",
    
    top:"30px",
    bottom:"30px",
    backgroundColor: "#FAFAFA",
    borderRadius: "10px" 
}
const Breadcrumb_style = {

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding:"0px",
    fontFamily:"Roboto",
    fontStyle:"normal",
    fontWeight:"normal"
}

export default BreadCrumbPresenter;