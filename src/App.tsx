import React from 'react'
import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='banner navbar'>
				<a href='#installation'>Installation</a>
				<div className='site-title'>npChatbot For Twitch</div>
				<a href='#commands'>Commands</a>
			</div>
			<div className='download-section'>
				<div className='download-box'>
					<p className='download-header'>Download npChatbot For Twitch</p>
					<button>Download</button>
				</div>
				<div className='description-box'>
					<div className='description-box-header'>
						Add A New Level Of Interactivity To Your Twitch Stream
					</div>
					<div className='description-box-text'>
						<p>
							npChatbot for Twitch allows you to integrate your Serato play
							history directly into your Twitch channel. With a series of chat
							commands enabled, your viewers can find out the currently playing
							song in your stream, the previously played song, the longest song
							played so far, and many others.
						</p>
					</div>
				</div>
			</div>
			<div className='details-panel'>
				<div className='details-inset'>
					<div className='details-header'>Real Time Playlist Stats</div>
					<p>
						This is where the future description of the npChatbot app and
						everything that it's capable of doing. It'll have way more text in
						here once it's complete and will fill out the element properly.
					</p>
				</div>
				<div className='details-inset'>
					<div className='details-header'>Open Up A World Of Music Discovery</div>
					<p>
						This is where the future description of the npChatbot app and
						everything that it's capable of doing. It'll have way more text in
						here once it's complete and will fill out the element properly.
					</p>
				</div>
			</div>
			<div className='footer'>npChatbot, 2023</div>
		</div>
	)
}

export default App
