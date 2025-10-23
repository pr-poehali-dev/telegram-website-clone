import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Send" size={32} className="text-primary" />
            <span className="text-2xl font-bold">Telegram</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#apps" className="text-gray-600 hover:text-primary transition-colors">
              Apps
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Telegram
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Быстрый. Безопасный. Синхронизирован на всех ваших устройствах.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать для Windows
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Веб-версия
            </Button>
          </div>
        </div>
      </section>

      <section id="apps" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Доступно на всех платформах
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Monitor" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Windows</h3>
                <p className="text-sm text-gray-600">Windows 7 и выше</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Apple" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">macOS</h3>
                <p className="text-sm text-gray-600">OS X 10.12 и выше</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">iOS & Android</h3>
                <p className="text-sm text-gray-600">Мобильные устройства</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Globe" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Web</h3>
                <p className="text-sm text-gray-600">Браузерная версия</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Почему Telegram?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Быстрый</h3>
              <p className="text-gray-600 leading-relaxed">
                Telegram доставляет сообщения быстрее любого другого приложения.
                Мгновенная синхронизация между устройствами.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Безопасный</h3>
              <p className="text-gray-600 leading-relaxed">
                Защитите свои сообщения дополнительным слоем секретного шифрования.
                Полностью конфиденциально.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Cloud" size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Облачный</h3>
              <p className="text-gray-600 leading-relaxed">
                Доступ к сообщениям с любого устройства. Неограниченное облачное хранилище
                для фото и видео.
              </p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Группы</h3>
              <p className="text-gray-600 leading-relaxed">
                Создавайте группы до 200,000 участников. Общайтесь, делитесь файлами,
                создавайте сообщества.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Lock" size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Приватность</h3>
              <p className="text-gray-600 leading-relaxed">
                Секретные чаты с самоуничтожением сообщений. Никакого доступа третьих лиц
                к вашим данным.
              </p>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Repeat" size={36} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Синхронизация</h3>
              <p className="text-gray-600 leading-relaxed">
                Доступ к вашим сообщениям с телефона, планшета и компьютера одновременно.
                Начните переписку на одном устройстве и продолжите на другом.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Частые вопросы
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Telegram бесплатный?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да, Telegram абсолютно бесплатный и всегда будет бесплатным. Мы не продаем рекламу
                  и не вводим подписки. Наши серверы оплачиваются из собственных средств.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Как Telegram зарабатывает?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Telegram финансируется Павлом Дуровым. Проект не предназначен для извлечения прибыли.
                  Если когда-нибудь у Telegram закончатся деньги, мы представим платные опции для бизнеса.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Насколько безопасен Telegram?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Telegram более безопасен, чем другие массовые мессенджеры. Мы базируемся на протоколе MTProto
                  с открытым исходным кодом, который прошел независимый аудит безопасности.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Могу ли я отправлять большие файлы?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Да! В Telegram можно отправлять файлы размером до 2 ГБ. Также есть неограниченное
                  облачное хранилище для всех ваших медиафайлов и документов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  Что такое секретные чаты?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Секретные чаты используют сквозное шифрование, не оставляют следов на серверах
                  и поддерживают самоуничтожение сообщений. Идеально для конфиденциальных разговоров.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div>
              <h4 className="font-semibold mb-4">О проекте</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Приложения</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Telegram для Android</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram для iOS</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Telegram для ПК</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разработчикам</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Протокол</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Исходный код</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
            <p>© 2025 Telegram. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
