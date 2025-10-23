import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([
    { id: 1, author: "Иван", text: "Привет! Как дела?", time: "14:32" },
    { id: 2, author: "Мария", text: "Отлично! Ты уже попробовал новый RusChat?", time: "14:33" },
    { id: 3, author: "Иван", text: "Да, классная штука! Быстрый и удобный", time: "14:35" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        author: "Вы",
        text: newMessage,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
      }]);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded flex items-center justify-center">
              <Icon name="MessageSquare" size={24} className="text-primary-foreground" />
            </div>
            <div>
              <span className="text-2xl font-bold">RusChat</span>
              <p className="text-xs text-primary-foreground/80">Русский мессенджер с 1999 года</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#download" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium">
              Скачать
            </a>
            <a href="#features" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium">
              Возможности
            </a>
            <a href="#demo" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium">
              Демо
            </a>
            <a href="#faq" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm font-medium">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary/10 border-2 border-primary/30 rounded px-4 py-2 mb-6">
              <span className="text-sm font-bold text-primary">★ Проверено временем с 1999 года ★</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              RusChat
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Надёжный русский мессенджер для общения с друзьями и коллегами.
              Простой интерфейс, быстрая работа, проверенная годами стабильность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 py-6 shadow-lg">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать RusChat
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 border-2">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Попробуйте RusChat прямо сейчас
          </h2>
          <p className="text-center text-muted-foreground mb-12">Демо-версия чата</p>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl border-2">
              <CardContent className="p-0">
                <div className="bg-primary text-primary-foreground px-4 py-3 border-b-2 border-primary-foreground/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-foreground/30 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={18} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Общий чат</p>
                      <p className="text-xs text-primary-foreground/70">3 участника онлайн</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-80 overflow-y-auto bg-background p-4 space-y-3">
                  {messages.map((msg) => (
                    <div key={msg.id} className="flex gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex-shrink-0 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">
                          {msg.author[0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-bold text-sm">{msg.author}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <div className="bg-card border border-border rounded p-2 text-sm">
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t-2 p-3 bg-muted/30">
                  <div className="flex gap-2">
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Введите сообщение..."
                      className="flex-1 border-2"
                    />
                    <Button onClick={handleSendMessage} className="px-6">
                      <Icon name="Send" size={18} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="download" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Скачайте RusChat для вашей системы
          </h2>
          <p className="text-center text-muted-foreground mb-12">Работает на всех популярных платформах</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardContent className="p-5">
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Monitor" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">Windows</h3>
                <p className="text-xs text-muted-foreground mb-3">Windows XP и выше</p>
                <Button variant="outline" size="sm" className="w-full border-2">
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardContent className="p-5">
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Apple" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">macOS</h3>
                <p className="text-xs text-muted-foreground mb-3">OS X 10.6 и выше</p>
                <Button variant="outline" size="sm" className="w-full border-2">
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardContent className="p-5">
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Smartphone" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">Мобильный</h3>
                <p className="text-xs text-muted-foreground mb-3">Android / iOS</p>
                <Button variant="outline" size="sm" className="w-full border-2">
                  Скачать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary/50">
              <CardContent className="p-5">
                <div className="w-14 h-14 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Globe" size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-base mb-1">Web-версия</h3>
                <p className="text-xs text-muted-foreground mb-3">Любой браузер</p>
                <Button variant="outline" size="sm" className="w-full border-2">
                  Открыть
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">
            Галерея скриншотов
          </h2>
          <p className="text-center text-muted-foreground mb-12">Посмотрите, как выглядит RusChat</p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <Icon name="MessageCircle" size={48} className="text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">Главное окно чата</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <Icon name="Users" size={48} className="text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">Список контактов</p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden border-2 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <Icon name="Settings" size={48} className="text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">Настройки профиля</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Возможности RusChat
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Zap" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Быстрая работа</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Мгновенная доставка сообщений. Оптимизирован для работы даже на старых компьютерах.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Lock" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Надёжность</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Проверенная временем стабильность. Защита личных данных пользователей.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Групповые чаты</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Создавайте чаты с друзьями, коллегами. Обменивайтесь файлами и фотографиями.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Smile" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Смайлики</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Большая коллекция смайликов и стикеров для выражения эмоций.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="Bell" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Уведомления</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Настраиваемые уведомления о новых сообщениях. Не пропустите важное.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 border-2 border-primary/20">
                  <Icon name="FileText" size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Передача файлов</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Отправляйте документы, фотографии и другие файлы прямо в чате.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="bg-background border-2 rounded px-5">
                <AccordionTrigger className="text-base font-bold hover:no-underline">
                  Как зарегистрироваться в RusChat?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Скачайте клиент RusChat для вашей операционной системы, запустите программу
                  и следуйте инструкциям мастера регистрации. Вам потребуется указать имя пользователя
                  и пароль.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background border-2 rounded px-5">
                <AccordionTrigger className="text-base font-bold hover:no-underline">
                  RusChat бесплатный?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Да, RusChat полностью бесплатен для личного использования. Мы не берём плату
                  за регистрацию или использование базовых функций мессенджера.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background border-2 rounded px-5">
                <AccordionTrigger className="text-base font-bold hover:no-underline">
                  Какие системные требования?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  RusChat работает на Windows XP и выше, macOS 10.6+, а также на мобильных устройствах
                  Android и iOS. Для работы требуется подключение к интернету.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background border-2 rounded px-5">
                <AccordionTrigger className="text-base font-bold hover:no-underline">
                  Можно ли отправлять файлы?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Да, вы можете отправлять файлы размером до 50 МБ. Поддерживаются документы,
                  изображения, архивы и другие типы файлов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background border-2 rounded px-5">
                <AccordionTrigger className="text-base font-bold hover:no-underline">
                  Как добавить друга в контакты?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  Откройте меню "Контакты", нажмите "Добавить контакт" и введите имя пользователя
                  вашего друга. После подтверждения он появится в вашем списке контактов.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Присоединяйтесь к RusChat сегодня!
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Более 1,000,000 пользователей уже общаются в RusChat.
            Начните общение с друзьями прямо сейчас!
          </p>
          <Button size="lg" variant="secondary" className="text-base px-8 py-6 shadow-lg">
            <Icon name="Download" size={20} className="mr-2" />
            Скачать RusChat бесплатно
          </Button>
        </div>
      </section>

      <footer className="bg-card border-t-2 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-8">
            <div>
              <h4 className="font-bold mb-3 text-sm">О проекте</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">История</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Загрузки</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Windows</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">macOS</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Мобильные</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Помощь</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Форум</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Юридическое</h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t text-center text-xs text-muted-foreground">
            <p>© 1999-2025 RusChat. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
