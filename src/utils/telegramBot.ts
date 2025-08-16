interface RSVPData {
  fullName: string;
  partnerName: string;
  attending: string;
  alcohol: string;
  food: string;
  transport: string;
  other: string;
}

export const sendToTelegram = async (formData: RSVPData): Promise<boolean> => {
  // Замените на ваши реальные данные
  const BOT_TOKEN = 'YOUR_BOT_TOKEN'; // Получите от @BotFather
  const CHAT_ID = 'YOUR_CHAT_ID'; // ID чата или канала
  
  const message = `🎉 НОВОЕ ПОДТВЕРЖДЕНИЕ НА СВАДЬБУ 🎉

👤 ФИО: ${formData.fullName}
💑 Спутник/спутница: ${formData.partnerName || 'Не указано'}
✅ Планирует посетить: ${formData.attending === 'yes' ? 'Да' : 'Нет'}
🍷 Предпочитаемый напиток: ${formData.alcohol || 'Не указано'}
🍽️ Предпочтения в еде: ${formData.food || 'Не указано'}
🚗 Способ добраться: ${formData.transport || 'Не указано'}
💬 Дополнительные комментарии: ${formData.other || 'Нет'}

📅 Дата отправки: ${new Date().toLocaleString('ru-RU')}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    if (response.ok) {
      console.log('Сообщение успешно отправлено в Telegram');
      return true;
    } else {
      console.error('Ошибка отправки в Telegram:', await response.text());
      return false;
    }
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    return false;
  }
};