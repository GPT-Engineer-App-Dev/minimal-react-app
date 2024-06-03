import { Box, Container, Flex, Text, VStack, Link, Spacer } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        <Flex>
          <Link href="#" p={2}>Home</Link>
          <Link href="#" p={2}>About</Link>
          <Link href="#" p={2}>Contact</Link>
        </Flex>
      </Flex>
      
      <Box as="main" flex="1" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Box>
      
      <Flex as="footer" bg="blue.500" color="white" p={4} justifyContent="center">
        <Text>&copy; 2023 MyApp. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;