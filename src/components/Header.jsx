import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import logo from "../assets/cine.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("explore/movie");
    } else {
      navigate("explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="flex items-center justify-between">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <img src={logo} alt="" className="h-[70px] w-[80px]" />
          </div>
          <ul className="list-none hidden flex-none items-center md:flex font-chirp menuItems">
            <li
              onClick={() => navigationHandler("movie")}
              className="menuItem menuIt"
            >
              Movies
            </li>
            <li
              onClick={() => navigationHandler("tv")}
              className="menuItem menuIt"
            >
              Tv Shows
            </li>
            <li className="menuItem menuIt">
              <SearchIcon
                onClick={openSearch}
                className="mr-0 text-[18px] cursor-pointer hover:text-[#7393B3] transition-all duration-700 ease-in-out"
              />
            </li>
          </ul>

          <div className="flex md:hidden items-center gap-[20px] md:flex-none">
            <SearchIcon
              onClick={openSearch}
              className="text-[18px] text-[#FFD700] cursor-pointer"
            />
            {mobileMenu ? (
              <CloseIcon
                className="text-[18px] text-[#FFD700] cursor-pointer"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <MenuIcon
                className="text-[18px] text-[#FFD700] cursor-pointer"
                onClick={openMobileMenu}
              />
            )}
          </div>
        </div>
      </ContentWrapper>

      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
                type="text"
                placeholder="search for a movie ot tv show..."
                className="w-full h-[40px] bg-[#100C08] outline-none
              border-0 rounded-[30px] py-0 px-[15px] text-[14px] placeholder:text-[#7393B3]/80
              md:text-[20px] md:px-[30px] font-chirp text-[#7393B3] font-semibold"
              />
              <CloseIcon
                className="text-[20px] flex-shrink-0 ml-[10px] text-[#7393B3]/80 cursor-pointer"
                onClick={() => setShowSearch(false)}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
