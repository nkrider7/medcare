import { toast } from "sonner"
import sendGif from "@/assets/send.gif" 
import failedGif from "@/assets/fail.gif" 
import succussGif from "@/assets/success.gif"
 
import Image from "next/image"






export const sendingMail = () => {

	toast(
		<div className="flex justify-center items-center h-10 p-2">
			<Image src={sendGif} height={40} width={40} alt="ani" />
		    <div className="ml-2">
				<h1 className="font-semibold ">Sending Mail to MedCare 💖 </h1>
			</div>
		</div>
	)

}
export const sendSuccuss = () => {

	toast(
		<div className="flex justify-center items-center h-10 p-2">
			<Image src={succussGif} height={40} width={40} alt="ani" />
		    <div className="ml-2">
				<h1 className="font-semibold ">Successfully Send to MedCare 💖 </h1>
			</div>
		</div>
	)

}
export const failedMail = () => {
	toast(
		<div className="flex justify-center items-center h-10 p-2">
			<Image src={failedGif} height={40} width={40} alt="error" />
			<div className="ml-2">
				<h1 className="font-semibold text-red-600">Failed to Send Mail 🚫</h1>
				<p className="text-sm text-gray-500">Please try again later.</p>
			</div>
		</div>,
		{
			style: {
				background: "#ffe4e6", // Light red background
				color: "#b91c1c", // Deep red text
			},
		}
	);
};

