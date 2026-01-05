import { getAboutData } from "@/data/aboutme";
import ContactMeClient from "./ContactMeClient";

export default async function ContactMe() {
  const contact = await getAboutData();

  return <ContactMeClient contact={contact} />;
}