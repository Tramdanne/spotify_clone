export type RegisterStage = "intro" | 1 | 2 | 3;

export type RegisterGender =
  | "male"
  | "female"
  | "nonBinary"
  | "other"
  | "preferNotSay"
  | "";

export type RegisterFormState = {
  email: string;
  password: string;
  name: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: RegisterGender;
  marketingOptOut: boolean;
  shareData: boolean;
};

export type RegisterFieldErrors = Partial<
  Record<
    | "email"
    | "password"
    | "name"
    | "birthDay"
    | "birthMonth"
    | "birthYear"
    | "gender",
    string
  >
>;

export type RegisterMonthOption = {
  value: string;
  label: string;
};

export type RegisterGenderOption = {
  value: Exclude<RegisterGender, "">;
  label: string;
};

export type RegisterPasswordRequirement = {
  label: string;
  met: boolean;
};
