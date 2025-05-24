import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-beige-50 via-peach-50 to-beige-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-foreground mb-6 animate-fade-in">
          Региональная выставка
          <br />
          <span className="text-primary">кошек в Ярославле</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Присоединяйтесь к фелинологическому сообществу! Демонстрация
          породистых кошек, конкурсы, обмен опытом между заводчиками и
          популяризация ответственного содержания домашних животных.
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
  );
};

export default HeroSection;
