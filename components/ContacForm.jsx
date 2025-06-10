"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Github, Linkedin, Twitter, Globe } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. " + data.error);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Something went wrong ");
    }
  };

  return (
    <div className="min-h-screen bg-[#fefbf8] text-white" id="contact">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 ">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="text-orange-600 font-mono text-lg">
              {"<contact>"}
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
                Let's Create
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                I'm currently available for freelance work and open to
                discussing new opportunities. If you have a project that needs
                some creative coding, let's talk!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-600">Email</h3>
                  <p className="text-gray-600">shivamaashtikar@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-600">Location</h3>
                  <p className="text-gray-600">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href={"https://github.com/shivamashtikar333"}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-black hover:bg-orange-600 hover:text-black cursor-pointer"
                >
                  <Github className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={"https://www.linkedin.com/in/shivam-ashtikar/"}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-black hover:bg-orange-600 hover:text-black cursor-pointer"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </Link>
              <Link href={"#"}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-12 h-12 bg-black hover:bg-orange-600 hover:text-black cursor-pointer"
                >
                  <Globe className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="text-orange-500 font-mono text-lg">
              {"</contact>"}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:pl-8">
            <Card className="bg-black border-orange-600">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-black-700 border-orange-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-black-700 border-orange-600 text-white placeholder:text-gray-400 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-black border-orange-600 text-white placeholder:text-gray-400 focus:border-orange-500 min-h-[120px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-800 text-white font-semibold py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
