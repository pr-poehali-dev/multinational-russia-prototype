import { Card } from "@/components/ui/card";

const PeoplesCarousel = () => {
  const peoples = [
    {
      name: "Русские",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=400&fit=crop",
    },
    {
      name: "Татары",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    },
    {
      name: "Украинцы",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop",
    },
    {
      name: "Башкиры",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop",
    },
    {
      name: "Чуваши",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=400&fit=crop",
    },
    {
      name: "Чеченцы",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
    },
    {
      name: "Армяне",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=400&fit=crop",
    },
    {
      name: "Мордва",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Многонациональная Россия
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Откройте для себя богатое культурное наследие народов, населяющих
            нашу великую страну
          </p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max">
            {peoples.map((people, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-64 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={people.image}
                    alt={people.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {people.name}
                  </h3>
                  <p className="text-gray-600 mt-2">Народ России</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeoplesCarousel;
