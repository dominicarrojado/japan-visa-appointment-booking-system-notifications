import cn from 'classnames';
import Input from '@/components/input';
import Button from '@/components/button';

export default function Home() {
  return (
    <>
      <div className={cn('mx-auto w-full max-w-xl gap-x-8 px-0', 'sm:px-8')}>
        <h1
          className={cn(
            'text-3xl font-bold tracking-tight text-gray-900',
            'sm:text-4xl'
          )}
        >
          Embassy of Japan in Singapore Visa Appointment Notification Service
          for Visa (Tourism) applications
        </h1>
        <div
          className={cn(
            'max-w-xl text-base leading-7 text-gray-700',
            'lg:max-w-lg'
          )}
        >
          <p className="mt-8">
            Are you tired of constantly checking the Embassy of Japan in
            Singapore website for an available visa appointment slot for visa
            (tourism) applications, only to find none available day after day?
            Are you frustrated with having to pay expensive agency fees just to
            secure a slot? If so, my notification service is here to help.
          </p>
          <p className="mt-8">
            This service automatically monitors the Embassy of Japan in
            Singapore&apos;s website for any available booking slots for tourism
            visa applications, and sends out email notifications to my
            subscribers the moment a slot becomes available.
          </p>
          <p className="mt-8">
            I created this service because I had the same problem when applying
            for my Japan tourist visa. The embassy had turned off the waitlist
            feature, making it nearly impossible to secure a slot without paying
            exorbitant agency fees to do it for you. I knew there had to be a
            better way, so I created a service that could automatically monitor
            the embassy&apos;s website and notify me when a slot became
            available. And now, I&apos;m sharing this script with you.
          </p>
          <p className="mt-8">
            To get started, simply provide your email address and the service
            will send you an email notification the moment a booking slot
            becomes available. My service is secure, reliable, and easy to use.
            It will keep you updated on any available slots, so you can plan
            your trip with peace of mind.
          </p>
          <p className="mt-8">
            Sign up now to receive Embassy of Japan in Singapore visa
            appointment notifications and start saving time and money!
          </p>
          <form
            action="#"
            method="POST"
            className="bg-white mx-auto border border-gray-300 rounded-lg mt-10 p-6 max-w-xl sticky bottom-6 shadow-xl"
          >
            <Input
              label="Email address"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
            <p className="mt-4 text-sm text-gray-400">
              By submitting this form, you agree to receive these email
              notifications and understand that you can unsubscribe at any time.
            </p>
            <div className="mt-4">
              <Button type="submit">Subscribe Now</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
