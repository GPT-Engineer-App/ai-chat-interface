import { Box, Button, Container, Input, Text, VStack, HStack, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const toast = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) {
      toast({
        title: "Message is empty",
        description: "Please type a message before sending.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate sending message to backend and receiving response
    const response = `Echo from backend: ${message}`;
    setResponses([...responses, { query: message, response }]);
    setMessage("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">
          AI Chat Interface
        </Text>
        <VStack spacing={4} w="full" alignItems="stretch">
          {responses.map((res, index) => (
            <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">You:</Text>
              <Text mb={2}>{res.query}</Text>
              <Text fontWeight="bold">AI:</Text>
              <Text>{res.response}</Text>
            </Box>
          ))}
        </VStack>
        <HStack w="full">
          <Input placeholder="Type your message here..." value={message} onChange={(e) => setMessage(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <Button colorScheme="blue" onClick={handleSendMessage} leftIcon={<FaPaperPlane />}>
            Send
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
