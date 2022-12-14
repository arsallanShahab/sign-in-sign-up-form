/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function input({
  label = "Label",
  name = "name",
  placeholder = "enter your text",
  type = "text",
  width = "w-full",
  required = false,
  onChange = "",
}) {
  return (
    <div
      className={`bg-light-green/50 p-3 rounded-lg border-[1px] border-blue-saphire/25 ${width}`}
    >
      <label
        htmlFor={name}
        className="block text-sm text-purssian-blue font-poppins font-semibold"
      >
        {label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={name}
          className="font-poppins block w-full rounded-md border-ocean-green/25 py-3 pl-3 pr-12 border-[1px] hover:border-ocean-green focus:outline-none focus:ring focus:ring-ocean-green sm:text-sm duration-150"
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
