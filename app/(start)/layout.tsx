import Logo from "../components/Logo";
import NavButton from "../components/NavButton";
import Screen from "../components/Screen";

export default function StartLayout({ children }: { children: JSX.Element[] }) {
  return (
    <Screen>
      <Logo />
      <div>
        <div className="
          flex
          bg-base-300
          rounded-t-md
          w-full
          mt-14
        ">
          <NavButton 
            goTo="/login"
            activeAt="/login"
          >
            LOGIN
          </NavButton>
          <NavButton 
            goTo="/register"
            activeAt="/register"
          >
            REGISTER
          </NavButton>
        </div>
        {children}
      </div>
    </Screen>
  )
}