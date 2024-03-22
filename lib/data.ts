import React from "react";
import { CgTrophy, CgWorkAlt } from "react-icons/cg";
import { FaGamepad, FaPhone } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { LuGraduationCap, LuLaptop } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

import showcase from "@/public/images/showcase.png";
import hackathon from "@/public/images/hackathon.jpg";
import gameDev from "@/public/images/gamedev.webp";
import neonDefence from "@/public/images/neondefence.png";
import retroMashup from "@/public/images/retromashup.png";
import lotrPokemon from "@/public/images/lotr-pokemon.png";
import ciswag from "@/public/images/ciswag.png";
import lepreTrack from "@/public/images/lepretrack.png";
import sparkleAi from "@/public/images/sparkleai.png";
import festiveTimer from "@/public/images/festivetimer.png";
import lepreTrackV2 from "@/public/images/lepretrackv2.png";
import coolcoders from "@/public/images/coolcoders.png";
import bmeditation from "@/public/images/bmeditaiton.png";
import touristTraveller from "@/public/images/touristtraveller.png";
import lovingSummer from "@/public/images/lovinsummer.png";
import triviaTrumps from "@/public/images/triviatrumps.png";
import codu from "@/public/images/codu.png";
import ztm from "@/public/images/ztm.png";

export const links = [
  {
    name: "Home",
    hash: "/#home",
    icon: React.createElement(FaHome),
  },
  {
    name: "Projects",
    hash: "/#projects",
    icon: React.createElement(AiOutlineFundProjectionScreen),
  },
  {
    name: "Articles",
    hash: "/#articles",
    icon: React.createElement(RiArticleLine),
  },
  {
    name: "Collab",
    hash: "/#collab",
    icon: React.createElement(FaHandshake),
  },
  {
    name: "Experience",
    hash: "/#experience",
    icon: React.createElement(BsPersonWorkspace),
  },
] as const;

export const experiencesData = [
  {
    title: "Code Institute",
    location: "Remote Student (Dublin, Ire)",
    description:
      "Undertaking a diploma program in web development full-time, which is an industry recognised qualification in Ireland taught to industry standards with a focus on fostering self-reliance and practical skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Marketing Consultant/Web Developer",
    location: "Remote (Dublin, Ire)",
    description:
      "As a self-employed Marketing Consultant and Web Developer from 2022 to 2023, I specialized in designing UI/UX for various projects including a music color recommendation app and an online sports ticketing website. Additionally, I provided marketing consultation to various businesses, focusing on strategy development and Facebook media buying, while also implementing theme toggling functionality for a software development community website.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Marketing Manager",
    location: "Remote KingsGuardMedia (Melbourne, Aus / Stockholm Swe)",
    description:
      "As Marketing Manager at KingsGuard Media (2019-2022), I oversaw $100k monthly ad spend, developed automated campaign management systems, and improved audience targeting. Previously, as Media Buyer and Web Designer (2017-2019), I optimized ad spend through pixel tracking, conducted A/B testing for UI/UX improvement, and managed social media engagement.",
    icon: React.createElement(BsGraphUpArrow),
    date: "2017 - 2021",
  },
  {
    title: "Sales and Logisitics",
    location: "Aussie Farmers Direct",
    description:
      "Engaged in sales and customer support, extending assistance to the B2B logistical orders team. Met and surpassed daily/weekly KPIs, undertook special assignment projects, and delivered essential business logistical support, including order management, for B2B customers and restaurants in the Greater Melbourne region.",
    icon: React.createElement(FaPhone),
    date: "2014 - 2016",
  },
] as const;

export const projectsData = [
  {
    id: "1",
    title: "Neon Defence",
    name: "neon_defence",
    rating: 7,
    excerpt:
      "A Tower defence game and winner of the Dev Games Hackathon, June 2023.",
    tags: ["javascript", "phaserjs", "firebase", "tiled", "css"],
    video:
      "https://www.dropbox.com/scl/fi/b5xmh360m7zkyqjwxr4yx/neondefence.mp4?rlkey=g4y318olsivnlxzkw0p6glzs6&raw=1",
    imageUrl: neonDefence,
    link: "https://neon-defence.netlify.app/",
    github: "https://github.com/Barneslow/neon-defence",
    collaborators: [
      {
        name: "Tanguy",
        github: "https://github.com/tlalexandre",
        account: "tlalexandre",
      },
      {
        name: "Devan",
        github: "https://github.com/devancadman",
        account: "devancadman",
      },
    ],
    description:
      "This game was developed for the Dev Games hackathon under my hobby account, Barneslow. We had approximately a month to create a functional game, using any software of our choice. We decided to stick with a browser-based game and opted for PhaserJS. The learning experience and collaboration were remarkable, given that we were able to assemble our own team. I served as the principal architect for the game's logic, while others contributed to UI and design. Despite encountering significant deployment challenges with Vite, MPA, and Netlify, we managed to secure the 1st position, a pleasant surprise considering the hurdles we faced.",
  },
  {
    id: "2",
    rating: 7.5,
    name: "retro_mashup_mayhem",
    title: "Retro Mashup Mayhem",
    excerpt:
      "Nostalic side scrolling shooter and winner of Code Institute's Retro Quest Hackathon, September 2023.",
    tags: ["javascript", "kaboomjs", "css"],
    video:
      "https://www.dropbox.com/scl/fi/v64p0zi87ss9d62j1e1ja/retromashup.mov?rlkey=pwj1nz9n62vrk59navrvy9o6b&raw=1",
    imageUrl: retroMashup,
    link: "https://retro-mashup-mayhem.netlify.app/",
    github: "https://github.com/DarrachBarneveld/Retro-Mashup-Mayhem",
    collaborators: [
      {
        name: "Dan",
        github: "https://github.com/DanMorriss",
        account: "DanMorriss",
      },
      {
        name: "Sandra",
        github: "https://github.com/SandraBergstrom",
        account: "SandraBergstrom",
      },
      {
        name: "Debbie",
        github: "https://github.com/DebbieBergstrom",
        account: "DebbieBergstrom",
      },
      {
        name: "Shida",
        github: "https://github.com/Shida18719",
        account: "Shida18719",
      },
      {
        name: "Yash",
        github: "https://github.com/ysgurjar",
        account: "ysgurjar",
      },
    ],
    description:
      "This project was developed using KaboomJS during Code Institute's September Retro Quest Hackathon. My randomly assigned team was tasked with building a game using a JS library of their choice within a 5-day timeframe. I took on the responsibility of overseeing the logic and architecture of the game, and additionally, I was nominated as the scrum master for the hackathon. The creative input and dedication of the team played a pivotal role in securing our victory.",
  },
  // {
  //   id: "3",
  //   title: "LepreTrack",
  //   excerpt:
  //     "LepreTrack is a platform empowering users to monitor and enhance their 'green score,' tracking eco-friendly habits and promoting sustainable living practices.",
  //   tags: ["javascript", "html", "css", "firebase", "bootstrap"],
  //   imageUrl: lepreTrack,
  //   link: "https://lepretrack.netlify.app/",
  //   github: "https://github.com/DarrachBarneveld/Lepre-Track",
  //   collaborators: [
  //     { name: "Shane", github: "https://github.com/Shane-Donlon" },
  //     { name: "Adam", github: "https://github.com/adammkeane" },
  //     { name: "Mark", github: "https://github.com/Markpm-code" },
  //     { name: "Amanda", github: "https://github.com/apita1423" },
  //     { name: "Aurelien", github: "https://github.com/AMJL-16" },
  //   ],
  //   description:
  //     "This project was undertaken for the Code Institute/Soda Socials in-person hackathon titled Tech for a Greener Tomorrow: Hackathon for Sustainable Solutions. The challenge was to conceptualize an application that would empower individuals to contribute to a more sustainable future. Inspired by Fitbit, we opted for a green activity tracking app. User data was correlated with an Irish average to determine their green level, and badges were assigned based on their overall score. Firebase served as the primary database. Additionally, users had access to valuable information on improving their score through an integrated OpenAI chatbot. I held the role of scrum master for this project.",
  // },
  {
    id: "4",
    name: "lord_of_the_rings_pokemon",
    title: "Lord of the Rings Pokemon",
    rating: 4,
    excerpt:
      "A live multiplayer card game, where players strategically duel in the iconic Middle-earth setting.",
    tags: [
      "react",
      "socket.io",
      "node.js",
      "express",
      "typescript",
      "tailwind",
    ],
    imageUrl: lotrPokemon,
    link: "https://lotr-pokemon.netlify.app",
    github: "https://github.com/DarrachBarneveld/lotr-pokemon-multi",
    collaborators: [],
    description:
      "This was a passion project initially created on my hobby account, Barneslow. The goal was to develop a Lord of the Rings-themed Pokémon battle card game that could be enjoyed online with friends. Players would randomly select cards and engage in battles with each other. The project features real-time user interaction, chat, a reactive multiplayer lobby, and artistic design. It was modeled after the existing single-player version, and future functionality for creating user decks is still pending implementation.",
  },

  {
    id: "5",
    name: "coolcoders",
    title: "Cool Coders",
    rating: 7,
    excerpt:
      "A hub for tech enthusiasts to share insights and knowledge through writing and engaging with articles.",
    tags: ["python", "django", "bootstrap", "sql"],
    video:
      "https://www.dropbox.com/scl/fi/av092uqcg5q8ce8087k4m/coolcoders.mp4?rlkey=e9hs0e1nbxzgr4o468p71czbh&raw=1",
    imageUrl: coolcoders,
    link: "https://coolcoders-b69260c4617a.herokuapp.com/",
    github: "https://github.com/DarrachBarneveld/CoolCoders-PP4",
    collaborators: [],
    description:
      "This served as my fourth project, meeting industry standards, developed as part of my diploma in full-stack development at the Code Institute. The motivation behind this project was to cultivate a community on Coolcoders, addressing a personal gap where I often find myself isolated due to the lack of shared passion for programming among my friends. Consequently, extending my network through meetups and online forums/communities has been crucial. The project aimed to establish a coding community where users could post articles, review each other's work, and earn engagement scores. It features comprehensive profile data, full CRUD functionality, and marked my inaugural full-stack Python project.",
  },
  {
    id: "6",
    name: "lepretrackv2",
    title: "LepreTrack V2",
    rating: 7.5,
    excerpt:
      "Tracking application to monitor and enhance users 'green score,' tracking eco-friendly habits and promoting sustainable living practices.",
    tags: ["react", "typescript", "bootstrap", "firebase", "openai"],
    video:
      "https://www.dropbox.com/scl/fi/1fkq62smqdvajp3yxlkak/lepretrack.mp4?rlkey=xffyto0b0q8oyuvv2nicp6j5j&raw=1",
    imageUrl: lepreTrackV2,
    link: "https://lepretrackv2.netlify.app/",
    github: "https://github.com/DarrachBarneveld/LepreTrackV2",
    collaborators: [
      {
        name: "Shane",
        github: "https://github.com/Shane-Donlon",
        account: "Shane-Donlon",
      },
      {
        name: "Adam",
        github: "https://github.com/adammkeane",
        account: "adammkeane",
      },
      {
        name: "Mark",
        github: "https://github.com/Markpm-code",
        account: "Markpm-code",
      },
      {
        name: "Amanda",
        github: "https://github.com/apita1423",
        account: "apita1423",
      },
      {
        name: "Aurelien",
        github: "https://github.com/AMJL-16",
        account: "AMJL-16",
      },
    ],
    description:
      "This project evolved from the foundation laid by lepreTrack v1. During an in-person hackathon, my team and I invested significant effort in creating a well-fleshed-out and innovative project. While the overall experience was rewarding, we were somewhat disheartened by the judges' scores. In response, I acknowledged that a successful tech project encompasses more than just advanced and complex code. Team agility, effective project pitching to non-tech audiences, and ease of accessibility are equally crucial. To address this realization, I took it upon myself to rectify the setback by rebuilding the project using the latest front-end tools, addressing any bugs, and paying homage to the collaborative efforts of the team.",
  },
  {
    id: "7",
    title: "B-Meditation",
    name: "bmeditation",
    rating: 8,
    excerpt:
      "A mobile application for mindfulness and meditation, featuring a vast collection of quotes and content from historical figures.",
    tags: ["react native", "javascript", "expo"],
    video:
      "https://www.dropbox.com/scl/fi/yw2u65mbfntykv8v0hgff/bmeditation.mp4?rlkey=vj8wt65y08tslnb1xeny2w3fd&raw=1",
    imageUrl: bmeditation,
    link: "https://play.google.com/store/apps/details?id=com.barneslow.bmeditation&hl=en&gl=US",
    github: "https://github.com/Barneslow/bmeditation",
    collaborators: [],
    description:
      "One of my most significant achievements was successfully launching an application on the Google Play Store, named B-Meditation. Regrettably, due to budget constraints, I couldn't afford the Apple Developer package, limiting its availability to Android devices. Nonetheless, this project served as a valuable learning experience in building an industry-standard mobile app, utilizing React Native for development. Motivated by the challenges posed by the COVID-19 pandemic on mental health, including my own, I aimed to create an app that fostered mindfulness and meditation. The content was enriched by delving deep into philosophy and drawing wisdom from historical figures. All quotes and content were sourced from a vast collection of 500k CSV quotes from an educational open collection, with a focus on minimizing file size by selecting quotes from my favorite authors.",
  },
  {
    id: "8",
    title: "Tourist Traveller",
    rating: 6,
    excerpt:
      "A travel application for top global destinations, assisting users in planning their next trip by recommending top attractions along with basic desitination insights.",
    tags: ["react", "typescript", "google api", "tailwind"],
    video:
      "https://www.dropbox.com/scl/fi/y3tq7xkm2bgpl8qk7t2d2/touristtraveller.mov?rlkey=p8i54uey9cfkhshvpyqcwu6cs&raw=1",
    imageUrl: touristTraveller,
    link: "https://tourist-traveller.vercel.app/",
    github: "https://github.com/DarrachBarneveld/tourist-traveller",
    collaborators: [],
    description:
      "In the early months of 2023, I made the pivotal decision to fully transition into a new career. Before embarking on this transformative journey, I yearned for an inspiring trip to set the tone. Uncertain about the destination or activities, I simply wanted to be inspired. Turning to Google for recommended places, I found myself creating an application to streamline the process. Leveraging the Google Places API for recommendations and Leaflet for map display, I recently reconstructed the project using Next.js. While the core functionality has been revamped, the addition of a favoriting feature is still pending implementation.",
  },
  {
    id: "9",
    title: "Lovin Summer",
    name: "loving_summer",
    rating: 5,
    excerpt:
      "An hackathon app collaborating with initiative with Tourism Ireland/ Failte Ireland to boost summer tourism through a traveler app highlighting top destinations and activity types.",
    tags: ["bootstrap", "html", "css", "javascript"],
    imageUrl: lovingSummer,
    link: "https://musical-kataifi-25a4e4.netlify.app/",
    github: "https://github.com/Joao4569/lovin_summer",
    collaborators: [
      {
        name: "João",
        github: "https://github.com/Joao4569",
        account: "Joao4569",
      },
      {
        name: "Juan",
        github: "https://github.com/jbocciadev",
        account: "jbocciadev",
      },
      {
        name: "Benjamin",
        github: "https://github.com/Benohene",
        account: "Benohene",
      },
      {
        name: "Jose",
        github: "https://github.com/devjldp",
        account: "devjldp",
      },
    ],
    description:
      "This project was developed for Code Institute's Summer of Code hackathon. Our team was challenged with creating an application that encouraged people, including myself and fellow developers, to embrace outdoor activities and savor the summer season. Instead of opting for a straightforward integration of Google Maps, I aspired to craft a fully functional and responsive map using Leaflet, incorporating data from Failte Ireland/Tourism Ireland. The CSV data was parsed and utilized to render markers based on activity type, location, and distance. With the collaborative efforts of the team, we clinched the 2nd place, and my primary role centered around the construction of the custom maps.",
  },
  {
    id: "10",
    title: "Trivia Trumps",
    name: "trivia_trumps",
    excerpt:
      "A quiz game leveraging the Open Trivia API, featuring multiple categories with varying difficulty levels. Utilised by local pubs throughout Dublin.",
    tags: ["html", "css", "javascript"],
    video:
      "https://www.dropbox.com/scl/fi/njuqp3c5wwqi3fv2vjfhw/triviatrumps.mp4?rlkey=zomv1vp2rzdsnzhu5m3ahf61i&raw=1",
    imageUrl: triviaTrumps,
    link: "https://darrachbarneveld.github.io/Project-2-Code-Institute/",
    github: "https://github.com/DarrachBarneveld/Project-2-Code-Institute",
    collaborators: [],
    rating: 6,
    description:
      "This marked my second project, developed to industry standards for Code Institute's Diploma in Full Stack Development. The project is a quiz game leveraging the Open Trivia API. Featuring multiple categories with varying difficulty levels, users engage in answering questions to unlock badges and, ultimately, earn trump cards.",
  },
  {
    id: "11",
    title: "Sparkle Ai",
    name: "sparkle_ai",
    excerpt:
      "An Ai Planning assistant. Generates date recommendations based on user modelling/inputs and lists nearby locations to carry out the recommendation.",
    tags: [
      "react",
      "python",
      "django rest",
      "javascript",
      "openai",
      "google api",
    ],
    video:
      "https://www.dropbox.com/scl/fi/yrkgdk3y8ozgnk5v8rw20/sparkleai.mp4?rlkey=fgqw7cm1ht8zw2cil7oilj3y2&raw=1",
    imageUrl: sparkleAi,
    link: "https://datesparkle.netlify.app/",
    github: "https://github.com/DarrachBarneveld/cupidai",
    collaborators: [
      {
        name: "Camelia",
        github: "https://github.com/Camelia03",
        account: "Camelia03",
      },
      {
        name: "Erik",
        github: "https://github.com/Erikas-Ramanauskas",
        account: "Erikas-Ramanauskas",
      },
      {
        name: "Dimitri",
        github: "https://github.com/dimitri-edel",
        account: "dimitri-edel",
      },
      {
        name: "Patricia",
        github: "https://github.com/pswhdev",
        account: "pswhdev",
      },
      {
        name: "Kiki",
        github: "https://github.com/KikiBerg",
        account: "KikiBerg",
      },
    ],
    rating: 9,
    description:
      "This marked my second project, developed to industry standards for Code Institute's Diploma in Full Stack Development. The project is a quiz game leveraging the Open Trivia API. Featuring multiple categories with varying difficulty levels, users engage in answering questions to unlock badges and, ultimately, earn trump cards.",
  },
  {
    id: "12",
    title: "Festive Timer",
    name: "festival_timer",
    rating: 7.5,
    excerpt:
      "Global New Years countdown app. Users can geolcate any country on the map to learn about their New Years traditions and countdown to the New Year. Winner of CI's New Years Hackathon 2023.",
    tags: ["react", "next.js", "google api", "bootstrap", "typescript"],
    video:
      "https://www.dropbox.com/scl/fi/008h0g16ght1y3377pj5z/festivetimer.mp4?rlkey=n6zu86v4rvvjf75uo8b6i19zl&raw=1",
    imageUrl: festiveTimer,
    link: "https://festive-timer.vercel.app/",
    github: "https://github.com/DarrachBarneveld/festive-timer",
    collaborators: [
      {
        name: "Dayana",
        github: "https://github.com/Dayana-N",
        account: "Dayana-N",
      },
      {
        name: "Sandra",
        github: "https://github.com/SandraBergstrom",
        account: "SandraBergstrom",
      },
      {
        name: "Bartosz",
        github: "https://github.com/bartoszgebarowski",
        account: "bartoszgebarowski",
      },
      {
        name: "Oluwaseun",
        github: "https://github.com/57Esther",
        account: "57Esther",
      },
      {
        name: "Dima",
        github: "https://github.com/Dima-Bulavenko",
        account: "Dima-Bulavenko",
      },
    ],
    description:
      "This marked my second project, developed to industry standards for Code Institute's Diploma in Full Stack Development. The project is a quiz game leveraging the Open Trivia API. Featuring multiple categories with varying difficulty levels, users engage in answering questions to unlock badges and, ultimately, earn trump cards.",
  },
  {
    id: "13",
    title: "Ci Swag",
    name: "ci_swag",
    rating: 10,
    excerpt:
      "Full-stack e-commerce platform for Code Institute merchandise, supplementary e-learning courses, and memberships. Final project achieved with distinction in Level 6 diploma.",
    tags: ["python", "django", "stripe", "aws", "bootstrap", "sql"],
    video:
      "https://www.dropbox.com/scl/fi/aw6eu0t1fvacwqrs3atti/ciswag.mp4?rlkey=vd0j03tnoh5yxcv1jos2ekzip&raw=1",
    imageUrl: ciswag,
    link: "https://ci-swag-e9f8de0bed4b.herokuapp.com/",
    github: "https://github.com/DarrachBarneveld/ci-swag",
    collaborators: [],
    description:
      "This marked my second project, developed to industry standards for Code Institute's Diploma in Full Stack Development. The project is a quiz game leveraging the Open Trivia API. Featuring multiple categories with varying difficulty levels, users engage in answering questions to unlock badges and, ultimately, earn trump cards.",
  },
];

export const articleData = [
  {
    id: "7",
    title:
      "Build Your Own Chrome Extension to Track Applications and Conquer the Job Hunt",
    excerpt:
      "Dive into the world of Chrome extensions! Learn how to create your very own web extension by understanding the key basic key priciples. Unlock the full potential of browser customisation, or just create a simple tool to help you with your job hunt.",
    published: "09/01/2024",
    imageUrl:
      "https://images.unsplash.com/photo-1616499370260-485b3e5ed653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/build-your-own-chrome-extension-to-track-applications-and-conquer-the-job-hunt-mwf5sqpe",
    websiteImage: codu,
    websiteText: "Codu",
  },
  {
    id: "1",
    title:
      "Integrating Google's appointment scheduler into your NextJS application",
    excerpt:
      "A step-by-step guide on how to integrate Google's appointment scheduler into a next JS application. This article is perfect for freelancers and small business owners who want to integrate a booking system into their website.",
    published: "09/01/2024",
    imageUrl:
      "https://images.unsplash.com/photo-1522241112606-b5d35a468795?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/integrating-google-s-appointment-scheduler-into-your-nextjs-application-yb-p6qfu",
    websiteImage: codu,
    websiteText: "Codu",
  },
  {
    id: "2",
    title: "Get Stripe card payments working in your React Application",
    excerpt:
      "A step by step guide on how to set up stripe payments within a react application. This article is perfect for freelancers and small business owners who want to integrate a payment system into their website.",
    published: "18/01/2024",
    imageUrl:
      "https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/get-stripe-card-payments-working-in-your-react-application-y3jji7jw",
    websiteImage: codu,
    websiteText: "Codu",
  },
  {
    id: "3",
    title: "Easily create User Profiles with Django AllAuth",
    excerpt:
      "How to create user profiles with Django AllAuth. This article is for helping new django developers create malleable user profiles that do not impact the all auths authentication model. ",
    published: "27/01/2024",
    imageUrl:
      "https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/easily-create-user-profiles-with-django-allauth-nsbnigtx",
    websiteImage: codu,
    websiteText: "Codu",
  },
  {
    id: "4",
    title: "Simplify Serving Static Files In Django with Whitenoise",
    excerpt:
      "This article outlines a quick and easy method for serving static files on a Django application using Whitenoise. This is perfect for developers who are new to Django and want to serve their static files with ease.",
    published: "05/02/2024",
    imageUrl:
      "https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/simplify-serving-static-files-in-django-with-whitenoise-tevvwsky",
    websiteImage: codu,
    websiteText: "Codu",
  },
  {
    id: "5",
    title: "Setting Up Stripe Webhooks for Development Environment Testing",
    excerpt:
      "A step by step guide outlining the process for testing stripe webhooks in a development environment. This article shows the benefits of having local testing over deploying to a live server.",
    published: "14/02/2024",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1682104376313-ad77c73ba131?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/setting-up-stripe-webhooks-for-development-environment-testing-6-ygdgf",
    websiteImage: codu,
    websiteText: "Codu",
  },
  {
    id: "6",
    title: "Win the battle against CSS",
    excerpt:
      "Tips and tricks to help newer front end developers manage the nightmare that can be css. Gives insights on the reasons on why it is important to master vanilla css before moving onto frameworks.",
    published: "24/02/2024",
    imageUrl:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.codu.co/articles/win-the-battle-against-css-cliks6zj",
    websiteImage: codu,
    websiteText: "Codu",
  },
] as const;

export const projectCategoriesData = [
  {
    id: 1,
    title: "Showcase",
    description:
      "My favorite projects over the years! These highlight my proficiency in various languages and frameworks across front/backend development, highlighting my skills in crafting comprehensive full-stack applications.",
    imageUrl: showcase,
    icon: React.createElement(CgTrophy),
    projects: ["5", "6", "7", "8"],
  },
  {
    id: 2,
    title: "Hackathons",
    description:
      "Im addicted to hackathons! The ability to gain hands-on experience in teamwork, meeting challenging deadlines, and mastering the intricacies of Git version control—all while having a blast an making friends!",
    imageUrl: hackathon,
    icon: React.createElement(LuLaptop),
    projects: ["1", "2", "3", "9"],
  },
  {
    id: 3,
    title: "Game Dev",
    description:
      "My love for games sparked a journey into game development which greatly enhanced my skills, knowledge, and passion for programming as I ventured into creating my own gaming experiences.",
    imageUrl: gameDev,
    icon: React.createElement(FaGamepad),
    projects: ["1", "2", "4", "10"],
  },
] as const;

export const projectProgressData = [
  {
    title: "CI Swag Store",
    description:
      "A mock online retail platform designed to offer Code Institute merchandise to students, faculty, and other potential customers.",
    tags: ["django", "stripe", "aws"],
    expected: "1 week",
    progress: 90,
  },
  {
    title: "Emotional Colour Wheel / mcm",
    description:
      "A machine learning project designed to analyze users' emotional responses to music and associate each emotion with a specific color.",
    tags: ["react", "spotify api", "django rest"],
    progress: 20,
    expected: "2 months",
  },
  {
    title: "React Stripe Shop Template",
    description:
      "A blueprint for establishing a fundamental and secure online shopping platform utilizing Stripe payments and Firebase for database/authentication. Facilitates the swift replication of e-commerce stores.",
    tags: ["react", "stripe", "firebase"],
    expected: "3 week",
    progress: 50,
  },
];
export const stackData = [
  {
    title: "Mern",
    tech: ["TypeScript", "React", "Express", "MongoDB", "NodeJS"],
  },
  {
    title: "NextJs",
    tech: ["TypeScript", "React", "Next.js", "Firebase", "Prisma"],
  },
  {
    title: "Django",
    tech: ["Django", "Django Rest", "React", "SQL"],
  },
  {
    title: "Mobile",
    tech: ["React Native", "Firebase", "Expo"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Django Rest",
  "Framer Motion",
] as const;

export const collabData = [
  { title: "Codu", imageUrl: codu, link: "https://github.com/codu-code/codu" },
  { title: "ZTM", imageUrl: ztm, link: "https://github.com/zero-to-mastery" },
] as const;

export const hackathonBadges = [
  "https://api.eu.badgr.io/public/assertions/6LVA946fQ6CwOlUAlAWIGA",
  "https://api.eu.badgr.io/public/assertions/eMjGYMdURiybvn2fa0awOQ",
  "https://api.eu.badgr.io/public/assertions/UgSbdch7Ql6LIF95L52c4Q",
  "https://api.eu.badgr.io/public/assertions/f6fBc6MWT-qt1aTr8HWl8A",
  "https://api.eu.badgr.io/public/assertions/lbxrG8kiTU24EUT-TF7D5g",
];
