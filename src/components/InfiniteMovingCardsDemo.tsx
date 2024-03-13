"use client";
import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import Speaker1 from "@/assets/speakers/speaker1.jpg";
import Speaker2 from "@/assets/speakers/speaker2.jpg";
import Speaker3 from "@/assets/speakers/speake3.jpg";
import Speaker4 from "@/assets/speakers/speaker4.jpg";

const data = [
  {
    title: "CISO's evolving role: From IT Leader to Boardroom Advisor",
    img: Speaker1,
    link: "https://m.youtube.com/watch?v=supHTJyG3Kc",
  },
  {
    title:
      "Hacking on Bug Bounties for 10 years: Shubs' (@infosec_au) Keynote at BSides Ahmedabad 2023",
    img: Speaker2,
    link: "https://m.youtube.com/watch?v=aqMyveKjMSA",
  },
  {
    title: "Relive the excitement of BSides Ahmedabad 2023!",
    img: Speaker3,
    link: "https://m.youtube.com/watch?v=HOc6rzZ0ilc",
  },
  {
    title:
      "CXO Panel: How to communicate security in Layman words to Boards &amp; Non-Technical Stakeholders",
    img: Speaker4,
    link: "https://m.youtube.com/watch?v=DjrL7zCllqo",
  },
];

export function InfiniteMovingCardsDemo() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const fetchYtVideos = async () => {
    try {
      const cachedData = localStorage.getItem("ytVideos");
      if (cachedData) {
        setResults(JSON.parse(cachedData));
        setLoading(false);
      } else {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`
        );
        if (!res.ok) {
          throw new Error("Failed to fetch YouTube videos: " + res.statusText);
        }

        const data = await res.json();
        setResults(data.items);
        localStorage.setItem("ytVideos", JSON.stringify(data.items));
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchYtVideos();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <InfiniteMovingCards items={data} direction="right" speed="slow" />
  );
}
