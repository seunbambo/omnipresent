export interface IEmployee {
  data: {
    country: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    holidayAllowance: number | string;
    maritalStatus: string;
    socialInsuranceNumber: number | string;
    numberOfChildren: number | string;
    workingHours: string;
  };
}

export interface IEmployeeError {
  countryError: string;
  firstNameError: string;
  lastNameError: string;
  dateOfBirthError: string;
  holidayAllowanceError: string;
  maritalStatusError: string;
  socialInsuranceNumberError: string;
  numberOfChildrenError: string;
  workingHoursError: string;
}

export const validateInputs = (
  employeeData: IEmployee['data'],
  setError: (arg0: IEmployeeError) => void
) => {
  const {
    country,
    firstName,
    lastName,
    dateOfBirth,
    holidayAllowance,
    maritalStatus,
    socialInsuranceNumber,
    numberOfChildren,
    workingHours,
  } = employeeData;

  let errorMsg = {
    countryError: '',
    firstNameError: '',
    lastNameError: '',
    dateOfBirthError: '',
    holidayAllowanceError: '',
    maritalStatusError: '',
    socialInsuranceNumberError: '',
    numberOfChildrenError: '',
    workingHoursError: '',
  };
  let formValid = true;

  if (!country) {
    formValid = false;
    errorMsg.countryError = 'Please enter country.';
  }

  if (!firstName) {
    formValid = false;
    errorMsg.firstNameError = 'Please enter first name.';
  }

  if (!lastName) {
    formValid = false;
    errorMsg.lastNameError = 'Please enter last name.';
  }

  if (!dateOfBirth) {
    formValid = false;
    errorMsg.dateOfBirthError = 'Please enter date of birth.';
  }

  if (!holidayAllowance) {
    formValid = false;
    errorMsg.holidayAllowanceError = 'Please enter holiday allowance.';
  }

  if (country === 'Spain' && holidayAllowance < 30) {
    formValid = false;
    errorMsg.holidayAllowanceError =
      'Holiday allowance cannot be less than 30 days.';
  }

  if (country === 'Brazil' && holidayAllowance > 40) {
    formValid = false;
    errorMsg.holidayAllowanceError =
      'Holiday allowance cannot be greater than 40 days.';
  }

  if (!maritalStatus) {
    formValid = false;
    errorMsg.maritalStatusError = 'Please enter marital status.';
  }

  if (!socialInsuranceNumber) {
    formValid = false;
    errorMsg.socialInsuranceNumberError =
      'Please enter social insurance number.';
  }

  if (!numberOfChildren) {
    formValid = false;
    errorMsg.numberOfChildrenError = 'Please enter number of children.';
  }

  if (!workingHours) {
    formValid = false;
    errorMsg.workingHoursError = 'Please enter working hours.';
  }

  setError(errorMsg);

  return formValid;
};
