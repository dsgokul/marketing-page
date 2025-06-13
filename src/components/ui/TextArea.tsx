import React from "react";

type TextAreaProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  maxLength?: number;
};

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  maxLength = 500,
}) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const handleLabelClick = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current?.focus();
  };

  return (
    <div className="w-full relative">
      <textarea
        id={id} // Added missing id prop
        name={name}
        value={value}
        ref={inputRef}
        autoComplete="off"
        className={`relative peer w-full outline-none px-2 pt-5 pb-3 border-b resize-none focus:placeholder-gray-500 disabled:bg-gray-100 text-gray-600 text-md font-normal leading-tight ${
          error
            ? "focus:border-rose-500 border-rose-500"
            : "focus:border-blue-600 border-gray-300"
        }`}
        placeholder=" " // Changed from empty string to space
        onChange={onChange}
        rows={4}
        maxLength={maxLength}
      />
      {error && (
        <span
          id={`error-${id}`}
          className="text-[#EB5757] text-xs font-normal leading-none"
        >
          {error}
        </span>
      )}

      <label
        htmlFor={id}
        className={`absolute left-0 -top-1.5 text-lg font-normal transition-all bg-white px-2 leading-none cursor-pointer
              ${error ? "text-red-500" : "text-gray-600"} 
              peer-placeholder-shown:text-lg
              peer-placeholder-shown:leading-tight
              peer-placeholder-shown:text-gray-400 
              peer-placeholder-shown:top-4
              peer-placeholder-shown:bg-transparent
              peer-focus:${error ? "text-red-500" : "text-blue-600"}
              peer-focus:text-lg
              peer-focus:-top-1.5
              peer-focus:bg-white`}
        onClick={handleLabelClick}
      >
        {label}
      </label>

      <div className="absolute right-2 bottom-2 text-xs font-normal text-gray-400">
        {value.length} / {maxLength}
      </div>
    </div>
  );
};

export default TextArea;
