export interface IEmployee {
    name: string;
    photo: string;
    position: string;
    link: string;
    about: string;
}

export interface IService {
    name: string;
    link: string;
    image: string;
    variant: "dark" | "light" | "primary";
    titleVariant: "dark" | "light" | "primary";
}

export interface IServiceState {
    isLoading: boolean;
    isError: boolean;
    data: IService[];
}

export interface IEmployeeState {
    isLoading: boolean;
    isError: boolean;
    data: IEmployee[];
}

export interface IEmailFormState {
    message: string;
    email: string;
    name?: string;
}

export interface IRegisteredContact extends IEmailFormState {
    name: string;
    id: string;
    typeOfContact: "Say Hi" | "Get a Quote";
}