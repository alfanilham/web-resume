import {
  Flex,
  Image,
  Text,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Editable,
  EditableInput,
  EditablePreview,
} from "@chakra-ui/react";
import { BarChartHorizontalBig, User2, Dices } from "lucide-react";
import { useEffect, useState } from "react";
import as from "../assets/avatar.jpeg";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

export default function Leaderboard() {
  return (
    <Flex direction="row" fontFamily="Poppins">
      <Flex width="18%" height="100vh" bg="#F3F6F7" direction="column" p={2}>
        <Flex w="full" height="17vh" justify="center" align="center">
          <Image src={as} w="100px"></Image>
        </Flex>
        <Flex direction="column" w="full" h="full" p={9} gap={10}>
          <Link to="/">
            <Flex gap={4} fontSize="17px" color="#B7BBC5">
              <BarChartHorizontalBig />{" "}
              <Text fontWeight={600}>Leaderboard</Text>
            </Flex>
          </Link>
          {/* <Flex gap={4} fontSize="17px" color="#B7BBC5">
              <User2 /> <Text fontWeight={600}>Player</Text>
            </Flex> */}
          <Flex gap={4} fontSize="17px">
            <Dices /> <Text fontWeight={600}>Set</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex width="82%" p={20} pt={12} direction="column" gap={12}>
        <Text fontSize="4xl" fontWeight={600}>
          Set Game
        </Text>
        <Flex gap={10} fontWeight={600} mt="20px">
          <Tabs position="relative" variant="unstyled" w="full">
            <TabList color="#B7BBC5">
              <Tab _selected={{ fontWeight: 600, color: "black" }}>Total</Tab>
              <Tab _selected={{ fontWeight: 600, color: "black" }}>Game 1</Tab>
              <Tab _selected={{ fontWeight: 600, color: "black" }}>
                Tambah Game
              </Tab>
            </TabList>

            <TabPanels w="full" mt={6}>
              <TabPanel w="full">
                <Flex w="full" direction="column" gap={6}>
                  <Flex
                    bg="linear-gradient(to right, #ED4A4E , #F27275)"
                    rounded={10}
                    w="90%"
                    color="white"
                    p={3}
                  >
                    <Flex
                      fontSize="5xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      1
                    </Flex>
                    <Flex direction="column" w="48%" justify="center">
                      <Flex fontSize="20px" fontWeight={600}>
                        Leon Anaknya Mas Olin
                      </Flex>
                      <Flex fontSize="15px">Total Mati</Flex>
                      <Flex fontSize="15px">Total Ngocok</Flex>
                    </Flex>
                    <Flex
                      fontSize="4xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      0/-200
                    </Flex>
                  </Flex>
                  <Flex
                    bg="linear-gradient(to right, #4666F5 , #A5B4F5)"
                    rounded={10}
                    w="90%"
                    color="white"
                    p={3}
                  >
                    <Flex
                      fontSize="5xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      2
                    </Flex>
                    <Flex direction="column" w="48%" justify="center">
                      <Flex fontSize="20px" fontWeight={600}>
                        Jolly yang Hilang
                      </Flex>
                      <Flex fontSize="15px">Total Mati</Flex>
                      <Flex fontSize="15px">Total Ngocok</Flex>
                    </Flex>
                    <Flex
                      fontSize="4xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      0/-200
                    </Flex>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex w="full" direction="column" gap={6}>
                  <Flex
                    bg="linear-gradient(to right, #ED4A4E , #F27275)"
                    rounded={10}
                    w="90%"
                    color="white"
                    p={3}
                  >
                    <Flex
                      fontSize="5xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      1
                    </Flex>
                    <Flex direction="column" w="48%" justify="center">
                      <Flex fontSize="20px" fontWeight={600}>
                        Leon Anaknya Mas Olin
                      </Flex>
                      <Flex fontSize="15px">Total Mati</Flex>
                      <Flex fontSize="15px">Total Ngocok</Flex>
                    </Flex>
                    <Flex
                      fontSize="4xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      <Editable defaultValue="-15" textAlign="center">
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Flex>
                  </Flex>
                  <Flex
                    bg="linear-gradient(to right, #4666F5 , #A5B4F5)"
                    rounded={10}
                    w="90%"
                    color="white"
                    p={3}
                  >
                    <Flex
                      fontSize="5xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      2
                    </Flex>
                    <Flex direction="column" w="48%" justify="center">
                      <Flex fontSize="20px" fontWeight={600}>
                        Jolly yang Hilang
                      </Flex>
                      <Flex fontSize="15px">Total Mati</Flex>
                      <Flex fontSize="15px">Total Ngocok</Flex>
                    </Flex>
                    <Flex
                      fontSize="4xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      <Editable defaultValue="-20" textAlign="center">
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Flex>
                  </Flex>
                  <Flex w="90%" justify="flex-end">
                    <Button w="fit-content" bgColor="blue.500" color="white">
                      Simpan
                    </Button>
                  </Flex>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex w="full" direction="column" gap={6}>
                  <Flex
                    bg="linear-gradient(to right, #ED4A4E , #F27275)"
                    rounded={10}
                    w="90%"
                    color="white"
                    p={3}
                  >
                    <Flex
                      fontSize="5xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      1
                    </Flex>
                    <Flex direction="column" w="48%" justify="center">
                      <Flex fontSize="20px" fontWeight={600}>
                        Leon Anaknya Mas Olin
                      </Flex>
                      <Flex fontSize="15px">Total Mati</Flex>
                      <Flex fontSize="15px">Total Ngocok</Flex>
                    </Flex>
                    <Flex
                      fontSize="4xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      <Editable defaultValue="0" textAlign="center">
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Flex>
                  </Flex>
                  <Flex
                    bg="linear-gradient(to right, #4666F5 , #A5B4F5)"
                    rounded={10}
                    w="90%"
                    color="white"
                    p={3}
                  >
                    <Flex
                      fontSize="5xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      2
                    </Flex>
                    <Flex direction="column" w="48%" justify="center">
                      <Flex fontSize="20px" fontWeight={600}>
                        Jolly yang Hilang
                      </Flex>
                      <Flex fontSize="15px">Total Mati</Flex>
                      <Flex fontSize="15px">Total Ngocok</Flex>
                    </Flex>
                    <Flex
                      fontSize="4xl"
                      w="12%"
                      align="center"
                      justify="center"
                      fontWeight={600}
                    >
                      <Editable defaultValue="0" textAlign="center">
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Flex>
                  </Flex>
                  <Flex w="90%" justify="flex-end">
                    <Button w="fit-content" bgColor="blue.500" color="white">
                      Simpan
                    </Button>
                  </Flex>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </Flex>
  );
}
