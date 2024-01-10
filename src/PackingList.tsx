import { Button, HStack, Select, VStack } from "@chakra-ui/react";
import Item from "./Item";
import { TravelITem } from "./Mock";

type PackingListProps = {
	items: TravelITem[];
	deleteItem: (item: number) => void;
	crossItem: (item: number) => void;
};

const PackingList = ({ items, deleteItem, crossItem }: PackingListProps) => {
	return (
		<VStack
			width='100%'
			height='100%'
			backgroundColor='packColors.packDarkBrown'
			justifyContent='space-between'
		>
			<HStack flexWrap='wrap' marginTop='2rem' justifyContent='center' gap={7}>
				{items.map(({ description, id, packed, quantity }: TravelITem) => (
					<Item
						key={id}
						id={id}
						description={description}
						packed={packed}
						quantity={quantity}
						deleteItem={deleteItem}
						crossItem={crossItem}
					/>
				))}
			</HStack>
			<HStack mb='2rem'>
				<Select borderRadius='15px' backgroundColor='packColors.packBeige'>
					<option>Sort by input order</option>
					<option>Sort by description</option>
					<option>Sort by packed status</option>
				</Select>
				<Button
					borderRadius='15px'
					backgroundColor='packColors.packBlue'
					paddingInline='1.5rem'
				>
					Clear List
				</Button>
			</HStack>
		</VStack>
	);
};

export default PackingList;
