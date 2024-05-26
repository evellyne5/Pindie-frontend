"use client";
import { useGetDataByCategory } from "./api/api-hooks";
import { endpoints } from "../app/api/config";
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { CardsListSection } from "./components/CardsListSection/CardsListSection";

export default function Home() {

  const popularGames = useGetDataByCategory(endpoints.games, "popular");
  const newGames = useGetDataByCategory(endpoints.games, "new");

  return (
    <main className="main">
      <Banner />
			{popularGames ? <CardsListSection type="slider" id="popular" title="Популярные" data={popularGames} /> : <Preloader />}
			{newGames ? <CardsListSection type="slider" id="new" title="новинки" data={newGames} /> : <Preloader />}    
      <Promo />
    </main>
  );
}