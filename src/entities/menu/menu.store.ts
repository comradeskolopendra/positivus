import { makeAutoObservable } from "mobx";

class MenuStore {
    constructor() {
        makeAutoObservable(this);
    }

    private _isOpen = false;

    get isOpen() {
        return this._isOpen
    };

    closeMenu = () => {
        this._isOpen = false;
    };

    openMenu = () => {
        this._isOpen = true;
    };
}

const MenuState = new MenuStore();
export default MenuState;