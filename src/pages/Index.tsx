import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('home');
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Подготовка к ЕГЭ',
      description: 'Комплексная подготовка к экзаменам с разбором всех типов заданий',
      price: '2000 ₽/час',
      icon: 'GraduationCap'
    },
    {
      title: 'ОГЭ по математике',
      description: 'Индивидуальный подход к подготовке учеников 9 класса',
      price: '1500 ₽/час',
      icon: 'BookOpen'
    },
    {
      title: 'Школьная программа',
      description: 'Устранение пробелов и опережающее обучение',
      price: '1200 ₽/час',
      icon: 'Calculator'
    },
    {
      title: 'Высшая математика',
      description: 'Помощь студентам ВУЗов по профильным дисциплинам',
      price: '2500 ₽/час',
      icon: 'Library'
    }
  ];

  const experience = [
    { year: '2024', title: 'Преподаватель математики', place: 'Частная практика' },
    { year: '2020-2023', title: 'Старший преподаватель', place: 'Образовательный центр "Знание"' },
    { year: '2018-2020', title: 'Репетитор математики', place: 'Онлайн-школа МатемАтика' },
    { year: '2018', title: 'Диплом с отличием', place: 'МГУ им. М.В. Ломоносова' }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Благодаря занятиям с репетитором сын сдал ЕГЭ на 92 балла! Очень благодарны за профессионализм.',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отличный подход к объяснению сложных тем. За полгода математика стала любимым предметом.',
      rating: 5
    },
    {
      name: 'Елена Васильева',
      text: 'Подготовка к ОГЭ прошла на высшем уровне. Дочь получила "отлично" на экзамене.',
      rating: 5
    }
  ];

  const availableSlots = [
    '09:00 - 10:30',
    '11:00 - 12:30',
    '14:00 - 15:30',
    '16:00 - 17:30',
    '18:00 - 19:30'
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="Calculator" className="text-primary" size={28} />
              <span className="text-xl font-bold text-secondary">МатемАтика</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'services', label: 'Услуги' },
                { id: 'experience', label: 'Опыт' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'schedule', label: 'Расписание' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('schedule')}>
              Записаться на урок
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section id="home" className="py-20 bg-gradient-to-br from-secondary to-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Репетитор по математике
                </h1>
                <p className="text-xl mb-8 text-white/90">
                  Индивидуальный подход к каждому ученику. Результаты уже через месяц занятий.
                  Подготовка к ЕГЭ и ОГЭ с гарантией качества.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => scrollToSection('schedule')}
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на урок
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white text-white hover:bg-white/20"
                    onClick={() => scrollToSection('about')}
                  >
                    Узнать больше
                  </Button>
                </div>
                <div className="flex gap-8 mt-12">
                  <div>
                    <div className="text-4xl font-bold">150+</div>
                    <div className="text-white/80">учеников</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">6 лет</div>
                    <div className="text-white/80">опыта</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">92%</div>
                    <div className="text-white/80">успеха на ЕГЭ</div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <img
                  src="https://cdn.poehali.dev/projects/66589ff6-cb14-4c60-b94b-c0c39bf6f5d4/files/d013d04f-f0ca-4337-97cc-d5874fbfce45.jpg"
                  alt="Математические тетради и формулы"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4">Обо мне</Badge>
                <h2 className="text-4xl font-bold mb-4">Профессиональный подход</h2>
                <p className="text-muted-foreground text-lg">
                  Образование и опыт для достижения ваших целей
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Icon name="Award" className="text-primary mb-2" size={32} />
                    <CardTitle>Образование</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Диплом с отличием МГУ им. М.В. Ломоносова, факультет математики.
                      Специализация: прикладная математика и информатика.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Target" className="text-primary mb-2" size={32} />
                    <CardTitle>Методика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Индивидуальный план обучения для каждого ученика. Упор на понимание,
                      а не зубрежку. Регулярный контроль прогресса.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="CheckCircle2" className="text-primary mb-2" size={32} />
                    <CardTitle>Результаты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      92% учеников сдают ЕГЭ на 85+ баллов. Средний прирост знаний
                      составляет 30-40 баллов за 6 месяцев занятий.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Icon name="Users" className="text-primary mb-2" size={32} />
                    <CardTitle>Опыт</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Более 6 лет работы с учениками разного уровня подготовки.
                      Опыт преподавания как онлайн, так и офлайн.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Услуги</Badge>
              <h2 className="text-4xl font-bold mb-4">Что я предлагаю</h2>
              <p className="text-muted-foreground text-lg">
                Индивидуальные программы обучения для разных целей
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon name={service.icon} className="text-primary mb-2" size={40} />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full" onClick={() => scrollToSection('schedule')}>
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Опыт</Badge>
              <h2 className="text-4xl font-bold mb-4">Карьерный путь</h2>
              <p className="text-muted-foreground text-lg">
                Профессиональное развитие и достижения
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-primary pl-8 space-y-8">
                {experience.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white" />
                    <div className="mb-1 text-sm font-semibold text-primary">{item.year}</div>
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Отзывы</Badge>
              <h2 className="text-4xl font-bold mb-4">Что говорят ученики</h2>
              <p className="text-muted-foreground text-lg">
                Реальные отзывы от учеников и их родителей
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="schedule" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4">Расписание</Badge>
              <h2 className="text-4xl font-bold mb-4">Запись на уроки</h2>
              <p className="text-muted-foreground text-lg">
                Выберите удобное время для занятий
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Онлайн-расписание</CardTitle>
                  <CardDescription>
                    Выберите дату и время, удобное для вас
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Выберите дату</h3>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">
                        Доступное время на {selectedDate?.toLocaleDateString('ru-RU')}
                      </h3>
                      <div className="space-y-3">
                        {availableSlots.map((slot, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full justify-start"
                            onClick={() => setShowLoginDialog(true)}
                          >
                            <Icon name="Clock" className="mr-2" size={18} />
                            {slot}
                          </Button>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-muted rounded-lg">
                        <p className="text-sm text-muted-foreground text-center">
                          Для записи на урок необходимо войти в систему
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Свяжитесь со мной</h2>
              <p className="text-xl mb-8 text-white/90">
                Готов ответить на все ваши вопросы и помочь в обучении математике
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={24} />
                  <span>math.tutor@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={24} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  <span>Москва, м. Университет</span>
                </div>
              </div>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection('schedule')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на пробный урок
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Calculator" size={24} />
              <span className="text-xl font-bold">МатемАтика</span>
            </div>
            <p className="text-white/70">
              © 2024 Репетитор по математике. Все права защищены.
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isLogin ? 'Вход в систему' : 'Регистрация'}</DialogTitle>
            <DialogDescription>
              {isLogin 
                ? 'Войдите в личный кабинет для записи на урок'
                : 'Создайте аккаунт для записи на занятия'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault();
            toast({
              title: isLogin ? 'Вход выполнен' : 'Регистрация завершена',
              description: isLogin 
                ? 'Добро пожаловать! Теперь вы можете записаться на урок.'
                : 'Аккаунт создан. Теперь вы можете войти в систему.',
            });
            setShowLoginDialog(false);
            setEmail('');
            setPassword('');
          }} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-primary hover:underline"
              >
                {isLogin 
                  ? 'Нет аккаунта? Зарегистрироваться'
                  : 'Уже есть аккаунт? Войти'}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;