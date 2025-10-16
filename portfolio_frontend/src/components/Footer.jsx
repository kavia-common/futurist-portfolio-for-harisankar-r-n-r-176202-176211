import React from "react";
import "./Footer.css";
import SocialLinks from "./SocialLinks";
import { ANCHORS } from "../router/anchors";

// PUBLIC_INTERFACE
export default function Footer() {
  /** Footer with social links and copyright */
  const year = new Date().getFullYear();
  return (
    <footer id={ANCHORS.footer} className="footer">
      <div className="container footer-inner">
        <SocialLinks />
        <p className="p-muted" aria-label="Copyright">
          © {year} Harisankar R N R. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
