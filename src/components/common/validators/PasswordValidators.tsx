export interface passwordTestProps {
  message: string;
  isValid: boolean;
}
export const isPasswordValid = (password: string): passwordTestProps => {
  const passwordTest: passwordTestProps = {
    message: '',
    isValid: false,
  };
  if (password.length < 8) {
    passwordTest.message = 'Password must be at least 8 characters';
    passwordTest.isValid = false;
    return passwordTest;
  }

  const strongPassword = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );

  if (!strongPassword.test(password)) {
    passwordTest.message =
      'Password must contain atleast 1 special character 1 cap 1 number';
    passwordTest.isValid = false;
    return passwordTest;
  }
  return passwordTest;
};
