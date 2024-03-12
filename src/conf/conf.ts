export const conf = {
  appwriteUrl: process.env.NEXT_PUBLIC_APPWRITE_HOST_URL || "",
  appwriteProjectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "",
  appwriteDatabaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "",
  appwriteContactCollectionId:
    process.env.NEXT_PUBLIC_APPWRITE_CONTACT_COLLECTION_ID || "",
};
