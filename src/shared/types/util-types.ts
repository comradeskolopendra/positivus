import { ReactNode } from "react";

export interface IAccordionItem {
    title: string;
    paragraph: string;
}

export interface CardProps {
    image: string;
    title: ReactNode;
    to: string;
    variant?: "primary" | "dark" | "light";
};

export interface IContactForm {
    name: string;
    email: string;
    message: string;
    typeOfContact: "Say Hi" | "Get a Quote"
}