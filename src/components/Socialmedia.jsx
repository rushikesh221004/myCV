const Socialmedia = () => {
  return (
    <>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"></path>
          </clipPath>
        </defs>
      </svg>

      <div className="relative flex">
        <div className="absolute"></div>

        <div className="relative flex items-end gap-x-2 p-2">
          {/* GitHub */}
          <a
            href="https://github.com/rushikesh221004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative right-2">
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center shadow-lg border border-gray-600/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </div>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rushikesh-manjre-690350295/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg border border-blue-500/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </div>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rushikesh_manjre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative left-2">
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg border border-pink-400/50 cursor-pointer transform transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.247 2.243 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.335 2.633-1.31 3.608-.975.976-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.063-1.366.335-2.633 1.31-3.608C4.518 2.567 5.785 2.295 7.15 2.233 8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.17 0-3.548.012-4.796.07-1.037.048-1.602.218-1.974.37-.497.193-.853.424-1.226.797-.373.373-.604.729-.797 1.226-.152.372-.322.937-.37 1.974-.058 1.248-.07 1.626-.07 4.796s.012 3.548.07 4.796c.048 1.037.218 1.602.37 1.974.193.497.424.853.797 1.226.373.373.729.604 1.226.797.372.152.937.322 1.974.37 1.248.058 1.626.07 4.796.07s3.548-.012 4.796-.07c1.037-.048 1.602-.218 1.974-.37.497-.193.853-.424 1.226-.797.373-.373.604-.729.797-1.226.152-.372.322-.937.37-1.974.058-1.248.07-1.626.07-4.796s-.012-3.548-.07-4.796c-.048-1.037-.218-1.602-.37-1.974-.193-.497-.424-.853-.797-1.226-.373-.373-.729-.604-1.226-.797-.372-.152-.937-.322-1.974-.37-1.248-.058-1.626-.07-4.796-.07zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.162a3.999 3.999 0 1 0 0-7.998 3.999 3.999 0 0 0 0 7.998zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Socialmedia;
