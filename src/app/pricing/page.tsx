"use client";
import type React from "react";
import { Metadata } from "next";
import { Check, X, Award, Clock, Car, FileCheck, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const package1 = {
  title: "Package 1",
  originalPrice: 749,
  discountedPrice: 599,
  description:
    "Get sufficient training with essentials at an economy price—grab it now!",
  features: [
    "10 hours of in-car training",
    "20 hours of e-learning class sessions",
    "Certification with the Ministry of transportation",
    "Insurance discount + get your G2 in 8 months rather than 1 year",
  ],
  excludedFeatures: [
    "Use of an instructor car for local * G2 road test",
    "We will also book your road test",
  ],
};
const package2 = {
  title: "Package 2",
  originalPrice: 949,
  discountedPrice: 799,
  description: "You get all you need at a reasonable price—look no further!",
  features: [
    "11 hours of in-car training",
    "20 hours of e-learning class sessions",
    "Certification with the Ministry of transportation",
    "Insurance discount + get your G2 in 8 months rather than 1 year",
    "Use of an instructor car for local * G2 road test",
    "We will also book your road test",
  ],
  excludedFeatures: [],
};
const package3 = {
  title: "Package 3",
  originalPrice: 1149,
  discountedPrice: 999,
  description: "You will get extra in-car training. More is better—go for it!",
  features: [
    "15 hours of in-car training",
    "20 hours of e-learning class sessions",
    "Certification with the Ministry of transportation",
    "Insurance discount + get your G2 in 8 months rather than 1 year",
    "Use of an instructor car for local * G2 road test",
    "We will also book your road test",
  ],
  excludedFeatures: [],
};
const lessonPackages1 = [
  {
    title: "5 hours of lessons",
    price: "$250",
    description: "Perfect for beginners who need basic training",
  },
  {
    title: "10 hours of lessons",
    price: "$490",
    description: "Comprehensive training for confident drivers",
    featured: true,
  },
];

const lessonPackages2 = [
  {
    title: "1 hour and road test (in town)",
    price: "$195",
    description: "Quick refresher before your test",
  },
  {
    title: "3 hours and road test mini package (in town)",
    price: "$300",
    description: "Short preparation and test booking",
  },
  {
    title: "5 hours and road test (in town)",
    price: "$390",
    description: "Standard preparation for your road test",
    featured: true,
  },
  {
    title: "10 hours and road test (in town)",
    price: "$625",
    description: "Complete preparation for test success",
  },
];
const lessonPackages3 = [
  {
    title: "5 hours of lessons",
    price: "$300",
    description: "Focused training for G license preparation",
  },
  {
    title: "10 hours of lessons",
    price: "$590",
    description: "Comprehensive G license training program",
    featured: true,
  },
];
const lessonPackages4 = [
  {
    title: "1 hour and road test (in town)",
    price: "$220",
    description: "Quick refresher before your G test",
  },
  {
    title: "3 hours and road test mini package (in town)",
    price: "$340",
    description: "Short preparation for your G test",
  },
  {
    title: "5 hours and road test (in town)",
    price: "$475",
    description: "Standard G test preparation package",
    featured: true,
  },
  {
    title: "10 hours and road test (in town)",
    price: "$750",
    description: "Complete G license preparation and test",
  },
];

export default function PricingPage() {
  return (
    <div
      id="package"
      className="container mx-auto px-4 py-10 bg-gradient-to-b from-background to-background/50"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 inline-block">
          Lovely Customers
          <sup>
            <Heart
              className="h-5 w-5 text-red-400 fill-red-300 inline"
              style={{ transform: "rotate(15deg)" }}
            />
          </sup>
        </h1>
        <p className="text-xl mt-4 text-muted-foreground">Our Packages</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 mb-20 max-w-6xl mx-auto">
        {/* Package 1 */}
        <Card className="flex flex-col overflow-hidden border-primary/10 shadow-lg hover:shadow-xl hover:ring-1 hover:ring-blue-300 transition-all duration-300 z-5">
          <CardHeader className="pb-6 border-b">
            <div className="flex items-center mb-2 border-b pb-2">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <CardTitle className="text-2xl">{package1.title}</CardTitle>
            </div>
            <div className="flex items-baseline">
              <span className="text-muted-foreground line-through opacity-70">
                ${package1.originalPrice}
              </span>
              <span className="text-4xl font-bold">
                ${package1.discountedPrice}
              </span>
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                + HST
              </span>
            </div>
            <CardDescription className="mt-3">
              {package1.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {package1.features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={true} />
              ))}
              {package1.excludedFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={false} />
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              className="w-full rounded-full py-6 hover:bg-gradient-to-r from-blue-100 to-green-100 dark:hover:text-black"
              variant="outline"
              onClick={() => {
                console.log("clicked package 1");
              }}
            >
              Select Package
            </Button>
          </CardFooter>
        </Card>

        {/* Package 2 */}
        <Card className="flex flex-col relative border-primary/30 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:shadow-xl hover:ring-1 hover:ring-blue-300 transition-all duration-300 scale-105 z-10">
          <div className="absolute -top-5 left-0 right-0 flex justify-center">
            <Badge className="px-6 py-1.5 text-sm bg-primary text-primary-foreground rounded-full shadow-md">
              Most Popular
            </Badge>
          </div>
          <CardHeader className="pb-6 border-b">
            <div className="flex items-center mb-2 border-b pb-2">
              <Award className="h-5 w-5 mr-2 text-primary" />
              <CardTitle className="text-2xl">{package2.title}</CardTitle>
            </div>
            <div className="flex items-baseline">
              <span className="text-muted-foreground line-through opacity-70">
                ${package2.originalPrice}
              </span>
              <span className="text-4xl font-bold">
                ${package2.discountedPrice}
              </span>
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                + HST
              </span>
            </div>
            <CardDescription className="mt-3">
              {package2.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {package2.features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={true} />
              ))}
              {package2.excludedFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={false} />
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              className="w-full rounded-full py-6 hover:bg-gradient-to-r from-red-100 to-yellow-100 dark:hover:text-black"
              variant="outline"
              onClick={() => {
                console.log("clicked package 2");
              }}
            >
              Select Package
            </Button>
          </CardFooter>
        </Card>

        {/* Package 3 */}
        <Card className="flex flex-col overflow-hidden border-primary/10 shadow-lg hover:shadow-xl hover:ring-1 hover:ring-blue-300 transition-all duration-300 z-5">
          <CardHeader className="pb-6 border-b">
            <div className="flex items-center mb-2 border-b pb-2">
              <Car className="h-5 w-5 mr-2 text-primary" />
              <CardTitle className="text-2xl">{package3.title}</CardTitle>
            </div>
            <div className="flex items-baseline">
              <span className="text-muted-foreground line-through opacity-70">
                ${package3.originalPrice}
              </span>
              <span className="text-4xl font-bold">
                ${package3.discountedPrice}
              </span>
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                + HST
              </span>
            </div>
            <CardDescription className="mt-3">
              {package3.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {package3.features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={true} />
              ))}
              {package3.excludedFeatures.map((feature, index) => (
                <FeatureItem key={index} feature={feature} included={false} />
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button
              className="w-full rounded-full py-6 hover:bg-gradient-to-r from-blue-100 to-green-100 dark:hover:text-black"
              variant="outline"
              onClick={() => {
                console.log("clicked package 3");
              }}
            >
              Select Package
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div id="lessons" className="mt-24 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Individual Lessons
          </h2>
          <p className="text-muted-foreground mt-2">
            (No certificate with these packages)
          </p>
        </div>

        <Tabs defaultValue="g1-to-g2" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 p-1 bg-muted/50 rounded-full ring-1 ring-primary/10">
            <TabsTrigger
              value="g1-to-g2"
              className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:ring-1 data-[state=active]:ring-primary/30"
            >
              G1 to G2 Packages
            </TabsTrigger>
            <TabsTrigger
              value="g2-to-g"
              className="rounded-full data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:ring-1 data-[state=active]:ring-primary/20"
            >
              G2 to G Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="g1-to-g2">
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              {/* Lesson Hours Section */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-border/20">
                <div className="bg-gradient-to-r from-sky-100 to-blue-100 dark:from-sky-900/20 dark:to-blue-900/20 px-6 py-4 border-b border-border/10">
                  <h3 className="text-xl font-semibold flex items-center text-slate-800 dark:text-slate-100">
                    <Clock className="h-5 w-5 mr-2 text-sky-500" /> Lesson Hours
                  </h3>
                </div>
                <div className="divide-y divide-border/10">
                  {lessonPackages1.map((item, index) => (
                    <LessonPriceItem key={index} {...item} />
                  ))}
                </div>
              </div>

              {/* Lesson + Road Test Section */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-border/20">
                <div className="bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20 px-6 py-4 border-b border-border/10">
                  <h3 className="text-xl font-semibold flex items-center text-slate-800 dark:text-slate-100">
                    <FileCheck className="h-5 w-5 mr-2 text-indigo-500" />
                    Lesson + Road Test
                  </h3>
                </div>
                <div className="divide-y divide-border/10">
                  {lessonPackages2.map((item, index) => (
                    <LessonPriceItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="g2-to-g">
            <div className="grid gap-8 md:grid-cols-2 mb-8">
              {/* Lesson Hours Section */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-border/20">
                <div className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 px-6 py-4 border-b border-border/10">
                  <h3 className="text-xl font-semibold flex items-center text-slate-800 dark:text-slate-100">
                    <Clock className="h-5 w-5 mr-2 text-emerald-500" /> Lesson
                    Hours
                  </h3>
                </div>
                <div className="divide-y divide-border/10">
                  {lessonPackages3.map((item, index) => (
                    <LessonPriceItem key={index} {...item} />
                  ))}
                </div>
              </div>

              {/* Lesson + Road Test Section */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg overflow-hidden border border-border/20">
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 px-6 py-4 border-b border-border/10">
                  <h3 className="text-xl font-semibold flex items-center text-slate-800 dark:text-slate-100">
                    <FileCheck className="h-5 w-5 mr-2 text-amber-500" /> Lesson
                    + Road Test
                  </h3>
                </div>
                <div className="divide-y divide-border/10">
                  {lessonPackages4.map((item, index) => (
                    <LessonPriceItem key={index} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function FeatureItem({
  feature,
  included,
}: {
  feature: string;
  included: boolean;
}) {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center border border-border/40">
        {included ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <X className="h-4 w-4 text-red-400" aria-label="Not included" />
        )}
      </span>
      <span
        className={`ml-3 transition-opacity ${
          !included ? "opacity-50" : "opacity-100"
        }`}
      >
        {feature}
      </span>
    </li>
  );
}

function LessonPriceItem({
  title,
  price,
  description,
  featured = false,
}: {
  title: string;
  price: string;
  description: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`px-6 py-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${
        featured && "bg-slate-50/70 dark:bg-slate-800/20"
      }`}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1 pr-4">
          <div className="flex items-center">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {title}
            </p>
            {featured && (
              <Badge className="ml-2 bg-primary/10 text-primary hover:bg-primary/20 border-1 border-blue-300 border-dashed">
                Popular
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <div className="text-right flex flex-col items-end">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-slate-900 dark:text-white">
              {price}
            </span>
            <span className="ml-1 text-xs text-muted-foreground">+ HST</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="mt-3 px-4 rounded-full border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
}
