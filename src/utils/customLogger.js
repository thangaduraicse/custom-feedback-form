export const customLogger = (message, result) => {
  console.log(`%c${message} %c${JSON.stringify(result)}`, "color: green", "color: blue");
};