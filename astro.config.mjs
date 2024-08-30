import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import * as fs from 'fs';
import tailwind from "@astrojs/tailwind";
let sidebar = JSON.parse(fs.readFileSync("sidebar.json"));
let linter_sidebar = JSON.parse(fs.readFileSync("linter_sidebar.json"));


// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'AEP',
    customCss: [
      './src/tailwind.css',   
    ],
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: sidebar.concat(linter_sidebar)
  }),
  tailwind({
    applyBaseStyles: false,
  })]
});
