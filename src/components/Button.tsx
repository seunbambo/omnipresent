export interface IButton {
  type: 'button' | 'submit' | 'reset' | undefined;
  className: string;
  label: string;
  handleClick: (e: { preventDefault: () => void }) => void;
  disabled: boolean;
}
const Button = (props: IButton) => {
  const { label, type, className, handleClick, disabled } = props;
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={handleClick}
        disabled={disabled}
      >
        {label}
      </button>
    </>
  );
};

export { Button };
