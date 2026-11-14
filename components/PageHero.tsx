interface PageHeroProps {
  title: string
  breadcrumb?: string
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <div className="relative w-full mt-[124px] bg-[#222222] overflow-hidden select-none">
      <div
        className="w-full h-[260px] md:h-[300px] bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: 'url(/images/back-inside3.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="be-wrap relative z-10 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-[40px] font-bold text-white tracking-widest uppercase">
            {title}
          </h1>
          {breadcrumb && (
            <p className="text-xs md:text-sm text-gray-200 mt-2 font-medium">
              {breadcrumb}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

