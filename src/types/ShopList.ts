import type { Product } from "./Product";

export type ShopList = {
    id: number;
    name: string;
    ownerId: string;
    products: Product[];
}