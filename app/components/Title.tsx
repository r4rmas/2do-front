export default function Title({ children }: { children: string }) {
  return (
    <h2 className="
      font-bold
      mb-2
      tracking-wider
    ">
      {children}
    </h2>
  )
}