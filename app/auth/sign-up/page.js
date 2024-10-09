import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const description =
    "A signup page with two columns. The first column has the signup form with email, password, and confirm password fields. There's a link to login if you already have an account. The second column has a cover image.";

export default function SignupPage() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-full">
            <div className="hidden bg-muted lg:block">
                {/* <Image
            src="/placeholder.svg"
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          /> */}
            </div>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email and create a password below
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </div>
                    <div className="mt-4 text-sm text-center">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="underline">
                            Login here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
