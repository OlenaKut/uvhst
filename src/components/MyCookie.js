import React from "react";
import posthog from "posthog-js";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const MyCookie = () => {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <div>
          <p>
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept All", you consent to our use of cookies.
            <Button
              variant="link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://securiti.ai/terms/#cookies-policy"
            >
              Cookie Policy
            </Button>
          </p>
          <Button
            variant="light"
            target="_blank"
            rel="noopener noreferrer"
            onClick={acceptCookies}
          >
            Accept Cookies
          </Button>
          <Button
            variant="light"
            target="_blank"
            rel="noopener noreferrer"
            onClick={declineCookies}
          >
            Decline Cookies
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyCookie;
