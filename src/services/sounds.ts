import notifySound from '../assets/notify.mp3';
const audio = new Audio(notifySound);

export const playNotify = () => audio.play();
