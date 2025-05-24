import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const GallerySection = () => {
  const catBreeds = [
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
      image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400",
    },
  ];

  return (
    <section id="gallery" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
          Участники выставки
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {catBreeds.map((cat, index) => (
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
  );
};

export default GallerySection;
