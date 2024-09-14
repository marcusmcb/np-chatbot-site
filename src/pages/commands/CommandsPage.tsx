import './commandspage.css'

const CommandsPage = (): JSX.Element => {
	return (
		<>
			<div className='commands-page'>
				<div className='commands-page-container'>
					<div className='commands-page-header'>Command List:</div>

					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								(<i>"now playing"</i>)
							</span>
						</b>{' '}
						<p>displays the title/artist of the current song playing</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>previous</i>
							</span>
						</b>{' '}
						<p>displays the title/artist of the previous song played</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>start</i>
							</span>
						</b>{' '}
						<p>
							displays the title/artist of the first song played in your stream
						</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>vibecheck</i>
							</span>
						</b>{' '}
						<p>
							displays the title/artist of a random selection from your play
							history and how long ago you played it
						</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>shortest</i>
							</span>
						</b>{' '}
						<p>
							displays the title, artist, and length of the shortest song played
							in your stream so far
						</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>longest</i>
							</span>
						</b>{' '}
						<p>
							displays the title, artist, and length of the longest song played
							in your stream so far
						</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>options</i>
							</span>
						</b>{' '}
						<p>
							links to this page for your viewer's to browse the available
							commands
						</p>
					</div>
					<div className='commands-page-text'>
						<b>!stats</b>{' '}
						<p>
							displays the total number of songs played so far, your current
							average song length for this stream, and your average song
							length's increase/decrease since your last song
						</p>
					</div>
					<div className='commands-page-text'>
						<b>!doubles</b>{' '}
						<p>
							displays the total number of times that you've played doubles (the
							same track playing simultaneously on both decks) so far in your
							stream and the title/artist of the last song you played doubles
							with
						</p>
					</div>
					<div className='commands-page-text'>
						<b>
							!np{' '}
							<span className='commands-highlighted-text'>
								<i>test</i>
							</span>
						</b>{' '}
						<p>
							utility command to test communication between npChatbot and your
							Twitch chatbot account (restricted to streamer/mod use only)
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default CommandsPage
