import { useSelector } from 'react-redux';
import Main from "./navigator/bottom/Main";
import Auth from "./navigator/auth/Auth";
import { getItem } from "./utilities/storage";
const First = () =>{
  const isLoggedIn = useSelector((state) => state.theme.isLoggedIn);
  console.log("lll",isLoggedIn)
  console.log("token",getItem("token"))

return <>
  {getItem("token")!==undefined && !isLoggedIn ?<Main/> :<Auth/>}
</>
}

export default First