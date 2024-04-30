import { StoreType } from "@/models/store";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlinePhone,
} from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

interface StoreBoxProps {
  currentStore: StoreType | null;
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

const StoreBox = ({ currentStore, setCurrentStore }: StoreBoxProps) => {
  const router = useRouter();
  return (
    <div className="fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg shadow-lg max-w-sm md:max-w-xl z-10 w-full bg-white">
      {currentStore && (
        <>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div className="flex gap-4 items-center">
                <Image
                  src={
                    currentStore?.category
                      ? `/images/markers/${currentStore?.category}.png`
                      : "/images/markers/default.png"
                  }
                  width={40}
                  height={40}
                  alt="아이콘 이미지"
                />
                <div>
                  <div className="font-semibold">{currentStore?.name}</div>
                  <div className="text-sm">{currentStore?.storeType}</div>
                </div>
              </div>
              <button type="button" onClick={() => setCurrentStore(null)}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex justify-between gap-4">
              <div className="mt-4 flex gap-2 items-center col-span-3">
                <HiOutlineMapPin />
                {currentStore?.address || "주소가 없습니다."}
              </div>
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlinePhone />
              {currentStore?.phone}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineInfoCircle />
              {currentStore?.storeType}
            </div>
            <div className="mt-2 flex gap-2 items-center">
              <AiOutlineCheck />
              {currentStore?.category}
            </div>
          </div>
          <button
            type="button"
            onClick={() => router.push(`/stores/${currentStore.id}`)}
            className="w-full bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 py-3 text-white font-semibold rounded-b-lg"
          >
            상세보기
          </button>
        </>
      )}
    </div>
  );
};

export default StoreBox;
