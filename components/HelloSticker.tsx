"use client";

import { useState } from "react";
import "./HelloSticker.css";

export default function HelloSticker() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="helloSticker">
      <div className="helloSticker-wrap">
        {/* arrow button */}
        <button
          className="helloSticker-flipBtn"
          onClick={() => setFlipped((v) => !v)}
          aria-label="Flip sticker"
        >
          →
        </button>

        {/* flip container */}
        <div className={`helloSticker-flip ${flipped ? "is-flipped" : ""}`}>

          {/* FRONT */}
          <div className="helloSticker-face helloSticker-front">
            <div className="helloSticker-card">
              <div className="helloSticker-border">
                <div className="helloSticker-header">
                  <p className="helloSticker-hello">HELLO</p>
                  <p className="helloSticker-sub">MY NAME IS</p>
                </div>

                <div className="helloSticker-nameBox">
                  <h1 className="helloSticker-name">
                    SHANNON LIN
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="helloSticker-face helloSticker-back">
            <div className="helloSticker-card">
              <div className="helloSticker-border">
                <div className="helloSticker-header">
                  <p className="helloSticker-hello">HELLO</p>
                  <p className="helloSticker-sub">MY NAME IS</p>
                </div>

                <div className="helloSticker-nameBox helloSticker-backBox">
                  <p className="helloSticker-name">
                    林小兰
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* END BACK */}
        </div>
      </div>
    </section>
  );
}
