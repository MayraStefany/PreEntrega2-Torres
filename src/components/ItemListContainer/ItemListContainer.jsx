import { Box, Text, keyframes, Icon, Stack } from "@chakra-ui/react";
import { GiPopcorn } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";
import { FaBeer } from "react-icons/fa";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const ItemListContainer = ({ greeting }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgGradient="linear(to-r, teal.500, blue.500, purple.500, pink.500)"
            backgroundSize="200% 200%"
            animation={`${gradientAnimation} 10s ease infinite`}
            p={8}
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
        >
            <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
                mb={6}
            >
                {greeting}
            </Text>
            <Stack direction="row" spacing={8} mb={6}>
                <Icon as={GiPopcorn} w={10} h={10} color="white" />
                <Icon as={MdOutlineFastfood} w={10} h={10} color="white" />
                <Icon as={FaBeer} w={10} h={10} color="white" />
            </Stack>
            <Text fontSize={{ base: "md", md: "sm" }} color="white" mt={4}>
                Disfrutemos de unas palomitas
            </Text>
        </Box>
    );
};

export default ItemListContainer;