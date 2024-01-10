import { Box, Text } from "@chakra-ui/react";
import { TravelITem } from "./Mock";

type ItemProps = TravelITem & {
	deleteItem: (item: number) => void
	crossItem: (item: number) => void
}

const Item = ({ description, packed, quantity, id, deleteItem, crossItem }: ItemProps) => {
	return (
		<>
			<Box display='flex' gap='.5rem'>
				<input type='checkbox' onClick={() => crossItem(id)} style={{cursor: "pointer"}}/>
				{packed ? (
					<Text color='packColors.packBeige'>
						<s>{quantity} {description}</s> 
					</Text>
				) : (
					<Text color='packColors.packBeige'>
						{quantity} {description}
					</Text>
				)}
				<Box cursor="pointer" onClick={() => deleteItem(id)}>❌</Box>
			</Box>
		</>
	);
};

export default Item;
