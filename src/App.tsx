import { VStack } from "@chakra-ui/react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
// import { useState } from "react";

function App() {
	// const [travelItems, setTravelItems] = useState([])
	return (
		<VStack gap={0} height="100vh">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</VStack>
	);
}

export default App;
