import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center mt-20">
      <SignUp />
    </div>
  )
}