import style from "./FormInput.module.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className={style.group}>
      {label && <label className={style.formInputLablel}>{label}</label>}
      <input className={style.formInput} {...otherProps} />
    </div>
  );
};

export default FormInput;
