import { StaticImageData } from "next/image";

export interface ICategory {
  id: number
  title: string
}
export interface IPost {
  id: number
  title: string
  content: string
  status: "published" | "draft" | "rejected"
  createdAt: string
  category: { id: number }
}
export interface IItem {
  id: number
  name: string
  description: string
  price: number
  pictureUrl: string
}
export interface IOrder {
  id: number
  dateCreated: date
  status: OrderStatus
  numberOfItems: number
  totalOrderPrice: number
  orderItems: Array<{
    id: number
    items: IOrderItems
  }>
}
export interface IOrderItems {
  item: Array<{
    id: number
    item: IItem
  }>
  quantity: number
  totalPrice: number
}
enum OrderStatus {
  CREATED,
  PAID,
  SHIPPED
}