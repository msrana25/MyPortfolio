import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { PiStackBold } from "react-icons/pi";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Computer Science",
    location: "Patiala, IN",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a back-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2018",
  },
  {
    title: "System Engineer",
    location: "Mysore, IN",
    description:
      "Led data engineering initiatives, building data pipelines and implementing automation tools for improved data accessibility and insights.",
    icon: React.createElement(FaDatabase),
    date: "2018 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Mangalore, IN",
    description:
      "Led project facilitating money transfer from gift cards to client bank accounts, achieving significant efficiency gains in fee computation and job completion time. Implemented features enhancing data accuracy, security, and user experience, optimizing performance.",
    icon: React.createElement(PiStackBold),
    date: "2020 - 2022 ",
  },
  {
    title: "Masters in Applied Computer Science",
    location: "Montreal, CA",
    description:
      "Diversified and expanded my skillset with deep dive into Problem Solving, Advanced Algorithm design, Design Patterns, Design Methodologies, Machine Learning, Distributed Systems and much more! I'm open to full-time opportunities.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024 ",
  },
] as const;


export const projectsData = [
  {
    title: "E-Commerce Store",
    description:
      "A Full Stack E-Commerce Store website connected to an Admin Dashboard and CMS.",
    tags: ["React", "Next.js", "MySQL","Shadcn UI","Tailwind CSS", "TypeScript", "Framer Motion"],
    imageUrl: wordanalyticsImg,
    link:"https://ecommerce-store-ecru-six.vercel.app/",
  },
  {
    title: "E-Commerce Admin Dashboard and CMS",
    description:
      "A full Stack application powered by features like content management, pagination and data visualization.",
    tags: ["React", "Next.js", "MySQL", "Cloudinary CDN", "Prisma", "Stripe", "TypeScript"],
    imageUrl: rmtdevImg,
    link:"https://ecommerce-admin-mu-eight.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-mu-eight.vercel.app%2F80d972c7-2458-489f-a072-b32bd73d4975%2Fbillboards",
  },
  {
    title: "My Airbnb",
    description:
      "A feature-rich Airbnb clone with advanced property search, favoriting, and reservation management capabilities.",
    tags: ["React", "Next.js", "MongoDB", "NextAuth"],
    imageUrl: corpcommentImg,
    link:"https://property-rental-seven.vercel.app/",
  },
] as const;

export const skillsData = ["JavaScript", 
"TypeScript",
 "Java", 
 "Python", 
 "HTML", 
 "CSS", 
 "Erlang", 
 "React", 
 "Spring Boot", 
 "Node.js", 
 "Express.js", 
 "Next.js", 
 "SpringBatch", 
 "Angular", 
 "AWS", 
 "GCP",
 "PostgreSQL", 
 "Oracle", 
 "Vertica", 
 "MongoDB", 
 "MySQL", 
 "Cassandra", 
 "Microservices",
 "REST APIs", 
 "WebSocket", 
 "OAuth", 
 "Docker",
 "Kubernetes", 
 "ELK Stack", 
 "GIT / GitHub (Version Control)",
 "JIRA", 
 "Jenkins",
 "Postman", 
 "Confluence",
 "Travis",
 "Agile Methodology",
 "Problem Solving", 
 "Data Structures and algorithms",
 "Debugging",
 "Design Patterns", 
 "Code Optimization", 
 "Shell scripting", 
 "Framer Motion"] as const;
