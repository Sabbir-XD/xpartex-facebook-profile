import TopNavbar from "../components/layout/TopNavbar";
import PostFeed from "../components/post/PostFeed";
import LeftSidebar from "../components/profile/LeftSidebar";
import ProfileHeader from "../components/profile/ProfileHeader";


export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopNavbar />

      <div className="max-w-6xl mx-auto px-4 space-y-4 mt-20">
        <ProfileHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="hidden lg:block">
            <LeftSidebar />
          </div>

          <div className="lg:col-span-2">
            <PostFeed />
          </div>
        </div>
      </div>
    </main>
  );
}
