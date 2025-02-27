export const getUserInput = (question) => {
  if (!question) {
    throw new Error("Question is required for the `getUserInput`.");
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (input) => {
      rl.close();
      resolve(input.trim());
    });
  });
};
