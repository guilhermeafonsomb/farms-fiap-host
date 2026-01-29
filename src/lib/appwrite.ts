import { Account, Client, Databases, ID, TablesDB } from "appwrite";
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from "./mocks/handlers";

const client = new Client();

client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const tablesDB = new TablesDB(client);
export const id = ID;
export default client;
