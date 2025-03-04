import Link from "next/link";

export default function Header() {
  return (
    <div className="min-h-[5rem] flex justify-around items-center">
      <Link href="/">Home</Link>
      <Link href="/sign-up">Sign-Up</Link>
      <Link href="/sign-in">Log In</Link>
    </div>
  )
}