"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Car,
  GraduationCap,
  Calendar,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import HeroSection from "./herosection";

export default function LandingPage() {
  return (
    <div className="container mx-auto">
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: "E-Learning Classes",
      description:
        "Comprehensive online courses with interactive modules and practice tests.",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      link: "/e-learning",
    },
    {
      title: "In-Car Lessons",
      description: "One-on-one driving lessons with certified instructors.",
      icon: <Car className="h-10 w-10 text-primary" />,
      link: "/in-car-lessons",
    },
    {
      title: "Vehicle Hire",
      description:
        "Well-maintained vehicles for road tests with pre-test preparation.",
      icon: <Calendar className="h-10 w-10 text-primary" />,
      link: "/vehicle-hire",
    },
  ];

  return (
    <section id="services" className="w-full min-h-screen py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Comprehensive driving education services tailored to your needs.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group flex flex-col items-center space-y-4 rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:scale-110 hover:border-primary/20 hover:shadow-md"
            >
              <div className="rounded-full bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground text-center">
                {service.description}
              </p>
              <span className="text-primary inline-flex items-center font-medium">
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const trustFactors = [
    "Ministry-approved courses",
    "Certified instructors",
    "Comprehensive curriculum",
    "High road test success rate",
    "Personalized learning",
  ];

  return (
    <section
      id="about"
      className="w-full py-20 rounded-xl md:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              About Us
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About Aonedrivings
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Providing quality driving education in Toronto for over 15 years
              with experienced instructors.
            </p>
            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                {trustFactors.map((factor, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-3 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/lesson.png"
              alt="Driving instructor teaching a student"
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "This driving school is amazing. The people here are very respctful and Farida is an excellent, and down to earth person who will get you to where you want to be. I delt with many bad instructors during my time in trying to get my G2, But Farida got me to where I needed to be. I highly reccomend this driving school to anyone who is simply trying to earn their licence!",
      author: "Tyler Crawford",
      location: "https://maps.app.goo.gl/bEWWhUNwS3KmDXT7A",
    },
    {
      quote:
        "As a very anxious person who self-doubts a lot, Farida made me feel so comfortable from my very first day. She is so caring, patient, and understanding. She takes the time to care for her students and support their confidence in achieving their goals. I always hear bad stories about driving instructors who yell and destroy one’s confidence in driving but, Farida is totally opposite from that. She always ensures the best for her students and I love that. I highly recommend!!! 🙂.",
      author: "Sabrina Huynh",
      location: "https://maps.app.goo.gl/QEtvFwk9LfYxneSV6",
    },
    {
      quote:
        "Farida is the best instructor. She is so patient and polite. She can make your driving journey so easy and confidential for you. Just passed my driving test today in the first try. It was a great  experience of learning with her!",
      author: "Fatiha Fayyaz",
      location: "https://maps.app.goo.gl/uoyX93inwUJZAasT9",
    },
    {
      quote:
        "Great school! A-one is an honest business. Farida is a kind and respectful teacher! She's been very patient while I get used to driving in a new country. If you're looking to learn how to follow the traffic laws, being safe and confident that's the right place! Bonus: enjoy your lessons 😁",
      author: "Mari Kimie Nito",
      location: "https://maps.app.goo.gl/fr3moGPuw1e7dcWY7",
    },
    {
      quote:
        "Very helpful and patient instructors. Really appreciate their support, as they take the time to get students ready for G2 and G road tests. Definitely would recommend them (especially Farida 😁) to learn how to drive 🙏🏾 …",
      author: "Kim Dawkins",
      location: "https://maps.app.goo.gl/KumydzAsnpRWVYyN6",
    },
    {
      quote:
        "A1 DRIVING SCHOOL, BIG SHOUT OUT TO FARIDA !!!  Excellent Service, reliable, very professional and teaches you all the correct steps to use for DRIVING TECHNIQUES, while driving and Test Preparation. PLEASE GO WITH A1 DRIVING SCHOOL, YOU WON'T REGRET IT !! I RECOMMEND A1 DRIVING TO EVERYONE, OF ALL AGES !!! 🏆🏅🏆🥇 …",
      author: "Dora Mehany",
      location: "https://maps.app.goo.gl/xtmewSAbeMbdHM6s9",
    },
  ];

  return (
    <section id="testimonials" className="w-full md:py-20 mt-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
            Hear from graduates who are now confident drivers in Toronto.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-primary/20"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-4 text-primary/20"
                >
                  <path
                    d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mb-6 italic text-muted-foreground">
                  {testimonial.quote}
                </p>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">
                  <Link target="_blank" href={testimonial.location}>
                    Verify Review
                  </Link>
                  {}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-primary/20 via-primary/10 to-background dark:from-primary/20 dark:via-primary/5 dark:to-background">
        <div className="relative flex flex-col items-center justify-center space-y-4 p-8 md:p-12 lg:p-16 text-center">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Become a Confident Driver?
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed mx-auto">
              Join thousands of satisfied students who learned with us.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8">
              Book Your First Lesson
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="w-full border-t py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="block dark:hidden dark:invert-1">
                <Image
                  src="/logo.png"
                  alt="Aonedrivings logo"
                  width={96}
                  height={96}
                  className="rounded-md"
                />
              </div>
              <div className="hidden dark:block">
                <Image
                  src="/logo_white.png"
                  alt="Aonedrivings logo"
                  width={96}
                  height={96}
                  className="rounded-md"
                />
              </div>
              <span className="text-xl font-bold">Aonedrivings</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional driving education in Toronto since 2008.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{Icon.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/e-learning"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  E-Learning Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/in-car-lessons"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  In-Car Lessons
                </Link>
              </li>
              <li>
                <Link
                  href="/vehicle-hire"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Vehicle Hire
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Packages</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/e-learning"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing#lessons"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Lessons
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Toronto, Canada.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +1 (647) 808 4284
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  aonedriving786@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <div className="flex justify-center gap-4 py-5">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Aonedrivings. All rights reserved.</p>
          <p>
            <Link
              href="https://www.linkedin.com/in/devdatkumar/"
              className="hover:text-primary transition-colors"
            >
              <span className="underline">Website Developer</span> - Devdat
              Kumar
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
