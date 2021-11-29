import BreadCrumbPresenter from "./BreadCrumbPresenter"
import React from "react"
import {get_root_pointer} from "@systemop/localstorage-fs"
const BreadCrumb = (cwd) => {
    const root_pointer = get_root_pointer() ;
    
    return(
        <BreadCrumbPresenter
            cwd ={cwd}>
        </BreadCrumbPresenter>
    );
};

export default BreadCrumb;