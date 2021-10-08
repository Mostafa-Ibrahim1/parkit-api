const nowTime = () => {
  const now = new Date();
  const time = new Date(`${now.getMonth() + 1}
    /
    ${now.getDate()} 
    / 
    ${now.getFullYear()} ${now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })}`);
  return time;
};

module.exports = nowTime;
