"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectItem, SelectContent, SelectTrigger } from "@/components/ui/select";
import { ShineBorder } from "@/components/ui/shine-border";
import { Meteors } from "@/components/ui/meteors";
import { db } from "@/lib/firebase/config"; // 
import { collection, addDoc } from "firebase/firestore"; // Firestore functions

export default function VikingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    school: "",
    education: "",
    major: "",
    age: "",
    gender: "",
    phone: "",
    github: "",
    shirtSize: "",
    resume: null,
  });

  const [agreed, setAgreed] = useState({
    waiver: false,
    mlhData: false,
    mlhCode: false,
    mlhEmails: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: keyof typeof agreed) => {
    setAgreed((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleSubmit = async () => {
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match!");
      return;
    }

    try {
      // Push data to Firestore
      await addDoc(collection(db, "registrations"), {
        ...formData,
        agreed,
        timestamp: new Date(),
      });

      alert("Registration successful! ⚔️");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        school: "",
        education: "",
        major: "",
        age: "",
        gender: "",
        phone: "",
        github: "",
        shirtSize: "",
        resume: null,
      });
      setAgreed({ waiver: false, mlhData: false, mlhCode: false, mlhEmails: false });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong! Try again. ⚔️");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen text-black py-8 overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-screen -z-10 ml-96">
        <Meteors number={40} />
      </div>

      <ShineBorder
        className="relative max-w-3xl rounded-lg"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="relative rounded-lg backdrop-blur-md bg-white/10 p-12">
          <h1 className="text-3xl font-medium font-Tomorrow text-yellow-500 mb-6 text-center">
            ⚔️ Registration Form ⚔️
          </h1>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>First Name*</Label>
                <Input name="firstName" placeholder="Ragnar" required onChange={handleInputChange} value={formData.firstName} />
              </div>
              <div>
                <Label>Last Name*</Label>
                <Input name="lastName" placeholder="Lothbrok" required onChange={handleInputChange} value={formData.lastName} />
              </div>
            </div>
            <div>
              <Label>Email*</Label>
              <Input name="email" type="email" placeholder="ragnar@valhalla.com" required onChange={handleInputChange} value={formData.email} />
            </div>
            <div>
              <Label>Confirm Email*</Label>
              <Input name="confirmEmail" type="email" placeholder="ragnar@valhalla.com" required onChange={handleInputChange} value={formData.confirmEmail} />
            </div>
            <div>
              <Label>School*</Label>
              <Input name="school" placeholder="Search your school" required onChange={handleInputChange} value={formData.school} />
            </div>
            <div>
              <Label>Level of Education</Label>
              <Select onValueChange={(value) => handleSelectChange("education", value)}>
                <SelectTrigger className="w-full">{formData.education || "Select"}</SelectTrigger>
                <SelectContent>
                  <SelectItem value="undergrad">Undergraduate</SelectItem>
                  <SelectItem value="graduate">Graduate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Major*</Label>
              <Input name="major" placeholder="Shield Wall Strategies" required onChange={handleInputChange} value={formData.major} />
            </div>
            <div>
              <Label>Age*</Label>
              <Input name="age" type="number" placeholder="30" required onChange={handleInputChange} value={formData.age} />
            </div>
            <div>
              <Label>Gender*</Label>
              <Select onValueChange={(value) => handleSelectChange("gender", value)}>
                <SelectTrigger className="w-full">{formData.gender || "Select"}</SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Phone Number*</Label>
              <Input name="phone" placeholder="(201) 555-0123" required onChange={handleInputChange} value={formData.phone} />
            </div>
            <div>
              <Label>GitHub</Label>
              <Input name="github" placeholder="github.com/ragnar" onChange={handleInputChange} value={formData.github} />
            </div>
            <div>
              <Label>Shirt Size*</Label>
              <Select onValueChange={(value) => handleSelectChange("shirtSize", value)}>
                <SelectTrigger className="w-full">{formData.shirtSize || "Select"}</SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">Small</SelectItem>
                  <SelectItem value="m">Medium</SelectItem>
                  <SelectItem value="l">Large</SelectItem>
                  <SelectItem value="xl">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Resume</Label>
              <Input type="file" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox checked={agreed.mlhData} onCheckedChange={() => handleCheckboxChange("mlhData")} />
                <Label>I agree to MLH Data Sharing</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox checked={agreed.mlhCode} onCheckedChange={() => handleCheckboxChange("mlhCode")} />
                <Label>I agree to the MLH Code of Conduct</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox checked={agreed.mlhEmails} onCheckedChange={() => handleCheckboxChange("mlhEmails")} />
                <Label>I agree to receive MLH Informational Emails</Label>
              </div>
            </div>
            <Button className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded w-full mt-4" onClick={handleSubmit}>
              Register for Battle ⚔️
            </Button>
          </div>
        </div>
      </ShineBorder>
    </div>
  );
}
