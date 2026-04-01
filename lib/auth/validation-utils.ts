import { z } from "zod";

/**
 * Type-safe result from Zod's safeParse
 */
export type SafeParseResult<T> = Awaited<
  ReturnType<z.ZodSchema["safeParseAsync"]>
>;

/**
 * Extract and format errors from Zod validation results
 * @param result - The result from zod schema.safeParse()
 * @param customMessages - Optional custom error messages mapping field paths to messages
 * @returns Object with field paths as keys and error messages as values
 */
export function extractErrors(
  result: {
    success: boolean;
    error?: { issues: z.ZodIssue[] };
  },
  customMessages?: Record<string, string>,
): Record<string, string> {
  if (result.success || !result.error) {
    return {};
  }

  const errors: Record<string, string> = {};
  result.error.issues.forEach((issue: z.ZodIssue) => {
    const path = issue.path.join(".");
    if (path) {
      errors[path] = customMessages?.[path] ?? issue.message;
    }
  });
  return errors;
}

/**
 * Type-safe wrapper to ensure we're using the correct ZodError format
 */
export function isZodError(error: unknown): error is z.ZodError {
  return error instanceof z.ZodError;
}
