import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-full">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-8">
          <div className="grid gap-4">
            <h1 className="text-3xl font-semibold">Login</h1>
            <div className="text-sm text-secondary-foreground">
              {`Don't have an account? `}
              <Link href="/signup" className="underline text-blue-500">
                Sign up
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Please enter your email address"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Please enter your password"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/gradient.png"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
