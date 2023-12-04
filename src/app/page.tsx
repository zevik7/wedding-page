import AlbumSection from '@/components/AlbumSection';
import Footer from '@/components/Footer';
import MessageSection from '@/components/MessageSection';
import StorySection from '@/components/StorySection';
import EventSection from '@/components/EventSection';
import WishSection from '@/components/WishSection';
import ThankYouSection from '@/components/ThankYouSection';
import HeadingSection from '@/components/HeadingSection';
import ScrollToTopButton from '@/components/ScrollToTop';
import BackgroundMusicButton from '@/components/BackgroundMusicButton';
import SnowFallBackground from '@/components/SnowFallBackground';
import ProgressBar from '@/components/ProgressBar';
import LuckyMoneySection from '@/components/LuckyMoneySection';

export default function page() {
  return (
    <main className="overflow-hidden">
      <HeadingSection />
      <MessageSection />
      <StorySection />
      <AlbumSection />
      <EventSection />
      <WishSection />
      <ThankYouSection />
      <LuckyMoneySection />
      <Footer />
      <ScrollToTopButton />
      <BackgroundMusicButton />
      <SnowFallBackground />
      <ProgressBar />
    </main>
  );
}
