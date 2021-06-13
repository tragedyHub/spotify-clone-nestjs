import { Grid, Box } from '@material-ui/core'
import React from 'react'
import { ITrack } from '../types/track'
import TrackItem from './TrackItem'

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return (
        <Grid>
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid>
    )
}

export default TrackList