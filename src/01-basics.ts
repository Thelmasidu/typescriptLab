import {Friend, Colleague, ColleagueHistory, EmailContact } from './myTypes'

  
/* (Optional) Change the names below to your friends. */

const friend1 : Friend = {
  name: "Paul Fleming",
  phone: "087-12345",
  age: 25,
  dob: new Date("1998-11-20") ,
};

const friend2 : Friend = {
  name: "Jane Costello",
  phone: "086--12345",
  age: 31,
  interests: ['Music', 'Sport']
};

  
  export const friends: Friend[]  = [friend1, friend2];
/*   console.log(friends[1]); */
  
  //   -------------------
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };

  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  /* console.log(colleagues.current[0]); */

  const email1: EmailContact = {
    name: "Aaron Adams",
    email: "aaronAdams@hot.com"

  };

  const email2: EmailContact = {
    name: "Sharon Wing",
    email: "sharonwing@yahoo.com"
  };

  export const emails : EmailContact[] = [email1, email2];
  