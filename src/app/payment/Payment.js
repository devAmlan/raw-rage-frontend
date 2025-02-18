"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  CircleChevronRight,
  CircleChevronLeft,
  Info,
} from "lucide-react";
import { useCartStore } from "@/app/store/useCart";
import { useUserData } from "@/app/store/useUser";
import qrCode from "../../../public/assets/qr-code.jpg";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialState = {
  utrId: "",
};

const FormError = ({ message }) => (
  <div className="flex justify-start items-center gap-2">
    <AlertCircle size={14} className="text-red-500" />
    <p className="text-red-500 text-sm">{message}</p>
  </div>
);

function Payment() {
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [isPaid, setIsPaid] = useState(false);

  const { totalPrice, clearCart } = useCartStore();
  const { email } = useUserData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const saveData = async () => {
    try {
      const form = JSON.stringify({
        utrId: formData.utrId,
        price: totalPrice,
        email,
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbxfyCzQXLs-ADkwEDcmTAgx5DJMy5VDLu9zK098jGtAK3U93PDDW9TUx2YgZ2rGIF4xTA/exec",
        {
          mode: "no-cors",
          method: "POST",
          body: form,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      clearCart();
      setFormData(initialState);
      toast.success(
        "Thank you for reaching out! We appreciate your interest and will be in touch with you soon to discuss further. If you have any urgent questions, feel free to reach out to us anytime."
      );
    } catch (err) {
      console.log(err);
      if (err) {
        toast.error("Something went wrong, Please try adding UTR number again");
      }
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      saveData();
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.utrId) newErrors.utrId = "UTR ID is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChangeStep = (stepNumber) => {
    setStep(stepNumber);
  };

  const onClickPaid = () => {
    setIsPaid((prev) => !prev);
  };

  const stepContainer = {
    1: (
      <>
        <CardContent className="flex flex-col gap-4">
          <Image src={qrCode} className="w-full h-80" alt="qr-code" />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </CardContent>
      </>
    ),
    2: (
      <>
        <CardContent className="flex flex-col">
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <Label
                htmlFor="utrId"
                className="flex justify-start items-center gap-2"
              >
                <span>Enter UTR number</span>
                <Info size={16} className="cursor-pointer" />
              </Label>
              <Input
                id="utrId"
                name="utrId"
                value={formData.utrId}
                placeholder="Your Payment UTR number"
                onChange={handleChange}
              />
              {errors.utrId && <FormError message={errors.utrId} />}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
              onClick={handleSubmit}
            >
              Confirm Payment
            </button>
          </div>
        </CardContent>
      </>
    ),
  };
  return (
    <main className="min-h-screen flex justify-center items-center flex-col max-w-7xl md:mx-auto mx-5">
      <Toaster richColors />

      <Card>
        {isPaid ? (
          <CardContent className="w-[400px] flex flex-col">
            <div className="space-y-4 w-full py-4">
              <div className="space-y-2">
                <Label
                  htmlFor="utrId"
                  className="flex justify-start items-center gap-2"
                >
                  <span>Enter UTR number</span>
                  <Info size={16} className="cursor-pointer" />
                </Label>
                <Input
                  id="utrId"
                  name="utrId"
                  value={formData.utrId}
                  placeholder="Your Payment UTR number"
                  onChange={handleChange}
                />
                {errors.utrId && <FormError message={errors.utrId} />}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleSubmit}
              >
                Confirm Payment
              </button>
            </div>
          </CardContent>
        ) : (
          <Tabs defaultValue="upi" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upi">UPI</TabsTrigger>
              <TabsTrigger value="bank">Bank Transfer</TabsTrigger>
            </TabsList>
            <TabsContent value="upi">
              <div className="flex flex-col gap-4 p-4">
                <Image src={qrCode} className="w-full h-80" alt="qr-code" />
                <p className="font-mono opacity-50">
                  Take screenshot for payment
                </p>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={onClickPaid}
                >
                  Next
                </button>
              </div>
            </TabsContent>
            <TabsContent value="bank">
              <div className="w-full grid grid-cols-1 gap-4 p-4">
                <div className="col-span-1">
                  <h3 className="text-sm font-normal">
                    Bank Name/Account Name
                  </h3>
                  <h3 className="text-sm font-semibold">
                    INDIAN OVERSEAS BANK
                  </h3>
                </div>
                <div className="col-span-1">
                  <h3 className="text-sm font-normal">Account Number</h3>
                  <h3 className="text-sm font-semibold">237902000000467</h3>
                </div>
                <div className="col-span-1">
                  <h3 className="text-sm font-normal">IFSC</h3>
                  <h3 className="text-sm font-semibold">IOBA0002379</h3>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={onClickPaid}
                >
                  Next
                </button>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </Card>
    </main>
  );
}

export default Payment;
