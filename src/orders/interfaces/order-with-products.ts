import { OrderStatus } from '@prisma/client';

export interface OrderWithProduct {
  OrderItem: {
    name: any;
    productId: number;
    quantity: number;
    price: number;
  }[];
  id: string;
  totalAmount: number;
  totalItems: number;
  status: OrderStatus;
  paid: boolean;
  paidAt: Date;
  createdAt: Date;
  updateAt: Date;
}
