import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FooterHeader() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-40 border-b border-b-gray-200 flex items-center justify-between">
      {/* Header text */}
      <div className="w-96 space-y-1.5">
        {/* Title */}
        <h3 className="text-2xl font-semibold">Join our newsletter fodr £10 offs</h3>

        {/* Description */}
        <p className="text-sm tracking-[-0.11px]">
          Register now to get latest updates on promotions & coupons. Don’t worry, we not spam!
        </p>
      </div>

      {/* Header input */}
      <div className="w-fit space-y-2.5">
        {/* Input */}
        <div className="flex w-440 items-center relative ">
          {/* Input */}
          <Input
            type="email"
            className="border w-440 h-12 rounded-lg placeholder:text-gray-500 font-medium placeholder:text-sm border-black"
            placeholder="Enter Your Email Address"
          />

          {/* Button */}
          <Button className="rounded-lg w-16 h-11 absolute right-0.5 bg-blue-500  hover:dark:bg-blue-700">
            <div className="flex justify-between items-center gap-2.5">
              <p>SEND</p>
            </div>
          </Button>
        </div>

        {/* Text */}
        <p className="text-xs text-gray-500 font-normal tracking-[-0.16px]">
          By subscribing you agree to our{" "}
          <span className="text-xs text-gray-500 font-semibold underline">
            Terms & Conditions and Privacy & Cookies Policy.
          </span>
        </p>
      </div>
    </div>
  );
}
