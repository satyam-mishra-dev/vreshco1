"use client";
import GradientBackground from "@/components/ui/background";

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-7xl mx-auto min-h-screen text-white p-6 flex flex-col md:flex-row gap-6">
          {/* Left Side: Shipping + Payment */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Shipping Address */}
            <div className="rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="bg-[#111] rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold">Shipping Address</h2>
                  <button className="text-sm text-blue-400 hover:underline">
                    Edit
                  </button>
                </div>
                <div className="bg-[#221f1f]">
                <p className="text-sm ml-2">
                  John Doe <br />
                  123 Main Street, Apt 4B <br />
                  New York, NY 10001 <br />
                  Phone: (555) 123-4567
                </p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="rounded-md p-[2px] bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="bg-[#111] rounded-md p-4">
                <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    "Credit/Debit Card",
                    "UPI",
                    "Cash on Delivery",
                    "Wallet",
                  ].map((method) => (
                    <div
                      key={method}
                      className="bg-black border border-gray-700 rounded-md px-4 py-2"
                    >
                      <span className="text-sm">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="w-full md:max-w-xs md:h-[406px] rounded-md p-[2px]  gradient-border">
            <div className="bg-[#111] rounded-md p-4 md:h-[400px]">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="text-sm space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>$99.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>$9.90</span>
                </div>
                <hr className="border-gray-700" />
                <div className="flex justify-between font-semibold text-white">
                  <span>Total</span>
                  <span>$113.90</span>
                </div>
              </div>
              <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
