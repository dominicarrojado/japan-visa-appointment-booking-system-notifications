import SubscribeForm from '@/components/subscribeForm';
import LastAvailableSlotsInfo from '@/components/lastAvailableSlotsInfo';
import AdUnit from '@/components/adUnit';
import {
  ExternalUrl,
  GoogleAdSenseUnitFormat,
  GoogleAdSenseUnitSlot,
} from '@/lib/types';

export default function Home() {
  return (
    <>
      <LastAvailableSlotsInfo />
      <p>
        Are you tired of constantly checking the Embassy of Japan in Singapore
        website for an available visa appointment slot for visa (tourism)
        applications, only to find none available day after day? Are you
        frustrated with having to pay expensive agency fees just to secure a
        slot? If so, my notification service is here to help.
      </p>
      <p>
        This service automatically monitors the Embassy of Japan in
        Singapore&apos;s website for any available booking slots for tourism
        visa applications, and sends out email notifications to my subscribers
        the moment a slot becomes available.
      </p>
      <AdUnit
        adSlot={GoogleAdSenseUnitSlot.PROJECT_BODY}
        adFormat={GoogleAdSenseUnitFormat.FLUID}
        className="my-4"
      />
      <p>
        I created this service because I had the same problem when applying for
        my Japan tourist visa. The embassy had turned off the waitlist feature,
        making it nearly impossible to secure a slot without paying exorbitant
        agency fees to do it for you. I knew there had to be a better way, so I
        created a service that could automatically monitor the embassy&apos;s
        website and notify me when a slot became available. And now, I&apos;m
        sharing this service with you.
      </p>
      <p>
        To get started, simply provide your email address and the service will
        send you an email notification the moment a booking slot becomes
        available. My service is secure, reliable, and easy to use. It will keep
        you updated on any available slots, so you can plan your trip with peace
        of mind.
      </p>
      <p>
        Sign up now to receive Embassy of Japan in Singapore visa appointment
        notifications and start saving time and money!
      </p>
      <SubscribeForm />
      <p>
        Like this service? You can show your support by donating{' '}
        <a
          href={ExternalUrl.PERSONAL_PAYPAL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline hover:text-black"
        >
          here
        </a>
        . <br />
        Thank you!
      </p>
      <AdUnit
        adSlot={GoogleAdSenseUnitSlot.PROJECT_FOOTER}
        adFormat={GoogleAdSenseUnitFormat.FLUID}
        className="mt-8"
      />
    </>
  );
}
