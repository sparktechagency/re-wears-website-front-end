import icon from "@/assets/icons/bell-notification.svg";
import Image from "next/image";
import Label from "../Label";
const notifications = [
  {
    username: "John Doe",
    photo: "https://korika.id/wp-content/uploads/2017/10/speaker3-min.jpg",
    message: "has just added new item",
    time: "1 day",
  },
  {
    username: "John Smith",
    photo: "https://korika.id/wp-content/uploads/2017/10/speaker3-min.jpg",
    message: "has just added your item to their wishlist",
    time: "2 day",
  },
  {
    username: "Xein Alex",
    photo: "https://korika.id/wp-content/uploads/2017/10/speaker3-min.jpg",
    message: "has just changed the price",
    time: "3 day",
  },
];
const Notifications = () => {
  return (
    <section className="max-w-[350px] max-h-[500px] font-poppins">
      {/* show empty page when no notification found */}
      {notifications.length < 1 && (
        <div className="flex flex-col items-center p-8 ">
          <Image src={icon} alt="icon" width={45} height={53} />
          <Label className="text-lg">No notifications yet</Label>
          <p className="text-[#797979]">
            This is where you&apos;ll find your notifications.
          </p>
        </div>
      )}

      {/* display when notification found */}
      <div>
        <ul>
          {notifications.map((item, idx) => (
            <li key={idx} className="flex gap-4 py-2 border-b">
              <Image
                src={item.photo}
                alt="photo"
                width={50}
                height={50}
                className="rounded-xl border h-fit mt-2"
              />
              <div>
                <p>
                  <span className="text-primary font-bold">
                    {item.username}{" "}
                  </span>
                  <span>{item.message}</span>
                </p>
                <p className="text-[#797979] mt-1">
                  <span>{item.time}</span> ago
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Notifications;
