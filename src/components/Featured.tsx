export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/eb907a00-9e48-4af0-a5e8-24f3a4249676/files/158a82b7-1eff-43b6-aa73-b3a11e3a0c32.jpg"
          alt="AirPods lifestyle"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="features" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Технологии на уровне ощущений</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Активное шумоподавление, пространственный звук и до 30 часов работы — AirPods созданы для тех, кто ценит каждую секунду тишины и каждый аккорд музыки.
        </p>
        <button id="buy" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Купить сейчас
        </button>
      </div>
    </div>
  );
}