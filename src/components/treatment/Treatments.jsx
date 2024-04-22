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
            <HealthCard page="/treatment-stomach-flu" name="Stomach Flu" />
            <HealthCard page="/" name="Urinary Tract Infection (UTI)" />
            <HealthCard page="/" name="Fever (Febrile Illness)" />
            <HealthCard page="/" name="Yeast Infection (vaginal candidiasis)" />
            <HealthCard page="/" name="Sexually Transmitted Infections (STI)" />
          </div>
        </div>

        <div className="flec flex-col items-center justify-center space-y-6">
          <h1 className="font-bold text-2xl text-emerald-400">Wellness</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2">
            <HealthCard page="/" name="Women's Health" />
            <HealthCard page="/" name="Men's Health" />
            <HealthCard page="/" name="Kids Health" />
            <HealthCard page="/" name="Standard Plus" />
            <HealthCard page="/" name="Advanced" />
            <HealthCard page="/" name="Excecutive" />
          </div>
        </div>

        <div className="flec flex-col items-center justify-center space-y-6">
          <h1 className="font-bold text-2xl text-emerald-400 ">
            Insurance (Life)
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-2">
            <HealthCard page="/" name="Starter Pack - Life" />
            <HealthCard page="/" name="Advanced - Life" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
