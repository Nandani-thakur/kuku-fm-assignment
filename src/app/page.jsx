"use client";

import styles from "./page.module.css";
import Header from "../components/Header";
import LoadMore from "@/components/LoadMore";
import Carousel from "@/components/Carousel";
import { useEffect, useState } from "react";
import { fetchData } from "./actions";
import Footer from "@/components/Footer";

export default function Home() {
  const [slides, setSlides] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const initialData = await fetchData();
      const filteredData = initialData.items.filter(
        (item) => Array.isArray(item.shows) && item.shows.length > 0
      );
      const banners = initialData.items.find(
        (item) => item.type === "banner"
      ).banners;
      setFilteredItems(filteredData);
      setSlides(banners);
      setHasMore(initialData.has_more || false);
    };
    fetchInitialData();
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <Carousel slide={slides} />
      <section className={styles.main}>
        {filteredItems?.map((item, index) => (
          <Carousel key={index} slide={item} />
        ))}
        <LoadMore hasMorePages={hasMore} />
      </section>
      <Footer />
    </main>
  );
}
