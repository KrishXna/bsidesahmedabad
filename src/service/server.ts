import { conf } from "@/conf/conf";
import { Client, Databases, ID, Models } from "node-appwrite";

export class Service {
  client = new Client();
  databases: Databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
  }

  async createContact(data: Omit<Omit<any, "email">, "tnc">) {
    try {
      const response = await this.databases.createDocument<
        Models.Document & Omit<Omit<any, "email">, "tnc">
      >(
        conf.appwriteDatabaseId,
        conf.appwriteContactCollectionId,
        ID.unique(),
        data
      );
      return response;
    } catch (error: any) {
      throw error.message;
    }
  }
}

export default Service;
