export interface Payment {
    id: number;
    serviceId: number;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    createdAt: Date;
    updatedAt: Date;
  }
  