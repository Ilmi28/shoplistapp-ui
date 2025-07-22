import { apiClient } from './apiClient.ts'
import type {ShopList} from '@/types/ShopList.ts'

export async function getShopLists() {
    const response = await apiClient.get<ShopList[]>('api/shoplist/get-all')
    return response.data;
}