import React from "react";

interface CheckboxOption {
  id: string;
  label: string;
  value: string;
}

type CheckboxToggleProps = {
  options: CheckboxOption[];
  name: string;
  values: string[];
  onChange: (values: string[]) => void;
};

const CheckboxToggle: React.FC<CheckboxToggleProps> = ({
  options,
  name,
  values,
  onChange,
}) => {
  const handleToggle = (value: string) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, value: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle(value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {options.map((option) => {
        const isChecked = values.includes(option.value);
        return (
          <label
            key={option.id}
            htmlFor={option.id}
            className={`flex items-center gap-3 px-4 py-2 rounded-full border-2 cursor-pointer transition-all w-max ${
              isChecked
                ? "bg-white border-[#1563ff]"
                : "bg-white border-gray-400"
            }`}
            tabIndex={0}
            role="checkbox"
            aria-checked={isChecked}
            onKeyDown={(e) => handleKeyDown(e, option.value)}
          >
            <div
              className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                isChecked
                  ? "border-[#1563ff] bg-[#1563ff]"
                  : "border-gray-400 bg-white"
              }`}
            >
              {isChecked && (
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                isChecked ? "text-[#1563ff]" : "text-gray-600"
              }`}
            >
              {option.label}
            </span>
            <input
              type="checkbox"
              id={option.id}
              name={name}
              value={option.value}
              checked={isChecked}
              onChange={() => handleToggle(option.value)}
              className="sr-only"
            />
          </label>
        );
      })}
    </div>
  );
};

export default CheckboxToggle;
