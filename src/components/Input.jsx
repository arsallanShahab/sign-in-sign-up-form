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
  name = "name",
  placeholder = "enter your text",
  type = "text",
  width = "w-full",
  required = false,
}) {
  return (
    <div className={`bg-peach p-2 rounded-lg ${width}`}>
      <label
        htmlFor={name.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {name}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={type}
          name={name.toLowerCase()}
          id={name.toLowerCase()}
          className="block w-full rounded-md border-gray-300 py-3 pl-3 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
