import { getLocalstorageValue } from "@/lib/rhf"
import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react"

type PwProviderState = {
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  saved: boolean
  setSaved: Dispatch<SetStateAction<boolean>>
}

const PwProviderContext = createContext<PwProviderState | undefined>(undefined)

const hasKey = () => !!getLocalstorageValue()
export function PwProvider({ children }: { children: ReactNode }) {
  const [password, setPassword] = useState("")
  const [saved, setSaved] = useState(hasKey)
  const value = useMemo(
    () => ({ password, setPassword, saved, setSaved }),
    [password, saved]
  )
  return (
    <PwProviderContext.Provider value={value}>
      {children}
    </PwProviderContext.Provider>
  )
}

export function usePasswordContext() {
  const ctx = useContext(PwProviderContext)
  if (ctx === undefined) {
    throw new Error("useTheme must be used within a PwProvider")
  }
  return ctx
}
