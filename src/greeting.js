function getGreeting(name) {
  const greeting = `Hello world!`;

  if (name && typeof name === "string" && name.trim() !== "") {

    const wisher = `From ${name}`;

    return `${greeting} ${wisher}`;

  }

  return greeting;
}

module.exports = { getGreeting };
