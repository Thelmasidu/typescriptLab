
export interface Friend {
    name: string;
    phone: string;
    dob? : Date;   
    age: number;
    interests? : string[]
}

export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}

export const friends = [friend1, friend2];

export const colleagues = [colleague1, colleague2, colleague3];

export interface EmailContact {
  name: string;
  email: string
}


export type Department = "Engineering" | "Finance" | "HR";
export interface ColleagueV2 {
  name: string;
  department: Department;    // *****
  contact: {
    email: string;
    extension: number;
    slack?: string;
  };
}

export type Buddy = Friend | ColleagueV2;
export type Administrator = Buddy | string | undefined

export type BuddyList = {
  name: string;
  administrator: Administrator;
  members: Buddy[];
};

