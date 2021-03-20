import { ActionSheetIOS } from "react-native";
import store from "../Store";


const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log("middleware for action ", action);
            const result = next(action);
            console.log("middleware for next ", next);
            return result;
        }
    }
}

export default logger;