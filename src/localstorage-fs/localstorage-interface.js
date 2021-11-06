// localstorage saves an array of objects,
// each object corresponds to a file
import { make_new_fsarray } from "./fsarray";

const THE_KEY = 'localstorage-fs';

const load_fsarray = () => {
    return localStorage.getItem(THE_KEY) || make_new_fsarray();
}

const save_fsarray = (fsarray) => {
    localStorage.setItem(THE_KEY, fsarray);
}