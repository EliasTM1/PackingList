import { Box, Text } from "@chakra-ui/react";
import { TravelITem } from "./Mock";

type StatsProps = {
	items: TravelITem[];
};

const Stats = ({ items }: StatsProps) => {
	const totalItems = items.length;
	const packedItems = items.filter((item) => item.packed);
	const totalPercentage = Math.round(packedItems.length / totalItems * 100);


	return (
		<Box
			justifyContent='center'
			display='flex'
			width='100%'
			backgroundColor='packColors.packBlue'
			paddingBlock={5}
		>
			{totalItems === 0 ? (
				<Text>No items in your list yets</Text>
			) : packedItems.length === totalItems ? (
				<Text fontSize='1.2rem' fontWeight='bold'>
					You are ready to go 🛫
				</Text>
			) : (
				<Text fontSize='1.2rem' fontWeight='bold'>
					🧳 {packedItems.length} of {totalItems} on your list ---
					{isNaN(totalPercentage) ? "0" : totalPercentage}% of your total items
				</Text>
			)}
			{}
		</Box>
	);
};

export default Stats;
