"use client";
import { BellIcon, BookOpen } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { SidebarTrigger } from "./ui/sidebar";
import { cn } from "@/lib/utils";

const Navbar = ({ isCoursePage }: { isCoursePage: boolean }) => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar__container">
        <div className="dashboard-navbar__search">
          <div className="md:hidden">
            <SidebarTrigger className="dashboard-navbar__sidebar-trigger" />
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className={cn("dashboard-navbar__search-input", {
                  "!bg-customgreys-secondarybg": isCoursePage,
                })}
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">search</span>
              </Link>
              <BookOpen
                className="dashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-navbar__actions">
          <Button className="nondashboard-navbar__notifications-button">
            <span className="nondashboard-navvbar__notifications-indicator">
              <BellIcon className="nondashboard-navvbar__notifications-icon"/>
            </span>
          </Button>

          <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtygrey",
                userButtonBox: "scale-90 sm-scale-100",
              },
            }}
            showName
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
