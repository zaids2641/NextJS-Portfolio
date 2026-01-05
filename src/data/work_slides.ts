import work1 from '@/assets/work_images/work_1.webp'
import work2 from '@/assets/work_images/work_2.webp'
import work3 from '@/assets/work_images/work_3.webp'
import { StaticImageData } from 'next/image'

export interface Slide {
  id: string
  handler: string
  heading: string
  description: React.ReactNode
  category?: string
  projectType: string
  projectClient: string
  date: string
  projectStack: string
  image?: StaticImageData
  imageUrl?: string
  imageAlt?: string
  url?: string
  useModal?: boolean
}

export async function getWorkSlides(): Promise<Slide[]> {
  // const res = await fetch("https://api.example.com/works", {
  //   cache: "no-store", // or revalidate
  // });

  if (process.env.NODE_ENV === "development") {
    await new Promise((res) => setTimeout(res, 1200));
  }

  return [
  {
    id: '1',
    handler: 'design-by-purpose',
    heading: 'Design with purpose',
    description:
      'I craft thoughtful digital experiences where aesthetics and usability meet. Every interface is designed to feel intuitive and human.',
    category: 'UI/UX',
    projectType: 'Web App',
    projectClient: 'Acme Corp',
    date: 'Jan 2025',
    projectStack: 'Figma, React, Tailwind',
    image: work1,
    imageUrl: "",
    imageAlt: "",
    url: 'https://www.google.com',
  },
  {
    id: '2',
    handler: 'frontend-engineering',
    heading: 'Frontend engineering',
    description:
      'I build scalable frontend applications using modern tools like React, Next.js, and Tailwind, focusing on performance and maintainability.',
    category: 'Frontend',
    projectType: 'Website',
    projectClient: 'Beta LLC',
    date: 'Feb 2025',
    projectStack: 'Next.js, TypeScript, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    url: 'https://www.facebook.com',
  },
  {
    id: '3',
    handler: 'collaboration-and-iteration',
    heading: 'Collaboration and iteration',
    description:
      'Working closely with designers and product teams, I iterate fast, test ideas, and ship meaningful digital products.',
    category: 'Teamwork',
    projectType: 'UI/UX',
    projectClient: 'Gamma Studio',
    date: 'Mar 2025',
    projectStack: 'React, Figma, Storybook',
    image: work2,
    url: 'https://www.youtube.com',
  },
  {
    id: '4',
    handler: 'iterable-design',
    heading: 'Iterable Design',
    description:
      'Working closely with designers and product teams, I iterate fast, test ideas, and ship meaningful digital products.',
    category: 'Teamwork',
    projectType: 'Website',
    projectClient: 'Delta Inc',
    date: 'Apr 2025',
    projectStack: 'Figma, Tailwind, React',
    imageUrl: 'https://images.unsplash.com/photo-1545235617-9465d2a55698',
    url: 'https://www.youtube.com',
  },
  {
    id: '5',
    handler: 'modern-dashboard',
    heading: 'Modern Dashboard',
    description:
      'A sleek analytics dashboard built with responsive design and interactive charts.',
    category: 'UI/UX',
    projectType: 'Web App',
    projectClient: 'Epsilon Tech',
    date: 'May 2025',
    projectStack: 'React, Chart.js, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    url: 'https://example.com',
  },
  {
    id: '6',
    handler: 'ecommerce-platform',
    heading: 'Ecommerce Platform',
    description:
      'A complete ecommerce platform with shopping cart, checkout, and payment integration.',
    category: 'Frontend',
    projectType: 'Website',
    projectClient: 'ShopEase',
    date: 'Jun 2025',
    projectStack: 'Next.js, Stripe API, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    url: 'https://example.com',
  },
  {
    id: '7',
    handler: 'mobile-app-ui',
    heading: 'Mobile App UI',
    description:
      'Designing clean and intuitive mobile app interfaces for iOS and Android.',
    category: 'UI/UX',
    projectType: 'Mobile App',
    projectClient: 'Zeta Mobile',
    date: 'Jul 2025',
    projectStack: 'Figma, React Native',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    url: 'https://example.com',
  },
  {
    id: '8',
    handler: 'portfolio-website',
    heading: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, skills, and experience.',
    category: 'Frontend',
    projectType: 'Website',
    projectClient: 'Self',
    date: 'Aug 2025',
    projectStack: 'Next.js, TypeScript, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    url: 'https://example.com',
  },
  {
    id: '9',
    handler: 'interactive-landing',
    heading: 'Interactive Landing Page',
    description:
      'A dynamic landing page with animations and smooth scrolling experience.',
    category: 'UI/UX',
    projectType: 'Website',
    projectClient: 'Theta Agency',
    date: 'Sep 2025',
    projectStack: 'React, GSAP, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    url: 'https://example.com',
  },
  {
    id: '10',
    handler: 'saas-dashboard',
    heading: 'SaaS Dashboard',
    description:
      'Dashboard for SaaS application with data visualization and user management.',
    category: 'Frontend',
    projectType: 'Web App',
    projectClient: 'Iota Soft',
    date: 'Oct 2025',
    projectStack: 'Next.js, React Query, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4',
    url: 'https://example.com',
  },
  {
    id: '11',
    handler: 'blog-platform',
    heading: 'Blog Platform',
    description:
      'A platform for creating and managing blogs with rich text editor.',
    category: 'Frontend',
    projectType: 'Website',
    projectClient: 'Kappa Media',
    date: 'Nov 2025',
    projectStack: 'Next.js, Markdown, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    url: 'https://example.com',
  },
  {
    id: '12',
    handler: 'analytics-tool',
    heading: 'Analytics Tool',
    description:
      'An analytics tool to track user behavior and generate reports.',
    category: 'UI/UX',
    projectType: 'Web App',
    projectClient: 'Lambda Analytics',
    date: 'Dec 2025',
    projectStack: 'React, Chart.js, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d',
    url: 'https://example.com',
  },
  {
    id: '13',
    handler: 'crm-system',
    heading: 'CRM System',
    description:
      'A customer management system for sales and marketing teams.',
    category: 'Frontend',
    projectType: 'Web App',
    projectClient: 'Mu Corp',
    date: 'Jan 2026',
    projectStack: 'Next.js, React, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    url: 'https://example.com',
  },
  {
    id: '14',
    handler: 'social-media-dashboard',
    heading: 'Social Media Dashboard',
    description:
      'A dashboard for monitoring social media metrics and engagement.',
    category: 'UI/UX',
    projectType: 'Web App',
    projectClient: 'Nu Media',
    date: 'Feb 2026',
    projectStack: 'React, Chart.js, Tailwind',
    imageUrl: 'https://images.unsplash.com/photo-1742783199458-aa2ec62ae5f5',
    url: 'https://example.com',
  },
  {
    id: '15',
    handler: 'ai-powered-tool',
    heading: 'AI-Powered Tool',
    description:
      'A tool leveraging AI to provide insights and automate tasks.',
    category: 'Frontend',
    projectType: 'Web App',
    projectClient: 'Omicron Tech',
    date: 'Mar 2026',
    projectStack: 'React, Next.js, TensorFlow.js',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    url: 'https://example.com',
  },
]

}
