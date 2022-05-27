import dayjs from 'dayjs';

export const formatTime = (sendingTime: string) => {
  const time = dayjs(sendingTime);
  return time.isToday() ? time.format('H:mm') : time.fromNow();
};

export const sliceText = (text: string, length: number) => (text.length < length ? text : text.slice(0, length) + '...');

export const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
export const isValidHex = (hex: string) => hexRegex.test(hex);
