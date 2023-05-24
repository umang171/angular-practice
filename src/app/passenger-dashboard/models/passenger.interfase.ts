export interface Child{
    name:string,
    age:number
  }
export interface Passenger{
    id:number,
    name:string,
    status:boolean,
    checkedIn?:number|null,
    children:Child[]|null
  }