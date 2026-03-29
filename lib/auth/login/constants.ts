import type { LoginFormState, LoginProviderOption } from "@/types/auth-login";

export const LOGIN_OTP_LENGTH = 6;

export const INITIAL_LOGIN_FORM: LoginFormState = {
  email: "",
  otpDigits: Array.from({ length: LOGIN_OTP_LENGTH }, () => ""),
  password: "",
};

export const LOGIN_PROVIDER_VALUES: LoginProviderOption[] = [
  { value: "phone", label: "phone" },
  { value: "google", label: "google" },
  { value: "facebook", label: "facebook" },
];
