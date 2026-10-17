import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import GeneratorForm from "./form"
import Output from "./output"
import { PwProvider } from "./components/pw-provider"
import { useTheme } from "./components/theme-provider"
import { ContrastIcon } from "lucide-react"

export function App() {
  const { toggleTheme } = useTheme()
  return (
    <PwProvider>
      <Header />
      <main className="container grow p-6">
        <div className="mb-3 grid grid-cols-1 gap-4 md:grid-cols-2">
          <GeneratorForm />
          <Output />
        </div>
        <Button form="password-form" type="submit" size="lg" className="w-full">
          Generate Password
        </Button>
      </main>
      <Footer />
      <div className="fixed right-2 bottom-2">
        <Button variant="secondary" onClick={toggleTheme} size="icon">
          <ContrastIcon className="size-4" />
        </Button>
      </div>
    </PwProvider>
  )
}

export default App
