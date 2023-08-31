# 💼 Portfolio Website

This web project is intended to be [Phou Kiethseng](https://github.com/phoukiethseng) personal portfolio website. This website is showcasing my personal projects and my resume.

## See Live

This project is deployed to Vercel

🚀 Visit live: [Portfolio Website](https://kiethseng-portfolio.vercel.app/)

## Get Started

### Setup Environment Variables

Copy `.env.example` to `.env`. This project use [EmailJS](https://www.emailjs.com/docs/) to send notification by email after user submitted contact form. Setup an account with EmailJS and paste Service ID, Template ID, and Public Key into `.env` file

### Run Development Server

```shell
npm run dev
```

## Heatmaps and Session Recordings

This project use [Microsoft Clarity](https://clarity.microsoft.com/). This script `public/microsoft-clarity.js` will be executed on website load using NextJS `Script` component.
