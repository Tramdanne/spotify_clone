import { z } from "zod";

const emailSchema = z.string().email();
const phoneSchema = z.string().regex(/^[0-9+()\s-]{8,15}$/);

export const loginEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email")
    .email("Email không hợp lệ")
    .refine((value) => value.toLowerCase().endsWith("@gmail.com"), {
      message: "Gmail phải là Gmail",
    }),
});

export const loginOtpSchema = z.object({
  otpDigits: z
    .array(z.string().regex(/^\d$/, "Mỗi chữ số phải là số"))
    .min(6, "OTP phải có 6 chữ số")
    .max(6, "OTP phải có 6 chữ số"),
});

export const loginPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email")
    .email("Email không hợp lệ")
    .refine((value) => value.toLowerCase().endsWith("@gmail.com"), {
      message: "Email phải là Gmail",
    }),
  password: z.string().trim().min(1, "Vui lòng nhập mật khẩu"),
});

export const loginIdentifierSchema = z.object({
  identifier: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email hoặc số điện thoại")
    .refine(
      (value) =>
        emailSchema.safeParse(value).success ||
        phoneSchema.safeParse(value).success,
      "Email hoặc số điện thoại không hợp lệ",
    ),
});

export type LoginEmailInput = z.infer<typeof loginEmailSchema>;
export type LoginOtpInput = z.infer<typeof loginOtpSchema>;
export type LoginPasswordInput = z.infer<typeof loginPasswordSchema>;
export type LoginIdentifierInput = z.infer<typeof loginIdentifierSchema>;
