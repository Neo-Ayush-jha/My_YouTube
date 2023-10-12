import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number'
import { Link } from 'react-router-dom'
import { BsFillCheckCircleFile } from "react-icons/bs"
import VideoLength from '../shared/videoLength'

function VideoCard({ video }) {
  return (
    <Link to={`/video/${video.id}`}>
      <div className="flex flex-col mb-8">
        <div className="h-48 relative md:h-40 md:rounded-xl overflow-hidden">
          <img src={video?.thumbnails?.[0]?.url} className='h-full w-full object-contain' alt="" />
          {video.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />
          )}
        </div>
        <div className="flex text-white mt-3">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img src={video?.author?.avatar[0]?.url} alt="" className="h-full w-full" />
              </div>
            </div>
            <div className="flex flex-col ml-3 overflow-hidden">
              <span className="text-sm font-bold line-clam-2">{video?.title}</span>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard