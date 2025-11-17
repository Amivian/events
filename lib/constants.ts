// Centralized constants for the app
// Export an array of popular/upcoming developer events that can be consumed by EventCard

export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string; // human-readable date range
  time: string; // local time window or timezone notation
};

// Note: images reference files under public/images
export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "AWS re:Invent 2025",
    slug: "aws-reinvent-2025",
    location: "Las Vegas, NV, USA",
    date: "Dec 1–5, 2025",
    time: "8:30 AM–6:00 PM PT",
  },
  {
    image: "/images/event2.png",
    title: "GitHub Universe 2025",
    slug: "github-universe-2025",
    location: "San Francisco, CA, USA",
    date: "Nov 20–21, 2025",
    time: "9:00 AM–5:30 PM PT",
  },
  {
    image: "/images/event3.png",
    title: "Google Cloud Next 2026",
    slug: "google-cloud-next-2026",
    location: "Chicago, IL, USA",
    date: "Apr 7–9, 2026",
    time: "9:00 AM–6:00 PM CT",
  },
  {
    image: "/images/event4.png",
    title: "JSConf EU 2026",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "May 16–17, 2026",
    time: "9:30 AM–6:30 PM CEST",
  },
  {
    image: "/images/event5.png",
    title: "HackZurich 2026",
    slug: "hackzurich-2026",
    location: "Zurich, Switzerland",
    date: "Sep 18–20, 2026",
    time: "48-hour hackathon (CEST)",
  },
  {
    image: "/images/event6.png",
    title: "PyCon US 2026",
    slug: "pycon-us-2026",
    location: "Pittsburgh, PA, USA",
    date: "May 1–9, 2026",
    time: "Talks & Tutorials: 9:00 AM–5:30 PM ET",
  },
];
