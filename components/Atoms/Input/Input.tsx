import { Controller } from "react-hook-form";
import styles from "./Input.module.css";

interface IInput {
  type?: string;
  name: string;
  label: string;
  control: any;
  error: any;
}

export const Input = ({ error, control, label, name, type = "text" }: IInput) => {
  return (
    <div className={styles.container}>
      <label className={styles.labelInput} htmlFor="name">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            id={name}
            className={styles.inputForm}
            type={type}
          />
        )}
      />
      {error[name] && <p className={styles.error}>{error[name].message}</p>}
    </div>
  );
};
