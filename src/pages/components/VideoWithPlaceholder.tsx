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
	const [loadState, setLoadState] = React.useState<
		'loading' | 'ready' | 'error'
	>('loading')
	const isReady = loadState === 'ready'

	React.useEffect(() => {
		setLoadState('loading')
	}, [src])

	return (
		<div
			className={`video-shell ${isReady ? 'is-ready' : ''} ${className ?? ''}`.trim()}
		>
			{loadState === 'loading' && (
				<div className='video-placeholder' aria-hidden='true'>
					<div className='video-placeholder-text'>Loading video...</div>
				</div>
			)}
			{loadState === 'error' && (
				<div className='video-placeholder' role='status'>
					<div className='video-placeholder-text'>
						Video failed to load.
					</div>
				</div>
			)}
			<video
				controls={controls}
				preload={preload}
				poster={poster}
				playsInline
				aria-label={ariaLabel}
				onLoadedMetadata={() => setLoadState('ready')}
				onLoadedData={() => setLoadState('ready')}
				onCanPlay={() => setLoadState('ready')}
				onError={() => setLoadState('error')}
			>
				<source src={src} type={type} />
				Your browser does not support the video tag.
			</video>
		</div>
	)
}

export default VideoWithPlaceholder
