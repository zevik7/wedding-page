import AlbumSection from '@/components/AlbumSection';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';
import MessageSection from '@/components/MessageSection';
import Section from '@/components/Section';
import StorySection from '@/components/StorySection';
import ThankYouSection from '@/components/ThankYouSection';
import WeddingSection from '@/components/WeddingSection';
import WishSection from '@/components/WishSection';
import Image from 'next/image';

export default function page() {
  return (
    <main>
      <Carousel />
      <MessageSection />
      <StorySection />
      <AlbumSection />
      <WishSection />
      <ThankYouSection />
      <Footer />
    </main>
  );
}
