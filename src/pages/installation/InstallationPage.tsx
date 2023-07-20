import "./installationpage.css"

const InstallationPage = ():JSX.Element => {
  return (
    <div className="installation-page">
      <div className="installation-page-header">
        Installation
      </div>
      <div className="installation-page-directions-container">
        <div className="installation-page-directions-step">
          1. Download the npChatbot app <a href='#downloadlink'>here</a>.
        </div>
        <div className="installation-page-directions-step">
          2. Run the installer once the download has completed.
        </div>
        <div className="installation-page-directions-step">
          3. Once installation has completed, start the npChatbot app.
        </div>
        <div className="installation-page-directions-step">
          4. Enter and save your credentials on first use.  You will not have to resubmit your credentials each time.
        </div>
        <div className="installation-page-directions-step">
          5. Set your OBS and interval message preferences.
        </div>
        <div className="installation-page-directions-step">
          6. Start a <a href='https://support.serato.com/hc/en-us/articles/228019568-Live-Playlists'>Live Playlist</a> session in Serato DJ Pro.
        </div>
      </div>
    </div>
  )
}

export default InstallationPage