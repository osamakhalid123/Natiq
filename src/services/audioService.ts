import axios from "axios";

export const generateAudio = async (text: string) => {
  try {
    const response = await axios.post(
      "https://echo-6sdzv54itq-uc.a.run.app/natiq",
      { text },
      { headers: { "Content-Type": "application/json" } }
    );

    const waveData = response.data.wave;
    const base64Audio = waveData.replace(/-/g, "+").replace(/_/g, "/");
    return `data:audio/wav;base64,${base64Audio}`;
  } catch (error) {
    console.error("Failed to generate audio:", error);
    throw new Error("Failed to generate audio. Please try again.");
  }
};
