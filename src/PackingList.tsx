import { Button, HStack, Select, VStack } from "@chakra-ui/react";
import Item from "./Item";
import { TravelITem } from "./Mock";
import { useState } from "react";

type SortingType = "input" | "description" | "packed";

type PackingListProps = {
	items: TravelITem[];
	deleteItem: (item: number) => void;
	crossItem: (item: number) => void;
	onDeleteItems: () => void;
};

const PackingList = ({ items, deleteItem, crossItem, onDeleteItems }: PackingListProps) => {
	const [sortBy, setSortBy] = useState<SortingType>("description");
	let sortedItems;

	if (sortBy === "input") sortedItems = items;

	if (sortBy === "description") {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}

	if (sortBy === "packed") {
		sortedItems = items
			.slice()
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	}

	return (
		<VStack
			width='100%'
			height='100%'
			backgroundColor='packColors.packDarkBrown'
			justifyContent='space-between'
		>
			<HStack flexWrap='wrap' marginTop='2rem' justifyContent='center' gap={7}>
				{sortedItems?.map(
					({ description, id, packed, quantity }: TravelITem) => (
						<Item
							key={id}
							id={id}
							description={description}
							packed={packed}
							quantity={quantity}
							deleteItem={deleteItem}
							crossItem={crossItem}
						/>
					)
				)}
			</HStack>
			<HStack mb='2rem'>
				<Select
					
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value as SortingType)}
					borderRadius='15px'
					backgroundColor='packColors.packBeige'
				>
					<option value='input'>Sort by input order</option>
					<option value='description'>Sort by description</option>
					<option value='packed'>Sort by packed status</option>
				</Select>
				<Button
					borderRadius='15px'
					backgroundColor='packColors.packBlue'
					paddingInline='1.5rem'
					onClick={onDeleteItems}
				>
					Clear List
				</Button>
			</HStack>
		</VStack>
	);
};

export default PackingList;
