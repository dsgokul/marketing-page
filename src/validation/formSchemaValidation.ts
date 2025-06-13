import { z } from "zod";
import disposableDomains from "disposable-email-domains";

export const formSchema = z
  .object({
    type: z.enum(["college", "industry"], {
      required_error: "Please select who you are",
    }),
    organizationName: z.string(),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .refine((email) => {
        const domain = email.split("@")[1]?.toLowerCase();
        return !disposableDomains.includes(domain);
      }, "Please use an official email address, temporary emails are not allowed"),
    phoneNumber: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\+?[\d\s\-\(\)]{10}$/, "Please enter a valid phone number"),
    productType: z.array(z.string()).optional(),
    message: z
      .string()
      .min(1, "This field is required")
      .max(500, "Maximum 500 characters allowed"),
  })
  .refine(
    (data) => {
      if (data.type === "industry") {
        return data.organizationName && data.organizationName.trim().length > 0;
      }
      if (data.type === "college") {
        return data.organizationName && data.organizationName.trim().length > 0;
      }
      return true;
    },
    {
      message: "Company name is required for industry professionals",
      path: ["organizationName"],
    }
  )
  .refine(
    (data) => {
      if (data.type === "college") {
        return data.organizationName && data.organizationName.trim().length > 0;
      }
      return true;
    },
    {
      message: "College name is required for colleges",
      path: ["organizationName"],
    }
  )
  .refine(
    (data) => {
      if (data.type === "industry" && data.organizationName) {
        return data.organizationName.length <= 32;
      }
      return true;
    },
    {
      message: "Company name must be 32 characters or less",
      path: ["organizationName"],
    }
  );
