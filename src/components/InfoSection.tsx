import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InfoSection = () => {
  const infoCards = [
    {
      icon: "📅",
      title: "Даты проведения",
      mainText: "15-17 декабря 2024",
      description: "Три дня фелинологической культуры",
    },
    {
      icon: "📍",
      title: "Место проведения",
      mainText: 'ТРК "Ярославский Вернисаж"',
      description: "пос. Нагорный, ул. Дорожная, 6а",
    },
    {
      icon: "🏆",
      title: "Участники",
      mainText: "Заводчики и судьи",
      description: "Специалисты и любители кошек",
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
          Информация о выставке
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{card.icon}</span>
                  <span>{card.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  {card.mainText}
                </p>
                <p className="text-muted-foreground">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
