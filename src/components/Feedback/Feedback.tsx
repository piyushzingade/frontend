import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { SlRefresh } from "react-icons/sl";
export default function Feedback() {
    return (
        <div className="container mx-auto ">
            <div className="flex space-x-2">
                <BiLike />
                <BiDislike />
                <SlRefresh />
            </div>
            <div className="flex pt-2">
                <div className="p-4 rounded-3xl shadow-lg w-full max-w-md border-4 border-gray-800">
                    <div className="p-4 ">
                        <p className="text-center">Was The Response Generated Was Helpful? Let us know.</p>
                    </div>
                </div>
                <div className="flex  p-3">
                    <div className="p-4 rounded-3xl w-shadow-lg border-4 h-20 w-36 border-gray-800">
                        <p className="text-center">Good</p>
                    </div>
                    <div className="flex px-3">
                        <div className="p-4 rounded-3xl w-shadow-lg border-4 h-20 w-36 border-gray-800">
                            <p className="text-center">Bad</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}