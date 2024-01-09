import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { packingListTheme } from "./ChakraConfig.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={packingListTheme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
