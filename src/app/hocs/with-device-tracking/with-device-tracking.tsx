import { DeviceTrackingState } from "@/entities";
import { isMobile } from "@/shared/helpers/helpers";
import { FC, ReactNode, useCallback, useEffect } from "react";

interface WithDeviceTrackingProps {
    children: ReactNode;
}

const WithDeviceTracking: FC<WithDeviceTrackingProps> = ({ children }) => {
    const { setIsMobile } = DeviceTrackingState;

    const handleResize = () => {
        setIsMobile(isMobile());
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return children;
};

export default WithDeviceTracking;