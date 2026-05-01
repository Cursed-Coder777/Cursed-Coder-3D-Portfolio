export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "works",
		title: "Works",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
  {
    title: "3D Web Developer",
    icon: "/web.webp",
  },
  {
    title: "Full Stack Developer",
    icon: "/backend.webp",
  },
  {
    title: "Interactive UI Developer",
    icon: "/creator.webp",
  },
  {
    title: "Web Performance Optimizer",
    icon: "/mobile.webp",
  },
];
const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	// {
	// 	name: "Redux Toolkit",
	// 	icon: "/tech/redux.webp",
	// },
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	// {
	// 	name: "figma",
	// 	icon: "/tech/figma.webp",
	// },
	// {
	// 	name: "wordpress",
	// 	icon: "/tech/wordpress.webp",
	// },
	// {
	// 	name: "bootstrap",
	// 	icon: "/tech/bootstrap.webp",
	// },
];

// const experiences = [
// 	{
// 		title: "Wordpress Developer & UI/UX Designer",
// 		company_name: "A.V.M Auto",
// 		icon: "/company/avm.webp",
// 		iconBg: "#383E56",
// 		date: "2020 -  2023",
// 		points: [
// 			"Self-Taught Expertise: Gained proficiency in WordPress and UI/UX design through independent learning.",
// 			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
// 			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
// 			"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
// 		],
// 	},
// 	{
// 		title: "Next.JS Developer",
// 		company_name: "Sparkbright Engineering",
// 		icon: "/company/sparkbright.webp",
// 		iconBg: "#E6DEDD",
// 		date: "2023 - 2024",
// 		points: [
// 			"Self-Taught Expertise: Gained proficiency in React.JS and Next.JS through independent learning.",
// 			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
// 			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity."
// 		],
// 	},
// 	{
// 		title: "Software Developer",
// 		company_name: "Way to Web Pvt. Ltd.",
// 		icon: "/company/wtw.jpg",
// 		iconBg: "#E6DEDD",
// 		date: "2024 - Present",
// 		points: [
// 			"Developing and maintaining Wordpress Site for A.V.M Auto The Car Body Shop based in Ahmedabad, Gujarat India.",
// 			"Analyzing feedbacks and fixing bugs.",
// 			"Search Engine Optimization.",
// 			"Design Maintainence and hosting maintenance.",
// 		],
// 	},
// ];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Muhammad Ansab",
		image: "/socialmedia/behance.svg",
		link: "",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Muhammad Ansab",
		image: "/socialmedia/linkedin.svg",
		link: "",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Muhammad Ansab",
		image: "/socialmedia/dribble.svg",
		link: "",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Muhammad Ansab",
		image: "/socialmedia/portfolio.svg",
		link: "",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Muhammad Ansab",
		image: "/tech/github.webp",
		link: "",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "A.V.M Auto Portfolio",
		description:
			"A Designed and developed a visually appealing and user-friendly portfolio website using WordPress.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "google-translate",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/avm.webp",
		platform: "Wordpress",
		deploy_link: "",
	},
	{
		name: "Sparkbright Engineering Portfolio",
		description:
			" Designed and developed a visually appealing and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "red-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/sparkbright.png",
		source_code_link: "https://github.com/",
		platform: "Web",
		deploy_link: "",
	},
	{
		name: "HooBank",
		description:
			"A responsive Bank HomePage showcasing different features such as various payment gateways integration, easy money transfer, advanced security, etc. It has a beautiful interface made using Tailwind CSS and React",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/hoobank.webp",
		source_code_link: "https://github.com/",
		platform: "Vercel",
		deploy_link: "",
	},
	{
		name: "MERN Dashboard",
		description:
			" Designed and developed a visually appealing and user-friendly Data Analytics Dashboard using MERN",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "materialui",
				color: "orange-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Express",
				color: "pink-text-gradient",
			},
		],
		image: "/projectimg/mern.png",
		source_code_link: "https://github.com/",
		platform: "Web",
		deploy_link: "",
	},
	{
		name: "Metaverse Web 3.0",
		description:
			"A Modern UI/UX Landing Page using Framer Motion and TailwindCSS with a feel and looks of Web 3.0",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "framer-motion",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/metaverse.png",
		source_code_link: "https://github.com/",
		platform: "Vercel",
		deploy_link: "",
	},
	{
		name: "Issue Tracker",
		description:
			"A Next.JS Full Stack Issue Tracker made using Next.Js, ShadCN UI, Prisma, mySQL with latest features like Next.JS Server Components, and Serverless features.",
		tags: [
			{
				name: "next",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "shadCN",
				color: "orange-text-gradient",
			},
			{
				name: "mySQL",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/issuetracker.png",
		source_code_link: "https://github.com/",
		platform: "Vercel",
		deploy_link: "",
	},
];

export { services, technologies, testimonials, projects };
