import { TERipple } from 'tw-elements-react';

const MyVideos = () => {
  return (
    <div className="ml-auto rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-t-lg" width={200} height={200} src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg" alt="" />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="p-4"> {/* Reduced padding */}
        <h5 className="mb-1 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50"> {/* Reduced font size */}
          Card title
        </h5>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200"> {/* Reduced font size */}
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <TERipple>
          <button
            type="button"
            className="inline-block rounded bg-primary px-4 pb-1.5 pt-1 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Button
          </button>
        </TERipple>
      </div>
    </div>
  )
}

export default MyVideos;
