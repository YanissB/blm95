import { titleBannerData } from "./TitleBanner-helper";

export default function TitleBanner({ page }: { page: string }) {
  const banner = titleBannerData.find((item) => item.page === page);

  if (!banner) return null;

  return (
    <div
      className="relative h-[50vh] md:h-[434px] bg-cover bg-center flex flex-col justify-center gap-y-6 md:gap-y-12 text-white px-6 md:px-12"
      style={{ backgroundImage: `url(${banner.image})` }}
    >
      <h1 className="text-4xl md:text-6xl font-bold">{banner.title}</h1>
      <h3 className="text-2xl md:text-3xl font-bold">{banner.text}</h3>
    </div>
  );
}
