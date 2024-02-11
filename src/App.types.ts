export interface IServices {
    id: string;
    head: number,
    name: string;
    node: 0 | 1;
    price: number;
    sorthead: number;
    children: IServices[];
}

