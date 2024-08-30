import React, { useState } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image"; // Ensure you have this imported

function renderNextImage({ alt = "", title, sizes }, { photo, width, height }) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        fill
        src={photo.src}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

const PhotoAlbumComponent = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  const numberOfColumns = photos.length <= 2 ? 1 : 2;

  return (
    <div className="projectPhotos">
      <ColumnsPhotoAlbum
        spacing={1}
        photos={photos}
        render={{ renderNextImage }}
        onClick={({ index }) => setIndex(index)}
        columns={numberOfColumns}
        targetRowHeight={100} // This adjusts the target row height to make them flexible
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default PhotoAlbumComponent;
