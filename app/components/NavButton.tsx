'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavButton({ children, activeAt, goTo }: NavButtonProps) {
  const path = usePathname()

  return (
    <Link href={goTo}>
      <button className={`
        ${path === activeAt
          ? "bg-base-200"
          : "bg-base-300"
        }
        font-bold
        py-4
        px-6
        rounded-t-md
      `}>
        {children}
      </button>
    </Link>
  )
}

type NavButtonProps = {
  children: string
  activeAt: string
  goTo: string
}