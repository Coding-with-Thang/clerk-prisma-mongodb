import Link from "next/link";
import { UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <div className="min-h-[5rem] flex justify-around items-center">
      <Link href="/">Home</Link>
      <Link href="/sign-up">Sign-Up</Link>
      <Link href="/sign-in">Log In</Link>
      <UserButton
        userProfileProps={{
          //appearance: {
          //  elements: {
          //    profileSection: {
          //      display: 'none',
          //    }
          //  },
          //}
        }}
        appearance={{
          elements: {
            userButtonPopoverFooter: {
              display: 'none',
            },
          },
        }}
      />
    </div>
  )
}