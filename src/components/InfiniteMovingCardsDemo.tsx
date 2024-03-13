"use client";
import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

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
    <InfiniteMovingCards items={results} direction="right" speed="slow" />
  );
}
