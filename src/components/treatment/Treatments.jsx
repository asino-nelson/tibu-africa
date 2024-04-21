import HealthCard from "../HealthCard";

const Treatments = () => {
  return (
    <div className="py-7 lg:py-14">
      <div className="w-full lg:w-2/3 mx-auto">
        <p className="font-semibold text-2xl lg:text-4xl text-center">
          Find A Treatment
        </p>
        <p className="pt-6 text-base lg:text-xl text-center">
          Choose a condition to learn more and get started.
        </p>
      </div>

      <div className="py-12 flex flex-col gap-y-6">
        <div className="flec flex-col items-center justify-center space-y-6">
          <h1 className="font-bold text-2xl text-emerald-400">
            General Health
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2">
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
          </div>
        </div>

        <div className="flec flex-col items-center justify-center space-y-6">
          <h1 className="font-bold text-2xl text-emerald-400">Wellness</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2">
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
          </div>
        </div>

        <div className="flec flex-col items-center justify-center space-y-6">
          <h1 className="font-bold text-2xl text-emerald-400 ">
            Insurance (Life)
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2">
            <HealthCard page="/" name="Flu and Common Cold" />
            <HealthCard page="/" name="Flu and Common Cold" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
