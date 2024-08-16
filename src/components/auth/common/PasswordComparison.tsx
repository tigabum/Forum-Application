import React, { FC } from "react";
import { allowSubmit } from "./Helpers";
import {
  isPasswordValid,
  passwordTestProps,
} from "../../common/validators/PasswordValidators";

export interface passwordComparisonProps {
  dispatch: React.Dispatch<any>;
  password: string;
  passwordConfirm: string;
}

const PasswordComparison: FC<passwordComparisonProps> = ({
  dispatch,
  password,
  passwordConfirm,
}) => {
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "password", payload: e.target.value });
    const validPassword: passwordTestProps = isPasswordValid(password);

    if (!validPassword.isValid) {
      allowSubmit(dispatch, validPassword.message, true);
      return;
    }
    isPasswordMatch(passwordConfirm, password);
  };
  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "passwordConfirm", payload: e.target.value });
    isPasswordMatch(e.target.value, password);
  };

  const isPasswordMatch = (passwordVal: string, confirmPassVal: string) => {
    if (passwordVal !== confirmPassVal) {
      allowSubmit(dispatch, "Password do not match", true);
      return false;
    } else {
      allowSubmit(dispatch, "", false);
      return true;
    }
  };
  return (
    <div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm password"
          value={passwordConfirm}
          onChange={handlePasswordConfirm}
        />
      </div>
    </div>
  );
};

export default PasswordComparison;
