import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import api from "./../config/api";
import { v4 as uuidv4 } from "uuid";

export default function modalAdd({ isOpen, onClose, setRefreshTable }) {
  const [createUser, setCreateUser] = useState({
    id: uuidv4(),
    name: "",
  });

  const onChange = (e) => {
    setCreateUser((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await api.post("users", createUser);
      onClose();
      setRefreshTable(true);
      setCreateUser({
        id: uuidv4(),
        name: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={630}>Tambah Pemain</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" gap={2}>
              <form id="createUserForm" onSubmit={onSubmit}>
                <FormControl isRequired>
                  <FormLabel>Nama</FormLabel>
                  <Input
                    name="name"
                    type="text"
                    value={createUser.name}
                    placeholder="Masukkan Nama Lengkap"
                    onChange={onChange}
                  />
                </FormControl>
              </form>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              form="createUserForm"
              type="submit"
              colorScheme="blue"
              mr={3}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
