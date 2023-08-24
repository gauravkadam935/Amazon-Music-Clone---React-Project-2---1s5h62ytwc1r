export const formatTime = (time) => {
    if (time && !isNaN(time)) {
      let minutes = Math.floor(time / 60);
      minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      let seconds = Math.floor(time % 60);
      seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${seconds}`;
    }
    return "00:00";
  };