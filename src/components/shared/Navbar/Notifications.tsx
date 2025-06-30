"use client";

import icon from "@/assets/icons/bell-notification.svg";
import Image from "next/image";
import Label from "../Label";
import { useEffect, useMemo } from "react";
import { revalidateTags } from "@/helpers/revalidateTags";
import { IMAGE_URL } from "@/config/env-config";
import { io } from "socket.io-client";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { myFetch } from "@/helpers/myFetch";

const Notifications = ({
  profile,
  notificationsData = [],
}: {
  profile?: any;
  notificationsData?: any;
}) => {
  // handle live notifications
  const socket = useMemo(() => io(IMAGE_URL), []);
  // socket.on("connect", () => {
  //   console.log("Connected to socket");
  // });
  useEffect(() => {
    const handleGetMessage = () => {
      revalidateTags(["notifications"]);
    };

    const eventName = `notifications::${profile?._id}`;

    socket.on(eventName, handleGetMessage);
    return () => {
      socket.off(eventName, handleGetMessage);
    };
  }, [socket, profile?._id]);

  // read notification
  const handleReadNotification = async (id: string) => {
    try {
      const res = await myFetch(`/notification/update-notification/${id}`, {
        method: "PATCH",
        body: { read: true },
      });
      if (res?.success) {
        revalidateTags(["notifications"]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-[350px] max-h-[500px] font-poppins">
      {/* show empty page when no notification found */}
      {!(notificationsData?.length > 0) && (
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
          {notificationsData?.map((item: any, idx: number) => (
            <li
              key={idx}
              className="flex gap-4 py-2 border-b"
              onClick={() => handleReadNotification(item?._id)}
            >
              {item?.sender && (
                <Link href={`/profile?id=${item?.sender?._id}`}>
                  <Image
                    src={
                      item?.sender?.image?.includes("http")
                        ? item?.sender?.image
                        : `${IMAGE_URL}${item?.sender?.image}`
                    }
                    alt="photo"
                    width={50}
                    height={50}
                    className="rounded-full border h-fit mt-2"
                  />
                </Link>
              )}
              <div>
                <p>
                  <Link href={`/profile?id=${item?.sender?._id}`}>
                    <span className="text-primary font-bold">
                      {item?.sender?.userName || item?.sender?.firstName}
                    </span>
                  </Link>
                  <p className="">
                    <span>
                      {item?.notificationType === "createProduct" &&
                        "has added new item: "}
                      {item?.notificationType === "editProduct" &&
                        "has updated his item: "}
                      {item?.notificationType === "wishlist" &&
                        "has added your item to their wishlist: "}
                      {item?.notificationType === "offer" &&
                        "has proposed an offer for your item: "}
                    </span>
                    <Link
                      href={`/product-details/${item?.productId?._id}`}
                      className="text-primary hover:text-primary-dark font-bold"
                    >
                      {item?.productId?.name}
                    </Link>
                  </p>
                </p>
                <p className="text-[#797979] mt-1">
                  <span>
                    {formatDistanceToNow(new Date(item?.createdAt), {
                      // addSuffix: true,
                    })}
                  </span>
                  ago
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
