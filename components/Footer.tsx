export default function Footer() {
  return (
    <footer id="footer" className="bg-[#1c1c1c] text-[#888888] py-8 border-t border-[#2a2a2a]">
      <div className="be-wrap">
        <div className="text-center text-[13px] mb-3 text-[#aaaaaa]">
          <span>Kuwait: </span>
          <a href="tel:+96567722844" className="hover:text-[#ed1c24] transition-colors font-medium">
            +965 67722844
          </a>
          <span className="mx-2 text-[#555]">•</span>
          <a href="mailto:info@boskw.com" className="hover:text-[#ed1c24] transition-colors">
            info@boskw.com
          </a>
          <span className="mx-2 text-[#555]">•</span>
          <span>Shuwaikh Industrial Area 3, Kuwait</span>
        </div>
        <div id="copyright" className="text-center text-[13px] font-normal text-[#777777]">
          © Copyright 2018 Belgium Oil Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
