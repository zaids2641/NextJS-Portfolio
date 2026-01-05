
export interface FoterData {
  dateCreated: string
  author: string
  gitHubUrl: string
  stack: string
}

export async function getFoterData(): Promise<FoterData> {
  return {
    dateCreated: "© December 2025",
    author: "Zaids",
    gitHubUrl: "https://github.com/zaids2641",
    stack: "Crafted with care ✦ Next.js & Tailwind"
  }
  }