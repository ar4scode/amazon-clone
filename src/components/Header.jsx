import amazonDesktopLogo from "../assets/amazon-logo-white.png";
import amazonMobileLogo from "../assets/amazon-mobile-logo-white.png";
import cartIcon from "../assets/icons/cart-icon.png";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const Header = ({products}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-black top-0 flex items-center justify-between w-full p-1 md:p-3 fixed">
      {/* Logo */}
      <a href="" className="ml-2 md:ml-6">
        <img
          className="w-9 md:w-28"
          src={isMobile ? amazonMobileLogo : amazonDesktopLogo}
          alt="Amazon logo"
        />
      </a>

      {/* Search Bar */}
      <SearchBar products={products} />

      {/* User & Cart Section */}
      <div className="flex items-center space-x-4 pr-3">
        {/* Orders */}
        <a href="" className="text-amber-50 text-xs md:text-sm flex flex-col items-center">
          <p>Returns</p>
          <p className="font-semibold whitespace-nowrap text-xs pl-2">& Orders</p>
        </a>

        {/* Cart */}
        <a href="" className="text-amber-50 flex items-center gap-1 p-1">
          <img className="w-4 md:w-10" src={cartIcon} alt="Cart" />
          <span className="text-xs">Cart</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
