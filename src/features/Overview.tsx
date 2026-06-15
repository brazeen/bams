import { Button } from '@base-ui/react/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Progress } from '@base-ui/react/progress';

function Overview() {
    function getDate(mod: string) {
        const date = new Date();
        const dateArr = date.toDateString().split(' ');
        if (mod === "full") {
            return `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
        }
        else if (mod === "no-day") {
            return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
        }
        else if (mod === "month") {
            return dateArr[1];
        }
    }
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
        {/* first row */}
        <div className="flex w-full items-top justify-between p-6">
            <p className="text-2xl font-semibold">{getDate("full")}</p>
            <Button className="flex h-10 w-10 items-center justify-center gap-2 rounded-none border border-neutral-950"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg></Button>
        </div>
        {/* second row - 2 cards */}
        <div className="flex w-full h-full items-start justify-between gap-6 p-6">
            <Card className="w-1/2 h-1/3 flex flex-col border border-zinc-300 px-2">
                <CardHeader>
                    <CardTitle className='text-3xl'>Lifetime P/L</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">S$5000</p>
                </CardContent>
            </Card>
            <Card className="w-1/2 h-1/3 flex flex-col border border-zinc-300 px-2">
                <CardHeader>
                    <CardTitle>Money Invested in {getDate("month")}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center gap-4">
                    <Progress.Root className="w-3/4" value={50}>
                    <Progress.Label className="text-sm font-normal text-neutral-950 dark:text-white">S$1250/2500</Progress.Label>
                    <Progress.Track className="h-4 overflow-hidden bg-neutral-200 dark:bg-neutral-800 rounded-md">
                        <Progress.Indicator className="bg-neutral-950 transition-[width] duration-500 dark:bg-white"/>
                    </Progress.Track>
                    <Progress.Value className="text-right text-sm text-neutral-950 dark:text-white"/>
                    </Progress.Root>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default Overview;