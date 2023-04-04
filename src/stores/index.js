import todo from "./todo"
import auth from "./auth"
import modal from "./modal"

const {configureStore} = require("@reduxjs/toolkit");

const store  = configureStore({
    reducer: {
        todo,
        auth,
        modal
    }
})


export default store