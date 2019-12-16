import { Constants } from "./constants"

let constants = new Constants();

export const insertionSort = (nums: number[]): any => {
    console.log("Insertion: started")
    for (let i = 1; i < nums.length; i++) {
        setTimeout(() => {
            let j = i - 1
            let tmp = nums[i]
            while (j >= 0 && nums[j] > tmp) {
                nums[j + 1] = nums[j]
                dispatch(nums)
                j--
            }
            nums[j + 1] = tmp
        },0);
    }
}

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
    let e = new CustomEvent(constants.sortCycleEventName, { detail: nums });
    let display = <HTMLElement>document.getElementById(constants.displayName);
    display.dispatchEvent(e)
}

