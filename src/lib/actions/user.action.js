"use server";

import User from "../models/user.model";
import { connect } from "../db";
export async function createUser(user) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.Stringify(newUser));
  } catch (error) {
    console.log("Error: ", error);
  }
}
