import TopNavbar from "../components/layout/TopNavbar";
import PostFeed from "../components/post/PostFeed";
import LeftSidebar from "../components/profile/LeftSidebar";
import ProfileHeader from "../components/profile/ProfileHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopNavbar />

      {/* Profile Header */}
      <div className="max-w-5xl mx-auto px-4 mt-13">
        <ProfileHeader />
      </div>

      {/* Main Content */}
      <div className="bg-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-4">
            
            {/* Left Sidebar (40%) */}
            <div className="hidden lg:block sticky">
              <LeftSidebar />
            </div>

            {/* Post Feed (60%) */}
            <div>
              <PostFeed />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
