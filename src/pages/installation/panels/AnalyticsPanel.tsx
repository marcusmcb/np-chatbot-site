import IconSpan from '../../components/IconSpan'
import '../installationpage.css'
import { useEffect, useState } from 'react'

const AnalyticsPanel = (): JSX.Element => {
	const [modalOpen, setModalOpen] = useState(false)
	const handleImgClick = () => setModalOpen(true)
	const handleModalClose = () => setModalOpen(false)

	useEffect(() => {
		if (!modalOpen) return
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setModalOpen(false)
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [modalOpen])

	return (
		<div className='installation-page-directions-container'>
			<h1 className='installation-page-header'>
				Analytics & Discord
				<IconSpan /> Sharing
			</h1>
			<div className='installation-page-directions-step'>
				<p>
					When disconnecting npChatbot from{' '}
					<span className='highlighted-installation-text'>
						Twitch
						<IconSpan />
					</span>
					, npChatbot will create a final summary of your streamed set,
					including all of the "stats" for that set along with any artists,
					songs, or terms your viewers searched for during that stream (and
					more!).
				</p>
				<p>
					You can view these at any time by clicking the{' '}
					<span className='highlighted-installation-text'>Analytics</span>{' '}
					button.
				</p>

				<img
					src='/images/installation/NEW_analytics_00.png'
					alt='npChatbot instructions, analytics (1)'
				/>
				<p>
					NOTE: This button does *not* appear until you've completed at least
					one stream using npChatbot.
				</p>
				<hr className='divider' />
			</div>

			<h3 className='installation-page-header'>Playlist Summaries</h3>
			<div className='installation-page-directions-step'>
				<p>
					The <span className='highlighted-installation-text'>Analytics</span>{' '}
					view, which is split into two sections, will open in your device's
					default web browser.
				</p>
				<p>
					The top section allows you to review the playlist summaries for your
					individual streams.
				</p>
				<p>
					You can use the date selector or buttons to navigate to the playlist
					summary for any previous stream, and you can use the red X icon to
					delete a particular summary if you'd like to.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_11.png'
					alt='npChatbot instructions, analytics view'
					role='button'
					tabIndex={0}
					onClick={handleImgClick}
					onKeyDown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							event.preventDefault()
							handleImgClick()
						}
					}}
				/>
				{modalOpen && (
					<div
						className='modal-overlay'
						onClick={handleModalClose}
						role='dialog'
						aria-modal='true'
					>
						<img
							className='modal-img'
							src='/images/installation/NEW_analytics_11.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
				<hr className='divider' />
				<p>
					The summary panel on the left provides you with a high-level recap of
					each stream, including its date, start time, set length, total tracks
					played, and the average track length for that stream.{' '}
				</p>
				<p>
					If you used the{' '}
					<span className='highlighted-installation-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					feature during a given stream, the playlist link for that stream will
					also appear here.
				</p>
				<p>
					If you've authorized npChatbot with your{' '}
					<span className='highlighted-installation-text'>
						Discord
						<IconSpan />
					</span>{' '}
					server, you'll see an icon next to each playlist link. Clicking this
					will share that{' '}
					<span className='highlighted-installation-text'>
						Spotify
						<IconSpan />
					</span>{' '}
					playlist link to your connected server. A confirmation message in
					npChatbot will let you know once the link has been successfully
					shared.
				</p>
				<img
					src='/images/installation/NEW_analytics_02.png'
					alt='npChatbot instructions, analytics (1)'
				/>
				<hr className='divider' />
				<p>
					The panel on the right will display a recap of the artists and songs
					that your viewers identified during the selected stream using
					npChatbot's commands.
				</p>
				<p>
					<span className='highlighted-installation-text'>
						Doubles detected
					</span>{' '}
					will display a list of songs used in doubles routines during a given
					stream.
				</p>
				<p>
					<span className='highlighted-installation-text'>Songs queried</span> a
					list of the songs that your viewers identified using the{' '}
					<span className='highlighted-installation-text'>!np</span> or{' '}
					<span className='highlighted-installation-text'>!np previous</span>{' '}
					commands.
				</p>
				<p>
					<span className='highlighted-installation-text'>Terms searched</span>{' '}
					will display a list of any artists, songs, or terms that your viewers
					searched for using the{' '}
					<span className='highlighted-installation-text'>!dyp</span> command.
				</p>
				<p>
					This information is useful in understanding which artists and songs
					that your viewers really connected with or signalled an interest in
					during a given stream.
				</p>
				<img
					src='/images/installation/NEW_analytics_03.png'
					alt='npChatbot instructions, analytics (1)'
				/>
				<hr className='divider' />
				
				<p>
					The bottom section displays the various options you may use to
					digitally dig through all of your previous streams.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_04.png'
					alt='npChatbot instructions, analytics view'
					role='button'
					tabIndex={0}
					onClick={handleImgClick}
					onKeyDown={(event) => {
						if (event.key === 'Enter' || event.key === ' ') {
							event.preventDefault()
							handleImgClick()
						}
					}}
				/>
				{modalOpen && (
					<div
						className='modal-overlay'
						onClick={handleModalClose}
						role='dialog'
						aria-modal='true'
					>
						<img
							className='modal-img'
							src='/images/installation/NEW_analytics_04.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
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
