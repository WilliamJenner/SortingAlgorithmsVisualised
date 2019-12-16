import { Constants } from "./constants"

let constants = new Constants();

export const insertionSort = (nums: number[]): any => {
    console.log("Insertion: started, array of size " + nums.length)

    for (let i = 1; i < nums.length; i++) {
        setTimeout(() => {
            {
                let j = i - 1
                let tmp = nums[i]
                while (j >= 0 && nums[j] > tmp) {
                    nums[j + 1] = nums[j]
                    j--
                }
                nums[j + 1] = tmp
            }
            dispatch(nums);
        }, 0);
    }
}

/**
 * https://medium.com/javascript-algorithms/javascript-algorithms-bubble-sort-3d27f285c3b2
 * @param inputArr An array containing the items.
 */
export const bubbleSort = (inputArr: number[]) => {
    setTimeout(() => {
        let len = inputArr.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < len; i++) {
                if (inputArr[i] > inputArr[i + 1]) {
                    let tmp = inputArr[i];
                    inputArr[i] = inputArr[i + 1];
                    inputArr[i + 1] = tmp;
                    swapped = true;
                }
            }
        } while (swapped);
        dispatch(inputArr);
    }, 0)
};

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
export const shuffle = (a: number[]): number[] => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const dispatch = (nums: number[]) => {
    let e = new CustomEvent(constants.sortCycleEventName, { detail: generateScaffolding(nums) });
    let display = <HTMLElement>document.getElementById(constants.displayName);
    display.dispatchEvent(e)
    if (isArraySorted(nums)) {
        sortedSuccess();
    }
}

function generateScaffolding(nums: number[]): string {
    let width = document.getElementById(constants.displayName).clientWidth;

    let widthPxPerElem: number = width / nums.length;
    if (widthPxPerElem == 0) { widthPxPerElem = 1 };

    let elements: string = "";
    for (let num of nums) {
        if (num != undefined) {
            var height = num / nums.length * 100;
            console.log(height);
            var str = `<div style="width: ${widthPxPerElem}px; height: ${height}%; background-color: red; margin-bottom: 0; margin-top: auto;"></div>`
            elements += str;
        }

    }

    return elements;
}
function sortedSuccess(): void {
    let elem = document.createElement("div");
    elem.innerHTML = constants.successAlertHtml;
    document.body.append(elem);
}

function isArraySorted(a: number[]): boolean {
    for (var i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1])
            return false;
    }
    return true;
}

