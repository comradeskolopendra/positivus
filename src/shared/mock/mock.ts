import { IEmployee, IService } from "@/entities/home/model/types";

const employees: IEmployee[] = [
    {
        "name": "Jonh Smith",
        "position": "CEO and Founder",
        "photo": "assets/team/john.png",
        "about": "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        "link": "#",
    },
    {
        "name": "Jane Doe",
        "position": "Director of Operations",
        "photo": "assets/team/jane.png",
        "about": "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        "link": "#",
    },
    {
        "name": "Michael Brown",
        "position": "Senior SEO Specialist",
        "photo": "assets/team/michael.png",
        "about": "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        "link": "#",
    },
    {
        "name": "Emily Johnson",
        "position": "PPC Manager",
        "photo": "assets/team/emily.png",
        "about": "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        "link": "#",
    },
    {
        "name": "Brian Williams",
        "position": "Social Media Specialist",
        "photo": "assets/team/brian.png",
        "about": "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        "link": "#",
    },
    {
        "name": "Sarah Kim",
        "position": "Content Creator",
        "photo": "assets/team/sarah.png",
        "about": "2+ years of experience in writing and editing <br/> Skilled in creating compelling, SEO- optimized content for various industries",
        "link": "#",
    }
];

const services: IService[] = [
    {
        "image": "assets/services/seo.png",
        "name": "Search engine * optimization",
        "link": "/",
        "variant": "light",
        "titleVariant": "primary",
    },
    {
        "image": "assets/services/ppc-ad.png",
        "name": "Pay-per-click * advertising",
        "link": "/",
        "variant": "primary",
        "titleVariant": "light",
    },
    {
        "image": "assets/services/smm.png",
        "name": "Social Media * Marketing",
        "link": "/",
        "variant": "dark",
        "titleVariant": "light",
    },
    {
        "image": "assets/services/emailing.png",
        "name": "Email * Marketing",
        "link": "/",
        "variant": "light",
        "titleVariant": "primary",
    },
    {
        "image": "assets/services/content-creation.png",
        "name": "Content * Creation",
        "link": "/",
        "variant": "primary",
        "titleVariant": "light",
    },
    {
        "image": "assets/services/analytics.png",
        "name": "Analytics * and Tracking",
        "link": "/",
        "variant": "dark",
        "titleVariant": "primary",
    }
];

export const mockAPI = {
    getEmployeesMock: (): Promise<IEmployee[]> => {
        return new Promise((resolve, reject) => setTimeout(() => { resolve(employees) }, 1000));
    },
    getServicesMock: (): Promise<IService[]> => {
        return new Promise((resolve, reject) => setTimeout(() => { resolve(services) }, 1000))
    }
} 