import AlbumSection from '@/components/AlbumSection';
import Footer from '@/components/Footer';
import MessageSection from '@/components/MessageSection';
import StorySection from '@/components/StorySection';
import EventSection from '@/components/EventSection';
import WishSection from '@/components/WishSection';
import ThankYouSection from '@/components/ThankYouSection';

export default function page() {
  return (
    <main>
      <MessageSection />
      <StorySection />
      <AlbumSection />
      <EventSection />
      <WishSection />
      <ThankYouSection />
      <Footer />
    </main>
  );
}
