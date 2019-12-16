import $ from 'jquery';
import { Constants } from "./src/constants";
import { insertionSort, shuffle, bubbleSort } from "./src/algorithms";
import 'bootstrap'; 

window.onload = function () {
    let constants = new Constants();

    let display = <HTMLElement>document.getElementById(constants.displayName);
    display.addEventListener(constants.sortCycleEventName, (e: CustomEvent) => { updateDisplay(e, display); });
    bindButtonsToAlgorithms();

    function bindButtonsToAlgorithms(): void {
        // Bind insertion sort
        let insertionSortBtn = <HTMLElement>document.getElementById(constants.insertionSortBtn);
        insertionSortBtn.addEventListener("click", () => {
            let num = Number((<HTMLInputElement>document.getElementById(constants.arraySizeId)).value);
            insertionSort(generateArray(num))
        });

        // Bind bubble sort
        let bubbleSortBtn = <HTMLElement>document.getElementById(constants.bubbleSortBtn);
        bubbleSortBtn.addEventListener("click", () => {
            let num = Number((<HTMLInputElement>document.getElementById(constants.arraySizeId)).value);
            bubbleSort(generateArray(num))
        });
    }

    async function updateDisplay(e: CustomEvent, display: HTMLElement): Promise<any> {
        if (e === undefined) {
            console.log("undefined");
            return;
        }

        display.innerHTML = e.detail
    }

    function generateArray(size: number): number[] {
        let array = new Array(size);
        for (var i = 0; i < size; i++) {
            array[i] = i
        }

        shuffle(array);
        return array;
    }
};