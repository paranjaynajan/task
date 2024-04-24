export interface IService {
    id?: string;
    categoryId: string;
    name: string;
    type: string[];
    options: IServiceOption[];
  }
  
  export interface IServiceOption {
    duration: string;
    price: number;
    type: 'Hourly' | 'Weekly' | 'Monthly';
  }

export interface IserviceModel{
   id: string,  
   categoryId: string,
   name: string,
   type:string[]
}