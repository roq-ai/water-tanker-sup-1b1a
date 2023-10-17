import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OperationsManagerInterface {
  id?: string;
  department: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface OperationsManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  department?: string;
  user_id?: string;
}
