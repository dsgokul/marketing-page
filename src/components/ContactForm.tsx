import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect, useMemo } from "react";

import RadioGroup from "./ui/RadioToggle";
import Input from "./ui/Input";
import TextArea from "./ui/TextArea";
import CheckboxGroup from "./ui/CheckboxGroup";

import { formSchema } from "../validation/formSchemaValidation";
import { submitForm } from "@/api/submitForm";
import { CHECK } from "../consts";

const ContactForm = () => {
  // Memoize static options to prevent recreation
  const typeOptions = useMemo(
    () => [
      { id: "industry", value: "industry", label: "Industry" },
      { id: "college", value: "college", label: "College" },
    ],
    []
  );

  const productTypeOptions = useMemo(
    () => [
      {
        id: "capability-consulting",
        value: "consulting",
        label: "Capability Consulting",
      },
      {
        id: "learning-experience-platform",
        value: "learningPlatform",
        label: "Learning Experience Platform",
      },
    ],
    []
  );

  // State management
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);

  // Memoize resolver to prevent recreation
  const resolver = useMemo(() => zodResolver(formSchema), []);

  // Default values constant to prevent recreation
  const defaultValues = useMemo(
    () => ({
      type: "industry" as const,
      organizationName: "",
      email: "",
      phoneNumber: "",
      productType: [] as string[],
      message: "",
    }),
    []
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver,
    mode: "onSubmit",
    defaultValues,
  });

  const type = watch("type");

  // Mark form as ready after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormReady(true);
    }, 50); // Minimal delay to ensure RHF is initialized

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: typeof formSchema._type) => {
    try {
      console.log("Form submitted:", data);
      const response = await submitForm(data);

      if (response.status === 201) {
        setIsSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Loading skeleton component
  const FormSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="h-10 bg-gray-200 rounded mb-4"></div>
      <div className="h-10 bg-gray-200 rounded mb-4"></div>
      <div className="h-10 bg-gray-200 rounded mb-4"></div>
      <div className="h-20 bg-gray-200 rounded mb-4"></div>
      <div className="h-10 bg-gray-200 rounded w-24"></div>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full">
      <div className="bg-white rounded-2xl h-auto w-full max-w-2xl border border-[#d6e3ff] p-8 text-[#4c5967]">
        <div className="mb-6">
          <span className="text-[#002166] text-2xl font-semibold">
            Tell us about your details
          </span>
        </div>

        {/* Show skeleton while form is initializing */}
        {!isFormReady ? (
          <FormSkeleton />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset disabled={!isFormReady || isSubmitting}>
              <div className="flex flex-col gap-3 mb-5">
                <span className="font-medium">Who are you?</span>
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      name="type"
                      options={typeOptions}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
                />
              </div>

              <div className="flex flex-col gap-5 mb-5">
                <Controller
                  name="organizationName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id={type === "industry" ? "companyName" : "collegeName"}
                      type="text"
                      label={
                        type === "industry"
                          ? "Company Name *"
                          : "College Name *"
                      }
                      value={field.value ?? ""}
                      error={errors.organizationName?.message}
                    />
                  )}
                />

                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      label="Email Id *"
                      error={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="phone"
                      type="tel"
                      label="Phone Number *"
                      error={errors.phoneNumber?.message}
                    />
                  )}
                />
              </div>

              {type === "industry" && (
                <div className="flex flex-col gap-3 mb-5">
                  <span className="font-medium">
                    What product are you interested in?
                  </span>
                  <Controller
                    name="productType"
                    control={control}
                    render={({ field }) => (
                      <CheckboxGroup
                        name="productType"
                        options={productTypeOptions}
                        values={field.value ?? []}
                        onChange={field.onChange}
                      />
                    )}
                  />
                </div>
              )}

              <div className="mb-6">
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      id="message"
                      label="How can we help? *"
                      maxLength={500}
                      error={errors.message?.message}
                    />
                  )}
                />
              </div>

              <button
                type="submit"
                disabled={!isFormReady || isSubmitting}
                className={`text-white py-3 px-6 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium cursor-pointer ${
                  isSubmitted ? "bg-[#27ae60]" : "bg-[#1563ff]"
                }`}
              >
                {isSubmitted ? (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5em",
                    }}
                  >
                    Submitted <img src={CHECK.src} alt="checkmark" />
                  </span>
                ) : isSubmitting ? (
                  "Submitting..."
                ) : isFormReady ? (
                  "Submit"
                ) : (
                  "Loading..."
                )}
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
