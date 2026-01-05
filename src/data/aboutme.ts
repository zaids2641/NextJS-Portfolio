export interface ExperienceItem {
  company: string
  role: string
}

export interface Socials {
  name: string
  url: string
  icon?: string
}

export interface AwardItem {
  title: string
  source: string
  year: number
}

export interface AboutData {
  description: string[]
  experience: ExperienceItem[]
  awards: AwardItem[]
  skills: string[]
  contact: string[]
  socials: Socials[]
  footerMessage: string[]
}


export async function getAboutData(): Promise<AboutData> {
  return {
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas explicabo id debitis cupiditate cumque, error quia! Debitis cupiditate ipsa nihil labore, earum atque dolor quos saepe vero inventore, odit nam deleniti accusantium omnis mollitia consequatur harum incidunt!",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    ],

    experience: [
      { company: "Spotify", role: "Product Designer" },
      { company: "Dropbox", role: "Interface Developer" },
      { company: "Google", role: "Lead UI Designer" },
      { company: "Figma", role: "UI Designer" },
      { company: "Microsoft", role: "UI Designer" }
    ],

    awards: [
      { title: "Site Of The Month", source: "Awards", year: 2023 },
      { title: "Site Of The Day", source: "Awards", year: 2023 },
      { title: "Agency of The Year", source: "Awards", year: 2022 },
      { title: "FWA of The Month", source: "FWA", year: 2022 },
      { title: "Site Of The Month", source: "Awards", year: 2022 }
    ],

    skills: [
      "Product Design",
      "UI/UX Design",
      "Prototyping",
      "Frontend Development",
      "Illustration",
      "Visual Design"
    ],

    contact: [
      "mail@gmail.com",
      "0910362548"
    ],

    socials: [
      {
        name: "Facebook",
        icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="rgba(222, 217, 217, 1)"
                >
                  <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z" />
                </svg>`,
        url: "https://www.facebook.com/"
      },
      {
        name: "X",
        icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="rgba(222, 217, 217, 1)"
                >
                  <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" />
                </svg>`,
        url: "https://www.x.com/"
      },
      {
        name: "GitHub",
        icon: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="rgba(222, 217, 217, 1)"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.467-1.335-5.467-5.931 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.921.435.375.825 1.102.825 2.222 0 1.605-.015 2.895-.015 3.286 0 .315.21.69.825.573C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>`,
        url: "https://github.com/zaids2641"
      },
      {
        name: "YouTube",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="rgba(222, 217, 217, 1)">
          <path d="M23.498 6.186a2.993 2.993 0 0 0-2.11-2.11C19.36 3.5 12 3.5 12 3.5s-7.36 0-9.388.576a2.993 2.993 0 0 0-2.11 2.11A31.46 31.46 0 0 0 0 12a31.46 31.46 0 0 0 .502 5.814 2.993 2.993 0 0 0 2.11 2.11C4.64 20.5 12 20.5 12 20.5s7.36 0 9.388-.576a2.993 2.993 0 0 0 2.11-2.11A31.46 31.46 0 0 0 24 12a31.46 31.46 0 0 0-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z"/>
        </svg>`,
        url: "https://www.youtube.com"
      }
    ],

    footerMessage: [
      "I’m always excited to connect with new people and explore opportunities. Whether you have a project in mind, a question, or just want to say hi, feel free to reach out anytime. I’ll get back to you as soon as possible, and I look forward to hearing from you!"
    ]
  }
}
