// mendefinisikan struktur data nya agar struktur konsisten
export interface User {
    id: number;
    username: string;
    email : string;
    nohp : string;
    umur : string;
    password : string;
  }
  
// kita buat datanya agar menjadi array
  export interface UserState {
    users: User[];
    currentUser : User | null;
  }
  // current fungsi nya buat menyimpan