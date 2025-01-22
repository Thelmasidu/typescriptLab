import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

function allOlder(friendsArray: Friend[]): string[] {
  return friendsArray.map((a) => {
    a.age += 1;
    return `${a.name} is now ${a.age}`;
  });
}

console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {   //modifies a value
  const maxExtension = highestExtension(cs).contact.extension;
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: maxExtension + 1,
    },
  };
  cs.push(newColleague);
}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
addColleague(colleagues.current, "Igwe Eze", "LandLord", "Eze@here.com");
console.log(colleagues.current.filter((c) => c.contact.email === "soc@here.com"));
console.log(colleagues.current.filter((c) => c.name === "Igwe Eze"));


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");

// console.log(fruits);