import { useRegisterSW } from "virtual:pwa-register/react"
import { useCallback, useEffect } from "react"
import { toast } from "./ui/toast"

export default function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r)
    },
    onRegisterError(error) {
      console.log("SW registration error", error)
    },
  })

  const close = useCallback(() => {
    setOfflineReady(false)
    setNeedRefresh(false)
  }, [setNeedRefresh, setOfflineReady])

  useEffect(() => {
    const showThing = offlineReady || needRefresh
    if (!showThing) return
    if (offlineReady) {
      toast.add({
        id: "offline-ready",
        type: "success",
        description: "App ready to work offline",
        onClose: close,
        timeout: 8000,
      })
    } else {
      toast.add({
        id: "new-content",
        type: "info",
        description: "New content available, click on reload button to update.",
        onClose: close,
        timeout: 8000,
        actionProps: {
          children: "Reload",
          onClick: () => updateServiceWorker(true),
        },
      })
    }
  }, [close, needRefresh, offlineReady, updateServiceWorker])

  return null
}
