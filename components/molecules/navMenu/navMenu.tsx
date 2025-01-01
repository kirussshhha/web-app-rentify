import { Button, Link, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { FC } from "react";
import { NavMenuProps } from "./types";
import AuthButton from "../authButton";

const NavMenu: FC<NavMenuProps> = ({ user, handleLogout }) => {
  return (
    <NavbarMenu className="text-left">
      <NavbarMenuItem>
        <Button className="text-md font-normal bg-transparent border-none focus:outline-none p-0">
          Разместить объявление
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Button className="text-md font-normal bg-transparent border-none focus:outline-none p-0">
          Категории
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Button className="text-md justify-start font-normal bg-transparent border-none focus:outline-none p-0">
          Фильтр
        </Button>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link href="#" color="foreground" className="text-md">
          О нас
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <AuthButton user={user} handleLogout={handleLogout} />
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default NavMenu;
