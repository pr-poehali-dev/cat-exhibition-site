const Footer = () => {
  return (
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
            <p className="text-muted-foreground mb-2">📞 +7 (495) 123-45-67</p>
            <p className="text-muted-foreground mb-2">✉️ info@catshow.ru</p>
            <p className="text-muted-foreground">
              📍 КВЦ "Сокольники", павильон 4
            </p>
          </div>
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Время работы</h4>
            <p className="text-muted-foreground mb-2">Пятница: 12:00 - 20:00</p>
            <p className="text-muted-foreground mb-2">Суббота: 10:00 - 20:00</p>
            <p className="text-muted-foreground">Воскресенье: 10:00 - 18:00</p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Выставка кошек. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
