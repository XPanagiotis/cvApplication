export default function Input({ inputType, label, placeHolder, id }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={inputType} placeholder={placeHolder} name={label} id={id} />
    </div>
  );
}
