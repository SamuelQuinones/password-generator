import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { Toaster } from "@/components/ui/toast"
import ReloadPrompt from "@/components/reload-prompt.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider storageKey="pw-gen-theme">
      <Toaster />
      <ReloadPrompt />
      <App />
    </ThemeProvider>
  </StrictMode>
)
