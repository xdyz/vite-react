import { Outlet } from "react-router-dom"
import { useRecoilState } from "recoil"
import { firstAtomState } from "../store/index"
const Login = () => {

  const [firstAtom]= useRecoilState<number>(firstAtomState)
  return (
    <div>
      <h1>Login</h1>
    {firstAtom}
      </div>
  )
}
export default Login