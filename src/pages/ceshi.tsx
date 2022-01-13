import { Outlet } from "react-router-dom"
import { useRecoilState } from "recoil"
import { firstAtomState } from "../store/index"
import { Button } from 'antd'
const Ceshi = () => {

  const [firstAtom, setFirstAtom] = useRecoilState<number>(firstAtomState)
  return (
    <div>
      <Button onClick={() => setFirstAtom(firstAtom + 1)} size='small'>点击</Button>
      <h1>Ceshi</h1>
      {firstAtom}
    </div>
  )
}
export default Ceshi