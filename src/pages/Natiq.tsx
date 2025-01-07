import { addEchoToText, handleTextChange } from "../utils/textUtils";

import { generateAudio } from "../services/audioService";
import { useState } from "react";
import { Alert, Button, Container, Spinner } from "react-bootstrap";

export default function Natiq() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioData, setAudioData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleEcho = async () => {
    setLoading(true);
    setError(null);
    setAudioData(null);

    const echoedText = addEchoToText(text);
    try {
      const audioUrl = await generateAudio(echoedText);
      setAudioData(audioUrl);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
      setText("");
    }
  };
  return (
    <>
      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50">
          <Spinner animation="border" role="status" />
        </div>
      )}

      <h1 className="page-title">Natiq Service</h1>
      <Container className="page">
        <div className="d-flex flex-column align-items-center justify-content-center gap-4">
          <textarea
            rows={4}
            cols={50}
            value={text}
            onChange={(e) => handleTextChange(e, setText, setError)}
            placeholder="اكتب النص هنا"
          />
          {error && (
            <Alert variant="danger" className="w-100 text-center">
              {error}
            </Alert>
          )}
          <Button onClick={handleEcho} disabled={loading || !text.trim()}>
            {loading ? "Loading..." : "Echo"}
          </Button>

          {audioData && (
            <div className="output">
              <audio controls autoPlay>
                <source src={audioData} type="audio/wav" />
              </audio>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
