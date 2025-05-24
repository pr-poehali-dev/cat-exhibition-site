import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://cdn.poehali.dev/files/6aec353e-63dd-4e48-a72b-71485b346139.png"
            alt="Выставка кошек Ярославль"
            className="h-12 w-auto"
          />
          <div>
            <h1 className="text-xl font-montserrat font-bold text-foreground">
              Выставка кошек Ярославль
            </h1>
            <p className="text-sm text-muted-foreground">
              Региональная выставка • Ярославль 2024
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
  );
};

export default Header;
