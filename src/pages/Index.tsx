import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

export default function Index() {
  const services = [
    {
      icon: 'Monitor',
      title: 'Ремонт компьютеров',
      description: 'Диагностика и ремонт ПК любой сложности. Замена комплектующих, чистка, настройка.',
      features: ['Диагностика', 'Замена деталей', 'Чистка системы']
    },
    {
      icon: 'Printer',
      title: 'Ремонт оргтехники',
      description: 'Профессиональный ремонт принтеров, сканеров, МФУ. Быстро и качественно.',
      features: ['Принтеры', 'Сканеры', 'МФУ']
    },
    {
      icon: 'Droplets',
      title: 'Заправка картриджей',
      description: 'Заправка и восстановление картриджей для всех типов принтеров.',
      features: ['Лазерные', 'Струйные', 'Восстановление']
    },
    {
      icon: 'Wrench',
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО офисной техники для стабильной работы.',
      features: ['Профилактика', 'Настройка', 'Консультации']
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/9e6db62e-7405-4b9a-a7b7-cd5802e743e3.png" 
              alt="Точка логотип"
              className="h-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">Точка</h1>
              <p className="text-sm text-muted-foreground">Компьютерный сервис</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 gradient-tech text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ремонт техники
            <br />
            <span className="text-white/80">любой сложности</span>
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Профессиональный сервисный центр по ремонту компьютеров, оргтехники и заправке картриджей в вашем городе
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-scale">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать нам
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover-scale">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Бесплатная консультация
            </Button>
          </div>
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 opacity-20">
          <Icon name="Monitor" size={40} className="text-white animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Icon name="Printer" size={36} className="text-white animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <Icon name="HardDrive" size={32} className="text-white animate-pulse" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-foreground">Наши услуги</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по ремонту и обслуживанию компьютерной техники
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4 text-base">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Нужен ремонт техники?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Обращайтесь к профессионалам! Быстрая диагностика, качественный ремонт, гарантия на все работы.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="hover-scale">
              <Icon name="Mail" size={20} className="mr-2" />
              info@tochka-tambov.ru
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover-scale">
              <Icon name="MapPin" size={20} className="mr-2" />
              Найти на карте
            </Button>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 text-foreground">Контакты</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Найдите нас или свяжитесь удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-card rounded-lg p-6 shadow-sm card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Телефон</p>
                  <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="Mail" size={16} className="mr-2" />
                Написать
              </Button>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Адрес</p>
                  <p className="text-muted-foreground">г.Тамбов, Бульвар Энтузиастов 1"Г"</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                <Icon name="Navigation" size={16} className="mr-2" />
                Построить маршрут
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm card-hover">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Время работы</p>
                  <p className="text-muted-foreground text-sm">Пн-Пт: 9:00-19:00<br />Сб: 10:00-16:00</p>
                </div>
              </div>
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-600 font-medium">Сейчас открыто</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 gradient-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="MapPin" size={32} className="text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">Интерактивная карта</h4>
                    <p className="text-muted-foreground mb-4">г.Тамбов, Бульвар Энтузиастов 1"Г"</p>
                    <div className="flex gap-2 justify-center">
                      <Button size="sm" className="hover-scale">
                        <Icon name="Navigation" size={16} className="mr-2" />
                        Яндекс.Карты
                      </Button>
                      <Button size="sm" variant="outline" className="hover-scale">
                        <Icon name="Map" size={16} className="mr-2" />
                        Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Mock map elements */}
                <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-2 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <img 
                      src="https://cdn.poehali.dev/files/9e6db62e-7405-4b9a-a7b7-cd5802e743e3.png" 
                      alt="Точка"
                      className="h-4 object-contain"
                    />
                    <span className="text-sm font-medium">Точка</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg p-2 shadow-sm">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Car" size={14} />
                    <span>5 мин на авто</span>
                  </div>
                </div>

                {/* Mock street lines */}
                <div className="absolute top-16 left-8 w-32 h-1 bg-white/30 rounded"></div>
                <div className="absolute top-24 left-16 w-24 h-1 bg-white/20 rounded rotate-45"></div>
                <div className="absolute bottom-20 right-12 w-28 h-1 bg-white/25 rounded"></div>
              </div>
              
              <div className="p-4 bg-white border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Удобное расположение</p>
                    <p className="text-sm text-muted-foreground">Рядом с метро, есть парковка</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted/50 rounded-lg p-8">
              <h4 className="text-2xl font-bold mb-6 text-foreground">Получить консультацию</h4>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <select className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all text-muted-foreground">
                  <option>Выберите услугу</option>
                  <option>Ремонт компьютера</option>
                  <option>Ремонт принтера</option>
                  <option>Заправка картриджа</option>
                  <option>Консультация</option>
                </select>
                <textarea 
                  placeholder="Опишите проблему" 
                  rows={4}
                  className="w-full p-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all"
                ></textarea>
                <Button size="lg" className="w-full hover-scale">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                
                <div className="flex items-center justify-center space-x-4 pt-4">
                  <Button variant="ghost" size="sm" className="hover-scale">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="ghost" size="sm" className="hover-scale">
                    <Icon name="Send" size={16} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="ghost" size="sm" className="hover-scale">
                    <Icon name="Mail" size={16} className="mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/9e6db62e-7405-4b9a-a7b7-cd5802e743e3.png" 
              alt="Точка логотип"
              className="h-6 object-contain"
            />
            <span className="text-lg font-semibold">Точка</span>
          </div>
          <p className="text-background/80">
            © 2024 Точка. Профессиональный ремонт компьютерной техники.
          </p>
        </div>
      </footer>
    </div>
  )
}