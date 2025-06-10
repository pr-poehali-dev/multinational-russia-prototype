import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MapSection = () => {
  const regions = [
    {
      name: "Европейская часть",
      peoples: ["Русские", "Татары", "Мордва"],
      count: 45,
    },
    { name: "Сибирь", peoples: ["Буряты", "Тувинцы", "Хакасы"], count: 28 },
    {
      name: "Дальний Восток",
      peoples: ["Эвенки", "Чукчи", "Коряки"],
      count: 12,
    },
    { name: "Кавказ", peoples: ["Чеченцы", "Аварцы", "Осетины"], count: 34 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            География народов России
          </h2>
          <p className="text-xl text-gray-600">
            Более 100 народов проживают на территории нашей страны
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-96 bg-blue-100 flex items-center justify-center">
              <div className="text-center">
                <Icon
                  name="Map"
                  size={64}
                  className="text-blue-600 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Интерактивная карта
                </h3>
                <p className="text-gray-600">
                  Карта России с расположением народов
                </p>
                <p className="text-sm text-gray-500 mt-2">(В разработке)</p>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Регионы</h3>
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center justify-between">
                    <span>{region.name}</span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {region.count} народов
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {region.peoples.map((people, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {people}
                      </span>
                    ))}
                    <span className="text-xs text-gray-500">и другие...</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
