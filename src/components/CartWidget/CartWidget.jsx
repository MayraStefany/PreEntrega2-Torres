import { Flex, Text, Badge } from "@chakra-ui/react"
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <Flex alignItems={"center"}>
            <FaShoppingCart size={24} style={{ marginRight: '8px' }} />
            <Text>1</Text>
        </Flex>
    );
};

export default CartWidget;