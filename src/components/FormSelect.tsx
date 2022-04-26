export interface IOptions {
  value: string;
  name: string;
}

export interface IFormSelect {
  id?: string;
  name: string;
  placeholder?: string;
  options: IOptions[];
  onChange?: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: ({ target }: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value: string;
  error: string;
  label?: string;
  required?: boolean;
}

const FormSelect = (props: IFormSelect) => {
  const {
    id,
    name,
    options,
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
      <label htmlFor={name} className='d-flex label'>
        {label}
      </label>
      <select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        className={`custom-select shadow-none ${className ? className : ''}`}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete='false'
        style={{ border: error ? 'solid 1px red' : '', fontSize: '0.9rem' }}
      >
        <option value=''>{placeholder}</option>
        {options.map((option): any => {
          return (
            <option value={option.value} key={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
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

export { FormSelect };
