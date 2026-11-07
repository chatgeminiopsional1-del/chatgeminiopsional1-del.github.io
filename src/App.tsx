import React, { useState, useCallback } from 'react';
import { CivicHeader } from './components/CivicHeader.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { CommunityBento } from './components/CommunityBento.tsx';
import { WismaDirectory } from './components/WismaDirectory.tsx';
import { FacilitiesLedger } from './components/FacilitiesLedger.tsx';
import { ManifestoSection } from './components/ManifestoSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { CivicFooter } from './components/CivicFooter.tsx';
import { RegistrationFlowModal } from './components/RegistrationFlowModal.tsx';
import { ImageLightbox } from './components/ImageLightbox.tsx';
import { SplashScreen } from './components/SplashScreen.tsx';
import { Toast, ToastItem } from './components/Toast.tsx';
import type { ArchivalPhoto } from './data/dormitoryData.ts';

export default function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationUnit, setRegistrationUnit] = useState<'aspura' | 'aspuri'>('aspura');
  const [selectedPhoto, setSelectedPhoto] = useState<ArchivalPhoto | null>(null);
  const [splashDone, setSplashDone] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev.slice(-2), { id, message, type }]);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const handleOpenRegistration = (unit: 'aspura' | 'aspuri' = 'aspura') => {
    setRegistrationUnit(unit);
    setIsRegistrationOpen(true);
  };

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {/* ── Splash / Intro Screen ── */}
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      {/* ── Main App (rendered behind splash, fades in after) ── */}
      <div
        className={`font-sans selection:bg-forest selection:text-paper min-h-screen flex flex-col bg-paper text-ink pb-safe transition-opacity duration-500 ${
          splashDone ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Main Header / Navigation */}
        <CivicHeader onOpenRegistration={handleOpenRegistration} />

        {/* Main Content Area */}
        <main className="w-full flex-1">
          {/* Hero Section with Documentary Photography */}
          <HeroSection
            onSelectPhoto={setSelectedPhoto}
            onOpenRegistration={() => handleOpenRegistration('aspura')}
          />

          {/* Dynamic Community Bento Grid (Kehidupan Asrama, LK-1, Muswa, Silaturahmi) */}
          <CommunityBento />

          {/* Wisma Directory (Aspura & Aspuri Ledgers with Modern Tab Switcher) */}
          <WismaDirectory onSelectUnitForRegistration={handleOpenRegistration} />

          {/* Facilities & Communal Living Ledger Table + Monthly Dues Estimator */}
          <FacilitiesLedger />

          {/* Manifesto & Siri' na Pacce Cultural Section */}
          <ManifestoSection />

          {/* Frequently Asked Questions */}
          <FaqSection />

          {/* Direct Contact & Social Channels */}
          <ContactSection />
        </main>

        {/* Grounded Civic Footer */}
        <CivicFooter />

        {/* Registration & Sowan Inquiry Modal */}
        <RegistrationFlowModal
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
          initialUnit={registrationUnit}
          onShowToast={showToast}
        />

        {/* Image Lightbox Viewer */}
        <ImageLightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onSelectPhoto={setSelectedPhoto}
        />

        {/* Floating Toast Notification Stack (Emil Kowalski / Sonner pattern) */}
        <Toast toasts={toasts} onDismiss={dismissToast} />
      </div>
    </>
  );
}
