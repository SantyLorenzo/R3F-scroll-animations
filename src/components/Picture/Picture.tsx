interface PictureProps {
  path: string;
  path2x: string;
  pathWebp: string;
  pathWebp2x: string;
  alt: string;
}

export const Picture = ({
  path,
  path2x,
  pathWebp,
  pathWebp2x,
  alt,
}: PictureProps) => {
  return (
    <picture>
      <source type="image/webp" srcSet={`${pathWebp} 1x, ${pathWebp2x} 2x`} />
      <img src={`${path}`} srcSet={`${path2x} 2x`} alt={alt} />
    </picture>
  );
};
