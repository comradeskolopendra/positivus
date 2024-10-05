import { Home } from "@/pages";
import { FC } from "react";
import { WithDeviceTracking } from "@/app/hocs"


const App: FC = () => {
    return (
        <>
            <WithDeviceTracking>
                <Home />
            </WithDeviceTracking>
        </>
    );
};

export default App;