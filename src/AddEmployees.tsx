import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { FormInput } from './components/FormInput';
import { FormSelect } from './components/FormSelect';
import {
  countryOptions,
  maritalStatusOptions,
  workingHoursOptions,
} from './helpers/OptionsData';
import { IEmployee, validateInputs } from './helpers/Validation';

const AddEmployees = () => {
  const [employee, setEmployee] = useState<IEmployee>({
    data: {
      country: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      holidayAllowance: '',
      maritalStatus: '',
      socialInsuranceNumber: '',
      numberOfChildren: '',
      workingHours: '',
    },
  });

  const [error, setError] = useState({
    countryError: '',
    firstNameError: '',
    lastNameError: '',
    dateOfBirthError: '',
    holidayAllowanceError: '',
    maritalStatusError: '',
    socialInsuranceNumberError: '',
    numberOfChildrenError: '',
    workingHoursError: '',
  });

  const [isValid, setIsValid] = useState(false);

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
  } = employee.data;

  const {
    countryError,
    firstNameError,
    lastNameError,
    dateOfBirthError,
    holidayAllowanceError,
    maritalStatusError,
    socialInsuranceNumberError,
    numberOfChildrenError,
    workingHoursError,
  } = error;

  useEffect(() => {
    if (
      country === 'Spain' &&
      firstNameError === '' &&
      lastNameError === '' &&
      dateOfBirthError === '' &&
      holidayAllowanceError === '' &&
      maritalStatusError === '' &&
      socialInsuranceNumberError === ''
    ) {
      setIsValid(true);
    } else if (
      country === 'Ghana' &&
      firstNameError === '' &&
      lastNameError === '' &&
      dateOfBirthError === '' &&
      holidayAllowanceError === '' &&
      maritalStatusError === '' &&
      numberOfChildrenError === ''
    ) {
      setIsValid(true);
    } else if (
      country === 'Brazil' &&
      firstNameError === '' &&
      lastNameError === '' &&
      dateOfBirthError === '' &&
      holidayAllowanceError === '' &&
      workingHoursError === ''
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    country,
    firstNameError,
    lastNameError,
    dateOfBirthError,
    holidayAllowanceError,
    maritalStatusError,
    socialInsuranceNumberError,
    numberOfChildrenError,
    workingHoursError,
  ]);

  useEffect(() => {
    validateInputs(employee.data, setError);
  }, [employee]);

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    employee.data.holidayAllowance = Number(employee.data.holidayAllowance);
    employee.data.numberOfChildren = Number(employee.data.numberOfChildren);

    if (isValid) {
      console.log('Employee Data:', employee.data);
    }
  };

  const onChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    const { data } = employee;
    setEmployee({
      data: {
        ...data,
        [name]: value,
      },
    });
  };

  return (
    <div className='container'>
      <div className='col-md-5 mx-auto mt-5'>
        <form>
          <h3 className='my-5 text-center'>Register Employee</h3>
          <FormSelect
            name='country'
            placeholder='Enter Country'
            label='Country'
            options={countryOptions}
            onChange={onChange}
            value={country}
            error={countryError}
          />

          <FormInput
            type='text'
            name='firstName'
            label='First Name'
            className='form-control'
            placeholder='Enter First Name'
            value={firstName}
            error={firstNameError}
            onChange={onChange}
          />

          <FormInput
            type='text'
            name='lastName'
            label='Last Name'
            className='form-control'
            placeholder='Enter Last Name'
            value={lastName}
            error={lastNameError}
            onChange={onChange}
          />

          <FormInput
            type='date'
            name='dateOfBirth'
            label='Date Of Birth'
            className='form-control'
            placeholder='Enter Date Of Birth'
            value={dateOfBirth}
            error={dateOfBirthError}
            onChange={onChange}
          />

          <FormInput
            type='number'
            name='holidayAllowance'
            label='Holiday Allowance'
            className='form-control'
            placeholder='Enter Holiday Allowance'
            value={holidayAllowance}
            error={holidayAllowanceError}
            onChange={onChange}
          />

          {country === 'Spain' ? (
            <>
              <FormSelect
                name='maritalStatus'
                placeholder='Enter Marital Status'
                label='Marital Status'
                options={maritalStatusOptions}
                onChange={onChange}
                value={maritalStatus}
                error={maritalStatusError}
              />

              <FormInput
                type='number'
                name='socialInsuranceNumber'
                label='Social Insurance Number'
                className='form-control'
                placeholder='Enter Social Insurance Number'
                value={socialInsuranceNumber}
                error={socialInsuranceNumberError}
                onChange={onChange}
              />
            </>
          ) : (
            ''
          )}

          {country === 'Ghana' ? (
            <>
              <FormSelect
                name='maritalStatus'
                placeholder='Enter Marital Status'
                label='Marital Status'
                options={maritalStatusOptions}
                onChange={onChange}
                value={maritalStatus}
                error={maritalStatusError}
              />

              <FormInput
                type='number'
                name='numberOfChildren'
                label='Number Of Children'
                className='form-control'
                placeholder='Enter Number Of Children'
                value={numberOfChildren}
                error={numberOfChildrenError}
                onChange={onChange}
              />
            </>
          ) : (
            ''
          )}

          {country === 'Brazil' ? (
            <>
              <FormSelect
                name='workingHours'
                placeholder='Enter Working Hours'
                label='Working Hours'
                options={workingHoursOptions}
                onChange={onChange}
                value={workingHours}
                error={workingHoursError}
              />
            </>
          ) : (
            ''
          )}

          <Button
            className='d-flex btn btn-primary my-4'
            label='Submit'
            handleClick={onSubmit}
            type='submit'
            disabled={!isValid}
          />
        </form>
      </div>
    </div>
  );
};

export default AddEmployees;
