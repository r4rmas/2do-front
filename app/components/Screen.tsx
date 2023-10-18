export default function Screen({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <main className="
      flex
      flex-col
      w-full
      h-screen
      justify-center
      items-center
      relative
    ">
      {children}
      <span className="
        absolute
        bottom-0
        right-0
        py-2
        px-4
      ">
        Raul Armas
      </span>
    </main>
  )
}