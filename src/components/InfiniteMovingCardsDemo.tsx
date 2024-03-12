"use client";
import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  const [results, setResults] = useState([]);

  const channelId = process.env.NEXT_PUBLIC_CHANNEL_ID;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const fetchYtVideos = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=4`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch YouTube videos: " + res.statusText);
      }

      const data = await res.json();
      setResults(data.items);
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

  useEffect(() => {
    fetchYtVideos();
  }, []);

  return <InfiniteMovingCards items={results} direction="right" speed="fast" />;
}
