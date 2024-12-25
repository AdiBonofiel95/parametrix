import { Status } from "../types/types";


const generateDataCenterStatus: () => Status = () => {
    const random = Math.random() * 100;

    if (random < 88) {
        return Status.Online; 
    } else if (random < 95) {
        return Status.Degraded;
    }
    return Status.Offline; 
}

export default generateDataCenterStatus;