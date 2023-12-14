import tweeter from "/public/tweeter.gif";
import quikanik from "/public/quikanik.gif";
import thinkfast from "/public/thinkfast.gif";
import black_jack from "/public/black_jack.png";
import dream_studio from "/public/Dream_studio.jpg";

import CSS from "/public/logos/CSS.png";
import express from "/public/logos/express.png";
import git from "/public/logos/git.png";
import HTML from "/public/logos/HTML.png";
import JavaScript from "/public/logos/JavaScript.png";
import JQuery from "/public/logos/JQUERY.png";
import Node from "/public/logos/node.png";
import React from "/public/logos/React.png";
import ruby from "/public/logos/ruby.png";
import SQL from "/public/logos/SQL.png";
import TypeScript from "/public/logos/typescript.png";
import vite from "/public/logos/vite.png";
import openai from "/public/logos/openai.png";
import sass from "/public/logos/sass.png"
import jest from "/public/logos/jest.png"
import mocha from "/public/logos/mocha.png"
import rspec from "/public/logos/rspec.png"
import mongo from "/public/logos/mongo.png"



export const completedProjects = [
  {
    title: "Quik-a-nik",
    gif: quikanik,
    description:
    "Quik-a-nik is a dynamic picnic delivery app developed in React Native for both web and Android simultaniously. Quik-a-nik takes advantage of both the Google maps and stripe payment API's to deliver a coherent e-commerce experience.",
    url: "https://github.com/SirGraybon/quik-a-nik",
  },
  {
    title: "ThinkFast",
    gif: thinkfast,
    description:
    "ThinkFast is a quiz building platform that allows users to craft and share their creations with the world. ThinkFast was built using JavaScript, HTML, CSS, jQuery and AJAX, and powered by Node, Express, postgreSQL in the back-end.",
    url: "https://github.com/SirGraybon/ThinkFast",
  },

  {
    title: "Tweeter",
    gif: tweeter,
    description:
      "Tweeter is a simple, single-page Twitter clone built using JQuery, AJAX, HTML and CSS. Tweeter allows users to share their thoughts in real time and is presented in a modern minimalist style with tastefull CSS animations and transitions.",
    url: "https://github.com/SirGraybon/tweeter",
  }
  
];
export const currentProjects = [


  {
    title: "dream_studio (in progress) ",
    gif: dream_studio,
    description:
    "Dream_studio takes advantage of the openAI api to bring your dreams to life with stunning AI-generated imagery. ",
    url: "https://github.com/SirGraybon/dream_studio",
  },
  {
    title: "Black-Jack-Attack (in progress) ",
    gif: black_jack,
    description:
    "Black-Jack-Attack is a simple 1v1 multiplayer card game. This project was taken on as an opportunity to learn about web sockets and animations.",
    url: "https://github.com/SirGraybon/black_jack_attack",
  }

  
];

export const skills = [
  { label: "JavaScript", logo:  JavaScript  },
  { label: "TypeScript", logo:  TypeScript  },
  { label: "OpenAI", logo:  openai },
  { label: "PostgreSQL", logo:  SQL },
  { label: "MongoDB", logo: mongo},
  { label: "NodeJS", logo:  Node  },
  { label: "HTML", logo:  HTML  },
  { label: "CSS", logo:  CSS  },
  { label: "React", logo:  React  },
  { label: "React Native", logo:  React  },
  { label: "Ruby on Rails", logo:  ruby  },
  { label: "JQuery", logo:  JQuery  },
  { label: "Vite", logo:  vite  },
  { label: "git", logo:  git  },
  { label: "Jest",  logo: jest},
  { label: "Mocha & Chai", logo: mocha},
  { label: "SASS", logo: sass},
  { label: "Rspec", logo: rspec},
  { label: "express"  },
  { label: "AJAX"},
  { label: "EJS"},
  { label: "Active Record"},
  { label: "Cyprus"},
];


// module.exports(projects) 