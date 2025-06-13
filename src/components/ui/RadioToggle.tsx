import React from "react";

interface RadioOption {
  id: string;
  label: string;
  value: string;
}

type RadioToggleProps = {
  options: RadioOption[];
  name: string;
  value: string;
  onChange: (value: string) => void;
};

const RadioToggle: React.FC<RadioToggleProps> = ({
  options,
  name,
  value,
  onChange,
}) => {
  const handleChange = (optionValue: string) => {
    onChange(optionValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent, optionValue: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleChange(optionValue);
    }
  };

  return (
    <div className="flex gap-4" role="radiogroup">
      {options.map((option) => (
        <div
          key={option.id}
          className={`flex items-center gap-3 px-4 py-2 rounded-full border-2 cursor-pointer transition-all ${
            option.value === value
              ? "bg-white border-[#1563ff]"
              : "bg-white border-gray-400"
          }`}
          onClick={() => handleChange(option.value)}
          onKeyDown={(e) => handleKeyDown(e, option.value)}
          tabIndex={0}
          role="radio"
          aria-checked={option.value === value}
        >
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              option.value === value
                ? "border-[#1563ff] bg-[#1563ff]"
                : "border-gray-400 bg-white"
            }`}
          >
            {option.value === value && (
              <div className="w-2 h-2 rounded-full bg-white"></div>
            )}
          </div>
          <label
            htmlFor={option.id}
            className={`text-sm font-medium cursor-pointer ${
              option.value === value ? "text-[#1563ff]" : "text-gray-600"
            }`}
          >
            {option.label}
          </label>
          <input
            type="radio"
            id={option.id}
            name={name}
            value={option.value}
            checked={option.value === value}
            onChange={() => handleChange(option.value)}
            className="sr-only"
          />
        </div>
      ))}
    </div>
  );
};

export default RadioToggle;
