export const DefaultForm = () => {
  return (
    <form className="w-3/4 h-full flex flex-col">
      <div className="w-full flex flex-col items-start gap-y-6 px-24 pt-12 flex-grow">
        <div>
          <h1 className="text-primaryBlue font-bold text-4xl">Personal info</h1>
          <p className="text-lg text-neutralGray">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <label
          htmlFor="name"
          className="w-full text-primaryBlue flex flex-col font-medium">
          Name
          <input
            autoComplete="off"
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
            className="placeholder:text-neutralGray border border-neutralGray rounded-lg px-4 py-3 w-full placeholder:text-"
          />
        </label>

        <label
          htmlFor="email"
          className="w-full text-primaryBlue flex flex-col font-medium">
          Email Address
          <input
            autoComplete="off"
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            className="placeholder:text-neutralGray border border-neutralGray rounded-lg px-4 py-3 w-full placeholder:text-"
          />
        </label>

        <label
          htmlFor="phone_number"
          className="w-full text-primaryBlue flex flex-col font-medium">
          Phone Number
          <input
            autoComplete="off"
            type="tel"
            id="phone_number"
            placeholder="e.g. +1 234 567 890"
            className="placeholder:text-neutralGray border border-neutralGray rounded-lg px-4 py-3 w-full placeholder:text-"
          />
        </label>
        <button
          type="submit"
          onClick={(e) => e.preventDefault()}
          className="font-medium bg-primaryBlue text-neutralWhite py-3 px-6 rounded-lg self-end">
          Next Step
        </button>
      </div>
    </form>
  );
};
