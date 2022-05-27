import { SHOW_DASHBOARD } from './HomeType';

export const showDashboard = (set) => {
    return {
        type: SHOW_DASHBOARD,
        setDashboard: set
    }
}