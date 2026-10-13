# Grace College of Medical Sciences — Node.js Website

Responsive, mobile-first website using Node.js + Express, plain HTML/CSS/JS, with the teal/white theme inspired by the Lavanya Hospital website. It includes Home, About, Courses, Facilities, Admissions, FAQ, Contact, and an admission enquiry form. The form posts to `/api/admissions` and stores enquiries in `data/admissions.jsonl` on the server.

## Run locally

1. Install Node.js 18 or newer.
2. Open this folder in a terminal.
3. Run `npm install`
4. Run `npm start`
5. Open `http://localhost:3000`

## Deploy without installing anything on your own computer

Upload the project files (not the ZIP itself) to a private GitHub repository, then import that repository into a Node.js hosting platform such as Replit or another provider that supports Express apps. Set the run command to `npm start`. Do not commit real student data or the `data/` folder to GitHub.

## Important: update before launch

Edit `public/js/site-config.js` with the verified official college phone, email, address, social links and WhatsApp number. The supplied logo is a neutral placeholder icon; replace `public/assets/logo.png`, `favicon.png` and `apple-touch-icon.png` with the approved college artwork.

The site intentionally does **not** claim government approval, university affiliation, recognition, placement guarantees, campus facilities, course duration, eligibility, or fees. Confirm these facts with the college and the relevant competent authority before publishing. The course descriptions are introductory summaries, not an official syllabus. The site labels the two course options as supplied: “OT Technician Degree Course” and “Pathology Technician (DMLT) Degree Course”; the exact award and official nomenclature must be confirmed.

## Enquiry data

Submitted enquiries are appended to `data/admissions.jsonl` on the server. This starter project has no admin dashboard, email notification, encryption-at-rest, retention automation, or spam protection. Before accepting live student enquiries, configure appropriate security, access controls, backups, retention and privacy practices. Avoid sharing or committing the data file.

## Project structure

- `server.js` — Express server and enquiry endpoint
- `public/index.html` — website structure/content
- `public/css/styles.css` — responsive teal/white theme
- `public/js/main.js` — mobile navigation and form behaviour
- `public/js/site-config.js` — contact details to edit
- `public/assets/` — placeholder logo and icons
