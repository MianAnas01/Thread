import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Link to={"/mark"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"aqto"}>Visit Profile Page</Button>
      </Flex>
    </Link>
  );
};
export default Homepage;
