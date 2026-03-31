import { z } from "zod";

const monthOptions = [
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

export const registerEmailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Vui lòng nhập email")
    .email("Email không hợp lệ")
    .refine((value) => value.toLowerCase().endsWith("@gmail.com"), {
      message: "Email phải kết thúc bằng @gmail.com",
    }),
});

export const registerPasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(10, "Mật khẩu phải có ít nhất 10 ký tự")
    .refine((value) => /[A-Za-z]/.test(value), {
      message: "Mật khẩu phải có ít nhất 1 chữ cái",
    })
    .refine(
      (value) => /[0-9#?!&@$%^*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(value),
      {
        message: "Mật khẩu phải có ít nhất 1 số hoặc ký tự đặc biệt",
      },
    ),
});

export const registerProfileSchema = z
  .object({
    name: z.string().trim().min(1, "Vui lòng nhập tên"),
    day: z
      .string()
      .trim()
      .regex(/^\d{1,2}$/, "Ngày không hợp lệ"),
    month: z.enum(monthOptions, {
      message: "Vui lòng chọn tháng",
    }),
    year: z
      .string()
      .trim()
      .regex(/^\d{4}$/, "Năm không hợp lệ"),
    gender: z.string().trim().min(1, "Vui lòng chọn giới tính"),
  })

  .superRefine((data, ctx) => {
    const day = Number(data.day);
    const year = Number(data.year);
    const monthIndex = monthOptions.indexOf(data.month) + 1;

    const date = new Date(year, monthIndex - 1, day);

    const isValidDate =
      date.getFullYear() === year &&
      date.getMonth() === monthIndex - 1 &&
      date.getDate() === day;

    if (!isValidDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["day"],
        message: "Ngày sinh không hợp lệ",
      });
      return;
    }

    const today = new Date();
    const minAgeDate = new Date(
      today.getFullYear() - 13,
      today.getMonth(),
      today.getDate(),
    );

    if (date > minAgeDate) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["year"],
        message: "Bạn phải ít nhất 13 tuổi",
      });
    }
  });

export const registerConsentSchema = z.object({
  marketingOptOut: z.boolean(),
  shareData: z.boolean(),
});

export type RegisterEmailInput = z.infer<typeof registerEmailSchema>;
export type RegisterPasswordInput = z.infer<typeof registerPasswordSchema>;
export type RegisterProfileInput = z.infer<typeof registerProfileSchema>;
export type RegisterConsentInput = z.infer<typeof registerConsentSchema>;
