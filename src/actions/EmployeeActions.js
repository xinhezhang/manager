import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
} from './types';

export const employeeUpdate = ({ key, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { key, value },
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
  return {
    type: EMPLOYEE_CREATE,
    payload: { name, phone, shift },
  };
};
