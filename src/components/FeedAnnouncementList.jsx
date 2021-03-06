import React from 'react';
import FeedAnnouncement from './FeedAnnouncement';
import facebookIcon from '../assets/img/facebook-logo.png';
import twitterIcon from '../assets/img/twitter-logo-button.png';
// import instagramIcon from '../assets/img/instagram.png';


const masterFeedAnnouncementList = [
  {
    comments:'年利」に気をつけるという事です。 何を当然の事をとお思いになるかもしれませんが、 この重要性を意外にわかってない方が多いです。 Ａの会社から借りると年利が16パーセント、 Ｂの会社から借りると年利が14パーセント、 この条件は天と地ほどに違うのですが、 「どっちも大して変わりが無い」 こう判断される方が意外に多いのです。',
    icon: facebookIcon
  },
  {
    comments:'Charlie Kelly\'s first serious music endeavor involved a character known as the The Nightman. It was his belief that his life as someone innocent and naive required the Nightman. The song is about the Nightman coming into him to endow him with much needed manliness and power.',
    icon: twitterIcon
  }
];

function FeedAnnouncementList(){
  return(
    <div>
      {masterFeedAnnouncementList.map((feed, index) =>
        <FeedAnnouncement comments={feed.comments}
          icon={feed.icon}
          key={index}/>
      )}
    </div>
  );
}

export default FeedAnnouncementList;
