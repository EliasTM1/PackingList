import { Button, HStack, Input, Select, Text } from "@chakra-ui/react";

const Form = () => {
	return (
		<HStack
			justifyContent='center'
			width='100%'
			backgroundColor='packColors.packDarkOrange'
			padding='1rem'
		>
			<Text fontSize="1.2rem" fontWeight="bold">What do you need for your 😍 trip?</Text>
			<form>
				<HStack>
					<Select borderRadius="15px" backgroundColor="packColors.packBeige">
						{Array.from({ length: 20 }, (_, index) => index + 1).map(
							(optionCounter) => (
								<option value={optionCounter} key={optionCounter}>{optionCounter}</option>
							)
						)}
					</Select>
					<Input width="4rem" borderRadius="15px" backgroundColor="packColors.packBeige" />
					<Button borderRadius="15" backgroundColor='packColors.packBlue'>Add</Button>
				</HStack>
			</form>
		</HStack>
	);
};

export default Form;
