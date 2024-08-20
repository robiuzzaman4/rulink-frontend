export const getGreeting = () => {
  const now = new Date();
  const hour = now.getHours();

  if (hour < 12) {
    return "Hi! Good Morning";
  } else if (hour < 18) {
    return "Hi! Good Afternoon";
  } else if (hour < 21) {
    return "Hi! Good Evening";
  } else {
    return "Hi! Good Night";
  }
};
