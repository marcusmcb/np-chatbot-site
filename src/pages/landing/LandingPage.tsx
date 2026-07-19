import IconSpan from "../components/IconSpan";
import Seo from "../components/Seo";
import VideoWithPlaceholder from "../components/VideoWithPlaceholder";
import { useNavigate } from "react-router-dom";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "npChatbot",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Windows, macOS",
  description:
    "npChatbot connects Serato DJ live playlist history to Twitch chat with interactive commands, Spotify playlist tools, Discord sharing, and DJ set analytics.",
  url: "https://www.npchatbot.com/",
  downloadUrl:
    "https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot-1.1-setup.exe",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

const LandingPage = (): JSX.Element => {
  const navigate = useNavigate();
  const handleLearnMore = () => {
    navigate("/features");
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };
  return (
    <div>
      <Seo
        title="npChatbot | Twitch Chat Commands for Serato DJ Live Playlists"
        description="Connect Serato DJ live playlist history to Twitch chat with interactive now-playing commands, DJ set stats, Spotify playlist tools, and Discord sharing."
        path="/"
        jsonLd={homeJsonLd}
      />
      <div className="download-section">
        <div className="download-box">
          <div className="download-header">Download npChatbot</div>
          <div className="download-version">(version 1.1 for Mac soon)</div>
          <div className="download-button-group">
            <a
              className="download-button"
              href="https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot-1.1-setup.exe"
            >
              Download (PC - 1.1)
            </a>
            <a
              className="download-button"
              href="https://npchatbot-downloads.s3.us-west-2.amazonaws.com/npchatbot-1.0.4-setup.dmg"
            >
              Download (Mac - 1.0.4)
            </a>
          </div>
        </div>
        <div className="description-box">
          <div className="description-box-text">
            <h1>
              Connect your Twitch
              <IconSpan /> chat to your Serato
              <IconSpan /> Live Playlist to add a collection of interactive
              music discovery features to your channel
            </h1>
          </div>
          <div className="description-box-text">
            <div className="features-page-feature video-element">
              <VideoWithPlaceholder
                src="/videos/npchatbot_demo.MP4"
                ariaLabel="npChatbot demo video"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="details-panel details-panel-top">
        <div className="details-panel-container">
          <div className="details-inset">
            <h2 className="details-header">Real Time Music Discovery</h2>
            <p>
              npChatbot enables a unique level of music discovery during your
              live-streamed DJ sets by connecting your Twitch
              <IconSpan /> chat (aka, your viewers!) to your Serato
              <IconSpan /> Live Playlist through a set of interactive chat
              commands.
            </p>
          </div>
          <div className="details-inset">
            <h2 className="details-header">Instant Playlist Stats</h2>
            <p>
              npChatbot's commands aren't limited to just music discovery. The
              app also provides real-time "stats" about your DJ set during your
              live streams, offering up unique insights about these sets to both
              you and your viewers.
            </p>
          </div>
        </div>
      </div>
      <div className="details-panel details-panel-bottom">
        <div className="details-panel-container">
          <div className="details-inset">
            <h2 className="details-header">
              Spotify<IconSpan/> Playlist Creation + Discord<IconSpan/> Integration
            </h2>
            <p>
              Linking your Spotify
              <IconSpan /> account with npChatbot gives you the ability to
              create and share playlists of your DJ sets with your Twitch
              <IconSpan /> viewers directly in your chat! You can also link
              npChatbot with your Discord
              <IconSpan /> server to share them there as well!
            </p>
          </div>
          <div className="details-inset">
            <h2 className="details-header">Playlist Analytics</h2>
            <p>
              npChatbot also provides a final Playlist Summary for each streamed
              DJ set with all of your set's stats and command use during that
              stream. This gives you, the DJ streamer, deeper insights into the
              music played and how your viewers interacted with it during your
              streams.
            </p>
          </div>
        </div>
      </div>
      {/* Learn More Button */}
      <div className="learn-more-button-container">
        <button className="learn-more-button" onClick={handleLearnMore}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
