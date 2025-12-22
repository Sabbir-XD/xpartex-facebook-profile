import IntroSection from "./IntroSection";
import PhotosSection from "./PhotosSection";


export default function LeftSidebar() {
  return (
    <aside className="space-y-4 sticky">
      <IntroSection />
      <PhotosSection />
    </aside>
  )
}
