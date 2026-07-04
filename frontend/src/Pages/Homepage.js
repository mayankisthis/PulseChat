import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { ChatState } from "../Context/ChatProvider";

function Homepage() {
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState(0);
  const { setUser } = ChatState();

  useEffect(() => {
    const verifySession = async () => {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        try {
          const user = JSON.parse(userInfo);
          if (user && user.token) {
            const config = {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            };
            await axios.get("/api/user/validate", config);
            // Session is valid, redirect to chats
            history.push("/chats");
            return;
          }
        } catch (error) {
          console.error("Session verification failed", error);
        }
      }
      // If we reach here, either there is no userInfo or it's invalid
      localStorage.removeItem("userInfo");
      localStorage.clear();
      sessionStorage.clear();
      setUser(null);
    };

    verifySession();
  }, [history, setUser]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          PulseChat
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup onSignupSuccess={() => setTabIndex(0)} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
