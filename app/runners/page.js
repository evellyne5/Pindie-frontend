"use client"
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { CardsListSection } from "../components/CardsListSection/CardsListSection"; 
import { Preloader } from "@/app/components/Preloader/Preloader";

export default function Runners() {
  const runnerGames = useGetDataByCategory(endpoints.games, "runner");
  return (
    <main className="main-inner">
      {runnerGames ? <CardsListSection id="runner" title="Ранеры" data={runnerGames} /> : <Preloader />}
    </main>
  );
}