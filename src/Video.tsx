interface VideoProps {
    url?: string;
    views: number;
  }
  
  function Video({ url, views }: VideoProps) {
      return (
          <div className="item item-video">
              <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
              <p className="views">Просмотров: {views}</p>
          </div>
      );
  }

  export default Video;