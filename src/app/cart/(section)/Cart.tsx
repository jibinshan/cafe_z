"use client";
import EditMenuItemDrawer from "@/components/drawer/EditMenuItemDrawer";
import CartDeletePopup from "@/components/popups/CartDeletePopup";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { cn } from "@/lib/utils";
import { ArrowLeft, CircleMinus, CirclePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Cart = ({ }) => {
  const router = useRouter();
  const { cartItems, updateItem, removeItem } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);
  const { items } = useRestaurant();
  useEffect(() => {
    const totalcart = cartItems.reduce(
      (acc, i) => acc + i.quantity * i.price.value,
      0,
    );

    setTotalAmount(totalcart);
  }, [cartItems]);
  const reversedCartItems = [...cartItems].reverse();
  return (
    <section className="w-full bg-menuforeground">
      <div className="fixed left-0 top-0 z-30 flex h-[10vh] w-full items-center justify-start bg-black px-4">
        <div onClick={() => router.back()} className="p-0 text-menusecondary">
          <ArrowLeft />
        </div>
        <div className="flex w-[90%] justify-center">
          <Image
            src="/images/logo.png"
            width={177}
            height={101}
            alt="logo"
            className="w-16"
          />
        </div>
      </div>
      <div className="w-full flex-col h-[94vh] overflow-y-hidden bg-menuforeground">
        <p className="mt-16 px-4 text-xl font-[700] text-menusecondary">Your Order</p>
        <div className="sticky top-0 z-10 h-[80vh] overflow-y-visible bg-menuforeground px-4 py-2">
          <div className="scrollbar-none flex flex-col gap-6 overflow-x-auto pb-2">
            <div className="scrollbar-none flex h-[69vh] w-full flex-col gap-4 overflow-y-scroll">
              {cartItems.length !== 0 ? (
                <div className="flex w-full flex-col">
                  {reversedCartItems.map((item, index) => {
                    const menuitem = items.find((i) => i._id === item._idMenuItem);
                    return (
                      <div
                        className="flex w-full flex-col items-start justify-start gap-3 border-b-[0.3px] border-b-menuprimary px-3 py-5"
                        key={index}
                      >
                        <div className="flex w-full items-center justify-between">
                          <div className="flex w-3/4 flex-col items-start justify-start gap-1">
                            <p className="text-lg font-[700] tracking-[1.8px] text-menusecondary">
                              {item?.quantity}&nbsp;&nbsp;{item.name}
                            </p>
                          </div>
                          <p className="font-[700] text-menuprimary">
                            {menuitem && getCurrencySymbol(menuitem.price.currency)}{" "}
                            {menuitem && formattedItemPrice(menuitem.price.value)}
                          </p>
                        </div>
                        <div className="flex w-full flex-col items-center justify-between gap-2 pl-3">
                          {item.modifiers.map((modifiers, index) => {
                            const modifier = items.find(
                              (item) => item._id === modifiers._idMenuItem,
                            )?.name;
                            console.log(modifier, "==mod");

                            return (
                              <div
                                className="flex w-full items-center justify-between"
                                key={index}
                              >
                                <p className="w-[80%] text-sm font-[300] tracking-[1.4px] text-menusecondary">
                                  {item?.quantity}&nbsp;&nbsp;{modifier}
                                </p>
                                <p className="text-sm font-[700] text-menuprimary">
                                  {getCurrencySymbol(modifiers.price.currency)}{" "}
                                  {formattedItemPrice(modifiers.price.value)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className={cn("flex w-full items-center justify-between pt-0",
                          item.modifiers.length > 0 && "pt-3"
                        )}>
                          <EditMenuItemDrawer item={item} index={index}>
                            <p className="font-[400] capitalize text-menuprimary">
                              Edit Item
                            </p>
                          </EditMenuItemDrawer>
                          <div className="flex items-center justify-center gap-2">
                            {item.quantity === 1 && (
                              <CartDeletePopup item={item}>
                                <button className="transition-all duration-150 text-menusecondary ease-out hover:scale-[1.2]">
                                  <Trash2 />
                                </button>
                              </CartDeletePopup>
                            )}
                            {item.quantity > 1 && (
                              <button
                                className="transition-all duration-150 ease-out text-menusecondary hover:scale-[1.2]"
                                onClick={() => {
                                  if (item.quantity <= 1) {
                                    return removeItem(
                                      item._idMenuItem,
                                      item.modifiers,
                                    );
                                  }
                                  updateItem(
                                    {
                                      ...item,
                                      quantity: item.quantity - 1,
                                    },
                                    index,
                                  );
                                }}
                              >
                                <CircleMinus />
                              </button>
                            )}
                            <p className="text-2xl font-[500] text-menuprimary">
                              {item.quantity}
                            </p>
                            <button
                              className="transition-all duration-150 text-menusecondary ease-out hover:scale-[1.2]"
                              onClick={() => {
                                updateItem(
                                  {
                                    ...item,
                                    quantity: item.quantity + 1,
                                  },
                                  index,
                                );
                              }}
                            >
                              <CirclePlus />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="w-full text-center text-menusecondary">
                  Your cart is empty! Add items to proceed
                </p>
              )}
            </div>

            {/* Footer */}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-40 flex w-full flex-col gap-4">
        <div className="flex w-full items-center justify-between px-4">
          <p className="text-lg font-bold capitalize tracking-[1px] text-menuprimary-foreground">
            your Total Bill
          </p>
          <p className="text-lg font-bold text-menuprimary-foreground">
            {"£"} {formattedItemPrice(totalAmount)}
          </p>
        </div>
        <Link
          className="flex h-14 w-full items-center justify-center bg-menuprimary uppercase tracking-[1px] text-menuforeground font-[700]"
          href="/checkout"
        >
          checkout.{"£"} {formattedItemPrice(totalAmount)}
        </Link>
      </div>
    </section >
  );
};

export default Cart;
