import todo from "./todo"
import auth from "./auth"
import modal from "./modal"
import changeTheme from "./changeTheme"

const {configureStore} = require("@reduxjs/toolkit");

const store  = configureStore({
    reducer: {
        todo,
        auth,
        modal,
        changeTheme
    }
})


export default store