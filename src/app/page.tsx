import Carousel from "@/components/Carousel";
import Section from "@/components/Section";
import WeddingSection from "@/components/WeddingSection";
import Image from "next/image";

export default function Home() {
	return (
		<main className="min-h-screen bg-base-100">
			<Carousel />
			<WeddingSection />
		</main>
	);
}
