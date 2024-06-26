"use client"
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection"; 
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function TDS() {
  const TDSGames = useGetDataByCategory(endpoints.games, "TDS");
  return (
    <main className="main-inner">
      {TDSGames ? <CardsListSection id="TDS" title="TDS" data={TDSGames} /> : <Preloader />}
    </main>
  );
}