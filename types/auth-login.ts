export type LoginStage = "intro" | "otp" | "password";

export type LoginProvider = "phone" | "google" | "facebook";

export type LoginFormState = {
  email: string;
  otpDigits: string[];
  password: string;
};

export type LoginFieldErrors = Partial<
  Record<"email" | "otpDigits" | "password", string>
>;

export type LoginProviderOption = {
  value: LoginProvider;
  label: string;
};

export type LoginOtpRequirement = {
  value: string;
};
