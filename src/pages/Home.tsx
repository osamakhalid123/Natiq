import { Button, Container } from "react-bootstrap";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="page-title">Welcome to Natiq Service</h1>
      <Container className="page">
        <p>
          Natiq is a powerful text-to-speech service that converts Arabic text
          into natural-sounding audio. Whether you're creating content, learning
          Arabic, or building an application, Natiq makes it easy to generate
          high-quality audio.
        </p>

        <img
          src="/logo.webp"
          alt="logo"
          className="w-25 h-25 mb-5"
        />

        <Link to="/natiq">
          <Button variant="primary">Try Natiq Now</Button>
        </Link>
      </Container>
    </>
  );
}
