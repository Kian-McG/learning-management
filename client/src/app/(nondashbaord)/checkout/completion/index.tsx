"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const CompletionPage = () => {
  return (
    <div className="completion bg-customgreys-primarybg">
      <div className="completion__content bg-customgreys-primarybg">
        <div className="completion__icon text-white-50 bg-customgreys-primarybg">
          <Check className="w-16 h-16" />
        </div>
        <h1 className="completion__title text-white-50 bg-customgreys-primarybg">COMPLETED</h1>
        <p className="completion__message text-white-50 bg-customgreys-primarybg">
          🎉 You have made a course purchase successfully! 🎉
        </p>
      </div>
      <div className="completion__support text-white-50 bg-customgreys-primarybg">
        <p>
          Need help? Contact our{" "}
          <Button variant="link" asChild className="p-0 m-0 text-primary-700 bg-customgreys-primarybg">
            <a href="mailto:support@example.com">customer support</a>
          </Button>
          .
        </p>
      </div>
      <div className="completion__action bg-customgreys-primarybg text-white-50">
        <Link href="user/courses" scroll={false}>
          Go to Courses
        </Link>
      </div>
    </div>
  );
};

export default CompletionPage;
