import './commandspage.css'

const CommandsPage = (): JSX.Element => {
	return (
		<>
			<div className='commands-page'>
				<div className='commands-page-container'>
					<div className='commands-page-header'>Command List:</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>!np </b>
						</span>{' '}
						<p className='command-name-description-text'>
							displays the title and artist of the current song playing
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>previous</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the title and artist of the previous song played
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>start</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the title and artist of the first song played in your stream
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>vibecheck</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the title and artist of a random selection from your play
							history and how long ago you played it
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>shortest</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the title, artist, and length of the shortest song played
							within the last hour
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>longest</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the title, artist, and length of the longest song played
							within the last hour
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>options</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							adds a link in your chat to this page for your viewers to browse
							the available commands
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>stats</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the total number of songs played so far and the current
							average song length for your stream
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>doubles</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							displays the total number of times that you've played doubles (the
							same track playing simultaneously on both decks) so far in your
							stream and the title/artist of the last song you played doubles
							with
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!dyp{' '}
								<span className='commands-highlighted-text'>
									(<i>artist or title</i>)
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
							searches your play history for the artist or title queried. if
							found, the response will display how many matches were found along
							with most recent match found and how long ago it was played.
						</p>
					</div>
					<div className='commands-page-text'>
						<span className='command-name-span'>
							<b>
								!np{' '}
								<span className='commands-highlighted-text'>
									<i>test</i>
								</span>
							</b>{' '}
						</span>
						<p className='command-name-description-text'>
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
