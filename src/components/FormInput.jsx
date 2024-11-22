function FormInput({ label, name, type, defaultValue }) {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        className="input input-bordered"
        defaultValue={defaultValue}
        name={name}
      />
    </div>
  );
}
export default FormInput;
