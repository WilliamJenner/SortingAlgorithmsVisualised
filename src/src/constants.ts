class Constants {
    public sortCycleEventName: string = "sort-cycle";
    public displayName: string = "js-display";
    public insertionSortBtn: string = "js-btn-insertion-sort";
    public bubbleSortBtn: string = "js-btn-bubble-sort";
    public arraySizeId: string = "js-a-size";
    public sortedAlertId: string = "js-sorted-alert";

    public displayHeight: number = 900

    public successAlertHtml: string = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Array sorted</strong>.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>`

    public v = "";
}

export { Constants };