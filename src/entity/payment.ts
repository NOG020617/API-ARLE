import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  serviceId: number;

  @Column('decimal')
  amount: number;

  @Column()
  status: 'pending' | 'completed' | 'failed';

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
