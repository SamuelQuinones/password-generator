export default function Footer() {
  return (
    <footer className="container grow-0">
      <div className="mb-2 grid grid-cols-1 text-center text-sm md:grid-cols-3">
        {/* @ts-expect-error this does exist */}
        <section>Version: {__APP_VERSION__}</section>
        <section></section>
        <section></section>
      </div>
    </footer>
  )
}
