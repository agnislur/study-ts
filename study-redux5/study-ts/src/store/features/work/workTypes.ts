
export interface Work {
    id: number;
    tiket: string;
    createdAt : string;
    completedAt : string;
    status : string;
  }
  
  export interface WorkState {
    works: Work[];
  }
  