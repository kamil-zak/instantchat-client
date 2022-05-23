import dayjs from 'dayjs';

export const formatTime = (sendingTime: string) => {
  const time = dayjs(sendingTime);
  return time.isToday() ? time.format('H:mm') : time.fromNow();
};

export const sliceText = (text: string, length: number) => (text.length < length ? text : text.slice(0, length) + '...');
