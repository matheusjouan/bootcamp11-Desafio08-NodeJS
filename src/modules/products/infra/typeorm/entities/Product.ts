import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('int')
  quantity: number;

  /**
   * Na tabela de OrderProducts terá uma relacionamento
   * terá o product_id, que diz: qual o produto esta na order.
   * um produto p/ varios orderproducts,
   * p/ cada produto que tiver posso ter vários orderProducts
   *
   * retorna "order_products"
   * order_prodcuts.product => acessar o relacionamento na tabela OrdersProducts p/ buscar os Produtos
   */

  @OneToMany(() => OrdersProducts, order_products => order_products.product)
  order_products: OrdersProducts[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
