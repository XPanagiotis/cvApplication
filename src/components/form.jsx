import "../styles/form.css";

export default function Form({ inputs }) {
  return (
    <form className="form profile-form">
      {inputs.map((input) => (
        <div key={input.id} className="form-group">
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.inputType}
            id={input.id}
            placeholder={input.placeHolder}
          />
        </div>
      ))}
    </form>
  );
}
