import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RegistrationForm() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-8">
      <Card className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">MLH Hackathon Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Enter your full name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="github">GitHub Profile</Label>
              <Input id="github" type="url" placeholder="Enter your GitHub profile URL" className="mt-1" />
            </div>
            <div className="flex justify-center">
              <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600">Register</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
