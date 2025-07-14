import { View } from "react-native"
import { useSelector, useDispatch } from 'react-redux';
import Main from "./navigator/bottom/Main";
import Auth from "./navigator/auth/Auth";

import { toggleDarkMode, setDarkMode } from './store/themeSlice';
const First = () =>{
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  console.log(isDarkMode)
  const dispatch = useDispatch();
return <>
  {!isDarkMode ?<Main/> :<Auth/>}
</>
}

export default First