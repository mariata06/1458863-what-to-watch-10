import { useEffect, useRef } from 'react';
import { FilmProps } from '../../types/types';

type videoProps = {
  film: FilmProps;
  isActive: boolean;
}

export default function Video({film, isActive}: videoProps): JSX.Element {
  const ref = useRef<HTMLVideoElement | null>(null);
  const videoElement = ref.current;

  useEffect(() => {
    if(videoElement) {
      if(isActive) {
        videoElement.play();
      } else {
        videoElement.load();
      }
    }
  }, [isActive, film.imgUrl]);

  return (
    <div className="small-film-card__image">
      <video
        src={film.videoUrl}
        poster={film.imgUrl}
        loop
        muted
        ref={ref}
        style={{ width: '100%' }}
      />
    </div>
  );
}
