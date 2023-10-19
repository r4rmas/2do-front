import { Dispatch, SetStateAction } from "react"

export type SecretInputProps = {
  content: string
  setContent: Dispatch<SetStateAction<string>> 
}