export const addEchoToText = (text: string): string => {
  if (!text) return "";
  const words = text.trim().split(" ");
  const lastWord = words.pop();
  return `${text} ${lastWord} ${lastWord} `;
};

export const handleTextChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  setText: (text: string) => void,
  setError: (error: string | null) => void
) => {
  const inputText = e.target.value;

  const arabicRegex = /^[\u0600-\u06FF\s]*$/;

  if (arabicRegex.test(inputText)) {
    setText(inputText);
    setError(null);
  } else {
    setError("Input accepts only Arabic characters.");
  }
};
