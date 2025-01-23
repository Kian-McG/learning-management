"use client";
import Loading from "@/components/Loading";
import WizardStepper from "@/components/WizardStepper";
import { useUser } from "@clerk/nextjs";
import React from "react";
import CheckoutDetailsPage from "./details";
import { useCheckoutNavigation } from "@/hooks/useCheckoutNavigation";
import PaymentPage from "./payment";
import CompletionPage from "./completion";
const CheckoutWizard = () => {
  const { isLoaded } = useUser();
  const { checkoutStep } = useCheckoutNavigation();
  if (!isLoaded) {
    return <Loading />;
  }
  const renderStep = (): React.ReactNode => {
    switch (checkoutStep) {
      case 1:
        return <CheckoutDetailsPage />;
      case 2:
        return <PaymentPage />;
      case 3:
        return <CompletionPage />;
      default:
        return;
    }
  };
  return (
    <div className="checkout bg-customgreys-primarybg">
        <WizardStepper currentStep={checkoutStep} />
      <div className="checkout__content bg-customgreys-primarybg">{renderStep()}</div>
    </div>
  );
};

export default CheckoutWizard;
