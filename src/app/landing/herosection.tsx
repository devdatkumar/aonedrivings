import React from "react";
import { Button } from "@/components/ui/button";

const HeroSectionCleanTailwind = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-r from-background/80 via-background/60 to-background/80 dark:from-background/90 dark:via-background/70 dark:to-background/90">
      <div
        className="absolute inset-0 bg-[radial-gradient(#1e1e1e1f_1.5px,transparent_1.5px)] dark:bg-[radial-gradient(#7373731f_1.5px,transparent_1.5px)] bg-[size:18px_18px]"
        aria-hidden="true"
      ></div>

      <div className="container relative z-10 py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            Ministry-Approved
          </span>

          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Canada&apos;s Most Trusted Driving Instructors
          </h1>

          <p className="mt-4 md:mt-6 max-w-[700px] text-muted-foreground md:text-xl">
            Professional driving education in Toronto with experienced
            instructors and comprehensive courses.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Button
              className="rounded-full px-10 py-3 text-base transition-colors duration-200 ease-in-out hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" // Adjusted padding, added transitions/hover/focus
            >
              Book Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 text-base transition-colors duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionCleanTailwind;
