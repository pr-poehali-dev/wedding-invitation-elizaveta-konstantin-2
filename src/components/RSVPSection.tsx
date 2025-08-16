import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    partnerName: '',
    attending: '',
    alcohol: '',
    food: '',
    transport: '',
    other: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Data:', formData);
    alert('Спасибо за ответ! Мы получили ваше подтверждение.');
  };

  return (
    <div className="container mx-auto px-4">
      <Card className="animate-fade-in border-wedding-blue/20 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-wedding-blue/10 to-wedding-pink/10">
          <CardTitle className="font-cormorant text-3xl text-center text-gray-800">
            Подтверждение участия
          </CardTitle>
          <p className="text-center font-open-sans text-gray-600 mt-2">
            Чтобы мы смогли лучше спланировать наш праздник, просим вас ответить на несколько вопросов
          </p>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Names */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName" className="font-open-sans font-medium">Ваше ФИО</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="partnerName" className="font-open-sans font-medium">ФИО спутника/спутницы</Label>
                <Input
                  id="partnerName"
                  value={formData.partnerName}
                  onChange={(e) => setFormData({...formData, partnerName: e.target.value})}
                  className="mt-1"
                  placeholder="Если придете парой"
                />
              </div>
            </div>

            <Separator />

            {/* Attendance */}
            <div>
              <Label className="font-open-sans font-medium text-base">Планируете ли вы посетить наше торжество?</Label>
              <RadioGroup
                value={formData.attending}
                onValueChange={(value) => setFormData({...formData, attending: value})}
                className="mt-2"
                required
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-open-sans">Да</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-open-sans">Нет</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            {/* Alcohol preference */}
            <div>
              <Label className="font-open-sans font-medium text-base">Какой алкогольный напиток предпочитаете на свадьбе?</Label>
              <RadioGroup
                value={formData.alcohol}
                onValueChange={(value) => setFormData({...formData, alcohol: value})}
                className="mt-2 grid grid-cols-2 gap-2"
              >
                {['Водка', 'Виски', 'Коньяк', 'Шампанское', 'Красное вино', 'Белое вино', 'Не буду пить алкогольные напитки'].map((drink) => (
                  <div key={drink} className="flex items-center space-x-2">
                    <RadioGroupItem value={drink} id={drink} />
                    <Label htmlFor={drink} className="font-open-sans text-sm">{drink}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            {/* Food preference */}
            <div>
              <Label className="font-open-sans font-medium text-base">Что вы предпочитаете на второе?</Label>
              <RadioGroup
                value={formData.food}
                onValueChange={(value) => setFormData({...formData, food: value})}
                className="mt-2"
              >
                {['Блюдо из мяса', 'Блюдо из рыбы', 'Любое'].map((food) => (
                  <div key={food} className="flex items-center space-x-2">
                    <RadioGroupItem value={food} id={food} />
                    <Label htmlFor={food} className="font-open-sans">{food}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <Separator />

            {/* Transport */}
            <div>
              <Label className="font-open-sans font-medium text-base">Как вы планируете добираться до места проведения торжества?</Label>
              <RadioGroup
                value={formData.transport}
                onValueChange={(value) => setFormData({...formData, transport: value})}
                className="mt-2"
              >
                {[
                  'Личный транспорт',
                  'Личный транспорт (готов(-а) взять попутчиков)',
                  'Такси',
                  'Пока не знаю'
                ].map((transport) => (
                  <div key={transport} className="flex items-center space-x-2">
                    <RadioGroupItem value={transport} id={transport} />
                    <Label htmlFor={transport} className="font-open-sans">{transport}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Other comments */}
            <div>
              <Label htmlFor="other" className="font-open-sans font-medium">Дополнительные комментарии</Label>
              <Textarea
                id="other"
                value={formData.other}
                onChange={(e) => setFormData({...formData, other: e.target.value})}
                className="mt-1"
                placeholder="Если у вас есть особые пожелания или вопросы..."
                rows={3}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-wedding-blue hover:bg-wedding-blue/90 text-white font-open-sans text-lg py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Icon name="Heart" className="mr-2" size={20} />
              Отправить подтверждение
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RSVPSection;