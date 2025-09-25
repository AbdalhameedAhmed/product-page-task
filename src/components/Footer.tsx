import {
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import logo from "@/assets/Logo.png";
export function Footer() {
  return (
    <footer className="bg-[#F2F2F2] pt-16 pb-4">
      <div className="container mx-auto w-[90%]">
        {/* Newsletter signup */}
        <div className="flex flex-col gap-12 border-b border-dashed border-[#A3A3A3] pb-12 md:flex-row md:items-start md:justify-between">
          <div>
            <img src={logo} alt="logo" className="mb-10 w-[170px]" />
            <div className="mb-8 flex justify-between border-b">
              <input
                type="email"
                placeholder="Get latest offers to your inbox"
                className="placeholder:text-base placeholder:text-[#787A7C] focus:border-none focus:outline-none"
              />
              <button className="rounded-lg bg-black px-4 py-2">
                <ChevronRight size={20} color="white" />
              </button>
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white">
                <Facebook
                  size={18}
                  className="text-gray-600 hover:text-gray-900"
                />
              </div>
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white">
                <Twitter
                  size={18}
                  className="text-gray-600 hover:text-gray-900"
                />
              </div>
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white">
                <Instagram
                  size={18}
                  className="text-gray-600 hover:text-gray-900"
                />
              </div>
              <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white">
                <Youtube
                  size={18}
                  className="text-gray-600 hover:text-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 gap-8 lg:w-1/2 lg:grid-cols-3">
            <div>
              <h4 className="mb-4 text-lg font-semibold">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Cart
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Information</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Frequently asked
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="pt-12 text-sm text-[#3E3E59]">
          © John Lewis plc 2001 - 2024
        </p>
      </div>
    </footer>
  );
}
