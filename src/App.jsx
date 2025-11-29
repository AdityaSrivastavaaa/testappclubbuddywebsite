import React from "react";
import "./App.css"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navbar */}
      <header className="w-full border-b border-slate-800/70">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/90 shadow-lg shadow-indigo-500/40">
              <span className="text-lg font-semibold text-white">CB</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-100">
                ClubBuddy
              </p>
              <p className="text-xs text-slate-400">
                Private Test Build
              </p>
            </div>
          </div>

          <a
            href="https://github.com/AdityaSrivastavaaa/testappclubbuddywebsite/releases/download/v1.0.1/application-1329f197-504a-4431-bb2b-d911016ae0bd.1.apk"
            className="rounded-full border border-indigo-500/60 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-200 hover:bg-indigo-500/20 transition"
          >
            Download APK
          </a>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-12 px-4 py-10 md:flex-row md:items-center">
          {/* Left: Text */}
          <section className="flex-1 space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Internal Testing Build • Android
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Download the latest{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent">
                ClubBuddy
              </span>{" "}
              APK
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              Install this APK on your Android device to test the latest
              ClubBuddy features – find party companions, discover clubs,
              and explore events. This build is for{" "}
              <span className="font-semibold text-slate-100">
                testing only
              </span>
              , not a Play Store release.
            </p>

            {/* Small features list */}
            <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-indigo-400/60 text-[10px] text-indigo-200">
                  ✓
                </span>
                <p>Guestlist booking & club companion matching</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-indigo-400/60 text-[10px] text-indigo-200">
                  ✓
                </span>
                <p>Location-based club discovery (alpha)</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-indigo-400/60 text-[10px] text-indigo-200">
                  ✓
                </span>
                <p>Simple onboarding with OTP login</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full border border-indigo-400/60 text-[10px] text-indigo-200">
                  ✓
                </span>
                <p>Dark theme UI tuned for nightlife</p>
              </div>
            </div>

            {/* Download section */}
            <div id="download" className="space-y-3 pt-3">
              <a
                href="https://github.com/AdityaSrivastavaaa/testappclubbuddywebsite/releases/download/v1.0.1/application-1329f197-504a-4431-bb2b-d911016ae0bd.1.apk"
  
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 hover:bg-indigo-400 active:scale-[0.98] transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.6}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M8 12l4 4m0 0l4-4m-4 4V4"
                  />
                </svg>
                Download APK
              </a>

              <p className="text-[11px] text-slate-400">
                • Works on Android phones only.  
                • You may need to allow “Install unknown apps” in your settings.
              </p>
            </div>
          </section>

          {/* Right: Mock phone preview */}
          <section className="flex flex-1 items-center justify-center">
            <div className="relative h-80 w-40 rounded-[2.5rem] border border-slate-700 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 p-3 shadow-2xl shadow-black/70">
              {/* Top notch */}
              <div className="mx-auto mb-4 flex h-5 w-20 items-center justify-center rounded-full bg-slate-900">
                <div className="h-2 w-10 rounded-full bg-slate-700/70" />
              </div>
              {/* Screen content */}
              <div className="flex h-full flex-col justify-between rounded-3xl bg-slate-900/60 p-3 text-[10px] text-slate-100">
                <div>
                  <p className="text-[9px] text-slate-400">
                    Tonight in
                    <span className="font-semibold text-indigo-300">
                      {" "}
                      NCR
                    </span>
                  </p>
                  <p className="mt-1 text-xs font-semibold">
                    Find your club buddy
                  </p>
                  <p className="mt-1 text-[9px] text-slate-400">
                    Match with people going to the same club and get on
                    the guestlist together.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-2">
                    <p className="text-[9px] text-indigo-200">
                      Guestlist • Couple Entry
                    </p>
                    <p className="text-[10px] font-semibold">
                      SkyHigh Club, Gurgaon
                    </p>
                    <p className="text-[8px] text-slate-300">
                      Tonight • Free entry before 11:00 PM
                    </p>
                  </div>
                  <button className="w-full rounded-xl bg-indigo-500 px-3 py-1.5 text-[10px] font-semibold text-white">
                    Explore Clubs
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ClubBuddy. Internal testing build.</p>
          <p>
            For feedback:{" "}
            <a
              href="mailto:srivastavaaditya015@gmail.com"
              className="font-medium text-slate-300 hover:text-indigo-300"
            >
              srivastavaaditya015@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
