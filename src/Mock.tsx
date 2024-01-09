export type TravelITem = {
    id: number, 
    description: string, 
    quantity: number, 
    packed: boolean
}

export const travelItemList : TravelITem[] = [
    {id : 1 , description: "Passports", quantity: 2, packed: false },
    {id : 2 , description: "Tickets", quantity: 2, packed: false },
    {id : 3 , description: "Some", quantity: 2, packed: false },
    {id : 4 , description: "stuff", quantity: 2, packed: false },
]