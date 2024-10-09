import { request } from "@/shared/helpers/helpers";
import { makeAutoObservable, runInAction } from "mobx";
import type {
    IEmailFormState,
    IEmployee,
    IEmployeeState,
    IRegisteredContact,
    IService,
    IServiceState
} from "./model/types";
import { mockAPI } from "@/shared/mock/mock";

class HomeStore {
    constructor() {
        makeAutoObservable(this);
    }

    private _employees: IEmployeeState = {
        data: [],
        isLoading: true,
        isError: false
    };

    private _services: IServiceState = {
        data: [],
        isLoading: true,
        isError: false
    };

    get employes() {
        return this._employees;
    }

    get services() {
        return this._services;
    }

    sendEmailData = async (form: IEmailFormState) => {
        try {
            await request<IRegisteredContact>("mail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
        } catch (error) {
            console.log("send Email Data", error)
        }
    };

    getEmployees = async () => {
        try {
            // const data = await request<IEmployee[]>("employees"); // db.json api
            const data = await mockAPI.getEmployeesMock(); // mock api
            runInAction(() => {
                this._employees = {
                    data,
                    isLoading: false,
                    isError: false
                };
            })
        } catch (error) {
            console.log(`getEmployees ${error}`);
            runInAction(() => {
                this._employees = {
                    ...this._employees,
                    isError: true,
                    isLoading: false
                }
            })
        }
    }

    getServices = async () => {
        try {
            // const data = await request<IService[]>("services"); // db.json api
            const data = await mockAPI.getServicesMock(); // mock api
            runInAction(() => {
                this._services = {
                    data,
                    isLoading: false,
                    isError: false
                };
            })
        } catch (error) {
            console.log(`getServices ${error}`);
            runInAction(() => {
                this._services = {
                    ...this._services,
                    isError: true,
                    isLoading: false
                }
            })
        }
    };
}

const HomeState = new HomeStore();

export default HomeState;