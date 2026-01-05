
export interface NavLink {
  name: string;
  url: string;
}

export async function HeaderNavLinks(p0: string): Promise<NavLink[]> {
  return [
    {
      name: "Intro",
      url: "/",
    },
    {
      name: "About",
      url: "/#about_me",
    },
    {
      name: "Works",
      url: "/#works",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ];
}
