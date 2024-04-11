
const PersonalInfo = ({ formData, handleChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="flex flex-row w-full md:w-3/4  h-full box-border lg:p-10 xl:p-8  shadow-md ">
      <div className=" basis-1/2">
        <img className="w-full h-full object-cover" src="/images/main.jpg" />
      </div>
      <div className="flex flex-col  w-full basis-1/2 p-4 ">
        <form onSubmit={handleSubmit} className="w-full  bg-white p-2 ">
          <h2 className="text-2xl font-sans font-bold mb-2">
            Personal Information
          </h2>
          <p className="font-sans text-sm mb-2 text-slate-400">
            Please provide your name and email address
          </p>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange("firstname", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleChange("lastname", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-300  text-white font-medium py-2 px-4 rounded-md w-full"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
