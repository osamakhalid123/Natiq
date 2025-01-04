import { Container } from "react-bootstrap";

export default function About() {
  return (
    <>
      <h1 className="page-title">About Natiq</h1>
      <Container className="page">
        <p>
          Natiq is an advanced text-to-speech service designed specifically for
          the Arabic language. It uses cutting-edge technology to produce
          natural and clear audio from Arabic text. Our service is ideal for:
        </p>
        <ul>
          <li>Content creators who want to add voiceovers to their videos.</li>
          <li>
            Developers building applications that require text-to-speech
            functionality.
          </li>
          <li>
            Language learners who want to improve their Arabic pronunciation.
          </li>
        </ul>
        <p>
          With Natiq, you can easily generate audio files that sound like a
          native speaker. Try it out today and experience the power of Arabic
          text-to-speech!
        </p>
      </Container>
    </>
  );
}