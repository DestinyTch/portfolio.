"use client";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import axios from "axios";
import { toast } from "react-toastify";
import { isValidEmail } from "@/utils/check-email";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError({ ...error, required: false });
    }
  };

  const handleSendTelegram = async (e) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError({ ...error, required: true });
      return;
    }
    if (error.email) return;

    try {
      setIsLoading(true);

      const telegramToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

      if (!telegramToken || !chatId) {
        toast.error("Telegram configuration is missing.");
        return;
      }

      const telegramMessage = `
📬 New Message from ${userInput.name}
📧 Email: ${userInput.email}
💬 Message:
${userInput.message}
`;

      await axios.post(
        `https://api.telegram.org/bot${telegramToken}/sendMessage`,
        {
          chat_id: chatId,
          text: telegramMessage,
        }
      );

      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or opportunities, feel free to reach out. I respond as soon as possible.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-none transition-all px-3 py-2"
              type="text"
              value={userInput.name}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-none transition-all px-3 py-2"
              type="email"
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => setError({ ...error, email: !isValidEmail(userInput.email) })}
              required
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] outline-none transition-all px-3 py-2"
              rows="4"
              value={userInput.message}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              required
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">All fields are required!</p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200"
              onClick={handleSendTelegram}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : <>
                Send Message <TbMailForward size={20} />
              </>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
