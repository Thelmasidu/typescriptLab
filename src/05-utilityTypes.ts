import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

// Update Friend
function updateFriend(friend: Friend, updates: FriendPartial): Friend {
  return { ...friend, ...updates };
}

console.log(
  updateFriend(friends[0], {
    phone: "08712345",
    dob: new Date("1998-10-22"),
  })
);

// Secure Find Friends
function secureFindFriends(
  friends: Friend[],
  criteria: (f: Friend) => boolean
): SecureFriendContact[] {
  const matches = friends.filter(criteria);
  return matches.map((f) => {
    const secure: SecureFriendContact = {
      name: f.name,
      phone: f.phone,
    };
    return secure;
  });
}

let result = secureFindFriends(friends, (f: Friend) => f.age < 30);
console.log(result);

// Avoid modifying readonly property
// If necessary, clone the object
const updatedResult = { ...result[0], phone: "08654321" };
console.log(updatedResult);

// Generate Event Pass
function generateEventPass(colleague: Colleague): EventPass | null {
  if (!colleagues.current || !colleagues.current.length) {
    console.error("No colleagues available in 'current'");
    return null;
  }
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}

if (colleagues.current?.[0]) {
  console.log(generateEventPass(colleagues.current[0]));
}

// Intersection Function
type IntersectionType = {
  name: string; // common property
  age: number; // from Friend
  contact: {
    email: string; // from Colleague
    extension: number; // from Colleague
  };
};

function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): IntersectionType[] {
  let result: IntersectionType[] = [];
  friends.forEach((friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      result.push({
        name: friend.name,
        age: friend.age,
        contact: {
          email: colleague.contact.email,
          extension: colleague.contact.extension
        },
      });
    }
  });
  return result;
}

// Example usage
console.log(intersection(friends, colleagues.current || []));
