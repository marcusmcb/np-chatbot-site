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
					button. You'll see the Analytics view open in your device's default
					web browser.
				</p>

				<img
					src='/images/installation/NEW_analytics_00.png'
					alt='npChatbot instructions, analytics (1)'
				/>
				<p>
					NOTE: This button does *not* appear until you've completed at least
					one stream using npChatbot.
				</p>
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
			</div>
			<h3 className='installation-page-header'>
				Summary Stats, Spotify
				<IconSpan /> Links, & Discord
				<IconSpan /> Sharing
			</h3>
			<div className='installation-page-directions-step'>
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
			</div>
			<h3 className='installation-page-header'>Doubles & Command Use Recap</h3>
			<div className='installation-page-directions-step'>
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
			</div>
			<h3 className='installation-page-header'>Playlist Analytics</h3>
			<div className='installation-page-directions-step'>
				<p>
					The bottom section is where you can review more detailed analytics
					across all playlist summaries for your streams.
				</p>
				<p>These are broken down by section:</p>
				<ul>
					<li>Top Songs Played</li>
					<li>Shortest / Longest Songs Played</li>
					<li>Doubles Played</li>
					<li>Command Use</li>
					<li>Song Length</li>
					<li>Songs Played</li>
					<li>Search Songs</li>
				</ul>
				<p>
					Clicking any of the headers in this row will open the data view for
					that section.
				</p>
				<p>
					Each section also features options for you to specify a date or stream
					range to view your playlist data for the period selected.
				</p>
			</div>
			<h3 className='installation-page-header'>Top Songs Played</h3>

			<div className='installation-page-directions-step'>
				<p>
					This section will display the most frequently played songs across your
					streams for the date/stream range selected.
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
			<h3 className='installation-page-header'>Shortest / Longest Songs</h3>
			<div className='installation-page-directions-step'>
				<p>
					This section will display a list of both the shortest and longest
					songs played across your streams for the date/stream range selected.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_05.png'
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
							src='/images/installation/NEW_analytics_05.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
			</div>
			<h3 className='installation-page-header'>Doubles Played</h3>
			<div className='installation-page-directions-step'>
				<p>
					This section displays a list of songs most commonly used during
					doubles routines performed in your streams for the date/stream range
					selected.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_06.png'
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
							src='/images/installation/NEW_analytics_06.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
			</div>
			<h3 className='installation-page-header'>Command Use</h3>
			<div className='installation-page-directions-step'>
				<p>
					The Command Use section will display a list of the songs most commonly
					identified by your viewers using npChatbot's{' '}
					<span className='highlighted-installation-text'>!np</span> and{' '}
					<span className='highlighted-installation-text'>!np previous</span>{' '}
					commands across your streams for the date/stream range selected.
				</p>
				<p>
					This section also displays a list of the artists, songs, and terms
					most commonly searched for by your viewers using npChatbot's{' '}
					<span className='highlighted-installation-text'>!dyp</span> command
					across your streams for the date/stream range selected.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_07.png'
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
							src='/images/installation/NEW_analytics_07.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
			</div>
			<h3 className='installation-page-header'>Song Length</h3>
			<div className='installation-page-directions-step'>
				<p>
					The Song Length section displays a graph of the average song length
					for each stream in the date/stream range selected, giving you an easy
					way to visualize how long you typically let each song play across your
					streams for the period specified.
				</p>
				<p>
					Hovering over any point in the graph will display the average song
					length for that stream, and clicking that point will display that
					stream's recap in the summary section above.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_08.png'
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
							src='/images/installation/NEW_analytics_08.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
			</div>

			<h3 className='installation-page-header'>Songs Played</h3>
			<div className='installation-page-directions-step'>
				<p>
					The Songs Played section displays a graph of the number of songs
					played for each stream in the date/stream range selected, giving you
					an easy way to visualize how many songs you typically play across your
					streams for the period specified.
				</p>
				<p>
					Hovering over any point in the graph will display the number of songs
					played for that stream, and clicking that point will display that
					stream's recap in the summary section above.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_09.png'
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
							src='/images/installation/NEW_analytics_09.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
			</div>
			<h3 className='installation-page-header'>Search Songs</h3>
			<div className='installation-page-directions-step'>
				<p>
					The Search Songs section will display a list of songs based on the
					artist, title, or term you enter for the date/stream range you've
					specified.
				</p>
				<p>
					This is a very useful reference tool for quickly finding specific
					songs or artists that you've played in previous streams and how often
					you've played them.
				</p>
				<img
					className='installation-image-clickable installation-image-thumbnail'
					src='/images/installation/NEW_analytics_10.png'
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
							src='/images/installation/NEW_analytics_10.png'
							alt='npChatbot instructions, analytics view (full size)'
						/>
						<span className='modal-close' aria-hidden='true'>
							&#10005;
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default AnalyticsPanel
