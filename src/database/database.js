import { compare, genSalt, hash } from "bcryptjs-react";

const SALTROUND = 10;
export async function isUserExist(email) {
  const data = getUsers();

  const user = data.find((user) => user.email === email);
  if (user) {
    return user;
  }
  return false;
}

export async function addUser(user) {
  const res = await isUserExist(user.email);

  if (res) {
    throw new Error("Email is already exist. Try another email.");
  }
  const users = getUsers();
  const salt = await genSalt(SALTROUND);
  user.password = await hash(user.password, salt);
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return true;
}

export async function authenticate({email,password}) {
  const user = await isUserExist(email);
    
  if (!user) {
    throw new Error("Email or Password is wrong.");
  }

  const isPasswordSame = await compare(password,user.password);
  
  if(!isPasswordSame){
    throw new Error("Email or Password is wrong.")
  }

  return user;
}

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
