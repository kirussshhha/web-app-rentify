import React, { useState } from "react";
import {
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import useUserStore from "@/stores/useUserStore";
import { createClient } from "@/utils/supabase/client";
import { TiLockClosed } from "react-icons/ti";
import { IoMail } from "react-icons/io5";

const LoginModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { setUser } = useUserStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const supabase = createClient();

  const handleLogin = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      setUser(data.user);
      onOpenChange();
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="text-lg sm:text-sm flex font-normal bg-transparent border-none focus:outline-none p-0 gap-1"
      >
        <TiLockClosed size={25} className="hidden sm:flex" />
        Вход и регистрация
      </Button>
      <Modal
        size="md"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex justify-center">
            Вход и регистрация
          </ModalHeader>
          <ModalBody className="gap-1">
            <Input
              name="email"
              value={email}
              isInvalid={isError}
              onChange={(e) => setEmail(e.target.value)}
              endContent={<IoMail className="text-gray-500" size={30} />}
              className="h-16"
              size="lg"
              placeholder="Введите email"
              variant="bordered"
              errorMessage={"Неверный email"}
            />
            <Input
              name="password"
              value={password}
              isInvalid={isError}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              endContent={<TiLockClosed className="text-gray-500" size={35} />}
              className="h-16"
              size="lg"
              placeholder="Введите пароль"
              variant="bordered"
              errorMessage={"Неверный пароль"}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onPress={handleLogin}
              disabled={isLoading}
              isLoading={isLoading}
            >
              Войти
            </Button>
            <Button color="danger" onPress={onOpenChange}>
              Отмена
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
