import appleLogo from "../shared/assets/images/apple.svg";
import epicGamesLogo from "../shared/assets/images/epicgames.png";
import facebookLogo from "../shared/assets/images/facebook.svg";
import googleLogo from "../shared/assets/images/google.png";
import nintendoLogo from "../shared/assets/images/nintendo.svg";
import playstationLogo from "../shared/assets/images/playstation.svg";
import steamLogo from "../shared/assets/images/steam.svg";
import xboxLogo from "../shared/assets/images/xbox.svg";

import {
  Flex,
  Text,
  Heading,
  Stack,
  Image,
  Center,
  Link,
} from "@chakra-ui/react";
import { LoginProvider } from "../shared/components/LoginProvider";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={470}
        h="100%"
        maxH={800}
        bg="#202020"
        p={8}
        borderRadius={8}
        flexDir="column"
      >
        <Center>
          <Image
            src={epicGamesLogo}
            alt="Logo"
            width={50}
            height={50}
            marginTop={15}
          />
        </Center>

        <Center>
          <Heading fontSize={18} fontWeight="bold" marginTop={35}>
            <Text>
              Escolha como você gostaria de fazer <Center>login</Center>
            </Text>
          </Heading>
        </Center>

        <Flex marginTop={5}>
          <Stack spacing="2.5">
            <LoginProvider
              img={epicGamesLogo}
              provider="e-mail"
              bgColor="rgb(53, 53, 53)"
            />

            <LoginProvider
              img={facebookLogo}
              provider="facebook"
              bgColor="rgb(50, 97, 163)"
            />

            <LoginProvider img={googleLogo} provider="google" bgColor="#FFF" />

            <LoginProvider
              img={xboxLogo}
              provider="xbox live"
              bgColor="rgb(2, 125, 0);"
            />

            <LoginProvider
              img={playstationLogo}
              provider="a conta para a PlayStation™Network"
              bgColor="rgb(0, 99, 197)"
            />

            <LoginProvider
              img={nintendoLogo}
              provider="a conta do nintendo"
              bgColor="rgb(233, 0, 0)"
            />

            <LoginProvider
              img={steamLogo}
              provider="steam"
              bgColor="rgb(20, 92, 143)"
            />

            <LoginProvider img={appleLogo} provider="apple" bgColor="#FFF" />
          </Stack>
        </Flex>

        <Center>
          <Text color="#FFFFFFB8" marginTop={5}>
            Possui uma conta da Epic Games?{" "}
            <Link color="#FFF" textDecoration="underline">
              Entrar
            </Link>
          </Text>
        </Center>
      </Flex>
    </Flex>
  );
}
