import { Box, Text } from "@chakra-ui/react";

const Stats = () => {
	return (
		<Box
			justifyContent='center'
			display='flex'
			width='100%'
			backgroundColor='packColors.packBlue'
		>
			<Text fontSize="1.2rem" fontWeight="bold">🧳 You have ___ items on your list, you have ___ already packer (0%) </Text>
		</Box>
	);
};

export default Stats;
