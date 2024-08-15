import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Eric Tendian",
  logo: "/images/logo.svg",
  email: "eric@tendian.io",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "https://eric.tendian.io/",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/EricTendian",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/erictendian",
    icon: "mdi:linkedin",
    external: true,
  },
  {
    title: "Email",
    url: "mailto:eric@tendian.io",
    icon: "mdi:email",
  },
  {
    title: "X/Twitter",
    url: "https://x.com/EricTendian",
    icon: "mdi:twitter",
    external: true,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/binarysentinel",
    icon: "mdi:instagram",
    external: true,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/@EricTendian",
    icon: "mdi:youtube",
    external: true,
  },
  {
    title: "Last.fm",
    url: "https://www.last.fm/user/erict15",
    icon: "mdi:lastfm",
    external: true,
  },
  {
    title: "Patreon",
    url: "https://www.patreon.com/EricTendian",
    icon: "mdi:patreon",
    external: true,
  }
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Eric Tendian",
    description:
      "Eric Tendian is the founder of CrimeIsDown.com and a Senior Staff Software Engineer at WP Engine.",
    image: identity.logo,
  },
  role: "Full-Stack Engineer",
  description:
    `Fearlessly & relentlessly curious. Senior Staff Software Engineer (Platform/Deploy) at <a href="https://wpengine.com/" class="font-semibold hover:!opacity-60 transition-opacity" target="_blank">WP Engine</a>. Founder of <a href="https://crimeisdown.com/" class="font-semibold hover:!opacity-60 transition-opacity" target="_blank">CrimeIsDown.com</a>. Nothing is impossible.`,
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Eric Tendian",
    description:
      "Eric Tendian is the founder of CrimeIsDown.com and a Senior Staff Software Engineer at WP Engine.",
    image: identity.logo,
  },
  subtitle: "Hi there!",
  about: {
    description: `
I’m Eric from Chicago. I’m a curious engineer that enjoys solving the hardest problems and making a big impact.
I try to seek out simple and elegant solutions whenever possible and love making things more efficient. I’ve been fascinated with how
things work ever since I could hold a screwdriver, and aren’t afraid to get my hands dirty digging thru source code of some obscure
open source project while finding the root cause of a bug that only can be reproduced on Tuesdays under a full moon while doing
a handstand.
<br><br>
I currently work at <a href="https://wpengine.com/" class="font-semibold hover:!opacity-60 transition-opacity" target="_blank">WP Engine</a> as a Senior Staff Software Engineer on the Deploy team. Previously I worked at <a href="https://www.packback.co/" class="font-semibold hover:!opacity-60 transition-opacity" target="_blank">Packback</a>, an EdTech startup where I joined as engineer #2 and built and scaled their product. On the side I maintain a police scanner site
called <a href="https://crimeisdown.com/" class="font-semibold hover:!opacity-60 transition-opacity" target="_blank">CrimeIsDown.com</a> whose code is available <a href="https://github.com/CrimeIsDown" class="font-semibold hover:!opacity-60 transition-opacity" target="_blank">@CrimeIsDown</a>.
I get to do some cool stuff with software-defined radios there.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Lately I've been focused on site reliability and developer experience in my work, but I've worked up and down the stack to get the job done. For more detail, <a href="https://drive.google.com/file/d/1un2ZW3b7Ag4JSu54GlgFwWSjpBF2Fly7/view?usp=sharing" class="font-semibold hover:!opacity-60 transition-opacity">check out my full resume.</a>`, // Markdown is supported
    items: [
      {
        title: "Senior Staff Software Engineer",
        company: {
          name: "WP Engine",
          image: "/images/wpengine_logo.webp",
          url: "https://wpengine.com/",
        },
        date: "2022 - Present",
      },
      {
        title: "Principal Software Engineer",
        company: {
          name: "Packback",
          image: "/images/packback_logo.png",
          url: "https://packback.co/",
        },
        date: "2014 - 2022",
      },
      {
        title: "Senior Software Engineer",
        company: {
          name: "Packback",
          image: "/images/packback_logo.png",
          url: "https://packback.co/",
        },
        date: "2018 - 2020",
      },
      {
        title: "Software Engineer",
        company: {
          name: "Packback",
          image: "/images/packback_logo.png",
          url: "https://packback.co/",
        },
        date: "2015 - 2018",
      },
      {
        title: "Intern / Engineer #2",
        company: {
          name: "Packback",
          image: "/images/packback_logo.png",
          url: "https://packback.co/",
        },
        date: "2014 - 2015",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Eric Tendian",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on outside of my day job.",
  projects: [
    {
      title: "Breaking News",
      description: "I've been a hobbyist reporter and photojournalist since 2015, covering public safety-related breaking news events in Chicago. My work has been cited by local TV stations and newspapers.",
      image: "/images/breakingnews.jpg",
      year: "2015-Present",
      url: "https://x.com/EricTendian/media",
    },
    {
      title: "CrimeIsDown.com",
      description: "Built a central police scanner monitoring website for Chicago, helping journalists and curious citizens find out where the sirens they hear are going.",
      image: "/images/crimeisdown.png",
      year: "2014-Present",
      url: "https://crimeisdown.com/",
    },
    {
      title: "Pop / Clarify",
      description: "Built a Python course schedule scraper and web-based instant course search tool that is still used by hundreds of students each semester to build their class schedules.",
      image: "/images/pop.png",
      year: "2014",
      url: "https://pop.weclarify.com/",
    },
    {
      title: "NCP Registration",
      description: "Built, launched, and maintained a class registration website which allowed the entire high school student body to register for rotating weekly classes, while a student at the school.",
      image: "/images/cps_logo.png",
      year: "2012",
      url: "https://www.northsideprep.org/",
    },
    {
      title: "YSFlight Headquarters",
      description: "Developed and implemented a completely revamped marketing site and forum for a flight sim gaming community.",
      image: "/images/ysflight.png",
      year: "2011",
      url: "https://ysfhq.com/",
    },
  ],
};
