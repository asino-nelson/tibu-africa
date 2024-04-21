import HealthCard from "../HealthCard";

const Treatments = () => {
  return (
    <div>
      <div className="flec flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-emerald-400 my-5">
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

      <div className="flec flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-emerald-400 my-5">
          Wellness
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

      <div className="flec flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-emerald-400 my-5">
          Insurance (Life)
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2">
          <HealthCard page="/" name="Flu and Common Cold" />
          <HealthCard page="/" name="Flu and Common Cold" />
        </div>
      </div>




    </div>
  );
};

export default Treatments;
