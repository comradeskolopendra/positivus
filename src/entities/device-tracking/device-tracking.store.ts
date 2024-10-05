import { isMobile as getIsMobile } from "@/shared/helpers/helpers";
import { makeAutoObservable } from "mobx";


class DeviceTrackingStore {
    constructor() {
        makeAutoObservable(this);
    }

    private _isMobile = getIsMobile();

    get isMobile() {
        return this._isMobile
    };

    setIsMobile = (value: boolean) => {
        this._isMobile = value;
    }
}

const DeviceTrackingState = new DeviceTrackingStore();

export default DeviceTrackingState;