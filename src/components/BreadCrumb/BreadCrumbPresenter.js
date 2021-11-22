import React, {useState} from "react"
import {Breadcrumb} from "antd"


const BreadCrumbPresenter = (cwd) => {
    //console.log(cwd.cwd.cwd)
    let hierarchy =[];
    const real_cwd = cwd.cwd.cwd
    let parent = real_cwd.parent()
    //console.log(parent)
    console.log(real_cwd)
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
    
    //console.log(hierarchy)
    const hierarchy_render = hierarchy.map((pt) => 
    (<Breadcrumb.Item>{pt}</Breadcrumb.Item>))
    return (
        hierarchy_render
    )
}

export default BreadCrumbPresenter;