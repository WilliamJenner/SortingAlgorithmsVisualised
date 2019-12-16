import { Constants } from "./src/constants";
import { insertionSort, shuffle } from "./src/algorithms";

window.onload = function () {
    let constants = new Constants();

    let display = <HTMLElement>document.getElementById(constants.displayName);
    display.addEventListener(constants.sortCycleEventName, (e: CustomEvent) => { updateDisplay(e, display); })
    let insertionSortBtn = <HTMLElement>document.getElementById(constants.insertionSortBtn);
    insertionSortBtn.addEventListener("click", () => insertionSort(generateArray(1000)))

    function forceEvent(): void {
        let e = new CustomEvent(constants.sortCycleEventName, { "detail": "1, 2, 3, 4, 5, 6, 7, 8, 9" })
        let display = <HTMLElement>document.getElementById(constants.displayName);
        display.dispatchEvent(e)
    }

    async function updateDisplay(e: CustomEvent, display: HTMLElement): Promise<any> {
        if (e === undefined) {
            console.log("undefined")
            return;
        }

        let scaffold = `<p>${e.detail}</p>`

        display.innerHTML = scaffold
    }

    function generateArray(size: number): number[] {
        let array = new Array(size);
        for (var i = 1; i <= size; i++) {
            array[i] = i
        }

        shuffle(array);
        return array;
    }
};