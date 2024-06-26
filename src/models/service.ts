export interface Service {
    id: number;
    userId: number;
    mechanicId: number;
    vehicleInfo: string;
    location: {
      latitude: number;
      longitude: number;
    };
    status: 'pending' | 'in_progress' | 'completed';
    createdAt: Date;
    updatedAt: Date;
  }
  
  