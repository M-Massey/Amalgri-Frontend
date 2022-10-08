const YoutubeEmbed = ({ embedUrl }) => {
  return (
    <iframe
      width="490"
      height="300"
      src={embedUrl}
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      samesite="Lax"
      title="Embedded youtube"
    />
  );
};

export default YoutubeEmbed;
