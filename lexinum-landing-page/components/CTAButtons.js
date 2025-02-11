import { translate } from '../lib/languageDetection';

    const CTAButtons = ({ lang }) => (
      <div className="cta-buttons flex justify-center gap-4 mt-8">
        <a
          href="APP_STORE_LINK"
          className="btn-store bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center"
        >
          {/* Apple App Store SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 305 305"
            className="w-6 h-6 mr-2"
          >
            <path
              fill="currentColor"
              d="M228.3 104.8c10.7-17.8 16.7-38 16.7-58.1 0-63.3-51.5-109.3-114.8-109.3-45.4 0-85.6 26.5-103.3 64.1-4.1-5.3-8.9-10.1-14.2-14.2-17.7-17.7-44.1-28.4-73.8-28.4-63.3 0-114.8 51.5-114.8 114.8 0 29.1 10.7 55.9 28.4 73.8 4.1 4.1 8.9 8.9 14.2 14.2 17.7 37.6 57.9 64.1 103.3 64.1 63.3 0 114.8-51.5 114.8-114.8 0-20.6-6.5-41.3-17.8-59.1-4.7-4.1-9.5-8.2-14.2-12.3 4.7-4.7 9.5-8.9 14.2-12.9zM278.6 178.6c-15.5-19.4-34.9-34.9-57.4-46.1-1.2-1.7-3.5-3.5-4.7-4.7 15.5-16.1 25-36.4 25-59.5 0-44.1-36.4-80.5-80.5-80.5-23.1 0-43.9 9.5-59.5 25-1.2-1.2-2.9-2.9-4.7-4.7-11.2-22.5-26.7-41.9-46.1-57.4-19.4-15.5-42.5-23.6-66.8-23.6-24.3 0-47.4 8.3-66.8 23.6-19.4 15.5-34.9 34.9-46.1 57.4-1.7 1.7-3.5 3.5-4.7 4.7-15.5 16.1-25 36.4-25 59.5 0 44.1 36.4 80.5 80.5 80.5 23.1 0 43.9-9.5 59.5-25 1.2 1.2 2.9 2.9 4.7 4.7 11.2 22.5 26.7 41.9 46.1 57.4 19.4 15.5 42.5 23.6 66.8 23.6 24.3 0 47.4-8.3 66.8-23.6 19.4-15.6 34.9-35 46.1-57.4 1.8-1.8 3.5-3.5 4.7-4.7 15.5-16.1 25-36.4 25-59.5 0-22.6-9.1-43.4-25-59.5z"
            />
          </svg>
          {translate(lang, 'appStore')}
        </a>
        <a
          href="GOOGLE_PLAY_LINK"
          className="btn-store bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center"
        >
          {/* Google Play SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6 mr-2"
          >
            <path
              fill="currentColor"
              d="M42.7,7.3l-2.4-2.4c-0.4-0.4-1-0.4-1.4,0L24,18.8L9.7,4.9c-0.4-0.4-1-0.4-1.4,0L5.9,7.3c-0.4,0.4-0.4,1,0,1.4l14.3,14.3 L5.9,37.3c-0.4,0.4-0.4,1,0,1.4l2.4,2.4c0.4,0.4,1,0.4,1.4,0L24,29.2l14.3,14.3c0.4,0.4,1,0.4,1.4,0l2.4-2.4c0.4-0.4,0.4-1,0-1.4 L28.4,23L42.7,8.7C43.1,8.3,43.1,7.7,42.7,7.3z"
            />
          </svg>
          {translate(lang, 'googlePlay')}
        </a>
      </div>
    );

    export default CTAButtons;
