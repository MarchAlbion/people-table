import { User } from "../types/userType";

export const filterUsers = (users: User[], filter: string, search: string) => {
  if (filter === "name") {
    return users.filter((user: User) => user.name.toLowerCase().includes(search.toLowerCase()));
  } 
  if (filter === "username") {
    return users.filter((user: User) => user.username.toLowerCase().includes(search.toLowerCase()));
  }
  if (filter === "email") {
    return users.filter((user: User) => user.email.toLowerCase().includes(search.toLowerCase()));
  }
  if (filter === "phone") {
    return users.filter((user: User) => user.phone.includes(search));
  } else {
    return users;
  }
};