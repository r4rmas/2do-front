export default function Login() {
  return (
    <div className="
      flex
      flex-col
      bg-base-200
      p-8
      rounded-b-md
    ">
      <span className="mb-3">
        Fill up your credentials to proceed.
      </span>
      <label htmlFor="email"
        className="label"
      >
        Email:
      </label>
      <input type="email" 
        className="input"
        required
      />
      <label htmlFor="password"
        className="label"
      >
        Password:
      </label>
      <input type="password" 
        className="input"
        required
      />
      <button className="
        btn 
        btn-primary
        mt-4
      ">
        LOGIN
      </button>
    </div>
  )
}