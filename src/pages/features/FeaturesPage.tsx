
import IconSpan from '../components/IconSpan'
import './featurespage.css'
import { useState } from 'react';

const FeaturesPage = (): JSX.Element => {
	   const [modalOpen, setModalOpen] = useState(false);
	   const handleImgClick = () => setModalOpen(true);
	   const handleModalClose = () => setModalOpen(false);
	   return (
			   <div className='features-page'>
			<div className='features-page-header-container'>
				<div className='features-page-feature-main'>
					<div className='features-page-header main-header page-title'>
						What is npChatbot anyway?
					</div>
					<div className='features-page-feature-main main-header-text'>
						<p>
							npChatbot (<span className='highlighted-text'>"now playing"</span>
							) is a desktop app that adds a suite of interactive chat commands
							to your Twitch
							<IconSpan /> channel during your live streamed DJ sets.
						</p>
						<p>
							Under the hood, npChatbot links your{' '}
							<a
								className='serato-link'
								href='https://support.serato.com/hc/en-us/articles/228019568-Live-Playlists'
								rel='noreferrer'
								target='_blank'
							>
								<span className='highlighted-text'>
									Serato
									<IconSpan /> Live Playlist
								</span>
							</a>{' '}
							data to your Twitch
							<IconSpan /> channel's chat, enabling an interactive connection
							between the music you're playing and your viewers in real time.
						</p>
					</div>
				</div>
				<div className='features-page-feature video-element'>
					<video controls width='100%'>
						<source src='/videos/npchatbot-demo-01.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>

			<div className='features-page-container'></div>

			{/* <hr /> */}

			<div className='features-page-container'>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>
						Interactive Music Discovery
					</div>
					<p>
						By opening up access to your play history during your live-streamed
						DJ sets, viewers can directly interact with that history, adding a
						unique layer of interactivity and music discovery to each stream.
					</p>
					<p>
						The <span className='highlighted-text'>!np</span> command and its
						options allow your viewers to see the song currently playing, the
						previous song played (in case they missed it!), the song you began
						your set with, and others.
					</p>
					<p>
						There's also a "vibecheck" option that returns a random selection
						from your play history (title/artist) and how long ago you played
						it.
					</p>
				</div>
				<div className='features-page-video'>
					<video controls width='100%'>
						<source src='/videos/npchatbot-demo-02.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>
						Search By Song Or Artist
					</div>
					<p>
						When using the <span className='highlighted-text'>!dyp</span>{' '}
						command (short for "did you play...?") followed by an artist name or
						a song title, your viewers will see the total number of songs that
						match the result along with the most recent song played and how long
						ago it was played.
					</p>
					<p>
						This gives your viewers the ability to digitally "dig" through your
						history and see what kind of music/vibe you've been playing up to
						that point in the set. It also gives you, the DJ, some <i>real</i>{' '}
						insight (and potential inspiration) on where to go next musically
						speaking.
					</p>
				</div>
				<div className='features-page-video'>
					<video controls width='100%'>
						<source src='/videos/dyp-command-video.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>
						Real Time Playlist Stats
					</div>
					<p>
						Using the commmands in npChatbot, your viewers (or you!) can check
						your current
						<span className='highlighted-text'> stats</span> at any time during
						the stream with options to display the total number of songs you've
						played so far, your average song length for this set currently, and
						whether that average has increased/decreased since the previous song
						played.
					</p>
					<p>
						For a deeper dive, viewers have access to commands that determine
						the <span className='highlighted-text'>shortest song</span> and{' '}
						<span className='highlighted-text'>longest song</span> played so far
						in your set, as well as how many times you've rocked{' '}
						<span className='highlighted-text'>doubles</span> during your set
						and which songs you were cutting it up with when you did.
					</p>
				</div>
				<div className='features-page-video'>
					<video controls width='100%'>
						<source src='/videos/doubles_command_video.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>
						Create Spotify Playlists From Your DJ Sets
					</div>
					<p>
						Linking npChatbot to your{' '}
						<span className='highlighted-text'>
							Spotify
							<IconSpan />
						</span>{' '}
						account gives you the ability to create and share a playlist of your
						live set with your{' '}
						<span className='highlighted-text'>
							Twitch
							<IconSpan />
						</span>{' '}
						community any time that you stream.
					</p>
					<p>
						With this feature enabled, npChatbot will create a new playlist from
						your{' '}
						<span className='highlighted-text'>
							Serato
							<IconSpan />
						</span>{' '}
						play history when you connect the app to your chat.
					</p>
					<p>
						npChatbot will then regularly update the playlist with each new song
						you play, and you can share this playlist with your viewers at any
						time using the{' '}
						<span className='highlighted-text'>!np playlist</span> command.
					</p>
				</div>
				<div className='features-page-video'>
					<video controls width='100%'>
						<source src='/videos/spotify_demo.mp4' type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>Auto ID & Tag Clean-Up</div>
					<p>
						With the <span className='highlighted-text'>Auto ID</span> feature
						enabled, npChatbot will send a message to your channel's chat
						identifying the current song playing each time that it updates.
					</p>
					<p>
						Additionally, npChatbot also gives streamers the options to clean up
						the file tag text used with this feature, removing any extra text
						found in parentheses or brackets within the title or artist fields
						before sending the info to the chat.
					</p>
				</div>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>OBS Integration</div>
					<p>
						For streamers using OBS, npChatbot can be configured to send each
						command's response to OBS for use in overlays in your live streams.
					</p>
					<p>
						With{' '}
						<a
							className='serato-link'
							href='https://obsproject.com/kb/remote-control-guide'
							rel='noreferrer'
							target='_blank'
						>
							<span className='highlighted-text'>OBS WebSockets</span>
						</a>{' '}
						enabled, you can enter your OBS websocket address (and password if
						secured) which will allow npChatbot to send each command's response
						to OBS for use on-screen as part of a{' '}
						<a
							className='serato-link'
							href='https://obsproject.com/kb/text-sources'
							rel='noreferrer'
							target='_blank'
						>
							<span className='highlighted-text'>Text (GDI+)</span>
						</a>{' '}
						element.
					</p>
				</div>
			</div>
			<div className='features-page-container'>
				<div className='features-page-feature'>
					<div className='features-page-subheader'>Playlist Summaries</div>
					<p>
						With npChatbot's{' '}
						<span className='highlighted-text'>Playlist Summaries</span>{' '}
						feature, you can review your final playlist "stats" and npChatbot
						command use for each of your DJ streams.
					</p>
					<p>
						Along with your final playlist "stats", each summary will give you a
						detailed breakdown of the songs, artists, and terms that your
						viewers searched for during that stream. This additional insight
						gives you, the streaming DJ, a better look into what music your
						viewers are potentially signalling interest in during your streams.
					</p>
				</div>
							   <div className='features-page-feature'>
									   <img
											   src='/images/features/npchatbot_103_screenshot_02.png'
											   alt='Playlist Summaries'
											   width='85%'
											   height='85%'
											   style={{ cursor: 'pointer' }}
											   onClick={handleImgClick}
									   />
									   {modalOpen && (
											   <div className='modal-overlay' onClick={handleModalClose}>
													   <img
															   className='modal-img'
															   src='/images/features/npchatbot_103_screenshot_02.png'
															   alt='Playlist Summaries Full Size'
													   />
													   <span className='modal-close'>&#10005;</span>
											   </div>
									   )}
							   </div>
			</div>
		</div>
	)
}

export default FeaturesPage
