import {  atom } from 'recoil'

const firstAtomState = atom({
  key: 'firstAtomState',  // 必须唯一
  default: 1
})

export {
  firstAtomState
}