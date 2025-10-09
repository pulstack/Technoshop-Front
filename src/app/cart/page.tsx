"use client";

import { useCart } from "@/components/store/useCart";
import useOrder from "@/components/store/useOrder";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ProductType } from "@/types";
import { BrushCleaning, Minus, Plus, ScanLine, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Cart = () => {
  const {
    clearCart,
    removeProduct,
    products,
    decrementProduct,
    incrementProduct,
  } = useCart();

  const [orderData, setOrderData] = React.useState<ProductType[]>([]);
  const { setProducts } = useOrder();
  const router = useRouter();

  // 🟢 Narxlarni state bilan boshqaramiz
  const [subtotal, setSubtotal] = React.useState(0);
  const [tax, setTax] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  // order productlarini belgilash
  const handleOrder = (checked: boolean, product: ProductType) => {
    if (checked) {
      setOrderData([...orderData, product]);
    } else {
      const newData = orderData.filter((item) => item.id !== product.id);
      setOrderData(newData);
    }
  };

  // 🟢 orderData o‘zgarsa subtotal va total qayta hisoblanadi
  React.useEffect(() => {
    const newSubtotal = orderData.reduce((sum, p: any) => {
      const finalPrice = p.discountPercentage
        ? p.price - p.price * (p.discountPercentage / 100)
        : p.price;
      return sum + finalPrice * p.count;
    }, 0);

    const newTax = newSubtotal ? 50 : 0;
    const newShipping = newSubtotal ? 29 : 0;
    const newTotal = newSubtotal + newTax + newShipping;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setShipping(newShipping);
    setTotal(newTotal);
  }, [orderData]);

  const getOrder = () => {
    setProducts(orderData);
    router.push("/order");
  };

  return (
    <div className="mt-8 flex mx-[160px] gap-16 mb-40 items-stretch">
      {/* Shopping Cart */}
      <div className="flex-1 border rounded-xl p-6 bg-white shadow-md flex flex-col">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
        <ul className="flex-1">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between py-4 border-b"
            >
              <Checkbox
                onCheckedChange={(checked: boolean) =>
                  handleOrder(checked, product)
                }
              />
              <div className="flex items-center gap-4">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
                <h2 className="font-semibold text-lg">{product.title}</h2>
              </div>
              <span className="font-bold text-primary">${product.price}</span>
              <div className="flex items-center border px-2 py-1 rounded-md">
                <button
                  onClick={() => decrementProduct(product.id)}
                  className="cursor-pointer"
                >
                  <Minus />
                </button>
                <span className="px-4 text-lg font-bold">{product.count}</span>
                <button
                  onClick={() => incrementProduct(product.id)}
                  className="cursor-pointer"
                >
                  <Plus />
                </button>
              </div>
              <Button
                variant="destructive"
                size="icon"
                onClick={() => removeProduct(product.id)}
              >
                <Trash2 />
              </Button>
            </li>
          ))}
        </ul>

        {products.length ? (
          <div className="mt-8 flex gap-4">
            <Button onClick={clearCart} variant="outline">
              <BrushCleaning /> clear
            </Button>
            <Button
              onClick={getOrder}
              disabled={!orderData.length}
              className="disabled:cursor-not-allowed disabled:opacity-50 flex items-center justify-center gap-2 bg-primary text-white"
            >
              <ScanLine /> Place an order
            </Button>
          </div>
        ) : (
          <div className="mt-40 flex flex-col items-center justify-center gap-3">
            <h2 className="text-md text-gray-600">The basket is empty</h2>
            <Link
              href={"/"}
              className="flex items-center justify-center w-[178px] h-[37px] bg-primary text-white rounded-md"
            >
              Go to directory
            </Link>
          </div>
        )}
      </div>

      {/* Order Summary */}
      <div className="w-[450px] border rounded-xl p-6 shadow-md bg-white flex flex-col">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="mb-4 flex flex-col gap-4">
          <label htmlFor="discount" className="text-sm text-[#545454]">
            Discount code / Promo code
          </label>
          <input
            type="text"
            placeholder="Code"
            className="w-full border rounded-md p-3 mb-2"
            id="discount"
          />
          <div className="flex gap-4 flex-col">
            <label htmlFor="bonus" className="text-sm text-[#545454]">
              Your bonus card number
            </label>
            <input
              type="text"
              placeholder="Your bonus card number"
              className="flex-1 border rounded-md p-3"
              id="bonus"
            />
            <Button>Apply</Button>
          </div>
        </div>
        <div className="flex justify-between py-1">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Estimated Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Estimated shipping & Handling</span>
          <span>${shipping}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link href="/checkout">
          <Button className="w-full mt-4 bg-black text-white">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
