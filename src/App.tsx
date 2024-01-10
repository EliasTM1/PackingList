import { VStack } from "@chakra-ui/react";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";
import { TravelITem } from "./Mock";

function App() {
	const [travelItems, setTravelItems] = useState<TravelITem[]>([])

	function handleAddItems (item : TravelITem) {
		console.log(travelItems)
		setTravelItems((items) => [...items, item])
	}

	function deleteItem(itemId : number) {
		setTravelItems(items =>  items.filter(item => itemId !== item.id))
	}

	function setItemToPacked(itemId : number) {
		console.log(itemId, "ID")
		setTravelItems(items => items.map(item => itemId === item.id ? {...item , packed: !item.packed}: item ))
	}

	function handleDeleteItems() {
		setTravelItems([])
	}

	return (
		<VStack gap={0} height="100vh">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList onDeleteItems={handleDeleteItems} items={travelItems} deleteItem={deleteItem} crossItem={setItemToPacked}/>
			<Stats items={travelItems}/>
		</VStack>
	);
}

export default App;
