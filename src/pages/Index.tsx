import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://cdn.poehali.dev/files/6aec353e-63dd-4e48-a72b-71485b346139.png"
              alt="Выставка кошек"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-montserrat font-bold text-foreground">
                Выставка кошек
              </h1>
              <p className="text-sm text-muted-foreground">
                Элитные породы • Москва 2024
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              О выставке
            </a>
            <a
              href="#breeds"
              className="text-foreground hover:text-primary transition-colors"
            >
              Породы
            </a>
            <a
              href="#gallery"
              className="text-foreground hover:text-primary transition-colors"
            >
              Галерея
            </a>
            <a
              href="#contacts"
              className="text-foreground hover:text-primary transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-beige-50 via-peach-50 to-beige-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6 animate-fade-in">
            Выставка элитных
            <br />
            <span className="text-primary">породистых кошек</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Откройте для себя мир удивительных кошачьих пород. Встретьтесь с
            лучшими представителями фелинологического сообщества и насладитесь
            грацией этих прекрасных созданий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Купить билет
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Программа выставки
            </Button>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
            Информация о выставке
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">📅</span>
                  <span>Даты проведения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  15-17 декабря 2024
                </p>
                <p className="text-muted-foreground">
                  Три дня незабываемых впечатлений
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">📍</span>
                  <span>Место проведения</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  КВЦ "Сокольники"
                </p>
                <p className="text-muted-foreground">Москва, павильон 4</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">🏆</span>
                  <span>Участники</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">200+ кошек</p>
                <p className="text-muted-foreground">30+ пород со всего мира</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
            Участники выставки
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Британская короткошёрстная",
                image:
                  "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400",
              },
              {
                name: "Мейн-кун",
                image:
                  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400",
              },
              {
                name: "Персидская",
                image:
                  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400",
              },
            ].map((cat, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-center">{cat.name}</CardTitle>
                  <CardDescription className="text-center">
                    Элитные представители породы
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Посмотреть всех участников
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="https://cdn.poehali.dev/files/6aec353e-63dd-4e48-a72b-71485b346139.png"
                alt="Выставка кошек"
                className="h-16 w-auto mb-4"
              />
              <p className="text-muted-foreground">
                Официальная выставка кошек под эгидой WCF
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <p className="text-muted-foreground mb-2">
                📞 +7 (495) 123-45-67
              </p>
              <p className="text-muted-foreground mb-2">✉️ info@catshow.ru</p>
              <p className="text-muted-foreground">
                📍 КВЦ "Сокольники", павильон 4
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">
                Время работы
              </h4>
              <p className="text-muted-foreground mb-2">
                Пятница: 12:00 - 20:00
              </p>
              <p className="text-muted-foreground mb-2">
                Суббота: 10:00 - 20:00
              </p>
              <p className="text-muted-foreground">
                Воскресенье: 10:00 - 18:00
              </p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Выставка кошек. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
