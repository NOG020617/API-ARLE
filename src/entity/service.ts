import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Service {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  mechanicId: number;

  @Column()
  vehicleInfo: string;

  @Column('double')
  latitude: number;

  @Column('double')
  longitude: number;

  @Column()
  status: 'pending' | 'in_progress' | 'completed';

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
