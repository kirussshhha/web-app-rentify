import { Button } from "@nextui-org/react";
import { TiLockOpen } from "react-icons/ti";
import LoginModal from "@/components/organisms/loginModal";
import { FC } from "react";
import { AuthButtonProps } from "./types";

const AuthButton: FC<AuthButtonProps> = ({ user, handleLogout }) => (
  <>
    {user ? (
      <Button
        onPress={handleLogout}
        className="text-md justify-start font-normal bg-transparent border-none focus:outline-none flex items-center gap-1 p-0"
      >
        <TiLockOpen size={25} className="hidden sm:flex"/>
        Выйти
      </Button>
    ) : (
      <LoginModal />
    )}
  </>
);

export default AuthButton;
