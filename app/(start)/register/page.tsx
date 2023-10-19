'use client'

import { useState } from "react"

export default function Register() {
  const [passConf, setPassConf] = useState("")

  return (
    <>
      <label className="label">
        Confirm password:
      </label>
      <input
        value={passConf}
        onChange={({ target }) => setPassConf(target.value)}
        type="password"
        className="input"
      />
      <button className="
        btn
        btn-primary
        mt-4
      ">
        REGISTER
      </button>
    </>
  )
}