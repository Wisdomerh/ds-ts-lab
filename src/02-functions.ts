import {Friend, Colleague, EmailContact } from './myTypes'
import { friends, colleagues } from "./01-basics";

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`;
    });
}

console.log(allOlder(friends));

function highestExtension(cs: Colleague[]) { // Inferred retun type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(
    colleaguesArray: Colleague[],
    name: string,
    department: string,
    email: string
): void {
    const highest = highestExtension(colleaguesArray).contact.extension;
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highest + 1,
        },
    };
    colleaguesArray.push(newColleague);

}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
  ): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] inferred
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result 
  }
  
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));
  
function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): string[] {
return friends
    .filter(criterion)
    .map(friend => friend.name);
}
console.log(findFriends(friends, friend => friend.name.startsWith('Pa')));
console.log(findFriends(friends, friend => friend.age < 35));