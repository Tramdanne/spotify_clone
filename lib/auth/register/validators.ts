import type {
  RegisterFieldErrors,
  RegisterFormState,
  RegisterStage,
} from "@/types/auth-register";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function isStrongPassword(value: string) {
  const trimmed = value.trim();
  const hasLength = trimmed.length >= 10;
  const hasLetter = /[A-Za-zÀ-ỹա-ωΑ-Ω]/.test(trimmed);
  const hasNumberOrSpecial = /[\d#?!&@$%^*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(trimmed);

  return hasLength && hasLetter && hasNumberOrSpecial;
}

function isValidBirthDate(day: string, month: string, year: string) {
  const dayNumber = Number(day);
  const monthNumber = Number(month);
  const yearNumber = Number(year);

  if (!dayNumber || !monthNumber || !yearNumber) {
    return false;
  }

  const birthDate = new Date(yearNumber, monthNumber - 1, dayNumber);

  const matchesDate =
    birthDate.getFullYear() === yearNumber &&
    birthDate.getMonth() === monthNumber - 1 &&
    birthDate.getDate() === dayNumber;

  if (!matchesDate) {
    return false;
  }

  const today = new Date();
  const minAgeDate = new Date(today.getFullYear() - 13, today.getMonth(), today.getDate());

  return birthDate <= minAgeDate;
}

export function validateIntroStep(values: RegisterFormState) {
  const errors: RegisterFieldErrors = {};

  if (!values.email.trim()) {
    errors.email = "Vui lòng nhập email của bạn.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Email không hợp lệ.";
  }

  return errors;
}

export function validatePasswordStep(values: RegisterFormState) {
  const errors: RegisterFieldErrors = {};

  if (!values.password.trim()) {
    errors.password = "Vui lòng tạo mật khẩu.";
  } else if (!isStrongPassword(values.password)) {
    errors.password = "Mật khẩu chưa đáp ứng yêu cầu tối thiểu.";
  }

  return errors;
}

export function validateProfileStep(values: RegisterFormState) {
  const errors: RegisterFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Vui lòng nhập tên của bạn.";
  }

  if (!values.birthDay.trim()) {
    errors.birthDay = "Vui lòng nhập ngày sinh.";
  }

  if (!values.birthMonth.trim()) {
    errors.birthMonth = "Vui lòng chọn tháng sinh.";
  }

  if (!values.birthYear.trim()) {
    errors.birthYear = "Vui lòng nhập năm sinh.";
  }

  if (
    values.birthDay.trim() &&
    values.birthMonth.trim() &&
    values.birthYear.trim() &&
    !isValidBirthDate(values.birthDay, values.birthMonth, values.birthYear)
  ) {
    errors.birthYear = "Ngày sinh không hợp lệ hoặc chưa đủ tuổi.";
  }

  if (!values.gender) {
    errors.gender = "Vui lòng chọn giới tính.";
  }

  return errors;
}

export function getRegisterErrorsForStage(
  stage: RegisterStage,
  values: RegisterFormState,
) {
  switch (stage) {
    case "intro":
      return validateIntroStep(values);
    case 1:
      return validatePasswordStep(values);
    case 2:
      return validateProfileStep(values);
    default:
      return {};
  }
}
