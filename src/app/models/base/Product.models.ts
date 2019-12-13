import { Technology } from './Technology.models';
import { Target } from './Target.models';

export interface Products {
 id: number;
 name: string;
 description: string;
 valuel: number;
 active: boolean;
 targets: Target[];
 technologies: Technology[];
}
