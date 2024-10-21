"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { JSX, SVGProps, useState } from "react";
import { Card, CardContent } from "./ui/card";

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Naskh+Arabic:wght@400;700&display=swap");

        .font-arabic {
          font-family: "Noto Naskh Arabic", "Amiri", serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Amiri", serif;
        }
      `}</style>

      <header className="bg-white bg-opacity-90 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image alt="Shifa Logo" src="/shifa-logo.png" />
          </div>
          <nav className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#workshops">Workshops</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white p-4">
            <NavLink href="#home" className="block py-2">
              Home
            </NavLink>
            <NavLink href="#services" className="block py-2">
              Services
            </NavLink>
            <NavLink href="#workshops" className="block py-2">
              Workshops
            </NavLink>
            <NavLink href="#contact" className="block py-2">
              Contact
            </NavLink>
          </nav>
        )}
      </header>

      <main>
        <section
          className="relative h-[60vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/cover-home.jpeg?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}>
          <div className="absolute inset-0 bg-[#30375E] bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
                Individual and Family Counseling
              </h2>
            </div>
          </div>
        </section>

        <section className="bg-white bg-opacity-80 pt-8">
          <div className="container mx-auto p-2 text-center border-8 border-[#30375E] bg-[#F8EDDE]">
            <div className="container mx-auto p-4 text-center border-2 border-[#30375E]">
              <h3 className="text-3xl font-semibold text-[#30375E] mb-2 font-arabic">
                السَّلَامُ عَلَى مَنِ اتَّبَعَ الْهُدَى
              </h3>
              <p className="text-xl text-[#30375E] font-arabic">
                Peace be upon he who follows the Guidance. (20:47)
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-opacity-80 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceCard title="Learning & Growing" icon="book" />
              <ServiceCard title="Life Coaching & Guidance" icon="compass" />
              <ServiceCard title="Workshops & Seminars" icon="users" />
              <ServiceCard title="Counseling & Therapy" icon="heart" />
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center">
          <Card className="w-full max-w-[90vw] md:max-w-2xl lg:max-w-3xl aspect-[3/4] relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: "url('/Border-001-940x1396.png')",
                backgroundSize: "100% 100%",
              }}
            />
            <div className="relative z-10 h-full flex flex-col justify-between p-8 sm:p-12 md:p-16 text-center">
              <CardContent className="flex-grow flex flex-col justify-center space-y-6">
                <div className="container mx-auto px-0 sm:px-4">
                  <h2 className="text-xl sm:text-3xl font-semibold text-[#30375E] my-2 sm:my-4 text-center">
                    Welcome to Shifa Psychological Services
                  </h2>
                  <div className="max-w-3xl mx-auto text-sm sm:text-lg">
                    <p className="text-gray-700 pb-1 sm:pb-8">
                      Welcome to Shifa Psychological Services – the home of
                      holistic counseling and therapeutic services for men and
                      women, boys and girls, young and old, single and married.
                    </p>
                    <p className="text-gray-700 pb-1 sm:pb-8">
                      This service is based in the beautiful northern hemisphere
                      of the earth, in the city of Edmonton, Alberta, Canada. If
                      you have some time, visit the picture gallery to
                      appreciate the beauty of this part of the world.
                    </p>
                    <p className="text-gray-700 pb-1 sm:pb-8">
                      Here you will find life coaching, cyber counseling and
                      therapy, community and professional training workshops,
                      online webinars and small group counseling, frequently
                      asked questions and answers, and some web lessons on
                      personal growth as well as brief articles on
                      psychological, emotional and spiritual issues.
                    </p>
                  </div>
                </div>
              </CardContent>
              <div className="pb-2 sm:pb-4">
                <p
                  className="text-xs sm:text-sm italic text-primary"
                  style={{ fontFamily: "'Amiri', serif" }}>
                  May Allah accept from us and from you
                </p>
              </div>
            </div>
          </Card>
        </section>
      </main>

      <footer className="bg-[#3A4479] text-white py-8 mt-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Shifa Psychological Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-[#30375E] hover:text-blue-800 hover:underline ${className}`}>
      {children}
    </a>
  );
}

function ServiceCard({ title, icon }: { title: string; icon: string }) {
  const Icon =
    icon === "book"
      ? Book
      : icon === "compass"
      ? Compass
      : icon === "users"
      ? Users
      : Heart;

  return (
    <div className="relative bg-[#F8EDDE] p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-[url('/arabesque.svg')]"></div>
      <div className="relative z-10">
        <Icon className="h-12 w-12 mx-auto mb-4 text-[#30375E]" />
        <h3 className="text-xl font-semibold text-[#30375E] mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">
          Providing expert guidance and support for your journey.
        </p>
      </div>
    </div>
  );
}

function Book(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function Compass(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function Heart(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function Users(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
