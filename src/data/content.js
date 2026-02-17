export const PORTFOLIO_CONTENT = {
  meta: {
    title: "AITTHIKON_DEV v1.0",
    version: "v3.0.1 (Stable)",
    availableStatus: "AVAILABLE FOR WORK"
  },
  profile: {
    name: "AITTHIKON MAKDEE",
    role: "Full Stack Developer",
    description: "สร้างสรรค์ประสบการณ์ดิจิทัลที่ผสมผสานระหว่างงานศิลปะและวิศวกรรมคอมพิวเตอร์...",
    location: "Bangkok, Thailand (UTC+7)",
    experience: "1 Years Experience",
    education: "B.Sc. Computer Science"
  },
  skills: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    // ... items อื่นๆ
  ],
  projects: [
    {
      id: "01",
      title: "Freelance Gigs Find and Hire (TU-Gigs)",
      category: "Full Stack Web App",
      description: "เว็บแอปสำหรับจัดหางานเสริมภายในมหาวิทยาลัย โดยนักศึกษาสามารถโพสต์งานและรับงานได้อย่างง่ายดาย",
      bullets: ["พัฒนา Front-end ด้วย React และ Tailwind CSS โดยเน้น UX/UI", "ออกแบบฐานข้อมูล PostgreSQL และพัฒนา RESTful API ด้วย Express.js", "จัดการ Authentication/Authorization ด้วย JWT"],
      techStack: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      image: "/images/projects/tugig.png"
    },
    {
      id: "02",
      title: "Hiwjung",
      category: "Full Stack Web App",
      description: "เว็บแอปพลิเคชันสำหรับแบ่งปันสูตรอาหาร",
      bullets: ["พัฒนา Front-end ด้วย React + Vite และจัดการสไตล์ด้วย CSS", "พัฒนา Back-end ด้วย Node.js + Express.js เชื่อม MongoDB", "เข้าใจการทำเว็บแบบ Full-stack ตั้งแต่ UI ถึงฐานข้อมูล"],
      techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB"],
      image: "/images/projects/hiwjung.png"
    },
    {
      id: "03",
      title: "medicticket",
      category: "Backend Web App",
      description: "ระบบจองคิวเวชระเบียบออนไลน์ (workshop)",
      bullets: ["พัฒนา Front-end ด้วย HTML/CSS/JavaScript โดยใช้ Next.js", "พัฒนา Back-end ด้วย JavaScript และ Express.js + Node.js", "เน้น UX/UI ให้ใช้งานง่าย"],
      techStack: ["Next.js", "Node.js", "Express.js"],
      image: "/images/projects/medicticket.png"
    },
    {
      id: "04",
      title: "Abdul's Literary Lendings",
      category: "Backend Web App",
      description: "ระบบยืม-คืนหนังสือออนไลน์สำหรับห้องสมุดสหนังสือการ์ตูน",
      bullets: ["รับผิดชอบส่วน Back-end ด้วย PHP และออกแบบฐานข้อมูล MySQL", "พัฒนา Front-end ด้วย HTML/CSS/JavaScript", "พัฒนาและจัดการข้อมูลด้วยการทำ CRUD"],
      techStack: ["PHP", "MySQL","HTML", "CSS", "JavaScript"],
      image: "/images/projects/abdul.png"
    }

  ],
  socials: {
    email: "aitthikon.work@gmail.com",
    github: "https://github.com/nokihttia-dev",
    linkedin: "https://www.linkedin.com/in/aitthikon-makdee-8700b42b6"
  }
};
