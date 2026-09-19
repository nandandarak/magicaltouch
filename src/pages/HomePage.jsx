import React from "react";
import HeroPinCanvas from "../components/HeroPinCanvas";
import SymptomCompass from "../components/SymptomCompass";
import HolisticApproach from "../components/HolisticApproach";
import SleekConditions from "../components/SleekConditions";
import PersonalFounderNote from "../components/PersonalFounderNote";
import SleekStories from "../components/SleekStories";
import ConversationalFAQ from "../components/ConversationalFAQ";
import SleekContact from "../components/SleekContact";

export default function HomePage() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* 1. Hero Section with Crystal-Clear 60fps Anatomical/Meridian Stage */}
      <HeroPinCanvas />

      {/* 2. Interactive "Where Does It Hurt?" Conversational Compass */}
      <SymptomCompass />

      {/* 3. Holistic Methodology (Pillars 01, 02, 03) */}
      <HolisticApproach />

      {/* 4. 12 Clinical Conditions Treated */}
      <SleekConditions />

      {/* 5. A Personal Letter From Yogaysh Lahoti to the Patient */}
      <PersonalFounderNote />

      {/* 6. Stories of Transformations (Authentic Recoveries) */}
      <SleekStories />

      {/* 7. Conversational Patient FAQ (Addressing Doubts & Fears) */}
      <ConversationalFAQ />

      {/* 8. Consultation Booking & Direct Hotlines */}
      <SleekContact />
    </div>
  );
}
