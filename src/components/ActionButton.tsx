import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ActionButton = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Откройте свои корни
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Пройдите уникальный тест и узнайте, какие народные традиции и
            предпочтения ближе всего к вашему сердцу
          </p>
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Icon name="Compass" size={20} />
            Узнай свои народные предпочтения
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ActionButton;
