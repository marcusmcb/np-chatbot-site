import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const SummariesPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<h1 className='installation-page-header'>
				Playlist Summaries & Discord
				<IconSpan /> Sharing
			</h1>
			<div className='installation-page-directions-step'>
				<p>
					When disconnecting npChatbot from Twitch
					<IconSpan />,{' '}
					<span className='highlighted-installation-text'>npChatbot</span> will
					create a final summary of your streamed set, including all of the
					"stats" for that set along with any artists, songs, or terms your
					viewers searched for during that stream (and more!).
				</p>
				<p>
					You can view these at any time by clicking the{' '}
					<span className='highlighted-installation-text'>View Summary</span>{' '}
					button.
				</p>
				<p>
					NOTE: This button does *not* appear until you've completed at least
					one stream using npChatbot.
				</p>
				<img
					src='/images/installation/summaries_01.png'
					alt='npChatbot instructions, Discord set 1'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					By default,{' '}
					<span className='highlighted-installation-text'>View Summary</span>{' '}
					will display the playlist summary for your most recent stream. Use the
					arrow icons to navigate through your playlist summaries. If you wish
					to delete a playlist summary, use the red x icon to do so.
				</p>
				<p>
					The left-hand panel will display the "stats" for the selected stream,
					with specific details about your streamed set along with links to
					share that stream's{' '}
					<span className='highlighted-installation-text'>Spotify</span>
					<IconSpan /> playlist (if you created one).
				</p>
				<img
					src='/images/installation/summaries_02.png'
					alt='npChatbot instructions, Discord set 1'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					The right hand panel will display your viewer's command usage during
					that stream.
				</p>
				<p>
					The{' '}
					<span className='highlighted-installation-text'>
						Doubles detected
					</span>{' '}
					section will display a list of the songs where you used{' '}
					<span className='highlighted-installation-text'>doubles</span>,
					which occurs when the same song is loaded/playing on both decks.
				</p>
				<p>
					The{' '}
					<span className='highlighted-installation-text'>Songs queried</span>{' '}
					section will display any songs viewers used the{' '}
					<span className='highlighted-installation-text'>!np</span> commands to
					identify.
				</p>
				<p>
					The{' '}
					<span className='highlighted-installation-text'>Terms searched</span>{' '}
					section will display any artists, songs, or terms that viewers used
					the <span className='highlighted-installation-text'>!dyp</span>{' '}
					command to search for.
				</p>
				<img
					src='/images/installation/summaries_03.png'
					alt='npChatbot instructions, Discord set 1'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					If you've linked npChatbot with{' '}
					<span className='highlighted-installation-text'>Discord</span>, you
					can share your{' '}
					<span className='highlighted-installation-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlists for each stream with your connected server and channel.{' '}
				</p>
				<p>
					Click the{' '}
					<span className='highlighted-installation-text'>Discord</span> icon
					next to the playlist link to share it; you'll see a confirmation once
					the link has been successfully shared.
				</p>
				<img
					src='/images/installation/summaries_04.png'
					alt='npChatbot instructions, Discord set 1'
				/>
			</div>
		</div>
	)
}

export default SummariesPanel
