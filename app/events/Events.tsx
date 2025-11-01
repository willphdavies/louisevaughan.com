import "./events.css";
export default function Events() {
  return (
    <div className="events-container container mx-auto p-4">
      <div className="mb-4">
        <h1
          className="text-3xl md:text-5xl font-bold text-white text-center"
          style={{ textShadow: "2px 2px 4px #000" }}
        >
          Upcoming Events
        </h1>
        <p
          className="text-md md:text-xl font-semibold text-white mt-4 text-center"
          style={{ textShadow: "2px 2px 4px #000" }}
        >
          Stay tuned for our upcoming events and live performances
        </p>
      </div>
      <div className="events-list">
        <a
          href="https://www.songkick.com/artists/10331368"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="off"
          data-background-color="rgb(0,0,0,1)"
          data-font-color="rgb(255,255,255,1)"
          data-button-bg-color="rgb(255,255,255,1)"
          data-button-text-color="rgb(0,0,0,1)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="on"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
          style={{ display: "none" }}
        ></a>
      </div>
    </div>
  );
}
