import BasicTabs from "./BasicTabs";
// import { gridElementProps } from "./grid-element";

export default function BasicCard({ ...data }: any) {
  return (
    <div className="flex justify-center ">
      <div className="rounded-xl border-0 p-5 shadow-md w-full bg-white">
        <div className="flex w-full items-center justify-between border-b-2 pb-3">
          <div className="flex items-center space-x-3">
            {/*USE A LOGO (ANTS DESINGN OR SMTH) <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div> */}
            <div className="text-lg font-bold text-slate-700">
              {data.locations || data.title}
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-xs text-neutral-500">{data?.duration}</div>
            <div className="text-xs text-neutral-500">{data?.price}</div>
          </div>
        </div>

        <BasicTabs />
      </div>
    </div>
  );
}
