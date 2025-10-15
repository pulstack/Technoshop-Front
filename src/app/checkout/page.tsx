"use client";

import Adrres from "@/assets/icons/Adress.svg";
import Shipping from "@/assets/icons/Shipping.svg";
import Payment from "@/assets/icons/Payment.svg";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AddresModal from "@/components/AddresModal";
import { useAddress } from "@/components/store/useAddress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Edit, Trash2Icon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useSelectedProducts } from "@/components/store/useSelectedProducts";
import Carta from "@/assets/images/carta.png";

const shippingMethods = [
  { id: 1, title: "Free - Regular shipment", price: 0, date: "17 Oct, 2023" },
  { id: 2, title: "Express - Get it fast", price: 8.5, date: "1 Oct, 2023" },
  { id: 3, title: "Schedule - Pick a date", price: 25, date: "Select Date" },
];

const OrderCheckout = () => {
  const [activeTab, setActiveTab] = React.useState<
    "address" | "shipping" | "payment"
  >("address");

  const { addresses, removeAddress } = useAddress();
  const [selectedAddressId, setSelectedAddressId] = React.useState<string | null>(
    null
  );
  const [selectedShipping, setSelectedShipping] = React.useState<string | null>(
    null
  );

  const [activePayment, setActivePayment] = React.useState<
    "credit" | "paypal" | "paypal-credit"
  >("credit");

  const { selectedProducts } = useSelectedProducts();

  const selectedAddress = addresses.find(
    (a) => String(a.id) === selectedAddressId
  );
  const selectedShippingMethod = shippingMethods.find(
    (s) => String(s.id) === selectedShipping
  );

  const subtotal = selectedProducts.reduce(
    (sum, p) =>
      sum +
      (p.discountPercentage
        ? p.price - p.price * (p.discountPercentage / 100)
        : p.price) *
        (p.count || 1),
    0
  );

  const shippingPrice = selectedShippingMethod
    ? selectedShippingMethod.price
    : 0;
  const total = subtotal + shippingPrice + 79;

  return (
    <div className="flex flex-col mx-[160px] lg:mx-[360px]">
      <div className="flex gap-[120px] lg:gap-[420px]">
        <div
          className={`pb-2 flex gap-2 items-center ${
            activeTab === "address"
              ? "text-black font-semibold"
              : "text-gray-400"
          }`}
        >
          <div
            className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center",
              activeTab === "address" ? "bg-black" : "bg-gray-400"
            )}
          >
            <Image src={Adrres} alt="address" className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col gap-0">
            <span className="text-[14px]">Step 1</span>
            <span className="text-[18px]">Address</span>
          </div>
        </div>

        <div
          className={`pb-2 flex gap-2 items-center ${
            activeTab === "shipping"
              ? "text-black font-semibold"
              : "text-gray-400"
          }`}
        >
          <div
            className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center",
              activeTab === "shipping" ? "bg-black" : "bg-gray-400"
            )}
          >
            <Image src={Shipping} alt="shipping" className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px]">Step 2</span>
            <span className="text-[18px]">Shipping</span>
          </div>
        </div>

        <div
          className={`pb-2 flex gap-2 items-center ${
            activeTab === "payment"
              ? "text-black font-semibold"
              : "text-gray-400"
          }`}
        >
          <div
            className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center",
              activeTab === "payment" ? "bg-black" : "bg-gray-400"
            )}
          >
            <Image src={Payment} alt="payment" className="w-3.5 h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[14px]">Step 3</span>
            <span className="text-[18px]">Payment</span>
          </div>
        </div>
      </div>

      <div className="mt-10">
        {addresses && activeTab === "address" && (
          <div className="flex flex-col gap-4">
            <RadioGroup
              value={selectedAddressId || ""}
              onValueChange={setSelectedAddressId}
            >
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="flex justify-between items-center bg-[#F6F6F6] rounded-lg p-3"
                >
                  <div className="flex items-start gap-3">
                    <RadioGroupItem
                      value={String(address.id)}
                      id={`address-${address.id}`}
                      className="mt-1"
                    />
                    <Label
                      htmlFor={`address-${address.id}`}
                      className="cursor-pointer"
                    >
                      <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{address.fullName}</p>
                          <p className="text-sm">{address.phone}</p>
                          <p className="text-sm text-gray-500">
                            {address.address}
                          </p>
                        </div>
                        <div className="bg-black flex items-center py-1 px-2 h-6 rounded-[8px] text-white">
                          <span>{address.title}</span>
                        </div>
                      </div>
                    </Label>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon-sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => removeAddress(address.id)}
                    >
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </RadioGroup>
            <AddresModal />
            <div className="flex items-center mb-5 gap-6 justify-end">
              <Button variant="outline" className="mt-4 w-[208px] h-[64px]" disabled>
                Back
              </Button>
              <Button
                variant="default"
                className="mt-4 w-[208px] h-[64px]"
                onClick={() => setActiveTab("shipping")}
                disabled={!selectedAddressId}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div>
            <RadioGroup
              value={selectedShipping || ""}
              onValueChange={setSelectedShipping}
            >
              <div className="flex flex-col gap-4">
                {shippingMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex justify-between items-center bg-[#F6F6F6] rounded-lg p-3"
                  >
                    <div className="flex items-start gap-3">
                      <RadioGroupItem
                        value={String(method.id)}
                        id={`shipping-${method.id}`}
                        className="mt-1"
                      />
                      <Label
                        htmlFor={`shipping-${method.id}`}
                        className="cursor-pointer"
                      >
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold">{method.title}</p>
                          <p className="text-sm text-gray-500">{method.date}</p>
                        </div>
                      </Label>
                    </div>
                    <div className="text-right font-semibold">
                      {method.price === 0 ? "Free" : `$${method.price}`}
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>

            <div className="flex items-center mb-5 gap-6 justify-end">
              <Button
                variant="outline"
                className="mt-4 w-[208px] h-[64px]"
                onClick={() => setActiveTab("address")}
              >
                Back
              </Button>
              <Button
                variant="default"
                className="mt-4 w-[208px] h-[64px]"
                onClick={() => setActiveTab("payment")}
                disabled={!selectedShipping}
              >
                Next
              </Button>
            </div>
          </div>
        )}

        {activeTab === "payment" && (
          <div>
            <div className="flex gap-[96px]">
              <div className="w-[512px] border border-[#EBEBEB] rounded-[10px]">
                <p className="text-2xl mt-8 px-6 mb-6">Summary</p>
                {selectedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="flex mx-6 justify-between items-center w-[464px] h-[72px] bg-[#F6F6F6] rounded-lg p-3 mb-4 gap-3"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      width={40}
                      height={40}
                    />
                    <p className="text-[18px] font-semibold">{product.title}</p>
                    <p className="font-bold">${product.price}</p>
                  </div>
                ))}
                <div className="px-6 mb-4">
                  {selectedAddress && (
                    <div className="mb-4 text-sm text-gray-600">
                      <p className="font-semibold mb-1">Address:</p>
                      <p>{selectedAddress.fullName}</p>
                      <p>{selectedAddress.phone}</p>
                      <p>{selectedAddress.address}</p>
                    </div>
                  )}
                  <div className="flex justify-between mb-2">
                    <p className="text-[18px] font-semibold">Subtotal</p>
                    <p className="font-bold">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p className="text-[18px] font-semibold">Shipping</p>
                    <p className="font-bold">${shippingPrice.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between border-t pt-2 mt-2">
                    <p className="text-[18px] font-semibold">Total</p>
                    <p className="font-bold">${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <div className="w-[512px]">
                <div className="flex gap-[56px] border-b border-[#E0E0E0] mb-6">
                  <button
                    onClick={() => setActivePayment("credit")}
                    className={`pb-2 text-[14px] ${
                      activePayment === "credit"
                        ? "border-b-2 border-black font-semibold text-black"
                        : "text-[#717171]"
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    onClick={() => setActivePayment("paypal")}
                    className={`pb-2 text-[14px] ${
                      activePayment === "paypal"
                        ? "border-b-2 border-black font-semibold text-black"
                        : "text-[#717171]"
                    }`}
                  >
                    PayPal
                  </button>
                  <button
                    onClick={() => setActivePayment("paypal-credit")}
                    className={`pb-2 text-[14px] ${
                      activePayment === "paypal-credit"
                        ? "border-b-2 border-black font-semibold text-black"
                        : "text-[#717171]"
                    }`}
                  >
                    PayPal Credit
                  </button>
                </div>

                {activePayment === "credit" && (
                  <div className="flex flex-col gap-4">
                    <Image src={Carta} alt="carta" width={337} height={190} />
                    <input
                      type="text"
                      placeholder="Cardholder name"
                      className="border p-3 rounded-md"
                    />
                    <input
                      type="text"
                      placeholder="Card number"
                      className="border p-3 rounded-md"
                    />
                    <div className="flex gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-3 rounded-md w-1/2"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="border p-3 rounded-md w-1/2"
                      />
                    </div>
                  </div>
                )}

                {activePayment === "paypal" && (
                  <p className="text-gray-600 mt-2">
                    You’ll be redirected to PayPal to complete your purchase.
                  </p>
                )}

                {activePayment === "paypal-credit" && (
                  <p className="text-gray-600 mt-2">
                    Pay over time with PayPal Credit — subject to credit
                    approval.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center mb-5 gap-6 justify-end">
              <Button
                variant="outline"
                className="mt-4 w-[208px] h-[64px]"
                onClick={() => setActiveTab("shipping")}
              >
                Back
              </Button>
              <Button variant="default" className="mt-4 w-[208px] h-[64px]">
                Pay
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderCheckout;
