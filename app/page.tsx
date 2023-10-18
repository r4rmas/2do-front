export default function Home() {
  return (
    <main className="
      flex 
      flex-col
      min-h-screen 
      justify-center
      items-center 
    ">
      <h1 className="
        font-bold
        mb-2
        text-lg
      ">
        ToDo List App
      </h1>
      <input type="text" 
        placeholder="Enter new task"
        className="
          border-2
          rounded-md
          p-1
        "
      />
    </main>
  )
}
