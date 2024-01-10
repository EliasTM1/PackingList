import { Button, HStack, Input, Select, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { TravelITem } from "./Mock";

type FormProps = {
	onAddItems: (item: TravelITem) => void;
};

const Form = ({ onAddItems }: FormProps) => {
	const [addedItem, setAddedItem] = useState<string>("");
	const [quantity, setQuantity] = useState<number>(1);

	function handleFieldSubmit(e: ChangeEvent<HTMLButtonElement>) {
		e.preventDefault();
		setAddedItem(e.target.value);

		const newItem: TravelITem = {
			description: addedItem,
			id: Date.now(),
			packed: false,
			quantity,
		};

		console.log(newItem, "NEW ITEM");
		onAddItems(newItem);
		setAddedItem("");
		setQuantity(1);
	}

	return (
		<HStack
			justifyContent='center'
			width='100%'
			backgroundColor='packColors.packDarkOrange'
			padding='1rem'
		>
			<Text fontSize='1.2rem' fontWeight='bold'>
				What do you need for your 😍 trip?
			</Text>
			<form>
				<HStack gap='2rem'>
					<Select
						borderRadius='15px'
						backgroundColor='packColors.packBeige'
						width='5rem'
						value={quantity}
						onChange={(e) => setQuantity(Number(e.target.value))}
					>
						{Array.from({ length: 20 }, (_, index) => index + 1).map(
							(optionCounter) => (
								<option value={optionCounter} key={optionCounter}>
									{optionCounter}
								</option>
							)
						)}
					</Select>
					<Input
						width='8rem'
						borderRadius='15px'
						backgroundColor='packColors.packBeige'
						placeholder='Add an Item'
						value={addedItem}
						onChange={(e) => setAddedItem(e.target.value)}
					/>
					<Button
						borderRadius='15'
						backgroundColor='packColors.packBlue'
						onSubmit={handleFieldSubmit}
						onClick={handleFieldSubmit}
					>
						Add
					</Button>
				</HStack>
			</form>
		</HStack>
	);
};

export default Form;
