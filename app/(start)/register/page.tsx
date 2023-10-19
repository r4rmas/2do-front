'use client'

import SecretInput from "@/app/components/SecretInput"
import { useState } from "react"

export default function Register() {
  const [passConf, setPassConf] = useState("")

  return (
    <>
      <label className="label">
        Confirm password:
      </label>
      <SecretInput
        content={passConf}
        setContent={setPassConf}
      />
      <button className="
        btn
        btn-primary
        mt-6
      ">
        REGISTER
      </button>
    </>
  )
}