import { Github } from "./brand-svg"
import { Button, buttonVariants } from "./ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer"

function ChangeLog() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="ghost" />}>
        {/* @ts-expect-error this does exist */}
        Version: <strong>{__APP_VERSION__}</strong>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {/* @ts-expect-error this does exist */}
            Secure Password Generator <strong>{__APP_VERSION__}</strong>
          </DrawerTitle>
          <DrawerDescription>
            What's new in this version of Secure Password Generator
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-w-md flex-1 self-center overflow-y-auto p-4">
          <ul className="list-inside list-disc">
            <li>Switched from create-react-app to vite</li>
            <li>Added shadcn (base-ui)</li>
            <li>Removed multi-color themes in favor of dark/light mode</li>
            <li>Upgraded to react 19</li>
            <li>
              Added PWA popups
              <ul className="ms-4 list-disc list-inside">
                <li>Offline mode available</li>
                <li>New version available</li>
              </ul>
            </li>
          </ul>
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default function Footer() {
  return (
    <footer className="container grow-0">
      <div className="mb-2 grid grid-cols-1 text-center text-sm md:grid-cols-3">
        <section>
          <ChangeLog />
        </section>
        <section>
          <a
            href="https://github.com/SamuelQuinones/password-generator"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "link" })}
          >
            <Github /> View the source code
          </a>
        </section>
        <section></section>
      </div>
    </footer>
  )
}
