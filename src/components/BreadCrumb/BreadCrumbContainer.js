import BreadCrumbPresenter from "./BreadCrumbPresenter"
import React from "react"
import {get_root_pointer} from "../../memo-storage/fs-pointer"
const BreadCrumbContainer = (cwd, onChangeDir) => {
    const root_pointer =get_root_pointer() ;
    
    return(
        <BreadCrumbPresenter
            cwd ={cwd}>
        </BreadCrumbPresenter>
    );
};

export default BreadCrumbContainer;