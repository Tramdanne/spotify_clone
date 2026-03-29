import type { RegisterFormState } from "@/types/auth-register";

export const REGISTER_MONTH_VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
] as const;

export const REGISTER_GENDER_VALUES = [
  "male",
  "female",
  "nonBinary",
  "other",
  "preferNotSay",
] as const;

export const INITIAL_REGISTER_FORM: RegisterFormState = {
  email: "",
  password: "",
  name: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  gender: "",
  marketingOptOut: false,
  shareData: false,
};
