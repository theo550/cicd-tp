function getGreeting(name) {
  const greeting = `Hey there!`;

  if (name && typeof name === "string" && name.trim() !== "") {
    const wisher = `from ${name}`;
    return `${greeting} ${wisher}`;
  }

  return greeting;
}

module.exports = { getGreeting };
