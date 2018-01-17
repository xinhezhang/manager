import { EMPLOYEE_UPDATE } from './types';

export const employeeUpdate = ({ key, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { key, value },
  };
};
