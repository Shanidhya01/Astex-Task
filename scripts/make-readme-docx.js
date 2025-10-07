import fs from 'node:fs';
import path from 'node:path';
import {
  Document,
  Packer,
  Paragraph,
  HeadingLevel,
  TextRun,
  AlignmentType,
} from 'docx';

const H1 = (text) =>
  new Paragraph({ text, heading: HeadingLevel.TITLE, spacing: { after: 200 } });

const H2 = (text) =>
  new Paragraph({ text, heading: HeadingLevel.HEADING_2, spacing: { before: 200, after: 120 } });

const P = (text) =>
  new Paragraph({ children: [new TextRun({ text, size: 22 })], spacing: { after: 120 } });

const UL = (items) =>
  items.map(
    (t) =>
      new Paragraph({
        text: t,
        bullet: { level: 0 },
        spacing: { after: 60 },
      })
  );

const doc = new Document({
  creator: 'Moveto',
  description: 'Moveto – Moving Company Landing Page README',
  sections: [
    {
      properties: { page: { margin: { top: 720, right: 720, bottom: 720, left: 720 } } },
      children: [
        H1('Moveto – Moving Company Landing Page'),
        P('Responsive landing page inspired by the provided reference layout. Built with React + TypeScript, Vite, and Tailwind CSS. Tablet and mobile friendly.'),

        H2('Features'),
        ...UL([
          'Fixed, responsive header with tablet-friendly nav and mobile drawer',
          'Hero section with gradient overlay and floating “Estimate” card',
          'ZIP estimate form with accessible labels',
          '“Who We Are” About section with badge and feature bullets',
          '“Why Choose Us” feature cards grid',
          'Services section with rating chip, image, and two‑column icon list',
        ]),

        H2('Tech Stack'),
        ...UL(['React 18 + TypeScript', 'Vite', 'Tailwind CSS', 'lucide-react (icons)']),

        H2('Project Structure'),
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [
            new TextRun({
              text: `src/
  App.tsx
  main.tsx
  index.css
  components/
    Header.tsx
    Hero.tsx
    EstimateForm.tsx
    AboutSection.tsx
    FeaturesSection.tsx
    ServicesSection.tsx
assets/
public/`,
              size: 22,
            }),
          ],
          spacing: { after: 120 },
        }),

        H2('Getting Started (Windows)'),
        ...UL(['npm install', 'npm run dev', 'npm run build', 'npm run preview']),

        H2('Key Files'),
        ...UL([
          'Header.tsx – centered tablet nav, mobile drawer',
          'Hero.tsx – background, CTA, floating EstimateForm',
          'EstimateForm.tsx – responsive grid form',
          'AboutSection.tsx – image + badge + features',
          'FeaturesSection.tsx – cards grid',
          'ServicesSection.tsx – rating chip, image, two‑column icon list',
        ]),

        H2('Deployment'),
        ...UL(['Vercel/Netlify: build `npm run build`, output `dist`', 'GitHub Pages: build and publish `dist`']),

        H2('License'),
        P('For learning/demo use only. Replace assets and branding before production.'),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
const out = path.resolve(process.cwd(), 'README.docx');
fs.writeFileSync(out, buffer);
console.log('README.docx created:', out);