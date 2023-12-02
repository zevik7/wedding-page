import AlbumSection from '@/components/AlbumSection';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import MessageSection from '@/components/MessageSection';
import StorySection from '@/components/StorySection';
import EventSection from '@/components/EventSection';
import WishSection from '@/components/WishSection';
import ThankYouSection from '@/components/ThankYouSection';

export default function page() {
  return (
    <main>
      <Carousel />
      <MessageSection />
      <StorySection />
      <AlbumSection />
      <WishSection />
      <EventSection />
      <ThankYouSection />
      <Footer />
    </main>
  );
}
