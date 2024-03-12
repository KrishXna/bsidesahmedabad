export class Service {
  async contactForm(email: string) {
    try {
      const response = await fetch("https://cloud.appwrite.io/v1", {
        method: "POST",
        body: email,
      });

      return await response.json();
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}

export const service = new Service();

export default service;
