export interface CartItem{
    src: String;
    name: String;
    price: number;
    size:string;
    quantity:number;
    id: number;
}

export interface Cart{
    items: Array<CartItem>;
}