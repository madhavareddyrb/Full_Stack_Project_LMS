import "./SupportPage.css"

export default function SupportPage() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <img
          src="https://s.udemycdn.com/teaching/support-1-2x-v3.jpg"
          alt="left illustration"
        />
      </div>

      <div className="hero-center">
        <h1>You won’t have to do it alone</h1>
        <p>
          Our Instructor Support Team is here to answer your questions and
          review your test video, while our Teaching Center gives you plenty of
          resources to help you through the process.
        </p>
        <a href="#">Need more details before you start? Learn more.</a>
      </div>

      <div className="hero-right">
        <img
          src="https://s.udemycdn.com/teaching/support-2-2x-v3.jpg"
          alt="right illustration"
        />
      </div>
    </div>
  );
}
