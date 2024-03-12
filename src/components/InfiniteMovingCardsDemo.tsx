"use client";
import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import LogoImg from "@/assets/primary-logo.png";

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

  return (
    // <div className="h-[30rem flex  antialiased bg-black items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards items={results} direction="right" speed="slow" />
    // </div>
  );
}

const testimonials = [
  {
    img: LogoImg,
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    link: "https://www.youtube.com/watch?v=supHTJyG3Kc",
  },
  {
    img: LogoImg,
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    img: LogoImg,
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    img: LogoImg,
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    img: LogoImg,
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
