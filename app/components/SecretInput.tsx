import { useState } from "react"
import { SecretInputProps } from "../types"

export default function SecretInput({ content, setContent }: SecretInputProps) {
  const [hidden, setHidden] = useState(true)

  return(
    <div className="
      flex
      w-full
      relative
    ">
      <input 
        value={content}
        onChange={({ target }) => setContent(target.value)}
        type={hidden ? "password" : "text"} 
        className="
          input 
          w-full
        "
        required
      />
      <button
        onClick={() => setHidden(!hidden)}
        className="
          btn
          absolute
          right-0
          bg-base-300
      ">
        {hidden 
          ? <span className="text-lg">🫣</span>
          : <span className="text-lg">👀</span>
        }
      </button>
    </div>
  )
}