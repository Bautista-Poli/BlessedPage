export interface ListItem{
    src: String;
    srcOut: string;
    name: String;
    category: string;
    price: number;
    discount: number;
    //size: string;
    id: number;
}

export interface List{
    items: Array<ListItem>
}