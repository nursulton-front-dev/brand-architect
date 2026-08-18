# Brand Architect

# SYSTEM & ROLE
You are an elite Senior Frontend Architect & Luxury UI/UX Designer specializing in ultra-high-end personal brand platforms for Private Equity Partners, C-level Operators, and Executive Advisors.

# PROJECT OBJECTIVE
Build a pixel-perfect, production-grade, single-page portfolio web application in React + Tailwind CSS + Lucide Icons + Framer Motion for **Shokhrukh Asrorxodjaev — Restaurant Business Advisor**.

# CORE AESTHETIC & PHILOSOPHY
- **Tone & Mood:** Quiet Luxury, Authoritative Minimalist, HoReCa Executive, Data-Driven.
- **Visual Identity:** Heavyweight typography, strict mathematical grid, abundant negative space (generous vertical rhythm `py-24` to `py-32`), high contrast, subtle micro-interactions, dark charcoal surfaces with warm antique bronze accents.
- **Strict Anti-Patterns (NEVER USE):**
  - NO generic marketing agency cliches ("360 solutions", "your success is our mission", "boost profit by X%").
  - NO bright/neon multi-color gradients.
  - NO cheesy stock photos, countdown timers, floating popups, or "get a free consultation" triggers.
  - NO cluttered cards with dozens of tiny badges.

---

# 1. DESIGN SYSTEM & TOKENS

Configure Tailwind colors, typography, and borders according to the strict palette:

```css
:root {
  --bg-main: #0C0B0A;        /* Deep charcoal page background */
  --bg-surface: #161413;     /* Card surface, inputs, elevated panels */
  --bg-surface-hover: #1F1D1B;
  --border-subtle: #292524;  /* 1px borders, structural dividers */
  --border-active: #BA9A74;  /* Focused/hover states */
  
  --text-primary: #FAFAF9;   /* Off-white headings & primary metrics */
  --text-secondary: #A8A29E; /* Clean body & descriptive labels */
  --text-muted: #78716C;     /* Metadata, footers, subtle labels */

  --accent-bronze: #BA9A74;  /* Key metrics & primary action buttons */
  --accent-bronze-hover: #CCA981;
  --accent-dark-text: #0C0B0A;
}


Typography Rules:

Headings: Heavyweight Grotesque (font-extrabold / font-black, tracking-tight, uppercase where noted).

Metric Numbers: High-impact display numbers (text-5xl to text-7xl md:text-8xl, font-bold, tabular figures).

Copy: Clean legible sans-serif (font-normal, leading-relaxed, text-base/lg).

2. DETAILED SECTION ARCHITECTURE

00. Sticky Minimal Header

Layout: Glassmorphism (bg-[#0C0B0A]/80 backdrop-blur-md border-b border-[#292524]).

Left: Text mark "SHOKHRUKH ASRORXODJAEV" (uppercase, tracking-widest, text-xs/sm, font-semibold).

Center (Desktop): Minimal anchor navigation (Опыт, Кейсы, Отзывы, Контакты) with #A8A29E hover to #FAFAF9.

Right: Discrete button "Обсудить бизнес →" (ghost button with #292524 border, hover: text-[#BA9A74] border-[#BA9A74]).

01. Hero Section (Maximum Authority)

Layout: 2-column asymmetric grid (grid-cols-1 lg:grid-cols-12, min-h-[90vh], items-center, gap-12).

Left Column (7 cols):

Overline: RESTAURANT BUSINESS ADVISOR (text-xs tracking-[0.25em] text-[#BA9A74] uppercase font-bold mb-4).

Main H1: SHOKHRUKH ASRORXODJAEV (text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#FAFAF9] mb-6).

Disciplines tag line: OPERATIONS · MARKETING · FINANCE · PEOPLE · PRODUCT · IT (text-xs sm:text-sm font-mono text-[#78716C] mb-8 tracking-wider).

Descriptor: "Помогаю собственникам строить управляемый и прибыльный ресторанный бизнес." (text-lg sm:text-xl text-[#A8A29E] max-w-xl mb-10 font-normal leading-relaxed).

CTA Area: Primary Action Button "Обсудить бизнес →" (styled with #BA9A74 background, #0C0B0A bold text, rounded-none or subtle 2px radius, smooth translate-x on arrow hover).

Right Column (5 cols):

High-end portrait container with soft linear-gradient bottom fade into --bg-main (bg-gradient-to-t from-[#0C0B0A] via-transparent to-transparent).

Image placeholder with subtle warm tonal filter and smooth hover depth.

02. Horizontal Business Architecture Section

Header:

H2: ОТ СОТРУДНИКОВ ДО ФИНАНСОВ. (text-3xl sm:text-5xl font-black tracking-tight text-[#FAFAF9]).

Subtitle: "Смотрю на ресторан не через одну функцию, а как на единую бизнес-систему." (text-lg text-[#A8A29E] mt-3).

Interactive 6-Pillar Grid: 6 cards (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16).

Cards Content:

OPERATIONS — Процессы, стандарты, KPI, эффективность кухонь и залов.

MARKETING — Трафик, бренд, путь гостя, повторные продажи, LTV/CAC.

FINANCE — P&L, Unit-экономика, Cash Flow, управление фудкостом и лейбором.

PEOPLE / HR — Найм, система грейдов, мотивация, аттестация и культура.

PRODUCT — R&D, матрица меню, ценообразование, стандарты вкуса.

IT & DATA — Автоматизация (iiko/r_keeper), сквозная аналитика, Telegram-боты, BI-дашборды.

Card Styling: Surface #161413, 1px border #292524, hover:border-[#BA9A74]/50, hover:translate-y-[-2px] transition-all duration-300. Top badge with minimal Roman numerals (01–06).

03. Entrepreneurial Proof: Hoty Dogy Block

Layout: Two complementary zones — Manifesto + Metrics + Visual Proof Grid.

Left Side:

Manifesto Heading: Я НЕ ТОЛЬКО КОНСУЛЬТИРУЮ. Я СТРОЮ. (text-3xl sm:text-4xl font-extrabold text-[#FAFAF9] leading-tight).

Paragraph: "Основатель Hoty Dogy — QSR-сети с оборотом более 2 млрд сум в месяц и 8+ филиалами. Прошёл на практике через продукт, маркетинг, экономику, найм, операционка, открытия, доставку и масштабирование ресторанной сети." (text-[#A8A29E] text-base leading-relaxed mt-6).

Metrics Display:

Metric 1: Value 2+ млрд сум (text-4xl sm:text-5xl font-extrabold text-[#BA9A74]), Label: оборот сети в месяц (text-xs uppercase tracking-widest text-[#78716C]).

Metric 2: Value 8+ (text-4xl sm:text-5xl font-extrabold text-[#BA9A74]), Label: филиалов по Узбекистану (text-xs uppercase tracking-widest text-[#78716C]).

Right Side:

Asymmetric bento photo grid (2x2) showcasing real operations, branding, packaging, team in action, and dark-themed analytics dashboards.

04. Experience / Ecosystem Logos

Section Label: ОПЫТ, КОТОРЫЙ СТОИТ ЗА МОЕЙ ЭКСПЕРТИЗОЙ. (text-xs uppercase tracking-[0.2em] text-[#78716C] text-center mb-10).

Monochromatic client/brand logo bar (Bellissimo Pizza, PastaPasta, PIPLS, Sariq Bola Pizza).

Opacity opacity-50 hover:opacity-100 transition-opacity duration-300, monochrome styling (no colored brand logos).

05–08. Detailed Case Studies (Modular Structured Cards)

Render 4 meticulously detailed case study blocks with alternating visual layout (flex-col lg:flex-row and flex-col lg:flex-row-reverse).

CASE 01: PASTA

Heading: PASTA

Subtitle: От зависимости от агрегаторов — к собственной доставке.

Tasks & Solutions: Цифровизация СВД и delivery funnel, стандартизация процессов доставки, реновация маркетинговой системы.

Hero Metric: 300+ (text-6xl lg:text-7xl font-black text-[#BA9A74]) заказов в день через собственный канал.

CASE 02: PIPLS

Heading: PIPLS

Context: 20+ филиалов · ~2,4 млрд сум оборота в месяц.

Subtitle: Из ручного управления — в операционную систему.

Focus Modules: Organization (оргструктура C-level/ТУ), Operations (чек-листы, 5S, графики), Management (KPI, недельный ритм), Control (аудит, СБ, тайный гость), Finance (P&L/CF/Balance, сверки, фудкост), People (HR и аттестация).

CASE 03: BELLISSIMO PIZZA

Heading: BELLISSIMO PIZZA

Subtitle: Построение маркетинговой функции в период масштабирования.

Scope: Формирование in-house маркетинговой команды с нуля, масштабирование бренда до лидера рынка.

Hero Metric: $1M+ (text-6xl lg:text-7xl font-black text-[#BA9A74]) advertising budget managed.

CASE 04: SARIQ BOLA PIZZA

Heading: SARIQ BOLA PIZZA

Subtitle: Маркетинг, построенный вокруг цифр.

Scope: Внедрение системы сквозных дашбордов (продажи, доставка, RFM), запуск CRM и программ удержания.

Hero Metric: 100 → 800 (text-5xl lg:text-7xl font-black text-[#BA9A74]) заказов доставки в день.

09. Executive Testimonials Block

Heading: РАБОТАЛ ВМЕСТЕ.

Format: Strict 3-card horizontal grid (non-carouselled on desktop, touch-friendly on mobile).

Cards:

Card 1: Фарход А. (CEO, Bellissimo Pizza)

Card 2: Дониёр Н. (Основатель, PastaPasta)

Card 3: Баходир Т. (Сооснователь, PIPLS)

Card elements: Clean avatar portrait, name, role/brand tag, concise 2–3 sentence executive testimonial.

10. High-Stakes Qualification CTA & Booking Form

Filter Manifesto (Left column):

H2: НЕ КАЖДОМУ БИЗНЕСУ НУЖЕН СОВЕТНИК. (text-3xl sm:text-5xl font-extrabold text-[#FAFAF9] leading-tight).

Copy:

"Я подключаюсь к ограниченному количеству проектов и работаю там, где могу реально повлиять на результат."

"Если у вас ресторанный бизнес, есть амбиция расти и вы считаете, что мой опыт может быть полезен — расскажите немного о компании и задаче."

"Если поймём, что подходим друг другу — поговорим."

Strict Qualification Form (Right column):

Card Container: #161413 with #292524 border and subtle inner shadow.

Inputs (Dark minimal style: bg-[#0C0B0A] border border-[#292524] focus:border-[#BA9A74] text-[#FAFAF9] p-4 text-sm outline-none transition-colors):

Имя (Full name)

Компания / бренд (Restaurant name)

Количество филиалов (e.g. 1, 2-5, 6-15, 15+)

Оборот компании (опционально)

Какая задача стоит перед бизнесом? (Textarea, 4 rows)

Telegram / Телефон (Direct contact)

Submit Button: Full-width #BA9A74 button with text "ОТПРАВИТЬ →".

Confirmation Disclaimer underneath: "Спасибо. Посмотрю информацию и свяжусь, если увижу, что мой опыт может быть полезен в вашей ситуации." (text-xs text-[#78716C] leading-relaxed mt-4).

11. Minimalist Footer

Border top border-[#292524], py-12.

Left: © 2024 Shokhrukh Asrorxodjaev. All rights reserved.

Right: Minimalist back-to-top trigger and Telegram direct link.

3. INTERACTIVITY & TECHNICAL STANDARDS

Framer Motion Variants: Add subtle entry transitions (initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}).

Form Handling: Implement a simulated reactive state handling form validation and a sleek inline Success State replacing the form on submit with the custom acknowledgment note.

Responsiveness: Full mobile audit — ensure all giant numbers fit gracefully on 360px+ screens without clipping or awkward line wrapping.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1fa3604d-5c16-4702-aff5-009d466ecc12).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
