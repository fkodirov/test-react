import "./App.scss";
import GooglePlayIcon from "./assets/google-play.svg?react";
import AppStoreIcon from "./assets/app-store.svg?react";
import lorenzo from "./assets/user/lorenzo.png";
import adalina from "./assets/user/adalina.png";
import alexander from "./assets/user/alexander.png";
import rushana from "./assets/user/rushana.png";

const App = () => {
  return (
    <>
      <div className="title">
        Do you want to Learn more About cryptocurrencies{" "}
        <span>quickly and easily ?</span>
      </div>
      <div className="subscribe">Subscribe to our channel to learn more</div>
      <div className="subscribe-blocks">
        <div className="block">
          <div className="block-name">20k+</div>
          <div className="block-value">subscribers</div>
        </div>
        <div className="block">
          <div className="block-name">20k+</div>
          <div className="block-value">subscribers</div>
        </div>
        <div className="block">
          <div className="block-name">4.8/5</div>
          <div className="block-value">rating</div>
        </div>
      </div>
      <button type="button">Join Whatsapp</button>
      <div className="download">
        <div className="store">
          <GooglePlayIcon />
          <div className="store-info">
            <div className="store-text">get it on</div>
            <div className="store-name">Google play</div>
          </div>
        </div>
        <div className="store">
          <AppStoreIcon />
          <div className="store-info">
            <div className="store-text">Available on the</div>
            <div className="store-name">App Store</div>
          </div>
        </div>
      </div>
      <div className="reviews">
        <div className="review">
          <div className="review-header">
            <div>
              <img src={lorenzo} alt="" width={48} height={48} />
            </div>
            <div className="user-info">
              <div className="username">Lorenzo</div>
              <div className="login">@lorenzoo</div>
            </div>
          </div>
          <div className="review-body">
            Amazing Telegram bot! Provides real-time crypto prices and news
          </div>
        </div>
        <div className="review">
          <div className="review-header">
            <div>
              <img src={adalina} alt="" width={48} height={48} />
            </div>
            <div className="user-info">
              <div className="username">Adalina</div>
              <div className="login">@ada</div>
            </div>
          </div>
          <div className="review-body">
            Must-have bot for crypto traders. Accurate signals and analysis
          </div>
        </div>
        <div className="review">
          <div className="review-header">
            <div>
              <img src={alexander} alt="" width={48} height={48} />
            </div>
            <div className="user-info">
              <div className="username">Alexander</div>
              <div className="login">@alex_x</div>
            </div>
          </div>
          <div className="review-body">
            Superb cryptocurrency bot! Quick updates and reliable data
          </div>
        </div>
        <div className="review">
          <div className="review-header">
            <div>
              <img src={rushana} alt="" width={48} height={48} />
            </div>
            <div className="user-info">
              <div className="username">Rushana</div>
              <div className="login">@Hana</div>
            </div>
          </div>
          <div className="review-body">
            Efficient and user-friendly bot. Simplifies crypto trading tasks
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
