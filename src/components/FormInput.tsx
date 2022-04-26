export interface IFormInput {
  id?: string;
  name: string;
  type: string;
  placeholder: string;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  value: string | number;
  error: string;
  label?: string;
  required?: boolean;
}

const FormInput = (props: IFormInput) => {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    onBlur,
    className,
    value,
    error,
    label,
    required,
  } = props;

  return (
    <div className='form-group'>
      <label htmlFor={name} className='d-flex'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        className={`shadow-none ${className}`}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete='false'
        style={{ border: error ? 'solid 1px red' : '', fontSize: '0.9rem' }}
      />
      {error ? (
        <small style={{ color: 'red', fontSize: '10px', float: 'left' }}>
          {error}
        </small>
      ) : (
        ''
      )}
    </div>
  );
};

FormInput.defaultProps = {
  type: 'text',
  className: '',
};

export { FormInput };
