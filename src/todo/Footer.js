import {useSelector,useDispatch} from "react-redux";
import {setDarkMode, setLanguage} from "../stores/changeSite";

function Footer() {
    const dispatch = useDispatch()
    const {dark,language} = useSelector(state => state.site)
    const languages = ['tr','en']

    const handleLanguage = lang => {
        dispatch(setLanguage(lang))
    }

    return (
        <div>
            footer
            <div>
                {languages.map((lang,index) => (
                    <button onClick={() =>handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
                ))}
            </div>
            <div>
                <button onClick={() => dispatch(setDarkMode())}>
                    {dark ? "dark active" : "light active"}
                </button>
            </div>
        </div>
    );
}

export default Footer;