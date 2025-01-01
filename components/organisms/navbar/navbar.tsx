import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Button,
  Input,
  NavbarMenuToggle,
} from "@nextui-org/react";
import useUserStore from "@/stores/useUserStore";
import { RentifyLogo } from "@/components/atoms/rentifyLogo";
import { createClient } from "@/utils/supabase/client";
import { TiPlus } from "react-icons/ti";
import { TiFilter } from "react-icons/ti";
import NavMenu from "@/components/molecules/navMenu";
import AuthButton from "@/components/molecules/authButton";
import { NavbarState } from "./types";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState<NavbarState["isMenuOpen"]>(false);
  const { user, clearUser } = useUserStore();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    clearUser();
  };

  return (
    <>
      <div className="w-full justify-between items-center px-6 max-w-5xl mx-auto mt-2 hidden sm:flex">
        <div className="font-roboto flex gap-4">
          <Link href="#" color="foreground" className="text-sm">
            О нас
          </Link>
          <Button className="text-sm font-normal bg-transparent border-none focus:outline-none flex items-center gap-1 p-0">
            <TiFilter size={25} />
            Фильтр
          </Button>
        </div>
        <div className="flex gap-4">
          <Button className="text-sm font-normal bg-transparent border-none focus:outline-none flex items-center gap-1 p-0">
            <TiPlus size={25} />
            Разместить объявление
          </Button>
          <AuthButton user={user} handleLogout={handleLogout} />
        </div>
      </div>
      <Navbar isBordered isBlurred={false} onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href="/" color="foreground">
              <RentifyLogo />
              <p className="font-bold text-inherit text-lg ml-2 hidden sm:flex">
                Rentify
              </p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <Input
            isClearable
            placeholder="Поиск объявлений"
            className="flex-grow w-full md:w-72"
            variant="flat"
            aria-label="Search"
          />
          <Button color="secondary">Найти</Button>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden md:flex">
          <Button color="secondary">Категории</Button>
        </NavbarContent>
        <NavMenu user={user} handleLogout={handleLogout} />
      </Navbar>
    </>
  );
};

export default NavBar;
