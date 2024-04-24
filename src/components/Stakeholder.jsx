const Stakeholder = () => {
  return (
    <div className="bg-blue-600 lg:grid fixed flex flex-col grid-cols-3 items-center text-white lg:p-5 p-2 w-full z-50">
      <h2 className="hidden lg:block col-span-1 font-bold w-fit">LIMITED TIME</h2>
      <div className="flex flex-col lg:col-span-2 lg:flex-row items-center justify-between w-full">
        <p className="font-semibold">
          Become a Stakeholder in TIBU Health.Minimum investment $250.
          <a href="#" className="underline">
            {" "}
            Learn more
          </a>
        </p>
        <button className="border rounded-md px-10 py-1 lg:mt-0 mt-2 font-bold lg:w-fit w-full">
          Invest in TIBU Health
        </button>
      </div>
    </div>
  );
};

export default Stakeholder;
