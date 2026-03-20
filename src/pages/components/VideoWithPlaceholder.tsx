import React from 'react'

export type VideoWithPlaceholderProps = {
	src: string
	type?: string
	className?: string
	controls?: boolean
	preload?: 'none' | 'metadata' | 'auto'
	poster?: string
	ariaLabel?: string
}

const VideoWithPlaceholder = ({
	src,
	type = 'video/mp4',
	className,
	controls = true,
	preload = 'metadata',
	poster,
	ariaLabel = 'Video player',
}: VideoWithPlaceholderProps): JSX.Element => {
	const [isReady, setIsReady] = React.useState(false)

	return (
		<div
			className={`video-shell ${isReady ? 'is-ready' : ''} ${className ?? ''}`.trim()}
		>
			{!isReady && (
				<div className='video-placeholder' aria-hidden='true'>
					<div className='video-placeholder-text'>Loading video…</div>
				</div>
			)}
			<video
				controls={controls}
				preload={preload}
				poster={poster}
				aria-label={ariaLabel}
				onLoadStart={() => setIsReady(false)}
				onLoadedData={() => setIsReady(true)}
				onCanPlay={() => setIsReady(true)}
			>
				<source src={src} type={type} />
				Your browser does not support the video tag.
			</video>
		</div>
	)
}

export default VideoWithPlaceholder
