import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { usePasswordContext } from "./components/pw-provider"
import { useCallback } from "react"
import { toast } from "@/components/ui/toast"
import { clearSettings } from "./lib/rhf"

async function doCopy(pw: string) {
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    throw new Error("Clipboard not available")
  }
  await navigator.clipboard.writeText(pw)
}

export default function Output() {
  const { password, setPassword, saved, setSaved } = usePasswordContext()
  const handleCopy = useCallback(() => {
    toast.promise(doCopy(password), {
      loading: "Copying...",
      error: (err) => err.message,
      success: "Password copied!",
    })
  }, [password])

  const deleteSaved = () => {
    setSaved(false)
    clearSettings()
  }

  return (
    <section>
      <h2>Your new password</h2>
      <Card className="[--card-spacing:--spacing(2)]">
        <CardContent>
          <div
            data-has-pw={!!password}
            className="border bg-muted p-2 text-center data-[has-pw=true]:select-all"
          >
            {password ? password : "Click generate"}
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Button onClick={handleCopy} disabled={!password}>
            Copy to clipboard
          </Button>
          <Button
            onClick={() => setPassword("")}
            variant="secondary"
            disabled={!password}
          >
            Reset
          </Button>
        </CardFooter>
      </Card>

      {saved && (
        <Card className="mt-3 animate-in delay-200 fill-mode-backwards zoom-in-95 [--card-spacing:--spacing(2)] fade-in">
          <CardHeader>
            <CardTitle className="row-span-2 flex h-full items-center font-semibold normal-case">
              Using saved settings
            </CardTitle>
            <CardAction>
              <Button onClick={deleteSaved} size="sm">
                Reset
              </Button>
            </CardAction>
          </CardHeader>
        </Card>
      )}
    </section>
  )
}
