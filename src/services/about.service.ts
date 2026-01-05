import { getAboutData } from "@/data/aboutme";

/**
 * About data service
 * Central place for fetching / transforming about data
 */
export async function fetchAboutData() {
  const about = await getAboutData();

  return about;
}
