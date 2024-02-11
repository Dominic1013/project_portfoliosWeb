import React from "react";

// const skillData = [
//   {
//     category: "Frontend Development",
//     skills: [
//       { name: "HTML", imageUrl: "/skillsIcons/11_html_html5_icon.png" },
//       { name: "CSS", imageUrl: "/skillsIcons/12_css3_css_icon.png" },
//       {
//         name: "JavaScript",
//         imageUrl: "/skillsIcons/13_logo_javascript_icon.png",
//       },
//       {
//         name: "React",
//         imageUrl: "/skillsIcons/14_react native_react_icon.png",
//       },
//       { name: "Redux", imageUrl: "https://example.com/redux.png" },
//       { name: "Next.js", imageUrl: "https://example.com/nextjs.png" },
//       { name: "Sass", imageUrl: "https://example.com/sass.png" },
//       { name: "Bootstrap", imageUrl: "https://example.com/bootstrap.png" },
//       { name: "Tailwind CSS", imageUrl: "https://example.com/tailwindcss.png" },
//       { name: "Konva.js", imageUrl: "https://example.com/konvajs.png" },
//     ],
//   },
//   {
//     category: "Backend Development",
//     skills: [
//       { name: "Node.js", imageUrl: "https://example.com/nodejs.png" },
//       { name: "Express.js", imageUrl: "https://example.com/expressjs.png" },
//       { name: "MongoDB", imageUrl: "https://example.com/mongodb.png" },
//       { name: "Mongoose", imageUrl: "https://example.com/mongoose.png" },
//       { name: "JWT", imageUrl: "https://example.com/jwt.png" },
//       { name: "Firebase", imageUrl: "https://example.com/firebase.png" },
//       { name: "Cloudinary", imageUrl: "https://example.com/cloudinary.png" },
//       { name: "Postman", imageUrl: "https://example.com/postman.png" },
//     ],
//   },
//   {
//     category: "Development Tools",
//     skills: [
//       { name: "VS Code", imageUrl: "https://example.com/vscode.png" },
//       { name: "NPM", imageUrl: "https://example.com/npm.png" },
//       { name: "Vite", imageUrl: "https://example.com/vite.png" },
//       { name: "Git", imageUrl: "https://example.com/git.png" },
//       { name: "GitHub", imageUrl: "https://example.com/github.png" },
//       { name: "Vercel", imageUrl: "https://example.com/vercel.png" },
//       { name: "Render", imageUrl: "https://example.com/render.png" },
//       { name: "Netlify", imageUrl: "https://example.com/netlify.png" },
//       { name: "Miro", imageUrl: "https://example.com/miro.png" },
//       { name: "Notion", imageUrl: "https://example.com/notion.png" },
//     ],
//   },
//   {
//     category: "Design",
//     skills: [
//       { name: "Photoshop", imageUrl: "https://example.com/photoshop.png" },
//       { name: "Illustrator", imageUrl: "https://example.com/illustrator.png" },
//       { name: "Figma", imageUrl: "https://example.com/figma.png" },
//       { name: "Canva", imageUrl: "https://example.com/canva.png" },
//       { name: "Relume", imageUrl: "https://example.com/relume.png" },
//     ],
//   },
// ];

const skillData = [
  {
    category: "Frontend Dev",
    skills: [
      { name: "HTML", imageUrl: "/skillsIcons/11_html_html5_icon.png" },
      { name: "CSS", imageUrl: "/skillsIcons/12_css3_css_icon.png" },
      {
        name: "JavaScript",
        imageUrl: "/skillsIcons/13_logo_javascript_icon.png",
      },
      {
        name: "React",
        imageUrl: "/skillsIcons/14_react_native_react_icon.png",
      },
      { name: "Redux", imageUrl: "/skillsIcons/15_redux_icon.png" },
      { name: "Next.js", imageUrl: "/skillsIcons/16_nextjs_fill_icon.png" },
      { name: "Sass", imageUrl: "/skillsIcons/17_sass_icon.png" },
      { name: "Bootstrap", imageUrl: "/skillsIcons/18_bootstrap_icon.png" },
      {
        name: "Tailwind CSS",
        imageUrl: "/skillsIcons/19_tailwind_css_icon.png",
      },
      { name: "Konva.js", imageUrl: "/skillsIcons/20_konva.PNG" },
    ],
  },
  {
    category: "Backend Dev",
    skills: [
      { name: "Node.js", imageUrl: "/skillsIcons/21_node_js_icon.png" },
      { name: "Express.js", imageUrl: "/skillsIcons/22_icons8-express-js.png" },
      { name: "MongoDB", imageUrl: "/skillsIcons/23_mongodb_icon.png" },
      { name: "Mongoose", imageUrl: "/skillsIcons/24_mongoose.PNG" },
      { name: "JWT", imageUrl: "/skillsIcons/25_icons8-jwt.png" },
      { name: "Firebase", imageUrl: "/skillsIcons/26_icons8-firebase.png" },
      { name: "Cloudinary", imageUrl: "/skillsIcons/27_cloudinary.PNG" },
      { name: "Postman", imageUrl: "/skillsIcons/28_postman_icon.png" },
    ],
  },
  {
    category: "Dev Tools",
    skills: [
      { name: "VS Code", imageUrl: "/skillsIcons/31_vscode_fill_icon.png" },
      { name: "NPM", imageUrl: "/skillsIcons/32_npm_icon.png" },
      { name: "Vite", imageUrl: "/skillsIcons/33_vite_logo_icon.png" },
      { name: "Git", imageUrl: "/skillsIcons/34_git_icon.png" },
      { name: "GitHub", imageUrl: "/skillsIcons/35_github_icon.png" },
      { name: "Vercel", imageUrl: "/skillsIcons/36_logo_vercel_icon.png" },
      { name: "Render", imageUrl: "/skillsIcons/37_render.PNG" },
      { name: "Netlify", imageUrl: "/skillsIcons/38_icons8-netlify.png" },
      { name: "Miro", imageUrl: "/skillsIcons/39_icons8-miro.png" },
      { name: "Notion", imageUrl: "/skillsIcons/39.1_icons8-notion.png" },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Photoshop", imageUrl: "/skillsIcons/41_icons8-photoshop.png" },
      {
        name: "Illustrator",
        imageUrl: "/skillsIcons/42_icons8-adobe-illustrator.png",
      },
      { name: "Figma", imageUrl: "/skillsIcons/43_icons8-figma.png" },
      { name: "Canva", imageUrl: "/skillsIcons/44_icons8-canva.png" },
      { name: "Relume", imageUrl: "/skillsIcons/45_relume.PNG" },
    ],
  },
];

export default skillData;
