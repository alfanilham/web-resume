import {
  Flex,
  Image,
  Text,
  Spacer,
  Button,
  Card,
  CardBody,
  SimpleGrid,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  Download,
  Building,
  MapPin,
  CalendarDays,
  BugOff,
  ServerOff,
  SquareCode,
  TerminalSquare,
  SearchCode,
  Swords,
  Shield,
  Network,
  CheckCircle2,
} from "lucide-react";
import { useEffect, useState } from "react";
import pict from "../assets/avatar.jpeg";
import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.jpeg";
import p4 from "../assets/p-4.jpeg";
import p5 from "../assets/p-5.png";
import p6 from "../assets/p-6.png";
import p7 from "../assets/p-7.png";
import p8 from "../assets/p-8.png";
import p9 from "../assets/p-9.png";
import p10 from "../assets/p-10.png";
import "@fontsource/poppins";
import { Link } from "react-router-dom";
import "./pulse.css";

export default function Leaderboard() {
  return (
    <Flex fontFamily="Poppins" justify="center" bg="#F3F6F7">
      <Flex
        direction="column"
        width={{ base: "full", md: "90%", lg: "57rem" }}
        h="full"
        my={{ base: 0, md: 8 }}
      >
        {/* <Flex w="50%"></Flex> */}
        <Flex direction="column">
          <Flex
            // mt={3}
            // ml={3}
            py={{ base: 2, md: 8 }}
            px={{ base: 4, md: 16 }}
            gap={10}
            direction={{ base: "column", md: "row" }}
            bg="blue.400"
            rounded={{ base: 0, md: "2xl" }}
            color="white"
            boxShadow="10px 10px 13px lightblue"
            justify={{ base: "center", md: "space-between" }}
            h={{ base: "50vh", md: "200px" }}
          >
            <Flex align={{ base: "left", md: "center" }} justify="center">
              <Image
                src={pict}
                w={{ base: "150px", md: "150px" }}
                h={{ base: "150px", md: "150px" }}
                borderRadius="50%"
                boxShadow="5px 5px 15px black"
              ></Image>
            </Flex>
            <Flex direction="column" gap={3}>
              <Flex
                direction="column"
                justify="center"
                textAlign={{ base: "center", md: "end" }}
                w="full"
              >
                <Text fontSize="2xl" fontWeight={700}>
                  Alfan Ilham Wahyudi
                </Text>
                <Text fontWeight={500}>Cyber Security</Text>
              </Flex>
              <Flex
                fontSize="13px"
                direction="column"
                justify="center"
                align={{ base: "center", md: "end" }}
                fontWeight={500}
              >
                <Flex direction="row" gap={4} justify="center" align="end">
                  <Link to="mailto:smartfhand@gmail.com">
                    <Mail size={40} />{" "}
                    {/* <Text display={{ base: "none", lg: "block" }}>
                        smartfhand@gmail.com
                      </Text> */}
                  </Link>
                  <Link
                    to="https://www.linkedin.com/in/alfan-ilham-wahyudi"
                    target="_blank"
                  >
                    <Linkedin size={40} />{" "}
                    {/* <Text display={{ base: "none", lg: "block" }}>
                        alfan-ilham-wahyudi
                      </Text> */}
                  </Link>
                  <Link to="https://github.com/alfanilham" target="_blank">
                    <Github size={40} />{" "}
                    {/* <Text display={{ base: "none", lg: "block" }}>
                        alfan-ilham-wahyudi
                      </Text> */}
                  </Link>
                  <Link
                    to="https://www.instagram.com/alfanilhamw"
                    target="_blank"
                  >
                    <Instagram size={40} />{" "}
                    {/* <Text display={{ base: "none", lg: "block" }}>
                        alfanilhamw
                      </Text> */}
                  </Link>
                </Flex>
                <Flex display={{ base: "none", md: "block" }}>
                  <a href="/ALFAN ILHAM WAHYUDI.pdf">
                    <Button
                      borderRadius="20px"
                      mt={8}
                      ml={-52}
                      leftIcon={<Download fontSize="14px" />}
                      bg="white"
                      color="blue.500"
                      border="2px"
                      borderColor="blue.500"
                      fontSize="14px"
                      p={5}
                      position="absolute"
                    >
                      Download Resume
                    </Button>
                  </a>
                </Flex>
                <Flex display={{ base: "block", md: "none" }}>
                  <a href="/ALFAN ILHAM WAHYUDI.pdf">
                    <Button
                      rounded="50%"
                      bg="white"
                      color="blue.500"
                      border="2px"
                      borderColor="blue.500"
                      fontSize="14px"
                      position="absolute"
                      h={14}
                      w={14}
                      top={2}
                      right={3}
                      align="center"
                      justify="center"
                    >
                      <Flex>
                        <Download fontSize="14px" />
                      </Flex>
                    </Button>
                  </a>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          width="full"
          direction="column"
          mt={{ base: 0, md: 10 }}
          rounded={{ base: 0, md: "2xl" }}
          gap={8}
          p={{ base: 8, md: 16 }}
          bg="white"
          boxShadow="3px 3px 10px silver"
        >
          <Flex direction="column" gap={6}>
            <Text fontSize="2xl" fontWeight={600}>
              About me
            </Text>
            <Text align="justify">
              I am a Penetration Tester with 4+ years experience in the field of
              Cyber Security Engineer. Always interested in how to be a hacker,
              I started to study Penetration Test by hobby and next make money
              from Bug Bounty. I currently work as an IT Security and mainly
              work with OWASP TOP 10.
            </Text>
          </Flex>
          <Flex
            // h="full"
            direction="column"
            gap={6}
          >
            <Text fontSize="2xl" fontWeight={600}>
              Skills
            </Text>
            <SimpleGrid
              spacing={5}
              templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
            >
              <Card>
                <CardBody>
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    color="grey"
                    gap={3}
                  >
                    <BugOff size={55} />
                    <Text fontSize="sm" fontWeight={500} textAlign="center">
                      Penetration Testing
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    color="grey"
                    gap={3}
                  >
                    <ServerOff size={55} />
                    <Text fontSize="sm" fontWeight={500} textAlign="center">
                      Red Teaming
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    color="grey"
                    gap={3}
                  >
                    <SearchCode size={55} />
                    <Text fontSize="sm" fontWeight={500} textAlign="center">
                      Reverse Engineering
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    color="grey"
                    gap={3}
                  >
                    <Swords size={55} />
                    <Text fontSize="sm" fontWeight={500} textAlign="center">
                      Metasploit
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    color="grey"
                    gap={3}
                  >
                    <SquareCode size={55} />
                    <Text fontSize="sm" fontWeight={500} textAlign="center">
                      Frontend Dev
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Flex
                    direction="column"
                    justify="center"
                    align="center"
                    color="grey"
                    gap={3}
                  >
                    <TerminalSquare size={55} />
                    <Text fontSize="sm" fontWeight={500} textAlign="center">
                      DevOps
                    </Text>
                  </Flex>
                </CardBody>
              </Card>
            </SimpleGrid>
          </Flex>
          <Text fontSize="2xl" fontWeight={600} mt={2}>
            Work Experiences
          </Text>
          <Flex direction="row">
            <Flex
              borderLeft="4px solid grey"
              position="absolute"
              ml={2}
              height={{ base: "70rem", md: "46rem" }}
              mt={6}
              direction="column"
              gap={{ base: 175, md: 137 }}
            >
              {/* <span className="circle circle2"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
              <span className="circle circle3"></span> */}
            </Flex>
            <Flex w="full" direction="column" gap={2} pl={{ base: 10, md: 14 }}>
              <Flex w="full" direction="column">
                <Flex className="live" ml={{ base: "-44px", md: "-60px" }} />
                <Flex direction={{ base: "column", md: "row" }} gap={2} mt={-8}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>
                        PT. AEGIS EKAKARSA GARUDA INFORMATIKA
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Shield size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Cyber Security Engineer
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={-1.5}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Barat
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Sep 2023 - Present
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <Text fontSize="sm" fontWeight={500}>
                    Penetration Testing
                  </Text>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Web Application
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Mobile Application
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Infrastructure
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>PT. MANDALA MULTIFINANCE</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Shield size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        IT Security
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 0 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Pusat
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Oct 2021 - Jul 2021
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap={{ base: 0, md: 6 }}
                  direction={{ base: "column", md: "row" }}
                  mt={1}
                >
                  <Flex direction="column" p={1}>
                    <Text fontSize="sm" fontWeight={500}>
                      Penetration Testing
                    </Text>
                    <List fontSize="sm">
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Web Application
                        </Flex>
                      </ListItem>
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Mobile Application
                        </Flex>
                      </ListItem>
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Infrastructure
                        </Flex>
                      </ListItem>
                    </List>
                  </Flex>
                  <Flex direction="column" p={1}>
                    <Text fontSize="sm" fontWeight={500}>
                      Hardening
                    </Text>
                    <List fontSize="sm">
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          CentOS
                        </Flex>
                      </ListItem>
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Ubuntu
                        </Flex>
                      </ListItem>
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Windows
                        </Flex>
                      </ListItem>
                    </List>
                  </Flex>
                  <Flex direction="column" p={1}>
                    <Text fontSize="sm" fontWeight={500}>
                      Monitoring
                    </Text>
                    <List fontSize="sm">
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          SOC Radar
                        </Flex>
                      </ListItem>
                    </List>
                  </Flex>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>MNC GROUP</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Shield size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        IT Security
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 1 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Pusat
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jul 2021 - Jun 2022
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <Text fontSize="sm" fontWeight={500}>
                    Penetration Testing
                  </Text>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Web Application
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Mobile Application
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>PT. BANGUN INSAN REKSA UTAMA</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <SquareCode size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Software Engineer
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 1 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Pusat
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Mar 2020 - Aug 2020
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <Text fontSize="sm" fontWeight={500}>
                    Web Development
                  </Text>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        HTML
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        CSS
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        PHP
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>
                        Biro Teknologi dan Informasi - Universitas Muhammadiyah
                        Tangerang
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Network size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Staff IT
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 1 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Tangerang
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Sep 2020 - Mar 2021
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <Text fontSize="sm" fontWeight={500}>
                    Networking
                  </Text>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Installation
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Trobleshoot
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
            </Flex>
          </Flex>
          <Text fontSize="2xl" fontWeight={600} mt={2}>
            Projects
          </Text>
          <Flex direction="row">
            <Flex
              borderLeft="4px solid grey"
              position="absolute"
              ml={2}
              height={{ base: "36rem", md: "26rem" }}
              mt={6}
              direction="column"
              gap={{ base: 175, md: 137 }}
            >
              {/* <span className="circle circle2"></span>
              <span className="circle circle2"></span>
              <span className="circle circle3"></span>
              <span className="circle circle3"></span> */}
            </Flex>
            <Flex w="full" direction="column" gap={2} pl={{ base: 10, md: 14 }}>
              <Flex w="full" direction="column">
                <Flex className="live" ml={{ base: "-44px", md: "-60px" }} />
                <Flex direction={{ base: "column", md: "row" }} gap={2} mt={-8}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>PROFDITO</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <SquareCode size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Lead Development Team
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={-1.5}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Selatan
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Aug 2022 - Present
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Leadership
                      </Flex>
                    </ListItem>
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        DevOps
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>PT. KOGELAHAR INDONUSA</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Shield size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Cyber Security Consultant
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 0 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Medan
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Oct 2022 - Dec 2022
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  gap={{ base: 0, md: 6 }}
                  direction={{ base: "column", md: "row" }}
                  mt={1}
                >
                  <Flex direction="column" p={1}>
                    <List fontSize="sm">
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Improve Security Posture
                        </Flex>
                      </ListItem>
                      <ListItem>
                        <Flex align="center">
                          <ListIcon
                            size={20}
                            as={CheckCircle2}
                            color="green.500"
                          />
                          Penetration Testing
                        </Flex>
                      </ListItem>
                    </List>
                  </Flex>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>PT. SEKOLAH SAHAM INDONESIA</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Shield size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Cyber Security Consultant
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 1 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Barat
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Aug 2022 - Sep 2022
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <Text fontSize="sm" fontWeight={500}>
                    Penetration Testing
                  </Text>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Web Application
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
              <Flex className="circle" ml={{ base: "-44px", md: "-60px" }} />
              <Flex w="full" direction="column" mt={-8}>
                <Flex direction={{ base: "column", md: "row" }} gap={2}>
                  <Flex w="full" h="full" direction="column">
                    <Flex align="center" gap={2}>
                      {/* <span className="live"></span> */}
                      <Text fontWeight={500}>PT. BANGUN INSAN REKSA UTAMA</Text>
                    </Flex>
                    <Flex gap={1} align="center" w="full">
                      <Shield size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Cyber Security Consultant
                      </Text>
                    </Flex>
                  </Flex>

                  <Flex
                    w="full"
                    direction="column"
                    mt={{ base: -1.5, md: 1 }}
                    align={{ base: "flex-start", md: "end" }}
                  >
                    <Flex gap={1} align="center">
                      <MapPin size={20} color="grey" />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jakarta Pusat
                      </Text>
                    </Flex>
                    <Flex gap={1} align="center">
                      <CalendarDays size={20} color="grey" />
                      <Spacer />
                      <Text fontWeight={400} color="grey" fontSize="sm">
                        Jul 2022 - Aug 2022
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex direction="column" p={1}>
                  <Text fontSize="sm" fontWeight={500}>
                    Penetration Testing
                  </Text>
                  <List fontSize="sm">
                    <ListItem>
                      <Flex align="center">
                        <ListIcon
                          size={20}
                          as={CheckCircle2}
                          color="green.500"
                        />
                        Web Application
                      </Flex>
                    </ListItem>
                  </List>
                </Flex>
              </Flex>
              <hr />
            </Flex>
          </Flex>
          <Text fontSize="2xl" fontWeight={600} mt={2}>
            Certificates and Licenses
          </Text>
          <Flex gap={5} w="full" overflowX="auto">
            <Image src={p2} w="500px" borderRadius="15px" />
            <Image src={p1} w="500px" borderRadius="15px" />
            <Image src={p3} w="500px" borderRadius="15px" />
            <Image src={p4} w="500px" borderRadius="15px" />
            <Image src={p5} w="500px" borderRadius="15px" />
            <Image src={p6} w="500px" borderRadius="15px" />
            <Image src={p7} w="500px" borderRadius="15px" />
            <Image src={p8} w="500px" borderRadius="15px" />
            <Image src={p9} w="500px" borderRadius="15px" />
            <Image src={p10} w="500px" borderRadius="15px" />
          </Flex>
        </Flex>
        <Flex align="center" justify="center" mt={4} mb={{ base: 4, md: -4 }}>
          <Link to="https://github.com/alfanilham/web-resume" target="_blank">
            <Text align="center">
              {new Date().getFullYear()}© Alfan Ilham Wahyudi
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
