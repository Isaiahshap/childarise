'use client';

import Image from 'next/image';
import { Button } from './Button';

interface ThankYouMessageProps {
  name: string;
  onClose: () => void;
}

export function ThankYouMessage({ name, onClose }: ThankYouMessageProps) {
  return (
    <div className="fixed inset-0 bg-ink/40 z-50 flex items-center justify-center p-4">
      <div className="bg-paper border border-border p-8 md:p-10 max-w-lg w-full">
        <Image
          src="/images/logo.png"
          alt="Child Arise Tennessee"
          width={200}
          height={60}
          className="h-12 w-auto mb-8"
        />
        <h2 className="font-serif text-2xl text-ink mb-3">Thank you, {name}</h2>
        <p className="prose-reading mb-6">
          Your message has been received. Our team will respond to your email within one business day.
        </p>
        <p className="font-sans text-sm text-ink-soft mb-8">
          For urgent matters, call (615) 490-1844.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" onClick={onClose}>
            Continue
          </Button>
          <Button variant="ghost" href="/about">
            About us
          </Button>
        </div>
      </div>
    </div>
  );
}
