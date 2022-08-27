import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface LoginProviderProps {
  img: string;
  provider: string;
  bgColor: string;
}

export const LoginProvider = ({
  img,
  provider,
  bgColor,
}: LoginProviderProps) => {
  return (
    <Flex
      as="div"
      borderRadius={4}
      backgroundColor="#2B2B2B"
      _hover={{ backgroundColor: "#494949", cursor: "pointer" }}
      width="100%"
      maxW={400}
      maxH={50}
      display="flex"
      alignItems="center"
    >
      <Box
        height={50}
        minWidth={85}
        borderRadius={4}
        transition="all 0.2s ease 0s"
        maxWidth="100%"
        display="inline-flex"
        verticalAlign="middle"
        position="relative"
        webkit-box-pack="center"
        webkit-box-align="center"
        justifyContent="center"
        alignItems="center"
        backgroundColor={bgColor}
      >
        <Image src={img} alt="Logo" width={25} height={25} />
      </Box>
      <Text marginLeft={25} fontSize={12} fontWeight="bold">
        INSCREVER-SE COM {provider.toUpperCase()}
      </Text>
    </Flex>
  );
};
