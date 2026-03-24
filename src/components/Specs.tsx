import Icon from "@/components/ui/icon";

const specs = [
  {
    icon: "Wifi",
    title: "Активное шумоподавление",
    description: "До 2× лучше, чем в предыдущем поколении. Полная изоляция от мира вокруг.",
  },
  {
    icon: "Battery",
    title: "До 30 часов работы",
    description: "6 часов в наушниках + 4 подзарядки от кейса. Хватит на весь день и вечер.",
  },
  {
    icon: "Mic",
    title: "Адаптивный эквалайзер",
    description: "Звук автоматически подстраивается под форму вашего уха в реальном времени.",
  },
  {
    icon: "Globe",
    title: "Пространственный звук",
    description: "Динамическое отслеживание головы создаёт эффект кинотеатра прямо в ушах.",
  },
  {
    icon: "Zap",
    title: "Быстрая зарядка",
    description: "5 минут в кейсе = 1 час прослушивания. Заряжается от Lightning и MagSafe.",
  },
  {
    icon: "Bluetooth",
    title: "Chip H2",
    description: "Фирменный чип Apple обеспечивает молниеносное соединение и низкую задержку.",
  },
];

export default function Specs() {
  return (
    <div className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <h3 className="uppercase text-sm tracking-widest text-neutral-400 mb-3">Технические характеристики</h3>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Всё, что важно знать
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec) => (
            <div
              key={spec.title}
              className="bg-white p-8 border border-neutral-100 hover:border-neutral-300 transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-5">
                <Icon name={spec.icon} size={28} className="text-neutral-800" />
              </div>
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">{spec.title}</h4>
              <p className="text-neutral-500 text-sm leading-relaxed">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
