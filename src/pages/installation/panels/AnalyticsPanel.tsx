import IconSpan from '../../components/IconSpan'
import '../installationpage.css'

const AnalyticsPanel = (): JSX.Element => {
	return (
		<div className='installation-page-directions-container'>
			<h1 className='installation-page-header'>
				Analytics & Discord
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
					<span className='highlighted-installation-text'>Analytics</span>{' '}
					button.
				</p>
				<p>
					NOTE: This button does *not* appear until you've completed at least
					one stream using npChatbot.
				</p>
				<img
					src='/images/installation/analytics_01.png'
					alt='npChatbot instructions, analytics (1)'
				/>
			</div>
			<div className='installation-page-directions-step'>
				<p>
					The <span className='highlighted-installation-text'>Analytics</span>{' '}
					view, which is split into two sections, will open in your device's
					default web browser.
				</p>
				<p>
					The top section allows you to review the playlist summaries for your
					individual streams. You can use the date selector or buttons to
					navigate to the playlist summary for any previous stream, and you can
					use the red X icon to delete a particular summary if you'd like to.
				</p>
				<p>
					The bottom section displays the various options you may use to
					digitally dig through all of your previous streams.
				</p>
				<img
					src='/images/installation/analytics_02.png'
					alt='npChatbot instructions, analytics (2)'
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
					<span className='highlighted-installation-text'>doubles</span>, which
					occurs when the same song is loaded/playing on both decks.
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
					src='/images/installation/analytics_03.png'
					alt='npChatbot instructions, analytics (3)'
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
					playlists for each stream with your connected server and channel.
				</p>
				<p>
					Click the{' '}
					<span className='highlighted-installation-text'>Discord</span> icon
					next to the playlist link to share it; you'll see a confirmation once
					the link has been successfully shared.
				</p>
				<img
					src='/images/installation/analytics_04.png'
					alt='npChatbot instructions, analytics (4)'
				/>
			</div>
		</div>
	)
}

export default AnalyticsPanel
