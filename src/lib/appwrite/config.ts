import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',  // Your Appwrite URL
  projectId: '671143c3000922e40c0b',     // Your Project ID
  databaseId: '67127ef4001df1e6207f',    // Your Database ID
  storageId: '67127e66001ef4a63234',     // Your Storage ID
  userCollectionId: '67128046003121b8e3f6', // Your User Collection ID
  postCollectionId: '67127f55003c99e94f22', // Your Post Collection ID
  savesCollectionId: '6712807400229378eef0' // Your Saves Collection ID
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
