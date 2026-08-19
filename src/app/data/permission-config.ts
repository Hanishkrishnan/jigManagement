import { Permission } from "./permission";

export interface PermissionConfig{
    permission : Permission[];
    mode : 'all' | 'any'
}