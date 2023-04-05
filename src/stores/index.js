import todo from "./todo"
import auth from "./auth"
import modal from "./modal"
import changeSite from "./changeSite"

const {configureStore} = require("@reduxjs/toolkit");

const store  = configureStore({
    reducer: {
        todo,
        auth,
        modal,
        site:changeSite
    }
})


export default store