import { useContext } from "react";
import {Context} from "../context/BooksContext";

function useBooksContext(props) {
 
    return useContext(Context)
}

export default useBooksContext;
