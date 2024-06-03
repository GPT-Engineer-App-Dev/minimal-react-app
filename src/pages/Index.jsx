import { Box, Container, Flex, Text, VStack, Link, Spacer, Heading, SimpleGrid } from "@chakra-ui/react";

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
      
      <Box as="section" p={4} bg="gray.100" w="100%">
        <Heading as="h2" size="xl" mb={4}>Drinks Menu</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Coca Cola</Text>
            <Text>$1.50</Text>
          </Box>
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Pepsi</Text>
            <Text>$1.50</Text>
          </Box>
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Orange Juice</Text>
            <Text>$2.00</Text>
          </Box>
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Lemonade</Text>
            <Text>$2.00</Text>
          </Box>
          <Box p={4} bg="white" boxShadow="md" borderRadius="md">
            <Text fontSize="lg" fontWeight="bold">Water</Text>
            <Text>$1.00</Text>
          </Box>
        </SimpleGrid>
      </Box>
      
      <Flex as="footer" bg="blue.500" color="white" p={4} justifyContent="center">
        <Text>&copy; 2023 MyApp. All rights reserved.</Text>
      </Flex>
    </Container>
  );
};

export default Index;