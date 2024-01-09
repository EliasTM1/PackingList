import { Box, Text } from "@chakra-ui/react";

const Item = () => {
	return (
		<Box display='flex' gap='.5rem'>
			<input type='checkbox' />
			<Text color="packColors.packBeige">Some item of my list</Text>
			<Box>❌</Box>
		</Box>
	);
};

export default Item;
