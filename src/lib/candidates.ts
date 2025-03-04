
import { profileImages } from "./image";

export interface Candidate {
  id: string;
  name: string;
  position: string;
  image: string;
  faculty: string;
  slogan: string;
  manifesto: string;
  bio: string;
  agenda: string[];
  socials: {
    twitter?: string;
    instagram?: string;
    facebook?: string;
    email: string;
  };
}

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Bruce Wayne",
    position: "President",
    image: profileImages.bruceWayne,
    faculty: "School of Business",
    slogan: "Empowering Every Voice",
    manifesto: "My vision is to create an inclusive campus where every student feels heard and represented. I plan to establish regular town halls, create feedback channels, and ensure transparency in student governance.",
    bio: "Jane is a third-year Business Administration student with a passion for student advocacy. She has served as a class representative and faculty liaison, gaining valuable experience in student leadership roles.",
    agenda: [
      "Establish bi-weekly town hall meetings for direct student feedback",
      "Create a digital suggestion platform for continuous improvement",
      "Reform resource allocation to ensure equitable distribution across faculties",
      "Strengthen mental health resources and accessibility",
      "Improve campus safety through better lighting and security measures"
    ],
    socials: {
      twitter: "https://twitter.com/janewangari",
      instagram: "https://instagram.com/janewangari",
      facebook: "https://facebook.com/janewangari",
      email: "jane.wangari@student.jkuat.ac.ke"
    }
  },
  {
    id: "2",
    name: "Tony Stark",
    position: "Vice President",
    image: profileImages.tonyStark,
    faculty: "School of Engineering",
    slogan: "Innovation Through Collaboration",
    manifesto: "I believe in the power of collaboration to drive innovation. My goal is to bridge the gap between different faculties and create inter-disciplinary projects that showcase the talent at JKUAT.",
    bio: "David is a fourth-year Mechanical Engineering student who has been involved in multiple student-led innovation projects. He founded the Engineers Without Borders JKUAT chapter and has represented the university at national innovation competitions.",
    agenda: [
      "Launch cross-faculty innovation challenges with industry sponsorship",
      "Establish a student innovation hub with access to resources and mentorship",
      "Develop partnerships with industry leaders for internship opportunities",
      "Create a scholarship fund for innovation projects",
      "Organize bi-annual technology showcase events"
    ],
    socials: {
      twitter: "https://twitter.com/davidochieng",
      instagram: "https://instagram.com/davidochieng",
      email: "david.ochieng@student.jkuat.ac.ke"
    }
  },
  {
    id: "3",
    name: "Scarlet Johnson",
    position: "Secretary General",
    image: profileImages.blackWidow,
    faculty: "School of Computing and Information Technology",
    slogan: "Efficiency Through Technology",
    manifesto: "I aim to streamline JKUSA operations through technological solutions. By digitizing processes, improving communication channels, and implementing data-driven decision making, we can create a more responsive student government.",
    bio: "Mercy is a third-year Computer Science student with expertise in software development. She has worked on various digital transformation projects, including developing a mobile app for campus resources.",
    agenda: [
      "Implement a digital platform for transparent JKUSA operations",
      "Create a centralized communication system for student updates",
      "Develop data analytics for measuring the impact of student initiatives",
      "Establish regular digital newsletters to keep students informed",
      "Automate routine administrative tasks to improve efficiency"
    ],
    socials: {
      twitter: "https://twitter.com/mercyakinyi",
      facebook: "https://facebook.com/mercyakinyi",
      email: "mercy.akinyi@student.jkuat.ac.ke"
    }
  },
  {
    id: "4",
    name: "Ibrahim Hassan",
    position: "Treasurer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop",
    faculty: "School of Business",
    slogan: "Fiscal Responsibility & Transparency",
    manifesto: "I am committed to ensuring transparent financial management of student resources. By implementing open budgeting processes and regular financial reports, I will build trust and ensure resources are allocated effectively.",
    bio: "Ibrahim is a fourth-year Finance student with experience in budgeting and financial analysis. He has served as the treasurer for multiple student organizations and is known for his attention to detail and integrity.",
    agenda: [
      "Implement an online portal for real-time budget tracking",
      "Publish quarterly financial reports accessible to all students",
      "Establish a student finance committee with representatives from all faculties",
      "Create a financial literacy program for student organizations",
      "Develop a sustainable funding model for student initiatives"
    ],
    socials: {
      instagram: "https://instagram.com/ibrahimhassan",
      facebook: "https://facebook.com/ibrahimhassan",
      email: "ibrahim.hassan@student.jkuat.ac.ke"
    }
  },
  {
    id: "5",
    name: "Sam Wilson",
    position: "Academic Secretary",
    image: profileImages.falcon,
    faculty: "School of Medicine",
    slogan: "Excellence in Education",
    manifesto: "I am passionate about enhancing the academic experience at JKUAT. My focus will be on creating resources for academic success, facilitating mentorship opportunities, and advocating for curriculum improvements.",
    bio: "Faith is a third-year Medical student with a strong academic record. She has worked as a peer tutor and academic mentor, helping fellow students navigate challenging courses and develop effective study strategies.",
    agenda: [
      "Create a peer tutoring network across all faculties",
      "Establish a digital repository of study resources and past papers",
      "Organize regular academic workshops and skill-building sessions",
      "Develop an alumni mentorship program for career guidance",
      "Advocate for curriculum reviews and improvements"
    ],
    socials: {
      twitter: "https://twitter.com/faithnjeri",
      instagram: "https://instagram.com/faithnjeri",
      email: "faith.njeri@student.jkuat.ac.ke"
    }
  },
  // {
  //   id: "6",
  //   name: "Samuel Maina",
  //   position: "Sports & Culture Secretary",
  //   image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=2787&auto=format&fit=crop",
  //   faculty: "School of Physical Education",
  //   slogan: "Uniting Through Sports & Culture",
  //   manifesto: "I believe in the power of sports and cultural activities to build community and showcase talent. My plan focuses on revitalizing campus sports facilities, expanding cultural exhibitions, and creating inclusive events for all students.",
  //   bio: "Samuel is a fourth-year Physical Education student and has been an active member of the university's athletics team. He has also organized several successful cultural festivals that celebrated the diversity of the student body.",
  //   agenda: [
  //     "Renovate and improve campus sports facilities",
  //     "Organize inter-faculty sports tournaments with increased participation",
  //     "Launch a cultural exchange program showcasing diverse traditions",
  //     "Establish dedicated funding for cultural clubs and activities",
  //     "Create an annual arts and cultural festival with community involvement"
  //   ],
  //   socials: {
  //     twitter: "https://twitter.com/samuelmaina",
  //     instagram: "https://instagram.com/samuelmaina",
  //     facebook: "https://facebook.com/samuelmaina",
  //     email: "samuel.maina@student.jkuat.ac.ke"
  //   }
  // }
];

export const getCandidate = (id: string): Candidate | undefined => {
  return candidates.find(candidate => candidate.id === id);
};
