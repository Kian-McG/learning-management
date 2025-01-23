'use client';
import { BellIcon, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const NonDashboardNavbar = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as 'student' | 'teacher';

  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
          <Link href="/" className="nondashboard-navbar__brand">
            Kian
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Link
                href="/search"
                className="nondashboard-navbar__search-input"
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">search</span>
              </Link>
              <BookOpen
                className="nondashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        </div>
        <div className="nondashboard-navbar__actions">
          <Button className="nondashboard-navbar__notifications">
            <span className="nondashboard-navvbar__notifications-indicator">
              <BellIcon />
            </span>
          </Button>
          <SignedIn>
            <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtygrey",
                userButtonBox:'scale-90 sm-scale-100',
              },
            }}
            showName
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? '/teacher/profile' : '/user/profile'
            }
            
            />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in" className="nondashboard-navbar__auth-button--login">
            Log In</Link>
            <Link href="/sign-up" className="nondashboard-navbar__auth-button--signup">
            Sign Up</Link>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;
