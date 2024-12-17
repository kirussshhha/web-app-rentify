import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Button,
  Input,
} from "@nextui-org/react";

export const RentifyLogo = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z"
        fill="black"
      />
    </svg>
  );
};

export default function NavBar() {
  return (
    <>
      <div className="w-full flex justify-between items-center px-7 max-w-5xl mt-3 mx-auto">
        <div className="font-roboto flex gap-4">
          <Link href="#" color="foreground" className="text-sm">
            О нас
          </Link>
          <button className="text-sm">Локейшн</button>
          <button className="text-sm">Фильтр</button>
        </div>

        <div className="flex gap-4">
          <button className="text-sm flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 7V1h1v6h6v1H9v6H8V8H2V7h6z" />
            </svg>
            Разместить объявление
          </button>
          <button className="text-sm flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <rect x="4" y="8" width="8" height="6" rx="1" />
              <path d="M5 8V5a3 3 0 0 1 6 0v3" />
            </svg>
            Вход и регистрация
          </button>
        </div>
      </div>

      <Navbar isBordered>
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link href="/" color="foreground">
              <RentifyLogo />
              <p className="font-bold text-inherit text-lg ml-2">Rentify</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center" className="hidden md:flex">
          <Input
            placeholder="Искать объявления"
            className="w-72"
            variant="flat"
            aria-label="Search"
          />
          <Button color="secondary">Найти</Button>
        </NavbarContent>

        <NavbarContent justify="end">
          <Button color="secondary">Категории</Button>
        </NavbarContent>
      </Navbar>
    </>
  );
}
