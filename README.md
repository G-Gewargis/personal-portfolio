# Personal Portfolio

![Portfolio Banner](/public/og-image.png)

A modern, responsive personal portfolio website built with Next.js, React, and TailwindCSS. This portfolio showcases my skills, projects, education, and work experience.

## 🌟 Features

- **Responsive Design**: Optimized for all device sizes
- **Interactive UI**: Smooth animations powered by Framer Motion
- **Dynamic Sections**:
  - Hero Section with social links
  - About Me
  - Skills & Expertise
  - Education Timeline
  - Work Experience
  - Featured Projects Showcase
  - Contact Form with email functionality
- **Animated Background**: Custom animated particle background
- **Performance Optimized**: Built with Next.js for optimal performance

## 🛠️ Technologies

- **Frontend**: React 19, Next.js 15.3
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Tabler Icons
- **Email Service**: Nodemailer
- **Analytics**: Vercel Analytics

## 📋 Project Structure

```
src/
├── app/              # Next.js app directory
│   ├── api/          # API routes
│   └── page.js       # Main page
├── components/       # React components
│   ├── sections/     # Page sections
│   └── ...           # Other components
└── utils/            # Utility functions
```

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/G-Gewargis/personal-portfolio.git
cd personal-portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 🔧 Configuration

To configure the contact form functionality, you'll need to set up environment variables:

1. Create a `.env.local` file in the root directory
2. Add your email configuration:

```
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
EMAIL_CC=additional-email@example.com
```

## 💻 Development

- **Build for production**

```bash
npm run build
# or
yarn build
```

- **Run production build**

```bash
npm run start
# or
yarn start
```

## 🌐 Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com), but can be deployed to any hosting platform that supports Next.js applications.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fpersonal-portfolio)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

If you have any questions or would like to connect, feel free to reach out through the contact form on the portfolio or via:

- GitHub: [G-Gewargis](https://github.com/G-Gewargis)
- LinkedIn: [Georges Gewargis](https://linkedin.com/in/georges-gewargis)
