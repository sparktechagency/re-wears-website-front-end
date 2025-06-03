import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ConfigProvider } from "antd";
import { AuthProvider } from "@/contexts/AuthContext";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Re-Wears",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = cookies().get("user")?.value || null; // Read user from cookies

  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#9D977A",
              },
              components: {},
            }}
          >
            <AuthProvider initialUser={user}>{children}</AuthProvider>
          </ConfigProvider>
        </AntdRegistry>
        <Toaster />
      </body>
    </html>
  );
}
