"use client"
import AnimatedLayout from "@/components/ui/animated-layout";
import { Button } from "@/components/ui/button";
import { useDeepNavigate } from "@/hooks/use-deep-navigate";
import HappyFaceSvg from "@/images/logo-happy-tfm.svg";

type HomeProps = React.HTMLAttributes<HTMLDivElement> & {
};

const Home = ({
  ...props
}: HomeProps) => {
  const { navigateDown } = useDeepNavigate();

  const selectAction = () => navigateDown("/action");

  return (
    <AnimatedLayout>
      <div
        className="flex flex-row items-center justify-center h-dvh w-full p-3 sm:p-6 md:p-8"
        {...props}
      >
        <Button
          variant="shell"
          size="flexible"
          className="flex flex-col h-full w-full overflow-auto items-center justify-around text-white"
          onClick={selectAction}
        >
          <div className="flex flex-col items-center">
            <img src={HappyFaceSvg} alt="TFM" className="w-12 sm:w-16 md:w-24 text-white mb-5" />
            <h1 className="text-sm sm:text-base md:text-lg text-sky-500 w-5/6 text-center text-wrap mb-2">SISTEMA DE ANÁLISIS DE EMOCIONES A TRAVÉS DE RECONOCIMIENTO FACIAL PARA OPTIMIZACIÓN DE CAMPAÑAS DE MARKETING</h1>
            <p className="text-sm">Live prototype • TFM</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base font-bold mb-2">Team #5</p>
            <p className="text-sm mb-1">Sharon Curiel</p>
            <p className="text-sm mb-1">Sebastián Gamboa</p>
            <p className="text-sm mb-1">Manuel Lagos</p>
          </div>
          <p className="text-base">OBS Business School • Spain</p>
          <p className="text-sm blink text-sky-100">— Click anywhere to continue —</p>
        </Button>



        {/* <h1 className="text-4xl text-sky-500">Using Tailwind now TUTUTU</h1>
        <p className="text-base text-sky-100">Things to do/add:</p>
        <ul className="text-base text-sky-100">
          <li>DONE!! react-router-dom</li>
          <li>DONE!! Define app map (pages)</li>
          <li>DONE!! shadcn</li>
          <li>DONE!! react-router page transitions</li>
          <li>DONE!! use context for local data (AppState)</li>
          <li>DONE!! Prototipo Icon</li>
          <li>DONE!! Add icons</li>
          <li>All pages layout</li>
          <li>Find palette ?</li>
          <li>define tool for connecting to API (python api)</li>
          <li>implement considering mobile-first, also keep it simple!!!</li>
          <li>add to personal github (add ignore file) and publish (vite deploy to gh-pages)</li>
        </ul>
        <p className="mt-6 text-base text-sky-100">App map:</p>
        <ul className="text-base text-sky-100">
          <li>home (project name and info) - click anywhere to continue</li>
          <li>action (select watch video or statistics)</li>
          <li>select video page (fake campaign selector and videos), also request camera permissions and test camera</li>
          <li>watch video (processing indicator, final status modal), then back to video selection page</li>
          <li>fake login for statistics</li>
          <li>fake campaign/commercial selection page</li>
          <li>statistics page (table, charts and filters), also export results to PDF (noice)</li>
        </ul>
        <Button onClick={selectAction}>Select an action</Button>
        <Button onClick={selectAction} variant="outline">Button Outline</Button>
        <Button onClick={selectAction} variant="shell" size="flexible" className="w-48 h-32"><div className="w-48 h-32">Button SHell</div></Button>
        <img src={HappyFaceSvg} alt="Happy TFM" className="w-8 border border-gray-900 text-white" />
        <Camera color="red" size={48} className="m-10" />*/}
      </div>
    </AnimatedLayout>
  )
};
Home.displayName = "Home";

export {
  Home,
  type HomeProps
};
