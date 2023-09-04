import { TERipple } from "tw-elements-react";
import EyeIcon from "../../assets/EyeIcon.png";
import MessageIcon from "../../assets/MessageIcon.png";
import ShareIcon from "../../assets/ShareIcon.png";
import DownLineIcon from "../../assets/DownLineIcon.png";

const MyVideos = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
      initials: "KA",
      username: "User",
      daysAgo: "9 days",
      title: "Demo meeting",
    },
    // Add more card data objects as needed
  ];

  return (
    <div className="grid grid-cols-3 gap-4 ml-64">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="border border-neutral-300 rounded-lg overflow-hidden shadow-md dark:bg-white max-w-sm"
        >
          <TERipple>
            <div className="bg-cover bg-no-repeat">
              <img
                className="w-full h-full rounded-t-lg"
                src={card.imageSrc}
                alt=""
              />
            </div>
          </TERipple>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="rounded-full text-2xl bg-gray-900 dark:bg-gray-900 text-white p-2">
                {card.initials}
              </span>
              <span className="text-2xl ml-2 text-black">{card.username}</span>
              <span className="text-sm ml-auto text-black">
                {card.daysAgo}
              </span>{" "}
              {/* Use ml-auto to align right */}
            </div>
            <p className="text-sm ml-8 flex items-center">
              Not Shared
              <img src={DownLineIcon} alt="Down line Icon" className="ml-1" />
            </p>

            <p className="text-2xl p-8">{card.title}</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex items-center justify-center p-2 text-center text-2xl font-semibold rounded-md">
                <img src={EyeIcon} alt="See all icon" />
                <span className="ml-2 text-sm">2</span>
              </div>
              <div className="flex items-center justify-center p-2 text-center text-2xl font-semibold rounded-md">
                <img src={MessageIcon} alt="See all icon" />
                <span className="ml-2 text-sm">4</span>
              </div>
              <div className="flex items-center justify-center p-2 text-center text-2xl font-semibold rounded-md">
                <img src={ShareIcon} alt="See all icon" />
                <span className="ml-2 text-sm">3</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyVideos;