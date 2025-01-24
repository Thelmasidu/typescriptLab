import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";
import { EmailContact} from "./myTypes";
import { emails} from "./01-basics";

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

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean ): Friend[] {
  return friends.filter(criterion)
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 30));

function addInterest(friend: Friend, newInterest: string): string[] {
  if (!friend.interests){
    friend.interests = []
  }
  friend.interests.push(newInterest)
  return friend.interests
}


console.log(addInterest(friends[0], 'Politics'))

