import Seo from '../components/Seo'
import './downloadspage.css'

const DownloadsPage = (): JSX.Element => {
    return (
        <div className="downloads-page">
            <Seo
                title="Download npChatbot | Windows and macOS"
                description="Download npChatbot for Windows or macOS to connect Serato DJ live playlist history with Twitch chat commands, Spotify playlists, and stream tools."
                path="/downloads"
            />
            <h1>Downloads</h1>
        </div>
    );
}

export default DownloadsPage;
