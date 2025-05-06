import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";

import { SidebarTrigger } from "../components/ui/sidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Notification from "./breadcrumbs-widget";
import { ArrowUpRight, GraduationCap } from "lucide-react";
export default function ClientScholarship() {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScholarship() {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await fetch("/appli.json");
      const data = await response.json();
      setStudent(data[0]);
      setLoading(false);
    }
    fetchScholarship();
  }, []);

  function Loader() {
    return (
      <div className="flex justify-center items-center col-span-4">
        <div className="w-8 h-8 border-4 border-t-transparent border-black border-solid rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <header className="flex bg-green-800 h-16 items-center justify-between px-5 text-white border-b shadow-sm">
        <div className="flex items-center gap-3">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                Navigation
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Scholarships
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <Notification />
      </header>

      <div className="p-4">
        <p className="text-2xl font-bold zxc tracking-[-3px]">
          Active Scholarships
        </p>
        <p className="text-sm text-gray-600 ml-0.5">
          Explore and apply to scholarship programs. Click a card to view full
          details, requirements, and application procedures.
        </p>
      </div>
      <div className="p-4 space-y-5">
        <div className="w-full  grid grid-cols-3 gap-3">
          {loading ? (
            <Loader />
          ) : (
            student.scholarships.map((meow, index) => (
              <Link
                to={`/home/scholarship/${encodeURIComponent(meow.name)}`}
                className="w-full ${index === 0 ? 'col-span-2' : 'col-span-1' }"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xs transition-all duration-300 hover:shadow-md hover:border-zinc-300/50 dark:hover:border-zinc-700/50">
                  <div className="relative  overflow-hidden">
                    <img
                      src={meow.image}
                      alt={meow.name}
                      className="object-cover h-full w-full"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200 backdrop-blur-md shadow-xs border border-white/20 dark:border-zinc-800/50">
                      Active
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div className="space-y-1.5">
                        <h3 className="text-lg font-semibold text-white dark:text-zinc-100 leading-snug">
                          {meow.name}
                        </h3>
                        <p className="text-sm text-zinc-200 dark:text-zinc-300 line-clamp-2">
                          {meow.details}
                        </p>
                      </div>
                      <div className="p-2 rounded-full bg-white/10 dark:bg-zinc-800/50 backdrop-blur-md group-hover:bg-white/20 dark:group-hover:bg-zinc-700/50 transition-colors duration-300 group">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:-rotate-12 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
