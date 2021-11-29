import BreadCrumbPresenter from "./BreadCrumbPresenter"
import React from "react"
import {get_root_pointer} from "../../memo-storage/localstorage-fs/fs-pointer"
const BreadCrumbContainer = (cwd) => {
    const root_pointer =get_root_pointer() ;
    
    return(
        <BreadCrumbPresenter
            cwd ={cwd}>
        </BreadCrumbPresenter>
    );
};

export default BreadCrumbContainer;