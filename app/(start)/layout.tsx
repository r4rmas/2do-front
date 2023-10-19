'use client'

import { useState } from "react";
import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import Screen from "../components/Screen";

export default function StartLayout({ children }: { children: JSX.Element[] }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Screen>
      <Logo />
      <div>
        <div className="
          flex
          bg-base-300
          rounded-t-md
          w-full
          mt-6
        ">
          <NavButton 
            goTo="/login"
            activeAt="/login"
          >
            LOGIN
          </NavButton>
          <NavButton 
            goTo="/register"
            activeAt="/register"
          >
            REGISTER
          </NavButton>
        </div>
        <div className="
          flex
          flex-col
          bg-base-200
          p-8
          rounded-b-md
        ">
          <span className="mb-3">
            Fill up your credentials to proceed.
          </span>
          <label className="label">
            Email:
          </label>
          <input 
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email" 
            className="input"
            required
          />
          <label className="label">
            Password:
          </label>
          <input 
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            type="password" 
            className="input"
            required
          />
          {children}
        </div>
      </div>
    </Screen>
  )
}
